const { run } = require("./auth");
const Promise = require("bluebird");

const { google } = require("googleapis");

async function getspreadsheetIdArea(a1Notation, sheetId) {
  return new Promise((resolve, recject) => {
    run(
      getspreadsheetIdAreaInternal.bind(
        null,
        a1Notation,
        sheetId,
        resolve,
        recject
      )
    );
  });
}

async function getspreadsheetIdAreaInternal(
  spreadsheetId,
  a1Notation,
  resolve,
  reject,
  auth
) {
  try {
    const sheets = google.sheets({ version: "v4", auth });
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: spreadsheetId,
        range: a1Notation
      },
      (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  } catch (e) {
    reject(e);
  }
}

const getMatchNr = async (spreadsheetId, courtId) => {
  try {
    const result = await getspreadsheetIdArea(spreadsheetId, "LiveScore!A:I");
    // tomme verdier er borte....!
    // Colonne E => 4 => bane colonnen
    const rows = result.data.values;
    const centerCourtMatches = rows.filter(row => row[4] === courtId);

    let match;
    const matchInPlay = centerCourtMatches.filter(
      row => row[row.length - 1] === "Igang"
    );
    if (matchInPlay.length == 0) {
      match = centerCourtMatches.filter(
        row => row[row.length - 1] === "Klargjort"
      );
    } else {
      match = matchInPlay;
    }
    if (match && match[0] && match[0][0]) {
      return match[0][0];
    } else {
      console.log(`Tom, match er tom ${match}`);
    }
  } catch (err) {
    console.log(err);
    return -1;
  }
};

const getTournamentId = async spreadsheetId => {
  try {
    const result = await getspreadsheetIdArea(spreadsheetId, "Config!D2");
    const rows = result.data.values;
    return rows[0][0];
  } catch (err) {
    console.log(err);
    return -1;
  }
};

module.exports = {
  getMatchNr,
  getTournamentId
};
