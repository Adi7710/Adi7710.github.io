// Firebase web config for Felt Ledger. These values are not secret; access is
// enforced by the Firestore security rules (see firestore.rules).
window.FELT_FIREBASE = {
  apiKey: "AIzaSyDvTgHTEyNbji9umYs-lu33ij2NjyZ0aEo",
  authDomain: "felt-ledger-f71b3.firebaseapp.com",
  projectId: "felt-ledger-f71b3",
  storageBucket: "felt-ledger-f71b3.firebasestorage.app",
  messagingSenderId: "537409794102",
  appId: "1:537409794102:web:a3b3dc67afdb123a3b2897",
  // Anyone with the link can log games (no sign-in). Set to false to require sign-in.
  openAccess: true,
  // Google accounts allowed to log games, adjustments and edits
  // (must match the list in firestore.rules):
  editors: ["adityajbhatia@gmail.com"]
};
