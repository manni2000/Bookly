const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
let cors = require("cors");
require("dotenv").config();
const signupUrls = require("./routes/signupRoute");
const signinUrls = require("./routes/signinRoute");
const signinPwdUrls = require("./routes/signinPasswordRoute");
const googleloginUrls = require("./routes/auth");
var moment = require("moment-timezone");
const dbURI = process.env.DATABASE_ACCESS;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: new URL("http://localhost:3000"),
    credentials: true,
  })
);

app.use("/api", signupUrls);
app.use("/api", signinUrls);
app.use("/api", googleloginUrls);

const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from backend server of Calendly-Clone");
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
});

app.post("/send", (req, res) => {

  const incomingDate = `${req.body.newDate}`
    .toLocaleString("en-US", { timeZone: "Aisa/Kolkata" })
    .split("T")[0];
  const emailDate = moment(`${incomingDate}T24:00:00-00:00`).format(
    "ddd, MMM D YYYY"
  );

  console.log(req.body.mainEmail);

  var mailOptions = {
    from: process.env.EMAIL, 
    to: `${req.body.mainEmail}`, 
    subject: `New Event: ${req.body.receiverName} - 15 Minute Meeting - ${emailDate}, ${req.body.timeSlot}`,

    html: `<p> Hi ${req.body.receiverName},</p> 
          <p>A new event has been scheduled</p>
          <p>Event Type: 
          15 Minute Meeting</p>
          <p>Invitee:          
          Manish Kumar
          </p>
          <p>Invitee Email:
          manishkumarper1@gmail.com
          </p>
          <p>Event Date/Time:
          ${req.body.timeSlot} - ${emailDate}</p>
          <p>Message, if any:
          ${req.body.message}</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent ");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
