"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// create beeper
router.post("/", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
//get all beepers
router.get("/", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
// get beeper by id
router.get("/:id", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
// update status
router.put("/:id/status", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
// delete beeper
router.delete("/:id", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
// get by status
router.post("/status/:status", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null
        });
    }
});
exports.default = router;
