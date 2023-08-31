const router = require("express").Router();
const qrRouter = require("../modules/qr/qr.api");

router.use("/qrcode", qrRouter);

module.exports = router;
