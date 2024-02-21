const express=require('express');
const app=express();
const port=3000;
app.set('view')
//setting the view engine for pug template
app.set('view engine','pug');

app.use(express.static('public'));
//route for the view engine for the 
app.get('/',(req,res)=>
{
    res.render('./index.pug',{title:'express with pug template engine',message:'Welcome to pug world'})
});

app.listen(port,()=>console.log(`listening on ${port}`));