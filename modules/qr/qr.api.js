const router = require("express").Router();

const qrController = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    const { qrUrl } = req.body;
    if (qrUrl == "") {
      throw new Error("Please enter data to generate qr");
    }
    const qrData = await qrController(qrUrl);
    res.json({ qr: qrData, msg: "Success" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
