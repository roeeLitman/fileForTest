import { getBeepersFromData, saveFileData } from "../config/fileDL";
import newBeeperDTO from "../DTO/newBeeperDTO";
import Beeper from "../models/Beeper";

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
      return beepers

    } catch (err) {
        console.log(err);
        
    }
  }
  public static async getBeeperById(id:number): Promise<Beeper | undefined> {
    try {
        const beepers: Beeper[] | undefined = await getBeepersFromData();
        const beeper: Beeper | undefined =  beepers?.find((beep)=>{return beep.id === id})
        console.log(beeper);
        
        return beeper
      } catch (err) {
          console.log(err);
          
      }
  }
}
