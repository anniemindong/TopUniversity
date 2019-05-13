
module.exports.post_findU = function(req, res)
{
    var uName = req.body.uName;
    console.log(req.body)
    console.log("name!!!!!");
    console.log(uName);
    var db = req.db;
    var collection = db.get('worldRank');

    console.log('collection priting')
    console.log(collection)

    collection.find({"institution": uName},
    function(err, doc) //find if a value exists
    {
        console.log(doc)
        if(doc && doc.length >= 1 ) //if it does
        {
            console.log("hereeeeee!!!!!!!!!");
            console.log(doc[0].institution); // print out what it sends back worldrank:doc.world_rank,nationrank:doc.national_rank
            res.send( `${uName}'s world rank is ${doc[0].world_rank}, national rank of ${doc[0].country} is ${doc[0].national_rank}`);
          
        }
        else  // if it does not
        { 
          console.log("hellooooooo!!!!!!!");          
          //res.redirect('/', { message: "Oops! couldn't find it. Please check your school name." });         
          console.log("Not in docs"); 
          res.send("Oops! couldn't find it. Please check your school name.");          
        }
    });
};
