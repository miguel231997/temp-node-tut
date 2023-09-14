const fs = require('fs');

// Read a file synchronously
try {
  const data = fs.readFileSync('input.txt', 'utf8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// Write to a file synchronously
try {
  fs.writeFileSync('output.txt', 'Hello, World!', 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}
