const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  isScrap: {
    type: Boolean,
    default: false,
  },
  serialNo: {
    type: String,
    required: true,
  },
  cpu_make: {
    type: String,
  },
  company: {
    type: String,
  },
  cpu_processor: {
    type: String,
  },
  monitor_make: {
    type: String,
  },
  company: {
    type: String,
  },
  size: {
    type: Number,
  },
  model: {
    type: String,
  },
  warranty: {
    type: Number,
    required: true,
  },
  installDate: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
