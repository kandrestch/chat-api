import { Request, Response, NextFunction } from 'express';
import {verifyToken} from '../utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.token;
  if (!token) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error: any) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return;
  }
};


export const authRedirectMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies?.token;
  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.redirect('/login');
  }
};






  /*const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }
  */