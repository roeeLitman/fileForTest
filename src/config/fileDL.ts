import fs from 'fs/promises'
import Beeper from '../models/Beeper'

export const getBeepersFromData = async (): Promise<Beeper[] | undefined> => {
    try{
        const strData: string = await fs.readFile(`${__dirname}/../../data/beepers.json`,'utf-8')
        const parsedData:Beeper[] = JSON.parse(strData)
        return parsedData
    }catch (err) {
        console.log(err);
    }
}

export const saveFileData = async  (data:Beeper[]):Promise<boolean> =>{
    try{
        const stringFileData:string = JSON.stringify(data,null,2)   
        await fs.writeFile(`${__dirname}/../../data/beepers.json`,stringFileData,{encoding: 'utf-8'})
        return true
    }catch (err) {
        console.log(err);
        return false
    }
}