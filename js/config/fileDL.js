"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFileData = exports.getBeepersFromData = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const getBeepersFromData = async () => {
    try {
        const strData = await promises_1.default.readFile(`${__dirname}/../../data/beepers.json`, 'utf-8');
        const parsedData = JSON.parse(strData);
        return parsedData;
    }
    catch (err) {
        console.log(err);
    }
};
exports.getBeepersFromData = getBeepersFromData;
const saveFileData = async (data) => {
    try {
        const stringFileData = JSON.stringify(data, null, 2);
        await promises_1.default.writeFile(`${__dirname}/../../data/beepers.json`, stringFileData, { encoding: 'utf-8' });
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
exports.saveFileData = saveFileData;
