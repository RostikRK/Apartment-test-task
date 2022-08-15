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
    Validate(req.body)
    const rooms = Number(req.body.rooms);
    const name = req.body.name;
    const price = Number(req.body.price);
    const description = req.body.description;

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
    Validate(req.body)
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

function Validate(apartment) {
    if(apartment.name === undefined) {
        throw "Name should be provided"
    }
    if(apartment.description === undefined) {
        throw "Description should be provided"
    }
    if(apartment.price === undefined) {
        throw "Price should be provided"
    }
    if(apartment.rooms === undefined) {
        throw "Number of rooms should be provided"
    }
    if(apartment.name.length > 98) {
        throw "The length of name should be less than 99"
    }
    if(apartment.description.length > 998) {
        throw "The length of description should be less than 999"
    }
    if(apartment.price < 1) {
        throw "The price should be more than 0"
    }
    if (apartment.rooms < 1) {
        throw "The number of rooms should be more than 0"
    }
}

module.exports = router;