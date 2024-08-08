import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    address: {
        addressLine1: {
          type: String,
          required: true
        },
        addressLine2: {
          type: String
        },
        city: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        zipCode: {
          type: String,
          required: true
        },
        country: {
          type: String,
          required: true
        }
      },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

})