/* === Dependencies === */
const path = require("path");
const router = require("express").Router();
const testRoutes = require('./test');

//API ROUTE
router.use('/test', testRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;