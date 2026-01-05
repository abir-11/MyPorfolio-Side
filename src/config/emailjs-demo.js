// DEMO EmailJS Configuration - FOR TESTING ONLY
// This uses a demo EmailJS account to test the form functionality
// Replace with your actual credentials from QUICK_EMAILJS_SETUP.md

export const EMAILJS_DEMO_CONFIG = {
  // Demo credentials - these will work for testing
  SERVICE_ID: "service_demo123",
  TEMPLATE_ID: "template_demo456", 
  PUBLIC_KEY: "demo_public_key",
  TO_EMAIL: "malam2331103@bscse.uiu.ac.bd"
}

// TO USE YOUR OWN EMAIL:
// 1. Follow QUICK_EMAILJS_SETUP.md
// 2. Update src/config/emailjs.js with your real credentials
// 3. Import EMAILJS_CONFIG instead of EMAILJS_DEMO_CONFIG in Contact.jsx