import express, { Router, Request, Response } from 'express'
import { BeeperService } from '../services/beeperService';

const router: Router = express.Router()


// create beeper
router.post("/", async (req: Request, res: Response): Promise<void> => {
    try{
        const resolt = await BeeperService.createNewBeeper(req.body)
        if(!resolt) {
            throw new Error ();     
        }
        res.status(200).json({
            err: false,
            message: `$is beeper save: ${resolt}`,
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: `beeper not save`,
            data: null

        })
    }
});

//get all beepers
router.get("/", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

// get beeper by id
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

// update status
router.put("/:id/status", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

// delete beeper
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

// get by status
router.post("/status/:status", async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).json({
            err: false,
            message: 'blu blu',
            data: undefined
        })

    }catch (err) {

        res.status(400).json({
            err: true,
            message: 'blu blu',
            data: null

        })
    }
});

export default router;

