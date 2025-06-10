"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.login = exports.register = void 0;
const user_entity_1 = require("../models/user.entity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../utils/jwt");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("dwwddw");
    try {
        const _a = req.body, { id, username, password } = _a, rest = __rest(_a, ["id", "username", "password"]);
        const user = yield user_entity_1.User.findOne({ where: { username } });
        if (user) {
            res.status(400).json({ error: 'Username already exists' });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const new_user = user_entity_1.User.create(Object.assign({ username, password: hashedPassword }, rest));
        const created_user = yield new_user.save();
        const { password: _ } = created_user, publicUser = __rest(created_user, ["password"]);
        res.status(201).json(publicUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({ message: "Username and password are required" });
            return;
        }
        const user = yield user_entity_1.User.findOne({ where: { username } });
        if (!user) {
            res.status(401).json({ message: "Username does not exist" });
            return;
        }
        const isValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isValid) {
            res.status(401).json({ message: "Password is invalid" });
            return;
        }
        const token = (0, jwt_1.generateToken)({ sub: user.id, username: username });
        res.set('Authorization', `Bearer ${token}`).json({ id: user.id, username, jwt: token });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
        return;
    }
});
exports.login = login;
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    res.json(user);
});
exports.me = me;
