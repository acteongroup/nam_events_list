// Netlify build step: writes firebase-config.js from environment variables so no
// Firebase settings are stored in the repo. Without them the app runs local-only.
const fs = require('fs');
const e = process.env;
const cfg = {
  apiKey: e.FIREBASE_API_KEY || '',
  authDomain: e.FIREBASE_AUTH_DOMAIN || '',
  projectId: e.FIREBASE_PROJECT_ID || '',
  storageBucket: e.FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: e.FIREBASE_MESSAGING_SENDER_ID || '',
  appId: e.FIREBASE_APP_ID || ''
};
fs.writeFileSync('firebase-config.js', 'window.FIREBASE_CONFIG = ' + JSON.stringify(cfg) + ';\n');
console.log(cfg.apiKey ? 'firebase-config.js written (cloud mode)' : 'No FIREBASE_* variables set: local-only mode');
