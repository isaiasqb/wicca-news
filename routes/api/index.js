const router = require('express').Router();

const witchRoutes = require('./witch-routes.js');

router.use('/witches', witchRoutes);

module.exports = router;

