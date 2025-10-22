require('dotenv').config({ path: '../.env.local' });
const admin = require('../src/lib/firebase-admin');

const db = admin.firestore();

const staffMembers = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Principal',
    bio: 'Dr. Reed has been leading Mawego Engineering for over a decade, fostering an environment of innovation and academic excellence.',
    imageUrl: '/staff/evelyn-reed.jpg',
  },
  {
    name: 'Mr. David Chen',
    title: 'Deputy Principal',
    bio: 'Mr. Chen oversees the academic programs and curriculum development, ensuring that our students receive a world-class education.',
    imageUrl: '/staff/david-chen.jpg',
  },
  {
    name: 'Ms. Maria Garcia',
    title: 'Dean of Students',
    bio: 'Ms. Garcia is dedicated to supporting our students and ensuring that they have a positive and enriching experience at Mawego.',
    imageUrl: '/staff/maria-garcia.jpg',
  },
];

async function backfillStaff() {
  const staffCollection = db.collection('staff');
  console.log('Backfilling staff data...');

  for (const staff of staffMembers) {
    await staffCollection.add(staff);
    console.log(`Added ${staff.name}`);
  }

  console.log('Staff data backfilled successfully!');
  process.exit(0);
}

backfillStaff().catch(error => {
  console.error('Error backfilling staff data:', error);
  process.exit(1);
});
