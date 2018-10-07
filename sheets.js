const { google } = require("googleapis");
const Promise = require("bluebird");
const config = require("./config");

async function getspreadsheetIdArea(spreadsheetId, a1Notation) {
  return new Promise((resolve, reject) => {
    try {
      const sheetConfig = {
        version: "v4",
        auth: config.apiKey
      };
      const sheets = google.sheets(sheetConfig);
      const sheetsRequstObject = {
        spreadsheetId: spreadsheetId,
        range: a1Notation
      };
      sheets.spreadsheets.values.get(sheetsRequstObject, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function getStartTimeColumn({
  rowNr = config.rowStart,
  sheetId = config.sheetId,
  spreadsheetId = config.spreadsheetId,
  startTimeColumn = config.startTimeColumn
} = {}) {
  const response = await getspreadsheetIdArea(
    spreadsheetId,
    `${sheetId}!${startTimeColumn}${rowNr}:${startTimeColumn}${rowNr}`
  );
  return response.data.values[0][0];
}

async function main() {
  console.log(await getStartTimeColumn());
}

main();
