const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const SEC_DIR = path.join(PUBLIC_DIR, 'sec');
const OPTIMIZED_DIR = path.join(SEC_DIR, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, sizes = [300, 600, 900]) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  
  // Create different sizes
  for (const size of sizes) {
    await sharp(inputPath)
      .resize(size)
      .webp({ quality: 75 })
      .toFile(path.join(OPTIMIZED_DIR, `${filename}-${size}.webp`));
  }
}

(async () => {
  try {
    // Get all images from sec directory
    const images = fs.readdirSync(SEC_DIR)
      .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
      .map(file => path.join(SEC_DIR, file));

    // Optimize each image
    for (const image of images) {
      console.log(`Optimizing ${image}...`);
      await optimizeImage(image);
    }

    console.log('Images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
})(); 