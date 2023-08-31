const QRCode = require("qrcode");

const generateQr = async (url) => {
  try {
    const result = await QRCode.toDataURL(url);

    return result;
  } catch (e) {
    throw new Error("Something Went Wrong");
  }
};

module.exports = generateQr;
