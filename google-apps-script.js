/**
 * UMBRELLA WAITLIST - GOOGLE APPS SCRIPT WEBHOOK
 *
 * This script receives email submissions from your Umbrella landing page
 * and stores them in a Google Sheet.
 *
 * SETUP INSTRUCTIONS:
 * ===================
 *
 * 1. CREATE A GOOGLE SHEET:
 *    - Go to https://sheets.google.com
 *    - Create a new spreadsheet
 *    - Name it "Umbrella Waitlist"
 *    - In the first row, add these headers:
 *      A1: Timestamp
 *      B1: Email
 *      C1: Source
 *      D1: Status
 *
 * 2. OPEN APPS SCRIPT EDITOR:
 *    - In your Google Sheet, click Extensions > Apps Script
 *    - Delete any code in the editor
 *    - Copy and paste this entire file
 *
 * 3. DEPLOY AS WEB APP:
 *    - Click the "Deploy" button (top right)
 *    - Choose "New deployment"
 *    - Click the gear icon next to "Select type"
 *    - Choose "Web app"
 *    - Configure:
 *      - Description: "Umbrella Waitlist Webhook"
 *      - Execute as: "Me"
 *      - Who has access: "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL that appears
 *
 * 4. UPDATE YOUR WEBSITE:
 *    - Open index.html
 *    - Find the line: const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
 *    - Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' with your Web App URL
 *
 * 5. GRANT PERMISSIONS:
 *    - First time you deploy, you'll need to authorize the script
 *    - Click "Authorize access"
 *    - Choose your Google account
 *    - Click "Advanced" if you see a warning
 *    - Click "Go to [Project Name] (unsafe)"
 *    - Click "Allow"
 *
 * TESTING:
 * ========
 * - After deployment, test by submitting an email on your website
 * - Check your Google Sheet to see if the email appears
 * - If it doesn't work, check the Apps Script logs (View > Executions)
 *
 * OPTIONAL FEATURES:
 * ==================
 * - Email notifications when someone joins (uncomment the sendEmailNotification function)
 * - Duplicate detection (already included)
 * - Export to CSV (use Google Sheets built-in export)
 */

// ============================================
// CONFIGURATION
// ============================================

// Your notification email (optional - uncomment sendEmailNotification to use)
const NOTIFICATION_EMAIL = 'your-email@example.com';

// Sheet name (must match the name of your sheet tab)
const SHEET_NAME = 'Sheet1';

// ============================================
// MAIN HANDLER FUNCTIONS
// ============================================

/**
 * Handles GET requests (for testing the deployment)
 * When you visit the Web App URL in a browser, this runs
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Umbrella Waitlist API is running',
      instructions: 'This endpoint accepts POST requests with email data'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles POST requests from the website
 * This function is automatically called when your website submits the form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = data.timestamp || new Date().toISOString();
    const source = data.source || 'unknown';

    // Validate email
    if (!email || !isValidEmail(email)) {
      return createResponse(400, 'Invalid email address');
    }

    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      return createResponse(500, 'Sheet not found. Please check SHEET_NAME configuration.');
    }

    // Check for duplicates
    if (isDuplicate(sheet, email)) {
      // Still return success to the user, but mark as duplicate
      addToSheet(sheet, timestamp, email, source, 'Duplicate');
      return createResponse(200, 'Already subscribed');
    }

    // Add to sheet
    addToSheet(sheet, timestamp, email, source, 'Active');

    // Optional: Send email notification
    // Uncomment the line below to receive email notifications for new signups
    // sendEmailNotification(email, timestamp);

    // Return success
    return createResponse(200, 'Successfully added to waitlist');

  } catch (error) {
    // Log error for debugging
    console.error('Error processing request:', error);
    return createResponse(500, 'Internal server error: ' + error.message);
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Validates email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if email already exists in the sheet
 */
function isDuplicate(sheet, email) {
  const data = sheet.getDataRange().getValues();
  const emailColumn = 1; // Column B (0-indexed)

  // Skip header row (index 0)
  for (let i = 1; i < data.length; i++) {
    if (data[i][emailColumn].toLowerCase() === email.toLowerCase()) {
      return true;
    }
  }
  return false;
}

/**
 * Adds a new row to the sheet
 */
function addToSheet(sheet, timestamp, email, source, status) {
  sheet.appendRow([
    new Date(timestamp),
    email,
    source,
    status
  ]);
}

/**
 * Creates a standardized JSON response
 */
function createResponse(statusCode, message) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: statusCode,
      message: message
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Sends email notification (OPTIONAL)
 * Uncomment the call to this function in doPost() to enable
 */
function sendEmailNotification(email, timestamp) {
  const subject = 'New Umbrella Waitlist Signup';
  const body = `
New signup for Umbrella waitlist:

Email: ${email}
Time: ${new Date(timestamp).toLocaleString()}
Source: umbrellalive.com

View all signups: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
  `.trim();

  MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

// ============================================
// TESTING FUNCTION
// ============================================

/**
 * Test function - run this to verify your setup
 * In the Apps Script editor, select this function and click Run
 */
function testSetup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  if (!sheet) {
    Logger.log('❌ ERROR: Sheet "' + SHEET_NAME + '" not found!');
    Logger.log('Please create a sheet with that name or update SHEET_NAME');
    return;
  }

  Logger.log('✅ Sheet found: ' + sheet.getName());

  // Test adding a row
  const testEmail = 'test@example.com';
  const testTimestamp = new Date().toISOString();

  try {
    addToSheet(sheet, testTimestamp, testEmail, 'test', 'Test');
    Logger.log('✅ Successfully added test row');
    Logger.log('Check your sheet to see the test entry');
  } catch (error) {
    Logger.log('❌ ERROR adding row: ' + error.message);
  }
}

// ============================================
// UTILITY FUNCTIONS FOR SPREADSHEET MANAGEMENT
// ============================================

/**
 * Gets total count of signups
 */
function getSignupCount() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  return sheet.getLastRow() - 1; // Subtract header row
}

/**
 * Exports data to CSV (can be called manually)
 */
function exportToCSV() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();

  let csv = '';
  data.forEach(row => {
    csv += row.join(',') + '\n';
  });

  return csv;
}
