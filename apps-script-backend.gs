// Google Apps Script code to handle sign up, login, and other backend operations using Google Sheets as the database

function doGet(e) {
  return HtmlService.createHtmlOutput('Hello World');
}

function signUp(email, password) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  sheet.appendRow([email, password]);
  return 'User signed up successfully';
}

function login(email, password) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  const data = sheet.getDataRange().getValues();
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === email && data[i][1] === password) {
      return 'Login successful';
    }
  }
  return 'Invalid login';
}

function doPost(e) {
  const action = e.parameter.action;
  if (action === 'signup') {
    return signUp(e.parameter.email, e.parameter.password);
  } else if (action === 'login') {
    return login(e.parameter.email, e.parameter.password);
  }
  return 'Invalid action';
}