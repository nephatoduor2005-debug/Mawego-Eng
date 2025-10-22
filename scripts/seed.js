require('dotenv').config({ path: '.env.local' });
const admin = require('../src/lib/firebase-admin');
const db = admin.firestore();

const seedDatabase = async () => {
  try {
    console.log('Seeding database...');

    // Clear existing data
    const collections = await db.listCollections();
    for (const collection of collections) {
      const docs = await collection.get();
      const batch = db.batch();
      docs.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
    }

    // Add sample students
    await db.collection('students').add({
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePicture: 'https://via.placeholder.com/150',
    });

    // Add sample faculty
    await db.collection('faculty').add({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      department: 'Computer Science',
      profilePicture: 'https://via.placeholder.com/150',
    });

    // Add sample jobs
    await db.collection('jobs').add({
      title: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      description: 'Build the next generation of Google products.',
    });
    await db.collection('jobs').add({
      title: 'Product Manager',
      company: 'Facebook',
      location: 'Menlo Park, CA',
      description: 'Own the product strategy and roadmap.',
    });
    await db.collection('jobs').add({
      title: 'Data Scientist',
      company: 'Netflix',
      location: 'Los Gatos, CA',
      description: 'Use data to personalize the Netflix experience.',
    });

    // Add sample resources
    await db.collection('resources').add({
      name: 'Library',
      url: '#',
      type: 'student',
    });
    await db.collection('resources').add({
      name: 'Student Handbook',
      url: '#',
      type: 'student',
    });
      await db.collection('resources').add({
      name: 'Faculty Handbook',
      url: '#',
      type: 'faculty',
    });
    await db.collection('resources').add({
      name: 'Academic Calendar',
      url: '#',
      type: 'faculty',
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
