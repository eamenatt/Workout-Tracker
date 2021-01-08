const router = require("express").Router();
const path = require("path");


//Routes to excersise and stats page
router.get("/exercise", (req,res)=> {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/stats", (req,res)=> {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;