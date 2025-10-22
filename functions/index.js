const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.setAdminRole = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an authenticated user
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The function must be called while authenticated."
    );
  }

  // Check if the user has the 'dev_admin' role
  const callerUid = context.auth.uid;
  const callerUserRecord = await admin.auth().getUser(callerUid);
  const callerClaims = callerUserRecord.customClaims;

  if (callerClaims.role !== 'dev_admin') {
      throw new functions.https.HttpsError(
          'permission-denied',
          'Only dev admins can set user roles.'
      );
  }

  const { email, role } = data;

  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { role });
    return { message: `Success! ${email} has been made a ${role}.` };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
