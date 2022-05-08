const Router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThough,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtControllers");
const router = require("./userRoutes");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:Thoughtid")
  .get(getSingleThought)
  .put(updateThough)
  .delete(deleteThought);

router.route("/:ThoughtId/reaction").post(createReaction);

router.route("./:ThoughtId/reaction/reactionId").delete(deleteReaction);
