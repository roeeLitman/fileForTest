class Beeper {
    public id: number;
    public status: string;
    public created_at: Date;
    public detonated_at?: Date;
    public latitude?:number;
    public longitude?: string;

    constructor( 
        public name:string 
    ) {
        this.created_at = new Date();

        // בהמשך להשתמש בפונקציה שתחזיר לי מספרים יןתר יפים
        this.id = + Math.random().toString().split(".")[1]
    }

}