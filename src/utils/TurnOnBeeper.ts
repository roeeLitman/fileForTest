import { getBeepersFromData, saveFileData } from "../config/fileDL";
import Beeper from "../models/Beeper";
import { BeeperStatus } from "./enums/BeeperStatus";


// פונקציה להפעלת טיימר ופיצוץ שלו כעבור 10 שניות
export const turnOnBeeper = (beeper: Beeper) => {
    if(beeper.status !== BeeperStatus.deployed){
        return 
    }
    setTimeout(async() => {
        beeper.status = BeeperStatus.detonated
        const beepers:Beeper[] | undefined  = await  getBeepersFromData()
        beepers?.push(beeper)
         saveFileData(beepers as Beeper[])
    },10000)
}