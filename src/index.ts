import express,{Express} from 'express'
import  'dotenv/config'
import router from './controllers/beeperControllers'
const app:Express = express()

app.use(express.json())

app.use('/api/beepers', router)

app.listen(process.env.PORT, ()=> console.log(`your server is : http://localhost:${process.env.PORT}`));
