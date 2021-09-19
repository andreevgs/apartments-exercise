const graphs = require('../controllers/graphs');

module.exports = app => {
    const router = require('express').Router();

    router.post(
        '/',
        graphs.getGraphs
    );

    app.use('/api/graphs', router)
};
