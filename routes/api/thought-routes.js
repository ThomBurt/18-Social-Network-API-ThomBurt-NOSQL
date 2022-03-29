const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addNewReaction,
    removeReaction
  } = require('../../controllers/user-controller');
  
  // /api/users
  router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);
  
  // /api/users/:id
  router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

  router
    .route('/:id/reactions')
    .post(addNewReaction)
    .delete(removeReaction)


module.exports = router;