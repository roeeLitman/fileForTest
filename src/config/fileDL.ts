import fs from 'fs/promises'

export const getBeepersFromData = async <T> (): Promise<T[] | undefined> => {
    try{
        const strData: string = await fs.readFile(`${__dirname}/../../data/beepers.json`,'utf-8')
        const parsedData:T[] = JSON.parse(strData)
        return parsedData
    }catch (err) {
        console.log(err);
    }
}

export const saveFileData = async <T> (data:T[]):Promise<boolean> =>{
    try{
        const stringFileData:string = JSON.stringify(data,null,2)   
        await fs.writeFile(`${__dirname}/../../data/beepers.json`,stringFileData,{encoding: 'utf-8'})
        return true
    }catch (err) {
        console.log(err);
        return false
    }
}