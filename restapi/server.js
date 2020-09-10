//express js is built on top of http module.
//const is read-only field,i.e., read only variable. like let.
//using const bcoz, most of the modern blocks use const instead of let
/*Body parser will intercept the req and exract the data provided by the user
attaces the data to req body*/
const express = require('express');
const bodyParser = require('body-parser');
const { ROUTE_CONSTANTS } = require('./helpers/route_constants');
const app = express(); //initialise my web application

const asyncRequest = require('async-request');
//const { request, response } = require('express');
const countryListUrl = "https://restcountries.eu/rest/v2/all";

//helps to make calls to external api's or make asynchronous calls
//can't have await w/o async
//I'm making async req and I'll await till data comes.
app.get(ROUTE_CONSTANTS.GET_COUNTRIES, async function(req, res){
  const response = await asyncRequest(countryListUrl);
  res.json(response);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// parameters to all 4 methods:- route, callback function
app.get(ROUTE_CONSTANTS.DEFAULT,(req, res)=>{
    res.send("<h1>Welcome to PEGA</h1>");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req, res){
    //res.send("<h1>Login to PEGA</h1>");
    res.sendFile(__dirname+"/pages/login.html");
});

app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req, res){
    //res.send("<h1>Register to PEGA</h1>");
    res.sendFile(__dirname+"/pages/register.html");
});

app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req, res){
  //res.send("<h1>Login to PEGA</h1>");
  console.log(req.body);
  res.send("Successfully Logged in! Welcome!!");
});

app.post(ROUTE_CONSTANTS.POST_REGISTER, function(req, res){
    console.log(req.body);
    res.send("Successfully Registered!");
});

