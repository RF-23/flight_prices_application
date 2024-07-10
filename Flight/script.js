// lines 2 and 3 are boilerplate
const express = require("express");
const app = express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
//request sent by browser
app.get("/", function (req, res) {
    res.sendFile(__dirname+"/flight.html")
})
app.post("/", function(req, res) {
    var depart = req.body.departure.toLowerCase(); // Convert to lowercase
    var destiny = req.body.destination.toLowerCase(); // Convert to lowercase
    var passengers = req.body.passenger_count;
    var totalPrice;
    console.log(req.body);
    if (depart === "dubai" && destiny === "chennai") {
        totalPrice = passengers * 1200;
        res.send("Total price of journey: " + totalPrice);
    }
    else if (depart === "chennai" && destiny === "dubai") {
        totalPrice = passengers * 1000;
        res.send("Total price of journey: " + totalPrice);
    }
    else if (depart === "scotland" && destiny === "kerala") {
        totalPrice = passengers * 2000;
        res.send("Total price of journey: " + totalPrice);
    }
    else if (depart === "kerala" && destiny === "scotland") {
        totalPrice = passengers * 3000;
        res.send("Total price of journey: " + totalPrice);
    }
    });
    
//server
// local host servers should listen to port 3000
//callback func to chk if server connected to port
app.listen(3000, function () {
    console.log("server has started at port 3000"); 
});

















