const NodeGeocoder = require("node-geocoder");
const dotenv = require("dotenv");
dotenv.config({ path: './config/.env' });

const geocoder = NodeGeocoder({
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
});

module.exports = geocoder;
