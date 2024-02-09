const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.user_id = userData.id;
        req.session.logged_in = true;

        req.session.save((err) => {
            if (err) {
                // Handle error if saving session fails
                res.status(500).json({ message: 'Session could not be saved' });
            } else {
                res.json({
                    user: userData, message: 'You are now logged in!'
                });
            }
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/createAccount', (req, res) => {
    res.render('createAccount');
});


router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
            height: req.body.height,
            weight: req.body.weight,
            email: req.body.email,
            street: req.body.street,
            apt_unit_number: req.body.apt_unit_number,
            city: req.body.city,
            state: req.body.state,
            zip_code: req.body.zip_code,
            phone_1: req.body.phone_1,
            phone_2: req.body.phone_2,
            userId: req.body.userId,
        });
        res.status(200).json(userData);
    }   catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

router.put('/:id', async (req,res) => {
    try {
        const user = await User.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                date_of_birth: req.body.date_of_birth,
                gender: req.body.gender,
                height: req.body.height,
                weight: req.body.weight,
                email: req.body.email,
                street: req.body.street,
                apt_unit_number: req.body.apt_unit_number,
                city: req.body.city,
                state: req.body.state,
                zip_code: req.body.zip_code,
                phone_1: req.body.phone_1,
                phone_2: req.body.phone_2,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(user);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll({
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name', 'email'],
                },
            ],
        });
        const users = dbUserData.map((user) =>
            user.get({ plain: true })
        );

        // res.render('userpage', {
        //     users,
        // });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

router.get('/user/:id', async (req, res) => {
    try {
        const dbUserData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [
                        'id',
                        'first_name',
                        'last_name',
                        'date_of_birth',
                        'gender',
                        'height',
                        'weight',
                        'email',
                        'street',
                        'apt_unit_number',
                        'city',
                        'state',
                        'zip_code',
                        'phone_1',
                        'phone_2',
                        'userId',

                    ],
                },
            ],
        });

        const user = dbUserData.get({ plain: true });
        res.render('user', { user });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;


router.delete('/:id', async (req, res) => {
    try {
        const user = await User.destroy(
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(user);
    }   catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


module.exports = router;