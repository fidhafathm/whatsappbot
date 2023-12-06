import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
import sls from 'serverless-http'
//import bodyParser from 'body-parser'

const app = express();
app.use(cors({origin: '*',credentials:true}))
app.use(express.json({extended:true}))
//app.use(bodyParser.json());
app.use('/api', routes);

app.listen(3000, () => {
  console.log('server running on port 3000');
});

export const handler = sls(app)