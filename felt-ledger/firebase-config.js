// Firebase web config for Felt Ledger. These values are not secret; access is
// enforced by the Firestore security rules (see firestore.rules).
// Until apiKey is filled in, the site shows the read-only snapshot in data.json.
window.FELT_FIREBASE = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  // Google accounts allowed to log games, adjustments and edits:
  editors: []
};
