import connect from '../utils/connect';
import mongoose from 'mongoose';

connect('mongodb://localhost:27017/haypoll');

module.exports = {
    dropCollection(name) {
        return mongoose.connection.dropCollection(name)
            .catch(err => {
                if(err.codeName !== 'NamespaceNotFound') throw err;
            });
    }
};
