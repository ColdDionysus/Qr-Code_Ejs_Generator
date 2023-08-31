const router = require("express").Router();
const apiRouter = require("./routes.api");
const uiRouter = require("./routes.ui");

router.use("/api/v1", apiRouter);
router.use("/", uiRouter);

module.exports = router;
