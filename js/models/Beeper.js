"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BeeperStatus_1 = require("../utils/enums/BeeperStatus");
class Beeper {
    constructor(name) {
        this.name = name;
        this.created_at = new Date();
        this.id = +Math.random().toString().split(".")[1];
        this.status = BeeperStatus_1.BeeperStatus.manufactured;
    }
}
