const express = require('express');
const router = express.Router();
const { getAllItems,
    getSingleItem,
    createItem
} = require('../controllers/item')
const upload = require('../utils/multer')

router.get('/items', getAllItems)
router.get('/items/:id', getSingleItem)
router.post('/items', upload.single('image'), createItem)
module.exports = router;