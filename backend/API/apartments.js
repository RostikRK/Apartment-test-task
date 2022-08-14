const router = require('express').Router();
let Apartment = require('../models/apartment.model');


router.route('/').get((req, res) => {
    const filter = req.query.rooms;
    const sorting = req.query.price;
    (filter ? Apartment.find({rooms: filter}) : Apartment.find())
    .then((apartments) => {
        if (sorting === "asc" ) {
            apartments.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        }
        else if (sorting === "desc") {
            apartments.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
        }
        res.json(apartments)
    })
    .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/:id').get((req, res) => {
    Apartment.findById(req.params.id)
        .then(apartment => res.json(apartment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const rooms = Number(req.body.rooms);
    const name = req.body.name;
    const price = Number(req.body.price);
    const description = req.body.description;
    if(price < 0) throw "Price should be positive";
    if(price < 0) throw "Number of rooms should be positive";

    const newApartment = new Apartment({
        rooms,
        name,
        price,
        description,
    });

    newApartment.save()
    .then(() => res.json('Apartment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
    const filter = { _id: req.params.id}
    const update = {
        rooms: Number(req.body.rooms),
        name: req.body.name,
        price:Number(req.body.price),
        description: req.body.description,
    }

    Apartment.findOneAndUpdate(filter, update)
    .then(() => res.json('Apartment updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Apartment.findByIdAndDelete(req.params.id,)
        .then(() => res.json('Apartment deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;