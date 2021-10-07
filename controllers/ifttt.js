const wol = require('wakeonlan');

exports.TurnPCOn = (req, res, next) => {
  wol('FC:34:97:A5:3B:29').then(() => {
    console.log("Starting James' PC")
  })
  return res.status(200).json({ success: true });
}
