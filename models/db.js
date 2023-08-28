var mongoose = require("mongoose");
var DATABASE_URL="mongodb+srv://shubham:shubham@cluster0.iolos.mongdb.net/staging?retryWrites=true&w=majority"
const dbLink = process.env.DATABASE_URL;
try {
    mongoose.connect(dbLink, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {
        if (err) {
            console.log('Some problem with the connection ' + err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    });
} catch (error) {
    console.log(error);
}
