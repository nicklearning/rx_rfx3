const router = require('express').Router();
const { Medication } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const medicationData = await Medication.create({
            name: req.body.name,
            dosage: req.body.dosage,
            dayOfWeek: req.body.dayOfWeek,
            inUse: req.body.inUse,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday,
            saturday: req.body.saturday,
            sunday: req.body.sunday,
            userId: req.body.userId,
        });
        res.status(200).json(medicationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

router.put('/:id', async (req, res) => {
    try {
        const medication = await Medication.update(
            {
                name: req.body.name,
                dosage: req.body.dosage,
                dayOfWeek: req.body.dayOfWeek,
                inUse: req.body.inUse,
                monday: req.body.monday,
                tuesday: req.body.tuesday,
                wednesday: req.body.wednesday,
                thursday: req.body.thursday,
                friday: req.body.friday,
                saturday: req.body.saturday,
                sunday: req.body.sunday,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(medication);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

router.get('/', async (req, res) => {
    try {
        const dbMedicationData = await Medication.findAll({
            include: [
                {
                    model: Medication,
                    attributes: ['name', 'dosage'],
                },
            ],
        });

        const medications = dbMedicationData.map((medication) =>
            medication.get({ plain: true })
        );

        // res.render('medicationpage', {
        //     medications,
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;

router.get('/medication/:id', async (req, res) => {
    try {
        const dbMedicationData = await Medication.findByPk(req.params.id, {
            include: [
                {
                    model: Medication,
                    attributes: [
                        'id',
                        'name',
                        'dosage',
                        'dayOfWeek',
                        'inUse',
                        'monday',
                        'tuesday',
                        'wednesday',
                        'thursday',
                        'friday',
                        'saturday',
                        'sunday',
                    ],
                },
            ],
        });

        const medication = dbMedicationData.get({ plain: true });
        res.render('medication', { medication });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;


router.delete('/:id', async (req, res) => {
    try {
        const medication = await Medication.destroy(
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(medication);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


