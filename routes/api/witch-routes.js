const router = require('express').Router();
const { Witch } = require('../../models');

// G E T    /api/witches
router.get('/', (req, res) => {
  // access Witch model and run .findAll() method
  Witch.findAll({
    attributes: { exclude: ['password'] }
  })
  .then(dbWitchData => res.json(dbWitchData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// G E T    /api/witches/1
router.get('/:id', (req, res) => {
  Witch.findOne({
    where: {
      id: req.params.id
    },
    attributes: { exclude: ['password'] }
  })
  .then(dbWitchData => {
    if(!dbWitchData) {
      res.status(404).json({ message: 'There is no witch with this id' });
      return;
    }
    res.json(dbWitchData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// P O S T    /api/witches
router.post('/', (req, res) => {
  //expects {witch_alias: 'Lavernica', email: 'lucylover@darkness.com', password: 'witchpassword123'}
  Witch.create({
    witch_alias: req.body.witch_alias,
    email: req.body.email,
    password: req.body.password 
  })
  .then(dbWitchData => res.json(dbWitchData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// P U T    /api/witches/1
router.put('/:id', (req, res) => {
  Witch.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbWitchData => {
    if(!dbWitchData[0]) {
      res.status(404).json({ message: 'No witch found with this id' });
      return;
    }
    res.json(dbWitchData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// D E L E T E  /api/witches/1
router.delete('/:id', (req, res) => {
  Witch.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbWitchData => {
    if (!dbWitchData) {
      res.status(404).json({ message: 'No witch found with this id' });
      return;
    }
    res.json(dbWitchData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


module.exports = router
