const Festival = require('../models/festival');

function festivalsIndex(req, res){
  Festival.find((err, festivals) => {
    if (err) return res.status(500).send();
    return res.status(200).json({ cameras: festivals });
  });
}

module.exports = {
  index: festivalsIndex
};
