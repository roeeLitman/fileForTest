import { getBeepersFromData, saveFileData } from "../config/fileDL";
import newBeeperDTO from "../DTO/newBeeperDTO";
import Beeper from "../models/Beeper";

export class BeeperService{
    // יצירת ביפר חדש
    public static async createNewBeeper(newBeeper:newBeeperDTO ): Promise<boolean> {
        
        const beeper:Beeper =  new Beeper(newBeeper.name)
        let beepers: Beeper[] | undefined = await getBeepersFromData()
        if(! beepers) {
            beepers = []
        }
        
        beepers.push(beeper)
        return await saveFileData(beepers)
    }
}