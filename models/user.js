const { Schema, model } = require("mongoose");

// create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "You MUST provide a username."],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Must enter a valid email address.",
      ],
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
