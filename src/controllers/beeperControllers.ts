import express, { Router, Request, Response } from "express";
import { BeeperService } from "../services/beeperService";
import Beeper from "../models/Beeper";
import UpdateStatusDTO from "../DTO/UpdateStatusDTO";

const router: Router = express.Router();

// create beeper
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt:boolean = await BeeperService.createNewBeeper(req.body);
    if (!resolt) {
      throw new Error();
    }
    res.status(200).json({
      err: false,
      message: `$is beeper save: ${resolt}`,
      data: undefined,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: `beeper not save`,
      data: null,
    });
  }
});

//get all beepers
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt:Beeper[] | undefined = await BeeperService.getAllBeepers();
    if (!resolt) {
      throw new Error();
    }
    res.status(200).json({
      err: false,
      message: resolt,
      data: undefined,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "notf found",
      data: null,
    });
  }
});

// get beeper by id
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {    
    const resolt:Beeper | undefined =  await BeeperService.getBeeperById(parseInt(req.params.id))
    if(!resolt){
        throw new Error()
    }
    res.status(200).json({
      err: false,
      message: resolt,
      data: undefined,
    });
  } catch (err) {
    res.status(404).json({
      err: true,
      message: "notf found",
      data: null,
    });
  }
});

// update status
router.put(
  "/:id/status",
  async (req: Request, res: Response): Promise<void> => {
    try {
     const resolt: boolean = await BeeperService.UpdateStatus(parseInt(req.params.id), req.body as UpdateStatusDTO)
      res.status(200).json({
        err: false,
        message: "blu blu",
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "blu blu",
        data: null,
      });
    }
  }
);

// delete beeper
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const resolt = await BeeperService.deleteBeeper(parseInt(req.params.id))
    if(!resolt){
        throw new Error("");    
    }
    res.status(200).json({
      err: false,
      message: `is delete`,
      data: undefined,
    });
  } catch (err) {
    res.status(400).json({
      err: true,
      message: "not delete",
      data: null,
    });
  }
});

// get by status
router.get(
  "/status/:status",
  async (req: Request, res: Response): Promise<void> => {
    try {
        const resolt = await BeeperService.getBeeperByStatus(req.params.status)
        if (!resolt) {
            throw new Error("");      
        }
      res.status(200).json({
        err: false,
        message: resolt,
        data: undefined,
      });
    } catch (err) {
      res.status(400).json({
        err: true,
        message: "not found",
        data: null,
      });
    }
  }
);

export default router;
