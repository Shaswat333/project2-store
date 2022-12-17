const express = require('express');
const router = express.Router();
const Store = require('../models/Store.model');
const isLoggedIn = require('../middleware/isLoggedIn');

// ------ CRUD - Create -------
router.get('/store/create', (req, res, next) => {
  try {
    res.render('store/store-create');
  } catch (error) {
    next(error);
  }
});

router.post('/store/create', async (req, res, next) => {
  try {
    // console.log(req.body);
    const { nameOfStore, description,owner,location, rating } = req.body;
    const createdStore = await Store.create({
      nameOfStore,
      description,
      owner,
      location,
      rating
    });
    console.log('A new store was created:', createdStore.nameOfStore);
    // after creating the store, we redirect the user to the list
    res.redirect('/store');
  } catch (error) {
    next(error);
  }
});

// ----- CRUD - Read ------

// list of all stores
router.get('/stores', async (req, res, next) => {
  try {
    const allStore = await Store.find();
    console.log(allStore)
    res.render('store/store-list', {allStore} );
  } catch (error) {
    console.log('error', error);
    // calling the error middleware
    next(error);
  }
});

router.get('/store/:storeId', async (req, res, next) => {
  try {
    // console.log(req.params);
    const { storeId } = req.params;

    const store = await Store.findById(storeId);
    res.render('store/store-details', store);
  } catch (error) {
    next(error);
  }
});

// ------- CRUD - Update ------

router.get('/store/:storeId/edit', isLoggedIn, async (req, res, next) => {
  try {
    const { storeId } = req.params;
    const store = await Store.findById(storeId);
    res.render('stores/store-edit', store);
  } catch (error) {
    next(error);
  }
});

router.post('/store/:storeId/edit', isLoggedIn, async (req, res, next) => {
  try {
    const { storeId } = req.params;
    const { title, store, description, review } = req.body;
    const updatedStore = await Book.findByIdAndUpdate(storeId, {
      title,
      store,
      description,
      review
    });
    res.redirect(`/store/${updatedStore._id}`);
  } catch (error) {
    next(error);
  }
});

// CRUD - Delete

router.post('/store/:storeId/delete', isLoggedIn, async (req, res, next) => {
  try {
    const { storeId } = req.params;
    await Store.findByIdAndDelete(storeId);
    res.redirect('/store');
  } catch (error) {
    next(error);
  }
});

module.exports = router;