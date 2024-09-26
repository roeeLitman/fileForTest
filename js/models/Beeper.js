"use strict";
class Beeper {
    constructor(name) {
        this.name = name;
        this.created_at = new Date();
        // בהמשך להשתמש בפונקציה שתחזיר לי מספרים יןתר יפים
        this.id = +Math.random().toString().split(".")[1];
    }
}
