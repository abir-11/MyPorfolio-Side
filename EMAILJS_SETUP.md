# EmailJS Setup Guide for Contact Form

Follow these steps to set up EmailJS for your contact form:

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service

### For Gmail Setup:
1. Select **Gmail**
2. Click **Connect Account**
3. Sign in with your Gmail account
4. Allow EmailJS permissions
5. Your Service ID will be generated (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form
- **Subject**: `New message from {{from_name}} - {{subject}}`

### Template Content:
```
Hello,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. Save the template and note your **Template ID** (e.g., `template_xyz456`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_123456789`)

## Step 5: Update Your Code

Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_abc123"      // Your Service ID
const TEMPLATE_ID = "template_xyz456"    // Your Template ID  
const PUBLIC_KEY = "user_123456789"      // Your Public Key
```

## Step 6: Test Your Contact Form

1. Save your changes
2. Run your development server: `npm run dev`
3. Go to the contact section
4. Fill out and submit the form
5. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Double-check your Service ID
   - Make sure the email service is active

2. **"Template not found" error**
   - Verify your Template ID
   - Ensure the template is published

3. **"Invalid public key" error**
   - Check your Public Key
   - Make sure it's copied correctly

4. **Emails not arriving**
   - Check your spam folder
   - Verify your email service connection
   - Test with a different email address

### Email Service Limits:
- **Free Plan**: 200 emails/month
- **Personal Plan**: 1,000 emails/month ($9/month)

## Security Notes

- Never commit your actual EmailJS credentials to public repositories
- Consider using environment variables for production:

```javascript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

Create a `.env` file:
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz456
VITE_EMAILJS_PUBLIC_KEY=user_123456789
```

## Support

If you need help:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Contact EmailJS support
3. Check browser console for error messages

---

**Important**: Make sure to replace the placeholder credentials with your actual EmailJS values!