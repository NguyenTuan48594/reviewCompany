var mongooes = require("mongoose");

var ketquaSchema = mongooes.Schema({
  maSV: {
    type: String,
    trim: true,
    required: true,
  },
  maMH: {
    type: String,
    trim: true,
  },
  diemThi: {
    type: String,
    trim: true,
  },
});

module.exports = mongooes.model("ketqua", ketquaSchema);
