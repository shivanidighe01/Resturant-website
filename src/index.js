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

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());


//route import
import homeRoute from './routes/home.route.js';
import aboutRoute from './routes/about.route.js';
// const authRoutes = require('./routes/authRoutes');
import authRoutes from './routes/userlogin.route.js';

app.use('/',homeRoute);
app.use('/',aboutRoute);
// app.use('/signup',authRoutes);
// app.use('/login',authRoutes);
app.use('/',authRoutes);







connectDb();
const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>
{
    console.log(`port listen on ${PORT}`);
})
