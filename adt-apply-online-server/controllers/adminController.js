require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/user');
const documents= require('../models/documents');


exports.checkToken = async  (req, res) => {

    try {
        const { token
        } = req.body;
        const x = JSON.parse('true')
        if(token === process.env.token){
            res.send(x);
        }
        else{
            res.send(false);
        }

    }

    catch (err) {
        res.status(500).send({ message: err.message || "Some error occurred while retrieving user." });

    }

};



exports.findCandidate = async (req, res) => {
try{
        const data = await documents.findAll({

            include: [{
                model: User,
                required: true
            },


            ],
            group: [
                'User.id',
                'Documents.id'

            ]
        });
        res.send(data);

    } catch (error) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    }
};



























