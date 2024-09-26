"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beeperService_1 = require("../services/beeperService");
const router = express_1.default.Router();
// create beeper
router.post("/", async (req, res) => {
    try {
        const resolt = await beeperService_1.BeeperService.createNewBeeper(req.body);
        if (!resolt) {
            throw new Error();
        }
        res.status(200).json({
            err: false,
            message: `$is beeper save: ${resolt}`,
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: `beeper not save`,
            data: null,
        });
    }
});
//get all beepers
router.get("/", async (req, res) => {
    try {
        const resolt = await beeperService_1.BeeperService.getAllBeepers();
        if (!resolt) {
            throw new Error();
        }
        res.status(200).json({
            err: false,
            message: resolt,
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "notf found",
            data: null,
        });
    }
});
// get beeper by id
router.get("/:id", async (req, res) => {
    try {
        const resolt = await beeperService_1.BeeperService.getBeeperById(parseInt(req.params.id));
        if (!resolt) {
            throw new Error();
        }
        res.status(200).json({
            err: false,
            message: resolt,
            data: undefined,
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: "notf found",
            data: null,
        });
    }
});
// update status
router.put("/:id/status", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
// delete beeper
router.delete("/:id", async (req, res) => {
    try {
        const resolt = await beeperService_1.BeeperService.deleteBeeper(parseInt(req.params.id));
        if (!resolt) {
            throw new Error("");
        }
        res.status(200).json({
            err: false,
            message: `is delete`,
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "not delete",
            data: null,
        });
    }
});
// get by status
router.post("/status/:status", async (req, res) => {
    try {
        res.status(200).json({
            err: false,
            message: "blu blu",
            data: undefined,
        });
    }
    catch (err) {
        res.status(400).json({
            err: true,
            message: "blu blu",
            data: null,
        });
    }
});
exports.default = router;
