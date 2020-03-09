Contact = require('../model/contactModel');


exports.index = function (req, res) {
    Contact.get(function (err, contacts){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contact Added Successfully",
            data: contacts
        });
    });
};

// Handle create actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function (err) {
        if (err)
            res.json(err);
res.json({
        message: "New Contact Created!",
        data: contact
        });
    });
};

// Handle view actions
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: "Contacts Details Loading...",
            data: contact
        });
    });
};

// Handle update actions
exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
                if (err)
                    res.send(err)
            contact.name = req.body.name ? req.body.name : contact.name;
            contact.gender = req.body.gender;
            contact.email = req.body.email;
            contact.phone = req.body.phone;        

    
            contact.save(function (err) {
                if (err)
                    res.json(err);
            res.json({
                message: "Contact Updated!",
                data: contact
            });
        });
    });
};

exports.delete = function (req, res) { 
    Contact.remove({
            _id: req.params.contact_id
        }, function (err, contact) {
            if (err)
                res.send(err);
        res.json({
            status: "success",
            message: "Contact Deleted!"
        });
    });
};