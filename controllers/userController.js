const { User, Thought } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find({}, (err, result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        console.log("There was an error trying to get the users!");
        res
          .status(500)
          .json({ error: "There was an error trying to get the users!" });
      }
    });
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({
        path: "thoughts",
        path: "friends",
        select: "-__v",
      })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.staut(500).json(err));
  },

  postNewUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  removeUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ messsage: "No user with that ID" })
          : Thought.findOneAndUpdate(
              { userId: req.params.userId },
              { $pull: { thoughts: req.params.userId } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "User removed but no thoughts found." })
          : res.json({ message: "User removed succesfully" })
      )
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
