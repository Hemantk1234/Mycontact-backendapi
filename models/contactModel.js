const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    Name: {
      type: String,
      required: [true, "Please add the contact name."],
    },
    Email: {
      type: String,
      required: [true, "Please add the email address."],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
