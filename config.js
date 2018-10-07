require("dotenv").config();

if (typeof process.env.GS_API_KEY === "undefined") {
  throw new Error("Cant find GS_API_KEY as a env.var");
}
if (typeof process.env.GS_SHEET_ID === "undefined") {
  throw new Error("Cant find GS_SHEET_ID as a env.var");
}
if (typeof process.env.GS_SPREADSHEET_ID === "undefined") {
  throw new Error("Cant find GS_GS_SPREADSHEET_ID_ID as a env.var");
}
if (typeof process.env.GS_CHEK_INTERVAL_SEC === "undefined") {
  throw new Error("Cant find GS_CHEK_INTERVAL_SEC as a env.var");
}
if (typeof process.env.GS_START_EVENT_TEXT === "undefined") {
  throw new Error("Cant find GS_START_EVENT_TEXT as a env.var");
}
if (typeof process.env.GS_STOP_EVENT_TEXT === "undefined") {
  throw new Error("Cant find GS_STOP_EVENT_TEXT as a env.var");
}
if (typeof process.env.GS_ROW_START === "undefined") {
  throw new Error("Cant find GS_ROW_START as a env.var");
}
if (typeof process.env.GS_START_TIME_COLUMN === "undefined") {
  throw new Error("Cant find GS_START_TIME_COLUMN as a env.var");
}
if (typeof process.env.GS_END_TIME_COLUMN === "undefined") {
  throw new Error("Cant find GS_END_TIME_COLUMN as a env.var");
}
if (typeof process.env.GS_TITTEL_COLUMN === "undefined") {
  throw new Error("Cant find GS_TITTEL_COLUMN as a env.var");
}
if (typeof process.env.GS_DESCRIPTION_COLUMN === "undefined") {
  throw new Error("Cant find GS_DESCRIPTION_COLUMN as a env.var");
}
if (typeof process.env.GS_CATEGORY_COLUMN === "undefined") {
  throw new Error("Cant find GS_CATEGORY_COLUMN as a env.var");
}
if (typeof process.env.GS_TAGS_COLUMN === "undefined") {
  throw new Error("Cant find GS_TAGS_COLUMN as a env.var");
}
if (typeof process.env.GS_STARTSTOP_EVENT_COLUMN === "undefined") {
  throw new Error("Cant find GS_STARTSTOP_EVENT_COLUMN as a env.var");
}
if (typeof process.env.YOUTUBE_STREAM_KEY === "undefined") {
  throw new Error("Cant find YOUTUBE_STREAM_KEY as a env.var");
}

module.exports = {
  apiKey: process.env.GS_API_KEY,
  sheetId: process.env.GS_SHEET_ID,
  spreadsheetId: process.env.GS_SPREADSHEET_ID,
  intervalSec: process.env.GS_CHEK_INTERVAL_SEC,
  startEventText: process.env.GS_START_EVENT_TEXT,
  stopEventText: process.env.GS_STOP_EVENT_TEXT,
  rowStart: process.env.GS_ROW_START,
  startTimeColumn: process.env.GS_START_TIME_COLUMN,
  endTimeColumn: process.env.GS_END_TIME_COLUMN,
  tittelColumn: process.env.GS_TITTEL_COLUMN,
  descriptionColumn: process.env.GS_DESCRIPTION_COLUMN,
  categoryColumn: process.env.GS_CATEGORY_COLUMN,
  tagsColumn: process.env.GS_TAGS_COLUMN,
  eventColumn: process.env.GS_STARTSTOP_EVENT_COLUMN,
  youtubeStreamKey: process.env.YOUTUBE_STREAM_KEY
};
