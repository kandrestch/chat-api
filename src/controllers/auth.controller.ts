import {Request,Response} from 'express';
import { User } from '../models/user.entity';
import bcrypt from 'bcrypt';
import {generateToken} from '../utils/jwt';

export const register = async (req: Request, res: Response): Promise<void>  => {    
    try {
        const { id, username, password, ...rest } = req.body;

        const user = await User.findOne({ where: { username } });
        if (user) {  res.status(400).json({ error: 'Username already exists' });return; }

        const hashedPassword = await bcrypt.hash(password, 10);
        const new_user = User.create({
        username,
        password: hashedPassword,
        ...rest,
        });

        const created_user = await new_user.save();

        const { password: _, ...publicUser } = created_user;

        res.status(201).json(publicUser);
    } catch (error: any) {
        res.status(500).json({ message: "Internal server error" }); 
        return;
    }
};

export const login = async (req: Request, res: Response): Promise<void>  => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {res.status(400).json({ message: "Username and password are required" }); return;}

    const user = await User.findOne({ where: { username } });
    if (!user) {res.status(401).json({ message: "Username does not exist" });return;}

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {res.status(401).json({ message: "Password is invalid" });return;}

    const token = generateToken({sub:user.id,username:username});

    //res.set('Authorization', `Bearer ${token}`)
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Solo en HTTPS en producción
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 día
    })
    .json({ id: user.id, username, jwt: token });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" }); 
    return;
  }
};

export const logout = (req: Request, res: Response): void => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logout successful" });
};

export const me = async (req: Request, res: Response): Promise<void>  => {
  const user = (req as any).user;
  res.json(user);
};