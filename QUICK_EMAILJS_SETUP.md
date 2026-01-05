# Quick EmailJS Setup for malam2331103@bscse.uiu.ac.bd

## 🚀 Follow these exact steps to fix the contact form:

### Step 1: Create EmailJS Account
1. Go to **https://emailjs.com**
2. Click **"Sign Up"** 
3. Use your email: `malam2331103@bscse.uiu.ac.bd`
4. Verify your email

### Step 2: Add Gmail Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with `malam2331103@bscse.uiu.ac.bd`
6. Allow EmailJS permissions
7. **Copy your Service ID** (looks like `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set **Template Name**: `Portfolio Contact Form`
4. Set **Subject**: `New Portfolio Message from {{from_name}}`
5. Set **Content**:
```
Hello Arafat,

You received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent from: Portfolio Contact Form
```
6. Click **"Save"**
7. **Copy your Template ID** (looks like `template_xyz456`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like `user_123456789`)

### Step 5: Update Your Code
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_abc123",     // Paste your Service ID here
  TEMPLATE_ID: "template_xyz456",   // Paste your Template ID here
  PUBLIC_KEY: "user_123456789",     // Paste your Public Key here
  TO_EMAIL: "malam2331103@bscse.uiu.ac.bd"
}
```

### Step 6: Test the Form
1. Save the file
2. Go to your website: `http://localhost:5175/`
3. Navigate to Contact section
4. Fill out the form and click "Send Message"
5. Check your email: `malam2331103@bscse.uiu.ac.bd`

## ✅ What happens after setup:
- Form submissions will be sent to `malam2331103@bscse.uiu.ac.bd`
- You'll receive emails with sender's name, email, subject, and message
- Users will see "Message sent successfully!" confirmation
- No more "Failed to send message" errors

## 🔧 If you still get errors:
1. Check browser console (F12) for error messages
2. Verify all three IDs are correct in `src/config/emailjs.js`
3. Make sure Gmail service is connected and active
4. Check spam folder for test emails

## 📧 Free Plan Limits:
- 200 emails per month (perfect for portfolio)
- No credit card required

---
**Need help?** Check the detailed guide in `EMAILJS_SETUP.md` or contact EmailJS support.