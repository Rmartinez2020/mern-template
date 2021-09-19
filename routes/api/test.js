const router = require("express").Router();
const testController = require("../../controllers/testController");

// Matches with "/api/dash"

router.route("/get")
  .get(testController.getTest);

router.route("/post")
  .post(testController.postTest);

router.route("/add")
  .post(testController.addTest);

router.route("/remove")
  .post(testController.removeTest);

module.exports = router;