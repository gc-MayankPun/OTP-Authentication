import app from "./src/app.js";
import connectDb from "./src/config/database.js";

connectDb();

app.listen(3000, () => console.log("Server running on PORT 3000"));
