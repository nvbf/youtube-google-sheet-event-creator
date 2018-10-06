const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api/courts", (req, res, next) => {
    res.send("Not implmented");
  });

  server.use("/api/court/:spreadsheetId/:courtId", async (req, res, next) => {
    const { spreadsheetId, courtId } = req.params;
    const { getMatchNr, getTournamentId } = require("./sheets");

    const matchId = await getMatchNr(spreadsheetId, courtId);
    console.log(`matchId: ${matchId}`);
    const tournamentId = await getTournamentId(spreadsheetId);
    console.log(`tournamentId: ${tournamentId}, matchId: ${matchId}`);
    return res.json({ matchId, tournamentId });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, err => {
    if (err) throw err;
    console.log("Server ready on http://localhost:3000");
  });
});
