import express,{Express} from 'express'
import  'dotenv/config'
const app:Express = express()

app.use(express.json())

app.use('api')

app.listen(process.env.PORT, ()=> console.log(`your server is : http://localhost:${process.env.PORT}`));
