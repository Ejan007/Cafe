const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  etag: true
}));

// Create a transporter using Gmail's SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ejancool12@gmail.com", // Replace with your Gmail address
    pass: "cijt ihip wphr hbsb",    // Replace with your Gmail App Password
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Error connecting to email service", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// Endpoint to receive contact form data
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, enquiryType, message } = req.body;

  // Check if all fields are provided
  if (!firstName || !lastName || !email || !phone || !enquiryType || !message) {
    return res.status(400).json({ success: false, message: "Please fill all the required fields." });
  }

  // Format a nicely structured email message
  const mailOptions = {
    from: email,
    to: "connect.ejan@gmail.com", // Destination email
    subject: `New ${enquiryType} Inquiry from ${firstName} ${lastName}`,
    text: `
Enquiry Details:
-------------------------
Enquiry Type: ${enquiryType}
Name: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}

Message:
${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Something went wrong." });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ success: true, message: "Message sent successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});