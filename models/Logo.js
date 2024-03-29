const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    // brand: {
    //   type: String,
    // },
    // year: {
    //   type: String,
    // },
    // version: {
    //   type: String,
    // },
    // mileage: {
    //   type: String,
    // },
    // transmission: {
    //   type: String,
    // },
    // whatsapp: {
    //   type: String,
    // },
    // price: {
    //   type: String,
    // },
    // payMethod: {
    //   type: String,
    // },
    // logoInfo: {
    //   type: String,
    // },
    uploads: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("logo", UserSchema);
