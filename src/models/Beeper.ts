import { BeeperStatus } from "../utils/enums/BeeperStatus";

class Beeper {
    public id: number;
    public status: string;
    public created_at: Date;
    public detonated_at?: Date;
    public latitude?:number;
    public longitude?: number;

    constructor( 
        public name:string 
    ) {
        this.created_at = new Date();
        this.id = + Math.random().toString().split(".")[1]
        this.status =  BeeperStatus.manufactured
    }

}

export default Beeper;
