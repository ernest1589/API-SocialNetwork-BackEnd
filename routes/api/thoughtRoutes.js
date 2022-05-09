const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thoughtControllers");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:Thoughtid")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

router.route("/:ThoughtId/reaction").post(createReaction);

router.route("./:ThoughtId/reaction/reactionId").delete(removeReaction);

module.exports = router;
