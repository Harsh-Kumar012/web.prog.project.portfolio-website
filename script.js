const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Handle form submission
app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;
    
    const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;
    
    // Save to a file
    fs.appendFile("submissions.txt", formData, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error saving data");
        } else {
            res.send("Form submitted successfully!");
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

