import Express from "express";
import connectDb from "./db/index.js";

const app=Express();


//for --dirname :-because it is not include in es ie. when we use type=module in package.json 
// we need this extra setup configuration
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";
//ejs file setup
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//config public folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(Express.static(path.join(__dirname, 'public')));


//route import
import homeRoute from './routes/home.route.js';
// const homeRoute=require('./routes/home,route.js');
app.use('/',homeRoute);






connectDb();
const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>
{
    console.log(`port listen on ${PORT}`);
})
