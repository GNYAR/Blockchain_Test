const express = require('express');
const AccountService = require('../service/account');

const router = express.Router({ mergeParams: true });

router.get('/item/all', async (req, res) => {
    try {
        const data = await AccountService.fetchAllItem();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500)
    }
});

router.get('/item/:id', async (req, res) => {
    try {
        const data = await AccountService.fetchItem(req.params.id);
        console.log(data);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500)
    }
});

router.post('/item/new', async (req, res) => {
    try {
        const data = await AccountService.createItem(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500)
    }
});
module.exports = router;
