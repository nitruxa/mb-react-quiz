const express = require('express');
const appRouter = express.Router();

appRouter.get('', (req, res) => {
    res.render('app', {});
});

module.exports = appRouter;
