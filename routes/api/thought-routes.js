const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addNewReaction,
    removeReaction
  } = require('../../controllers/thought-controller');
  
  // /api/users
  router
    .route('/')
    .get(getAllThoughts);

  // /api/thoughts/:userId
  router
    .route('/:userId')
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