import express from "express";
import Connection from "./database/db.js";
import defaultData from "./default.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/routes.js";
import { v4 as uuid } from "uuid";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

Connection();

app.listen(PORT, (req, res) => {
  console.log(`Server is runnning on port ${PORT}`);
});
// Default data to database
defaultData();
export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
(paytmParams["MID"] = process.env.PAYTM_MID),
  (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
  (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
  (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
  (paytmParams["ORDER_ID"] = uuid()),
  (paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback");
paytmParams["EMAIL"] = "piyushjoshi1901@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";
