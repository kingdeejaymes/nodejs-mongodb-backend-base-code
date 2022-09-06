const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for FBCreds
const FBCredsSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true, versionKey: false }
);

// Create model for FBCreds
const FBCreds = mongoose.model('fbcredentials', FBCredsSchema);
module.exports = FBCreds;