const  express=require('express');
const app=express();
const scholar = require('google-scholar')
const  cors=require('cors');
const  path=require('path')
const  mongoose=require('mongoose');
app.use(cors('*'))
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/test').then(()=>console.log('succes DB')).catch((err)=>console.log('not Success DB'))
const  userModel=require('./models/user');

const key='4585bd7181eac23ba1fb088fc04054b93f078249c5e9b5156dc54e3456cc69f6';
const  url='https://serpapi.com/search.json?engine=google_scholar&q=biology&api_key=4585bd7181eac23ba1fb088fc04054b93f078249c5e9b5156dc54e3456cc69f6'


const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("4585bd7181eac23ba1fb088fc04054b93f078249c5e9b5156dc54e3456cc69f6");
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.static(path.join(__dirname, 'public')));



app.get('/',(req,res)=>{
  res.render('alldata.ejs')
})

app.get('/search',(req,res)=>{
  res.render('search.ejs')
})


app.post('/star',async(req,res)=>{
  const  link=req.body.topic;
  // console.log(link)
  // res.render('alldata',{link})
const params={
  key:key,
  q:link,
  location:"pakistan",
}
 search.json(params,(data)=>{
     console.log(data)
    //  res.json(data)
  res.render('alldata.ejs',{data})
  
  })
})



// app.post('/store',async(req,res)=>{
//   const  result=new userModel(req.body);
//    const  finalres=await  result.save();
//    res.json({message:"all  data is stored",finalres})
// })


// app.get('/all',async(req,res)=>{
//   const result=await userModel.find();
//   // res.json({'message':"all  data given  below",
//   //   allResult})
//     res.json({result})
  
// })





// app.get('/',async(req,res)=>{
// const  newUser=userModel({
//   name:"asad",
//   email:"abc@gmail.com",
//   password:"12233"
// })
// const  result =await newUser.save();
//   res.json(result)

// })



app.listen(3000,()=>console.log("App  startted"))