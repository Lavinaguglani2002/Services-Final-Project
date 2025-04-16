// // const mongoose = require("mongoose");

// // const serviceSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     image: { type: String },
// //     description:{type:String},
// //     subcategories: [
// //         {
// //             name: { type: String, required: true },
// //             image: { type: String },
// //             description:{type:String},
// //             price:{type:String},
// //         },
// //     ],
// // }, { timestamps: true });

// // const ServiceModel = mongoose.model("Category", serviceSchema);

// // module.exports = ServiceModel;













// const mongoose = require("mongoose");

// const serviceSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     image: { type: String },
//     subcategories: [
//         {
//             name: { type: String, required: true },
//             image: { type: String },
//             description: { type: String },
//             smallcategories: [  
//                 {
//                     name: { type: String, required: true },
//                     image: { type: String },
//                     description: { type: String },
//                     price:{type:String}
//                 }
//             ]
//         },
//     ],
// }, { timestamps: true });

// const ServiceModel = mongoose.model("Category", serviceSchema);

// module.exports = ServiceModel;





const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    categoryname: { type: String, required: true },
    categoryimage: { type: String },
    createdAt:{type:Date,default:Date.now},
    subcategories: [
        {
            subcategoryname: { type: String, required: true },
            subcategoryimage: { type: String, required: true },
            content:{ type: String },
            createdAt:{type:Date,default:Date.now},
            smallsubcategories:[
                {
                    smallsubcategoryname: { type: String, required: true },
            smallsubcategoryimage: { type: String, required: true },
            smallsubcategorycontent:{ type: String },
            price:{type:String},
            createdAt:{type:Date,default:Date.now},
                }

            ]
        }
    ]
    
}, { timestamps: true });

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;

