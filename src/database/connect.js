const mongoose = require("mongoose");

module.exports = url => {
    mongoose.connect(url, {
        autoIndex: false,
    }).then(async () => {
        console.log("MongoDB Models Başlatıldı.");
    }).catch(async (err) => {
        console.error(err);
    });
};