const wol = require('wakeonlan');

exports.TurnPCOn = (req, res, next) => {
  wol('d8:cb:8a:c6:46:7d').then(() => {
    console.log("Starting James' PC")
  })
  return res.status(200).json({ success: true });
}
