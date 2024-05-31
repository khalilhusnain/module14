const { exec } = require('child_process');

// Start the server
const server = exec('node server.js');

server.stdout.on('data', (data) => {
  console.log(`Server: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`Server Error: ${data}`);
});

// Run the seed script
const seed = exec('npm run seed');

seed.stdout.on('data', (data) => {
  console.log(`Seed: ${data}`);
});

seed.stderr.on('data', (data) => {
  console.error(`Seed Error: ${data}`);
});

seed.on('close', (code) => {
  console.log(`Seed process exited with code ${code}`);
});
