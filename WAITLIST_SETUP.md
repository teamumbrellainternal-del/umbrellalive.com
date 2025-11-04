# Umbrella Waitlist Setup Guide

This guide will help you set up the email waitlist feature for the Umbrella landing page.

## Overview

The waitlist system consists of:
- **Frontend Modal**: A popup form on index.html that collects email addresses
- **Google Apps Script**: A webhook that receives submissions and stores them in Google Sheets
- **Google Sheet**: A spreadsheet that stores all waitlist signups

## Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it **"Umbrella Waitlist"**
4. In the first row, add these column headers:
   - **A1**: `Timestamp`
   - **B1**: `Email`
   - **C1**: `Source`
   - **D1**: `Status`

### Step 2: Deploy Google Apps Script

1. In your Google Sheet, click **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `google-apps-script.js`
4. Paste it into the Apps Script editor
5. (Optional) Update the configuration:
   - `NOTIFICATION_EMAIL`: Your email for notifications
   - `SHEET_NAME`: The name of your sheet tab (default: "Sheet1")

### Step 3: Deploy as Web App

1. Click the **"Deploy"** button (top right corner)
2. Select **"New deployment"**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **"Web app"**
5. Configure the deployment:
   - **Description**: `Umbrella Waitlist Webhook`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
6. Click **"Deploy"**
7. **IMPORTANT**: Copy the Web App URL that appears

### Step 4: Authorize the Script

The first time you deploy, Google will ask for permissions:

1. Click **"Authorize access"**
2. Choose your Google account
3. You may see a warning - click **"Advanced"**
4. Click **"Go to [Project Name] (unsafe)"**
5. Click **"Allow"**

### Step 5: Update Your Website

1. Open `index.html` in your code editor
2. Find this line (around line 2014):
   ```javascript
   const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web App URL from Step 3
4. Save the file
5. Deploy your updated website to Cloudflare Pages

### Step 6: Test the Integration

1. Visit your live website
2. Click any "Join Umbrella" or "Sign up free" button
3. The waitlist modal should appear
4. Enter a test email address
5. Click "Join Waitlist"
6. Check your Google Sheet - you should see a new row with:
   - The current timestamp
   - Your test email
   - Source: `umbrellalive.com`
   - Status: `Active`

## Features

### Included Features

✅ **Email Validation**: Client-side and server-side email validation
✅ **Duplicate Detection**: Prevents the same email from being added twice
✅ **Loading States**: Shows spinner during submission
✅ **Success/Error Messages**: Clear feedback to users
✅ **Keyboard Shortcuts**: ESC key closes modal
✅ **Click-outside to Close**: Modal closes when clicking overlay
✅ **Mobile Responsive**: Works perfectly on all screen sizes
✅ **Brand Kit Integration**: Uses your existing CSS variables
✅ **Analytics Ready**: Includes Google Analytics event tracking (if configured)

### Optional Features

You can enable these features by uncommenting code in `google-apps-script.js`:

- **Email Notifications**: Get notified when someone joins the waitlist
  - Uncomment line in `doPost()`: `sendEmailNotification(email, timestamp);`
  - Update `NOTIFICATION_EMAIL` constant with your email

## Troubleshooting

### Modal doesn't open when clicking buttons
- Check browser console for JavaScript errors
- Verify all buttons have the `data-waitlist` attribute
- Make sure the modal JavaScript is loaded

### Submissions aren't appearing in Google Sheet
1. Check that you copied the correct Web App URL
2. Verify the URL is updated in index.html
3. Check Apps Script execution logs:
   - Open Apps Script editor
   - Click **Executions** (left sidebar)
   - Look for errors
4. Ensure the sheet name matches the `SHEET_NAME` constant

### "Please configure your Google Apps Script URL" error
- You haven't updated the `GOOGLE_APPS_SCRIPT_URL` in index.html yet
- Follow Step 5 above

### Duplicate emails are being added
- The duplicate detection should prevent this
- Check that the Email column (B) contains the data
- Verify the `isDuplicate()` function is working in Apps Script logs

## Managing Your Waitlist

### View All Signups
Simply open your Google Sheet to see all signups with timestamps.

### Export to CSV
1. Open your Google Sheet
2. Click **File > Download > Comma-separated values (.csv)**

### Count Total Signups
The Google Apps Script includes a `getSignupCount()` function you can call manually.

### Filter Active vs Duplicates
Use Google Sheets' built-in filter feature on the Status column.

## Security & Privacy

- The modal validates emails on both client and server side
- Google Apps Script runs with your credentials but is accessible to anyone (required for public forms)
- No sensitive data is collected - only email addresses and timestamps
- Users can unsubscribe (implement separately when you have an email platform)

## Next Steps

Once you have a good number of signups, you can:

1. **Export to Email Marketing Platform**:
   - Download CSV from Google Sheets
   - Import to Mailchimp, SendGrid, or your preferred platform

2. **Send Launch Announcements**:
   - Use the email list to notify people when Umbrella launches
   - Consider offering early access to waitlist members

3. **Track Growth**:
   - Monitor signup trends in Google Sheets
   - Use data to plan your launch timeline

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review Apps Script execution logs
3. Verify all setup steps were completed
4. Test with a simple email first

---

**Built with ❤️ for Umbrella**
