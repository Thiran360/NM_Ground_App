const { Jimp } = require('jimp');
const path = require('path');

async function processImages() {
  const files = [
    'ground_a_premium.png',
    'gokul_avatar.png',
    'sunil_avatar.png',
    'sriraj_avatar.png',
    'ground_b_premium.png',
    'player_hitting_six.png',
    'stadium_header.png'
  ];
  
  for (const file of files) {
    const filePath = path.join(__dirname, 'assets/images', file);
    try {
      const image = await Jimp.read(filePath);
      
      // Aggressively resize to max 300px width for avatars and cards to reduce uncompressed png sizes
      image.resize({ w: 300 });
      
      await image.write(filePath);
      console.log('Shrunk ' + file);
    } catch (e) {
      console.error('Error processing ' + file + ':', e.message);
    }
  }
}

processImages();
