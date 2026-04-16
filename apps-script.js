// Google Apps Script code for handling sign up and login with Google Sheets integration

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function signup(email, password) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  sheet.appendRow([email, password]);
  return { success: true, message: 'Sign up successful!' };
}

function login(email, password) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === email && data[i][1] === password) {
      return { success: true, message: 'Login successful!' };
    }
  }
  return { success: false, message: 'Invalid email or password.' };
}