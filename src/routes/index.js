var express = require('express');
var router = express.Router();

const axios = require('axios')

// router.get('/', (req, res) => {
//     res.render("index", {title: "Express"});
// })

var coinsData = [],
    dataArray = [],
    coinsList = [],
    currentPage = 1,
    pageSize = 30,
    pageCount = 0;

// function getCoinsData(){
//     for(var i=1; i <= 3; i++){
//         const newsAPI = await axios.get("https://coinlib.io/api/v1/coinlist", { params: { key: "2ce6f219d9c772b8", pref: "BTC", page:  i, order: "volume_desc"} })
//         // console.log(newsAPI.data.coins)
//         //console.log(newsAPI.data)
//         var temp = newsAPI.data.coins;
//         coinsData.push(temp);
//         console.log(i)
//         //console.log(newsAPI.next);
//         }

// }

module.exports = router;

router.get('', async(req, res) => {
    //let page_index = 1;
    //do {
        try {
            //var coinsData = [];
            coinsData = [];
            dataArray = [];
            for(var i=1; i <= 12; i++){
                const newsAPI = await axios.get("https://coinlib.io/api/v1/coinlist", { params: { key: "2ce6f219d9c772b8", pref: "BTC", page:  i, order: "volume_desc"} })
                // console.log(newsAPI.data.coins)
                //console.log(newsAPI.data)
                var temp = newsAPI.data.coins;
                coinsData.push(temp);
                console.log(i);
                //console.log(newsAPI.next);
            }

            // console.log("Coins Data");
            // console.log(coinsData[0])
            //var dataArray = [];
            //var pageSize = 10;
            pageCount = Math.ceil(coinsData[0].length / pageSize);
            currentPage = 1;
            while (coinsData[0].length > 0) {
                dataArray.push(coinsData[0].splice(0, pageSize));
            }

            //set current page if specifed as get variable (eg: /?page=2)
            //console.log(req.query)
            //var coinsList = [];
            // if (typeof req.query.page !== "undefined") {
            //     currentPage = +req.query.page;
            // }
            //show list of students from group
            coinsList = [];
            coinsList = dataArray[0];
//             var students = []
// var studentsArrays = []
//             //genreate list of students
// for (var i = 1; i < 80; i++) {
//     students.push({name: "Student Number " + i});
//     }

    //console.log("Students");
    //        console.log(students)
    //split list into groups
    // while (students.length > 0) {
    // studentsArrays.push(students.splice(0, pageSize));
    // }
            // for (var i=0; i < newsAPI.data.coins.length; i++){

            // }
            // console.log("Data Array");
            // console.log(dataArray);
            // console.log(pageCount)
            //console.log("Students Array");
            //console.log(studentsArrays)
            res.render("index", {
                data: coinsList,
                pageSize: pageSize,
                pageCount: pageCount,
                currentPage: currentPage
            })
        } catch (err) {
            if(err.response) {
                res.render('index', { title : null })
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else if(err.requiest) {
                res.render('index', { title : null })
                console.log(err.requiest)
            } else {
                res.render('index', { title : null })
                console.error('Error', err.message)
            }
        } 
    //} while()
})

router.get('/pagination', async(req, res) => {
    console.log("Into pagination")
    console.log(req.query.page)
    if (typeof req.query.page !== "undefined") {
        currentPage = +req.query.page;
    }

    coinsList = [];
    coinsList = dataArray[+currentPage-1];

    res.render("index", {
        data: coinsList,
        pageSize: pageSize,
        pageCount: pageCount,
        currentPage: currentPage
    })
})

router.get('/about', function(req, res) {
    res.render('/about');
  });
// const https = require('https')
// const options = {
//   hostname: 'coinlib.io',
//   port: 443,
//   path: '/api/v1/global/?key=2ce6f219d9c772b8',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)
//   res.render("index", { title : newsAPI.contents })

//   res.on('data', d => {
//     process.stdout.write(String(d))
//   })

//     let data = '';
//     res.on('data', (chunk) => {
//         data = data + chunk.toString();
//     });
  
//     res.on('end', () => {
//         const body = JSON.parse(data);
//         console.log(body);
//         res.render("index", { title : body })
//     });
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()
