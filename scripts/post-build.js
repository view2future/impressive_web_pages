import fs from 'fs';
import path from 'path';

const distDir = './dist';
const files = fs.readdirSync(distDir);

files.forEach(file => {
  if (file !== 'index.html') {
    const filePath = path.join(distDir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmSync(filePath, { recursive: true });
    } else {
      fs.unlinkSync(filePath);
    }
  }
});

console.log('✨ Cleanup complete. Standalone index.html remains in dist/');
