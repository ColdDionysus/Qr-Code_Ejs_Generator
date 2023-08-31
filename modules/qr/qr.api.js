const router = require("express").Router();

const qrController = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    const { qr } = req.body;
    if (qr == "") {
      throw new Error("Please enter data to generate qr");
    }
    const qrData = await qrController(qr);
    res.json({ qr: qrData, msg: "Success" });
  } catch (e) {
    console.log(e);
    next(e);
  }
});
module.exports = router;
