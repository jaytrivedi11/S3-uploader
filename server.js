const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const app = express();
const port = 3000;
app.use(cors());

// AWS S3 configuration
const s3 = new S3Client({
  region: 'your-aws-region',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  },
});

// Multer configuration
const upload = multer({ dest: 'uploads/' });

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  const params = {
    Bucket: 'your-s3-bucket-name',
    Key: file.originalname,
    Body: require('fs').createReadStream(file.path),
  };

  try {
    await s3.send(new PutObjectCommand(params));
    // Clean up the local file
    require('fs').unlinkSync(file.path);
    res.status(200).send('File uploaded to S3');
  } catch (err) {
    console.error('Error uploading file to S3:', err);
    res.status(500).send('Error uploading file to S3');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
