const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("(MONGO-DB) Connected");
  } catch (error) {
    console.error("(MONGO-DB) Connection Error:", error.message);
  }
};

module.exports = dbconnect;