app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req, res){
    //res.send("<h1>Products of PEGA</h1>");
    //res.sendFile(__dirname+"/pages/products.html");
    const productsData = [
        {
          "_id": "5f586092e56c1eef75c23c4e",
          "index": 0,
          "guid": "069a7205-da45-454f-b935-b9c8396b2e26",
          "isActive": false,
          "balance": "$1,567.37",
          "picture": "http://placehold.it/32x32",
          "age": 23,
          "eyeColor": "blue",
          "name": "Sabrina Rojas",
          "gender": "female",
          "company": "ASSISTIX",
          "email": "sabrinarojas@assistix.com",
          "phone": "+1 (895) 560-2724",
          "address": "471 Dahl Court, Convent, Michigan, 3784",
          "about": "Aute minim eu dolor excepteur culpa incididunt labore id ut deserunt elit ullamco nisi. Tempor aliquip ad eiusmod id anim dolore occaecat eu. Proident voluptate quis elit sint Lorem mollit quis dolor fugiat. Sit dolore sunt dolor reprehenderit Lorem est consectetur mollit non et magna esse aliqua. Aute cillum enim nisi sit elit aliquip cupidatat laborum labore adipisicing. Eu reprehenderit ex pariatur ipsum consequat ipsum ipsum non.\r\n",
          "registered": "2017-10-12T09:02:03 -06:-30",
          "latitude": -1.912236,
          "longitude": -28.907368,
          "tags": [
            "tempor",
            "sint",
            "deserunt",
            "qui",
            "et",
            "adipisicing",
            "cillum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Frieda Craig"
            },
            {
              "id": 1,
              "name": "Lyons Colon"
            },
            {
              "id": 2,
              "name": "Becky Jimenez"
            }
          ],
          "greeting": "Hello, Sabrina Rojas! You have 7 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f586092a02d41cb53ae8da5",
          "index": 1,
          "guid": "06725017-2e06-4125-8657-919c29b880c8",
          "isActive": true,
          "balance": "$1,416.12",
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "green",
          "name": "Naomi Lopez",
          "gender": "female",
          "company": "ZIORE",
          "email": "naomilopez@ziore.com",
          "phone": "+1 (959) 579-2371",
          "address": "603 Thatford Avenue, Gouglersville, Missouri, 7384",
          "about": "Ipsum ullamco consectetur magna consectetur eiusmod irure elit mollit id proident. Tempor adipisicing adipisicing ullamco consequat officia culpa proident. Sunt ipsum exercitation ad eu in elit do. Ut laborum sit veniam aliquip Lorem.\r\n",
          "registered": "2016-02-25T08:52:55 -06:-30",
          "latitude": -45.31337,
          "longitude": 52.173805,
          "tags": [
            "ea",
            "id",
            "est",
            "non",
            "amet",
            "deserunt",
            "aliquip"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Fowler Houston"
            },
            {
              "id": 1,
              "name": "Perkins Kim"
            },
            {
              "id": 2,
              "name": "Earlene Cortez"
            }
          ],
          "greeting": "Hello, Naomi Lopez! You have 5 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f58609221d97bf4d1fadc81",
          "index": 2,
          "guid": "effe90be-f32e-471d-836b-d4b8aef05bcd",
          "isActive": true,
          "balance": "$2,060.67",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "blue",
          "name": "Geraldine Dean",
          "gender": "female",
          "company": "VIOCULAR",
          "email": "geraldinedean@viocular.com",
          "phone": "+1 (914) 452-2897",
          "address": "645 Conduit Boulevard, Warsaw, North Dakota, 1055",
          "about": "Ex id exercitation enim qui ut dolore cupidatat incididunt ad cupidatat consectetur cupidatat irure minim. Culpa ex laboris eu duis ullamco eiusmod aliquip laboris exercitation est sunt sit in consectetur. Consequat esse pariatur veniam elit ex ut deserunt ex laboris esse. Esse aliquip est commodo occaecat commodo cupidatat. Quis nulla labore eu aliqua aliqua elit ut aliqua cupidatat magna enim. Minim aliquip dolor consequat aute. Exercitation nostrud consequat eu magna Lorem ullamco dolor enim reprehenderit adipisicing.\r\n",
          "registered": "2020-06-10T10:41:09 -06:-30",
          "latitude": -75.740071,
          "longitude": 57.687848,
          "tags": [
            "nulla",
            "elit",
            "ut",
            "anim",
            "commodo",
            "mollit",
            "reprehenderit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Atkins Gregory"
            },
            {
              "id": 1,
              "name": "Slater Trujillo"
            },
            {
              "id": 2,
              "name": "Tonia Bailey"
            }
          ],
          "greeting": "Hello, Geraldine Dean! You have 8 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f586092e0cc5fd25163a8a1",
          "index": 3,
          "guid": "d3117fdb-51e1-4c45-94b3-0fe609e62c2c",
          "isActive": false,
          "balance": "$2,483.65",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "brown",
          "name": "Darlene Parsons",
          "gender": "female",
          "company": "VIRVA",
          "email": "darleneparsons@virva.com",
          "phone": "+1 (816) 491-3310",
          "address": "801 Harbor Court, Chapin, Texas, 2668",
          "about": "Commodo aliquip culpa do laborum ea elit exercitation tempor aliquip. Pariatur anim consequat nisi labore aliqua officia et laborum est pariatur deserunt. Aliqua est est fugiat quis non pariatur ipsum in proident ullamco elit qui deserunt ad. Exercitation aliqua ipsum ipsum aliquip do sunt magna. Eu incididunt proident non velit duis irure. Veniam elit cupidatat tempor proident exercitation irure tempor occaecat consectetur. Magna elit voluptate ullamco ex.\r\n",
          "registered": "2020-07-01T05:40:44 -06:-30",
          "latitude": -76.502213,
          "longitude": -0.528693,
          "tags": [
            "nisi",
            "occaecat",
            "dolore",
            "cillum",
            "fugiat",
            "irure",
            "ipsum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Annie Price"
            },
            {
              "id": 1,
              "name": "Raymond Duran"
            },
            {
              "id": 2,
              "name": "Sawyer Lynch"
            }
          ],
          "greeting": "Hello, Darlene Parsons! You have 9 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f586092a960c564bdf3f341",
          "index": 4,
          "guid": "bd639bdb-b51e-4be0-a4ae-17050df2e73b",
          "isActive": false,
          "balance": "$3,336.50",
          "picture": "http://placehold.it/32x32",
          "age": 30,
          "eyeColor": "green",
          "name": "Lara Wilkins",
          "gender": "male",
          "company": "PARAGONIA",
          "email": "larawilkins@paragonia.com",
          "phone": "+1 (979) 569-3214",
          "address": "850 Dorchester Road, Stollings, Oregon, 4603",
          "about": "Incididunt minim dolor reprehenderit nulla tempor ea. Sit elit pariatur in duis ut commodo quis. Pariatur tempor quis quis commodo pariatur eu incididunt in sit sint id ullamco aute occaecat. Voluptate excepteur minim sint in est mollit veniam dolore id. Exercitation laboris aliquip aliqua qui pariatur. Commodo culpa sint ipsum ut officia aliquip culpa tempor.\r\n",
          "registered": "2014-01-27T07:11:02 -06:-30",
          "latitude": -79.483363,
          "longitude": 98.107386,
          "tags": [
            "sit",
            "proident",
            "amet",
            "ut",
            "dolore",
            "proident",
            "laboris"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Briggs Hahn"
            },
            {
              "id": 1,
              "name": "Lester Boyle"
            },
            {
              "id": 2,
              "name": "Neva Robertson"
            }
          ],
          "greeting": "Hello, Lara Wilkins! You have 3 unread messages.",
          "favoriteFruit": "apple"
        }
      ];
    res.json(productsData);
});

app.get(ROUTE_CONSTANTS.GET_FILE, function(req, res){
    res.sendFile(__dirname+"/files/seven.pdf");
});

app.listen(3000);