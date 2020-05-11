const express = require('express');
const router = express.Router();
const { User } = require("../model/user");


router.get('/users', (req, res)=>{

    const users  = await User.find({

    });

    res.json(users)

    // User.find((
    //     (err, doc) => {
    //
    //         let age = doc.age;
    //         if (err) return res.status(400).send(err);
    //         return res.status(200).json({ doc , age })
    //     }) )
});

module.exports = router;
