import UpdateStatusDTO from "../DTO/UpdateStatusDTO";
import Beeper from "../models/Beeper";
import { BeeperStatus } from "./enums/BeeperStatus";

//צקבל ביפר וצעדכן את הסטטוס שלו רק קדימה
export const UpdateStatusBeeper = (beeper:Beeper, updateStatu:UpdateStatusDTO ):Beeper => {
    const status = updateStatu.status
    
    if(beeper.status === BeeperStatus.manufactured && status === BeeperStatus.assembled ){
        beeper.status = status
    }

    else if(beeper.status === BeeperStatus.assembled && status === BeeperStatus.shipped ){
        beeper.status = status
    }

    else if(beeper.status === BeeperStatus.shipped && status === BeeperStatus.deployed ){
        beeper.status = status
        beeper.latitude = updateStatu.latitude
        beeper.longitude = updateStatu.longitude
    }

    else if(beeper.status === BeeperStatus.deployed && status === BeeperStatus.detonated ){
        beeper.status = status
    }
    return beeper
}

