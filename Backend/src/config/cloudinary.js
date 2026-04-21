const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.DBS_CLOUD_NAME,
  api_key: process.env.DBS_API_KEY,
  api_secret: process.env.DBS_API_SECRET,
});

module.exports = cloudinary;
