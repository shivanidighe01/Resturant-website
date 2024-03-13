import Express from "express";
const router=Express.Router();

router.get('/',(req,res)=>
{
    res.render('./homepage.ejs');
})

export default router;