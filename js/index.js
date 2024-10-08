"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const beeperControllers_1 = __importDefault(require("./controllers/beeperControllers"));
const app = (0, express_1.default)();
// md
app.use(express_1.default.json());
//controllers
app.use('/api/beepers', beeperControllers_1.default);
app.listen(process.env.PORT, () => console.log(`your server is : http://localhost:${process.env.PORT}`));
