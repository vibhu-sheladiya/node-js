const mongoose = require("mongoose");
const paymentScheme = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    amount: { type: Number },

    // [online,offline]
    payment_mode: {
      type: String,
      trim: true,
    },
    //[cash ,card ]
    payment_type: {
      type: String,
      trim: true,
    },
    // [pending,successfull,failed]
    // status: {
    //   type: String,
    //   trim: true,
    // },
    bank_name: {
      type: String,
    },
    account_no: {
      type: Number,
    },
    ifsCode: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("payment", paymentScheme);
module.exports = Payment;
