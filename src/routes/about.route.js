import Express from "express";
const router=Express.Router();

router.get('/about',(req,res)=>
{
    res.render('./About.ejs');
})

export default router;