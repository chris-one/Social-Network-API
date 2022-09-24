const router = require('express').Router();
const apiRoutes = require('./userRoutes');

router.use('/user', userRoutes);

module.exports = router;
