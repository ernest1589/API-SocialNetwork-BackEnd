const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  addNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(addNewUser);

router.route("/:UserId").get(getSingleUser).delete(deleteUser).put(updateUser);

router.route("/:UserId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
