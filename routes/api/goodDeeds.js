const express = require('express');
const router = express.Router();

// This allows you to use the template you created to force the in coming JSON follow your template
const GoodDeedsModel = require('../../models/goodDeeds');

// This function is run if a GET method from the root / endpoint
router.get('/git', (req, res) => {
    GoodDeedsModel.find()
        .then(items => res.json(items));

    // Uncomment this if you want to send text to your client once you finish saving.
    //.then(items => res.send("Showing GET request of deedAPI Routes in routes/api/goodDeeds.js");
});

// This function is run if a POST method from the root / endpoint
router.post('/', (req, res) => {

    // Create a new variable that will have you database's schema in JSON format
    // _id and date will automatically be created when this is created.
    const newDeed = new GoodDeedsModel({
        name: req.body.name,
        deed: req.body.deed,
        partOfTown: req.body.partOfTown,
        numPeopleInvolved: req.body.numPeopleInvolved
    });

    // Save the new JSON data in your database using the .save Mongoose method
    newDeed.save()

        // This sends the text to your client once you finish saving.
        .then(() => res.send("POST request is okay from deedAPIRoutes in routes/api/goodDeeds.js"));

        // Uncomment this if you want to send the item you saved to your client once you finish saving.
        //.then(item => res.json({item}));
});

// Use module.exports to allow router to be used in other files like server.js
module.exports = router;