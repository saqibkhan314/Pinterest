const multer = require("multer");
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const fs = require('fs');

// Define the upload directory path using __dirname
const uploadDir = path.join(__dirname, 'public', 'images', 'uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Use the absolute path
  },
  filename: function (req, file, cb) {
    const uniqueName = uuidv4(); // Generate a unique name
    cb(null, uniqueName + path.extname(file.originalname)); // Append original file extension
  }
});

const upload = multer({ storage: storage });
module.exports = upload;
