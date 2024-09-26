import { getBeepersFromData, saveFileData } from "../config/fileDL";
import newBeeperDTO from "../DTO/newBeeperDTO";
import UpdateStatusDTO from "../DTO/UpdateStatusDTO";
import Beeper from "../models/Beeper";
import { BeeperStatus } from "../utils/enums/BeeperStatus";
import { turnOnBeeper } from "../utils/TurnOnBeeper";
import { UpdateStatusBeeper } from "../utils/updateStatusBeeper";

export class BeeperService {
  // יצירת ביפר חדש
  public static async createNewBeeper(
    newBeeper: newBeeperDTO
  ): Promise<boolean> {
    try {
      const beeper: Beeper = new Beeper(newBeeper.name);
      let beepers: Beeper[] | undefined = await getBeepersFromData();
      if (!beepers) {
        beepers = [];
      }

      beepers.push(beeper);
      return await saveFileData(beepers);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public static async getAllBeepers(): Promise<Beeper[] | undefined> {
    try {
      const beepers: Beeper[] | undefined = await getBeepersFromData();
      return beepers;
    } catch (err) {
      console.log(err);
    }
  }
  public static async getBeeperById(id: number): Promise<Beeper | undefined> {
    try {
      const beepers: Beeper[] | undefined = await getBeepersFromData();
      const beeper: Beeper | undefined = beepers?.find((beep) => {
        return beep.id === id;
      });
      console.log(beeper);

      return beeper;
    } catch (err) {
      console.log(err);
    }
  }

  public static async deleteBeeper(id: number): Promise<boolean> {
    try {
      const beepers: Beeper[] = (await getBeepersFromData()) as Beeper[];
      const newArrDelete: Beeper[] = beepers.filter((beep) => {
        return beep.id !== id;
      });
      await saveFileData(newArrDelete);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  public static async getBeeperByStatus(
    status: string
  ): Promise<Beeper[] | undefined> {
    try {
      const beepers: Beeper[] | undefined = await getBeepersFromData();
      if (!beepers) {
        throw new Error("");
      }
      return beepers.filter((beep) => {
        return beep.status === status;
      });
    } catch (err) {
      console.log(err);
    }
  }

  public static async UpdateStatus(id: number, updataStatus: UpdateStatusDTO): Promise<boolean> {
    try {
        
        // מביא את המערך
        let beepers: Beeper[] | undefined = await getBeepersFromData();
        if(!beepers) throw new Error("");
        // מוצא את הביפר 
        const beeper: Beeper | undefined = beepers.find((beep) => { return beep.id === id;});
        if(!beeper) throw new Error("");
        //   מחזיר חזרה את הדאטה ללא הפיבר המעודכן
        await saveFileData(beepers.filter((beep)=>{return beep.id !== beeper.id}));
        // משנה את הסטטוס רק אם זה הסטטוס הבא בתור
        const updetaBeeper:Beeper = UpdateStatusBeeper(beeper, updataStatus)   
        // פונקציה שתקבל את הביפר תבדוק האם הסטטוס מוקם ובמקרה שכן סופר עשר שניות ומחזיר את הביפר בסטטוס מעודכן
        turnOnBeeper(updetaBeeper)
        // מכניס את הביפר חזרה למערך
        return true;

      } catch (err) {
        
        console.log(err);
        return false
      }

  }
}
