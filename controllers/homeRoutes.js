const router = require('express').Router();
const { User } = require('../models');


// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
    try {
        res.render('login', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const logged_in = req.session.logged_in;
        console.log(logged_in);
        res.render('dashboard', {
            logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
