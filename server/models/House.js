import mongoose from "mongoose";
const Schema = mongoose.Schema; 


const House = new Schema(
    {
        price: { type: Number, required: true},
        bedrooms: { type : Number, required: true},
        bathrooms: { type: Number, required: true},
        levels: { type: Number, required: true},
        year: { type: Number, required: true},
        description: { type: String, required: true, minLength: 3},
        imgUrl: {type: String, required: true, default: '//placehold.it/200X200'}
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default House;