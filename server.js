const express=require('express');
const exphbs=require('express-handlebars');
const app=express();

app.engine('handlebars', exphbs({
    layout: 'main',
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));
//app.use('/css',express.static(__dirname +'/public'));


app.get('/', (req, res) => {
    res.render('home');
});

// app.engine('handlebars',exphbs({
//     defaultLayout:'main'
// }));
// app.set('view engine','handlebars');

// app.use(express.static('public'));
const port=process.env.PORT||4000;

app.get('/home',(req,res)=>
{
    res.render('home');
});

app.get('/about',(req,res)=>
{
    res.render('about');
});

app.get('/contact',(req,res)=>
{
    res.render('contact');
});

app.listen(port,()=>{
console.log('Server is running on Port:',port);
}
);