import mongoose from 'mongoose';
import { connect } from './connect'

connect('mongodb://localhost:27017/haypoll');


export const dropCollection = name => {
    return mongoose.connection.dropCollection(name)
        .catch(err => {
            if(err.codeName !== 'NamespaceNotFound') throw err;
        });
};
