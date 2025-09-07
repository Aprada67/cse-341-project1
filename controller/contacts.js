const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId; // Primary Key

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts); // Status 200 = OK
    });
}

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]); // Status 200 = OK
    });
}

module.exports = {
    getAll,
    getSingle
}