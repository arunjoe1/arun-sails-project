/**
 * DatastoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function (req, res) {
        Datastore.find({}).exec(function (err, datastores) {

            if (err) {
                sails.log('Error summary: ' + err);
                rsails.log(err);
                return res.send(500, {error: 'Database Error'}); // note the return!
            }
            res.render('list', { datastores: datastores });
        });
    },
    add: function (req, res) {
        res.view('add');
    },
    create: function (req, res) {
        var title = req.body.title;
        var body = req.body.body;

        Datastore.create({ title: title, body: body }).exec(function () {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }
            res.redirect('/datastore/list');
        });
    }

};

