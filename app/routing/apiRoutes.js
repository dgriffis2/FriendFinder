var friends = require("../data/friends");
var totalDifference =[]
var bffArray=[]
var bff;
var newGuy=[]
// for (var i =0; i<friends.length; i++){
//     console.log(friends[i].name)
//     console.log(friends[i].photo)
//     console.log(friends[i].scores)
//     console.log("----------------")
// }


// var newFriend ={
//     "name": "Harry Potter",
//     "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg",
//     "scores": [
//         "5",
//         "1",
//         "5",
//         "1",
//         "4",
//         "4",
//         "3",
//         "3",
//         "1",
//         "2"
//     ]
// }




// console.log(bff)
// console.log(friends)

module.exports=function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends)
    })

    
    app.post("/api/friends", function(req,res){
        newFriend = req.body;
        // newGuy.push(newFriend)
        // friends.push(newFriend);
        
        res.json(newFriend);
        
        // console.log("New friend" + newFriend.name)
    })

    app.get("/api/survey", function(req,res){
        totalDifference=[]
        bffArray=[]
        bff="";
        console.log("Should be empty" + totalDifference)
        
        console.log("In the post" + newFriend.scores)
        var count = (friends.length)-1
        var intCount =parseInt(count)
        console.log("IMPORTANT " + friends[1].scores)
        console.log("Count: " + intCount)
        for (var i =0;i<friends.length;i++){
            for (var j = 0;j<friends[0].scores.length; j++){
                scoreDiff="taco time"
                var scoreDiff = Math.abs(friends[i].scores[j]-newFriend.scores[j])
                // console.log(friends)
                totalDifference.push(scoreDiff)
                // friends.push(newFriend)
                
                // bfDiff = totalDifference.reduce(function(a, b) { return a + b; }, 0);
                // console.log(bfDiff)
                // console.log("---------------")
            }
        }
        
        for (var i = 0; i<friends.length;i++){
            var preSum=totalDifference.slice(i*10,(i+1)*10)
            var anotherSum = preSum.reduce(function(a, b) { return a + b; }, 0);
            friends[i].bestFriend = anotherSum
        }
        
        for(var i = 0; i<friends.length; i++){
            console.log(friends[i].bestFriend)
        }
        
        for (var i = 0; i<friends.length; i++){
            var tempArray=friends[i].bestFriend
            bffArray.push(tempArray)
        }
        
        function sortNumber(a,b) {
            return a - b;
        }
        
        var sortedArry=bffArray.sort(sortNumber)
        
        for (var i = 0; i<friends.length;i++){
            if(sortedArry[0]===friends[i].bestFriend){
                bff={name:friends[i].name,
                     photo:friends[i].photo}
            }
        }


        console.log("Before total diff: " + totalDifference)
        friends.push(newFriend)
        return res.json(bff)

    })
}


// module.exports = function(app) {
//     // API GET Requests
//     app.post("/api/tables", function(req, res) {
//       // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//       // It will do this by sending out the value "true" have a table
//       // req.body is available since we're using the body-parser middleware
//       if (tableData.length < 5) {
//         tableData.push(req.body);
//         res.json(true);
//       }
//       else {
//         waitListData.push(req.body);
//         res.json(false);
//       }
//     });
  
//     // ---------------------------------------------------------------------------
//     // I added this below code so you could clear out the table while working with the functionality.
//     // Don"t worry about it!
  
//     app.post("/api/clear", function() {
//       // Empty out the arrays of data
//       tableData = [];
//       waitListData = [];
  
//       console.log(tableData);
//     });
//   };