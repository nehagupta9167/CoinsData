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

module.exports = router;

router.get('', async(req, res) => {
        try {
            coinsData = [];
            dataArray = [];
            for(var i=1; i <= 10; i++){
                const newsAPI = await axios.get("https://coinlib.io/api/v1/coinlist", { params: { key: "2ce6f219d9c772b8", pref: "BTC", page:  i, order: "volume_desc"} })
                // console.log(newsAPI.data.coins)
                //console.log(newsAPI.data)
                var temp = newsAPI.data.coins;
                coinsData.push(temp);
                //console.log(i);
                //console.log(newsAPI.next);
            }

            // console.log("Coins Data");
            // console.log(coinsData[0])
            pageCount = Math.ceil(coinsData[0].length / pageSize);
            currentPage = 1;
            while (coinsData[0].length > 0) {
                dataArray.push(coinsData[0].splice(0, pageSize));
            }

            //show list of coins from group
            coinsList = [];
            coinsList = dataArray[0];
            res.render("index", {
                data: coinsList,
                pageSize: pageSize,
                pageCount: pageCount,
                currentPage: currentPage
            })
        } catch (err) {
            if(err.response) {
                res.render('error', { title : null })
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else if(err.requiest) {
                res.render('error', { title : null })
                console.log(err.requiest)
            } else {
                res.render('error', { title : null })
                console.error('Error', err.message)
            }
        } 
})

router.get('/pagination', async(req, res) => {
    // console.log("Into pagination")
    // console.log(req.query.page)
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

// router.get('/about', function(req, res) {
//     res.render('/about');
//   });
