const router = require("express").Router();
const sendEmail = require("../../service/mailer");
router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/", async (req, res, next) => {
  try {
    const { email, img } = req.body;
    const payload = {
      email,
      attachments: [
        {
          filename: "qr.png",
          path: `${img}`,
          cid: "qrImg",
        },
      ],
    };

    const result = await sendEmail.sendMessage(payload);
    res.json({ data: result, msg: "Success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
