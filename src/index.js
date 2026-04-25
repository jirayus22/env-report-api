require("dotenv").config();

const app = require("./app");
const connectDB = require("./configs/db");

// connect ก่อน start server
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
