//a schema that is created for the product that will represent a model of the data

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {        
        name: String,
        price: Number,
        description: String,
        rating: Number,
        supply: Number,
        category: String,   
    },
    {timestamps : true}
)

const Product = mongoose.model("Product", ProductSchema);
export default Product;