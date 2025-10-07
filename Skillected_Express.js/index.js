const express = require('express');
const path = require('path');
// const data = require('./data');
const app = express();
let port = 3000;

const userData = require('./data');

let arr = []

let usersdata = [
  {
    "id": 1,
    "name": "Ava Johnson",
    "email": "ava.johnson@example.com",
    "gender": "Female",
    "depart": "Marketing"
  },
  {
    "id": 2,
    "name": "Liam Carter",
    "email": "liam.carter@example.com",
    "gender": "Male",
    "depart": "Engineering"
  },
  {
    "id": 3,
    "name": "Sofia Martinez",
    "email": "sofia.martinez@example.com",
    "gender": "Female",
    "depart": "HR"
  },
  {
    "id": 4,
    "name": "Noah Kim",
    "email": "noah.kim@example.com",
    "gender": "Male",
    "depart": "Finance"
  }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
 res.render('index', {data})
});

app.get('/createuser', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/userdata', (req, res) => {
  arr.push(req.body);
  res.redirect('/')
});


app.get('/user/get', (req, res) => {
  res.send(usersdata)
})

app.post('/user/post',(req,res) => {
  usersdata.push(req.body)
  res.send("Data added successfully")
})

app.put('/user/update',(req,res) => {
  
})

app.get('/user/delete',(req,res) => {
  
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
