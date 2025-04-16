
// // const ServiceModel = require("../model/Servicemodel")

// // const Servicecontroller=async(req,res)=>{
// //     try {
// //         const category=await ServiceModel.find()
// // res.json(category)
        
// //     } catch (error) {
// //         res.status(500).json({message:"error",error})
        
// //     }
     



// // }
// // //add category
// // const categorycontroller=async(req,res)=>{
// //     try {
// //         const {name,image}=req.body;
// //         if(!name|| !image){
// //             return res.status(400).json({message:"All fields are required"})
// //         }
// //         const newcategory=new ServiceModel({name,image})
// // await newcategory.save();
// // res.status(201).json({message:"category successfdully added"})        
// //     } catch (error) {
// // console.error("errror in category ",error.message)
// // res.status(500).json({message:"error creating"})        
// //     }
// // }

// // //add subcategory

// // const subcategory=async(req,res)=>{
// //     const{categoryId,name,image,description}=req.body
// //     console.log(req.body);
// //     try {
// //         const category=await ServiceModel.findById(categoryId)
// //         category.subcategories.push({name,image,description})
// //         await category.save()
// //         res.status(201).json({ message: "Subcategory added!" });

// //     } catch (error) {
// //         res.status(500).json({ error: "Something went wrong" });

        
// //     }
// // }

// // //add subsmallcategory

// // const smallcategorycontroller = async (req, res) => {
// //     try {
// //         const { subcategoryId, name, image, description,price} = req.body;

// //         if (!subcategoryId || !name || !image || !description || !price) {
// //             return res.status(400).json({ message: "All fields are required" });
// //         }

// //         const category = await ServiceModel.findOne({ "subcategories._id": subcategoryId });


// //         // Find the subcategory and push new small category
// //         const subcategory = category.subcategories.id(subcategoryId);
// //         subcategory.smallcategories.push({ name, image, description,price });

// //         await category.save();
// //         res.status(201).json({ message: "Small category successfully added!" });

// //     } catch (error) {
// //         console.error("Error in adding small category: ", error.message);
// //         res.status(500).json({ message: "Error creating small category" });
// //     }
// // };





// // //get subcategories

// // const getSubcategories = async (req, res) => {
// //     try {
// //         const { categoryId } = req.params; 
// //         if (!categoryId) {
// //             return res.status(400).json({ message: "Category ID is required" });
// //         }

// //         const category = await ServiceModel.findById(categoryId);
// //         if (!category) {
// //             return res.status(404).json({ message: "Category not found" });
// //         }

// //         res.status(200).json(category.subcategories); // Sirf selected category ki subcategories bhej rahe hain
// //     } catch (error) {
// //         res.status(500).json({ message: "Error fetching subcategories", error });
// //     }
// // };








// // // const viewcategory = async (req, res) => {
// // //     try {
// // //         const { id } = req.params;  
// // //         console.log("Requested ID:", id); // ✅ Debugging ke liye

// // //         const category = await ServiceModel.findOne({_id : id});
// // //         console.log(category)
// // //         if (!category) {
// // //             return res.status(404).json({ message: "Category not found" });
// // //         }

// // //         res.status(200).json(category);
// // //     } catch (error) {
// // //         console.error("Error fetching category:", error);
// // //         res.status(500).json({ message: "Error retrieving category", error: error.message });
// // //     }
// // // };








// // const deletecontroller = async (req, res) => {
// //     try {
// //         const { id } = req.params
// //         await ServiceModel.findByIdAndDelete(id);
// //         res.status(200).json({ message: "Category deleted successfully" });
// //     } catch (error) {
// //         res.status(500).json({ error: "Something went wrong" });
// //     }
// // };


// // module.exports={Servicecontroller,categorycontroller,subcategory,deletecontroller,smallcategorycontroller,getSubcategories};











// const CategoryModel=require("../model/Servicemodel")
// const category = async (req, res) => {
//     try {
//         const categories = await CategoryModel.find();
//         console.log("API Response:", JSON.stringify(categories, null, 2)); // ✅ Debugging

//         res.json(categories);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// const insertcategory = async (req, res) => {
//     try {
//         const { categoryname, categoryimage } = req.body;
//         if (!categoryname || !categoryimage) {
//             return res.status(400).json({ message: "All fields are required" });
//         }
  
//         const newcategory = new CategoryModel({ categoryname, categoryimage });
//         await newcategory.save();
//         res.status(201).json({ message: "Category added successfully!", newcategory });
//     } catch (error) {
//         console.error("Error creating category:", error);
//         res.status(500).json({ message: error.message || "Error creating category" });
//     }
//   };
  
//   const deletecategory=async(req,res)=>{
//     try{
//       await CategoryModel.deleteOne({_id:req.body.categoryid})
//       res.status(200).json({message:"ok"})
//     }
//     catch(err){
//       res.status(500).json({message:"error"})
//       console.log(err);
//     }
//   }
  

//   const insertsubcategory = async (req, res) => {
//     try {
//         const { categoryname, subcategoryname, subcategoryimage, content } = req.body;
        
//         console.log("Received Data:", req.body); // 🟢 Data console me print karein
        
//         // Category find karo
//         const category = await CategoryModel.findOne({ categoryname });

//         if (!category) {
//             console.log("❌ Category not found:", categoryname);
//             return res.status(404).json({ message: "Category not found" });
//         }

//         console.log("✅ Found Category:", category.categoryname);

//         // Nayi subcategory add karo
//         const newSubcategory = {
//             subcategoryname,
//             subcategoryimage,
//             content,
//         };
        
//         console.log("🟢 Adding Subcategory:", newSubcategory);

//         category.subcategories.push(newSubcategory);

//         // Save karo
//         await category.save();

//         console.log("✅ Sub-category added successfully!");

//         res.status(201).json({ message: "Sub-category added successfully!", category });
//     } catch (error) {
//         console.error("❌ Error adding sub-category:", error);
//         res.status(500).json({ error: "Error adding sub-category" });
//     }
// };


//   const deleteSubCategory = async (req, res) => {
//     try {
//       const { categoryid, subcategoryid } = req.body;
  
//       if (!categoryid || !subcategoryid) {
//         return res.status(400).json({ message: "Category ID and Sub-category ID are required" });
//       }
  
//      const category = await CategoryModel.findById(categoryid);
  
//       if (!category) {
//         return res.status(404).json({ message: "Category not found" });
//       }
  
//       // सब-कैटेगरी को हटाएँ
// category.subcategories=category.subcategories.filter(sub=>sub._id.toString() !==subcategoryid)
//       await category.save();
  
//       console.log(`Sub-category deleted: ${subcategoryid} from category ${categoryid}`);
//       res.status(200).json({ message: "Sub-category deleted successfully" });
//     } catch (err) {
//       console.error("Error while deleting sub-category:", err);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   };
  
  
//   const getSubcategories = async (req, res) => {
//     try {
//       const { categoryname } = req.params;
//       const category = await CategoryModel.findOne({ categoryname });
  
//       if (!category) {
//         return res.status(404).json({ message: "Category not found" });
//       }
  
//       res.json(category.subcategories); // ✅ Sirf subcategories bhej rahe hain
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching subcategories", error });
//     }
//   };




//   const getSubsmallcategories = async (req, res) => {
//     try {
//         const { categoryname, subcategoryname } = req.params; 
        
//         console.log(req.params);
//         if (!categoryname || !subcategoryname) {
//             return res.status(400).json({ message: "Categoryname and Subcategoryname are required" });
//         }

//         const category = await CategoryModel.findOne({ categoryname });
//         console.log(category);

//         if (!category) {
//             return res.status(404).json({ message: "Category not found" });
//         }

//         const subcategory = category.subcategories.find(
//             (sub) => sub.subcategoryname === subcategoryname
//         );

//         if (!subcategory || !subcategory.smallsubcategories) {
//             return res.status(404).json({ message: "Small Subcategories not found" });
//         }

//         res.json(subcategory.smallsubcategories);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching small subcategories", error });
//     }
// };
  
//   const insertsmallsubcategory=async(req,res)=>{
//     try {
//       const { categoryname, subcategoryname,smallsubcategoryname,
//          smallsubcategoryimage, smallsubcategorycontent,price } = req.body;
  
//       const category = await CategoryModel.findOne({ categoryname });
  
//       if (!category) {
//         return res.status(404).json({ message: "Category not found" });
//       }
//       const subcategory = category.subcategories.find(
//         (sub) => sub.subcategoryname === subcategoryname
//       );
  
//       if (!subcategory) {
//         return res.status(404).json({ message: "Subcategory not found" });
//       }
  
//       // ✅ Small subcategory push 
//       subcategory.smallsubcategories.push({
//         smallsubcategoryname,
//         smallsubcategoryimage,
//         smallsubcategorycontent,
//         price,
//       });
  
//       // ✅ Save the category with updated subcategory
//       await category.save();
  
//       res.status(201).json({ message: "Small sub-category added successfully!" });
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ error: "Error adding small sub-category" });
//     }
//   };



//   const deleteSmallSubCategory = async (req, res) => {
//     try {
//       const { categoryid, subcategoryid, smallsubcategoryid } = req.body;
  
//       if (!categoryid || !subcategoryid || !smallsubcategoryid) {
//         return res.status(400).json({ message: "Category ID, Sub-category ID, Small-Sub-category ID are required" });
//       }
  
//       // ✅ कैटेगरी खोजें
//       const category = await CategoryModel.findById(categoryid);
//       if (!category) {
//         return res.status(404).json({ message: "Category not found" });
//       }
  
//       // ✅ सबकैटेगरी खोजें
//       category.subcategories.find(sub => sub._id.toString() === subcategoryid);
//       if (!subcategory) {
//         return res.status(404).json({ message: "Sub-category not found" });
//       }
  
//       // ✅ छोटे सबकैटेगरी को फ़िल्टर करके हटाएँ
//       subcategory.smallsubcategories = subcategory.smallsubcategories.filter(
//         smallsub => smallsub._id.toString() !== smallsubcategoryid
//       );
  
//       await category.save(); // ✅ अपडेट को सेव करें
  
//       res.status(200).json({ message: "Small sub-category deleted successfully" });
//     } catch (err) {
//       console.error("Error:", err);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   };
  
  
// //with id

// const viewcategory = async (req, res) => {
//   try {
//       const { id } = req.body;
//       const category = await CategoryModel.findById(id);

//       if (!category) return res.status(404).json({ message: "Category not found" });

//       res.status(200).json(category);
//   } catch (error) {
//       console.error("Error fetching category:", error.message);
//       res.status(500).json({ message: "Error fetching category" });
//   }
// };

// const updatecategory=async(req,res)=>{
//     try {
//         const updatecategory=await CategoryModel.updateOne({_id:req.body.id},req.body)
//         res.status(200).json({message:"ok",updatecategory})
        
//     } catch (error) {
//         res.status(500).json({message:"errro in updating"})
        
//     }
// }

// const viewsubcategory = async (req, res) => {
//   try {
//       const { CategoryId,SubcategoryId} = req.body;
//       console.log(req.body);
//       const category = await CategoryModel.findOne({_id:CategoryId});
//       console.log(category);
//       const subcategory = category.subcategories.find(sub => sub._id.toString() === SubcategoryId);

//       if (!subcategory) return res.status(404).json({ message: "Category not found" });

//       res.status(200).json(subcategory);
//   } catch (error) {
//       console.error("Error fetching subcategory:", error.message);
//       res.status(500).json({ message: "Error fetching subcategory" });
//   }
// };
 

// const updatesubcategory = async (req, res) => {
//   try {
//     const { categoryId, subcategoryId, subcategoryname, subcategoryimage, content } = req.body;

//     // Category dhoondo
//     const category = await CategoryModel.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     // Subcategory find karke update karo
//     const subcategory = category.subcategories.id(subcategoryId);
//     if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });

//     subcategory.subcategoryname = subcategoryname;
//     subcategory.subcategoryimage = subcategoryimage;
//     subcategory.content = content;

//     await category.save();

//     res.status(200).json({ message: "Subcategory updated successfully", subcategory });

//   } catch (error) {
//     res.status(500).json({ message: "Error updating subcategory" });
//   }
// };



// const viewsubsmallcategory = async (req, res) => {
//   try {
//     const { CategoryId, SubcategoryId, SmallsubcategoryId } = req.body;
//     console.log(req.body);

//     // ✅ Category find karo
//     const category = await CategoryModel.findOne({ _id: CategoryId });
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     console.log(category);

//     // ✅ Subcategory find karo
//     const subcategory = category.subcategories.find(sub => sub._id.toString() === SubcategoryId);
//     if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });

//     // ✅ Small Subcategory find karo (subcategory ke andar)
//     const smallsubcategory = subcategory.smallsubcategories.find(small => small._id.toString() === SmallsubcategoryId);
//     if (!smallsubcategory) return res.status(404).json({ message: "Small Subcategory not found" });

//     // ✅ Response bhejo
//     res.status(200).json(smallsubcategory);
    
//   } catch (error) {
//     console.error("Error fetching subcategory:", error.message);
//     res.status(500).json({ message: "Error fetching subcategory" });
//   }
// };

// const updatesubsmallcategory = async (req, res) => {
//   try {
//     const { categoryId, subcategoryId, smallsubcategoryId, smallsubcategoryname, smallsubcategoryimage, smallsubcategorycontent ,price} = req.body;

//     const category = await CategoryModel.findById(categoryId);
//     if (!category) return res.status(404).json({ message: "Category not found" });

//     const subcategory = category.subcategories.id(subcategoryId);
//     if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });

//     const subsmallcategory = subcategory.smallsubcategories.id(smallsubcategoryId);
//     if (!subsmallcategory) return res.status(404).json({ message: "Small Subcategory not found" });

//     //  Small Subcategory ko update karo
//     subsmallcategory.smallsubcategoryname = smallsubcategoryname;
//     subsmallcategory.smallsubcategoryimage = smallsubcategoryimage;
//     subsmallcategory.smallsubcategorycontent = smallsubcategorycontent;
//     subsmallcategory.price = price;


//     // ✅ Save category (jo nested subdocuments ko bhi save karega)
//     await category.save();

//     res.status(200).json({ message: "Small Subcategory updated successfully", subsmallcategory });

//   } catch (error) {
//     console.error("Error updating small subcategory:", error.message);
//     res.status(500).json({ message: "Error updating small subcategory" });
//   }
// };














//   module.exports = {insertcategory,category,insertsubcategory,getSubcategories,insertsmallsubcategory,deletecategory,deleteSubCategory,
//     deleteSmallSubCategory,viewcategory,updatecategory,updatesubcategory,viewsubcategory,
//     updatesubcategory,viewsubsmallcategory,updatesubsmallcategory,getSubsmallcategories};
        







const CategoryModel = require("../model/Servicemodel");

// Get all categories
const category = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        console.log("API Response:", JSON.stringify(categories, null, 2)); // Debugging
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: error.message || "Error fetching categories" });
    }
};

// Insert a new category
const insertcategory = async (req, res) => {
    try {
        const { categoryname, categoryimage } = req.body;
        if (!categoryname || !categoryimage) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newcategory = new CategoryModel({ categoryname, categoryimage });
        await newcategory.save();
        res.status(201).json({ message: "Category added successfully!", newcategory });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: error.message || "Error creating category" });
    }
};

// Delete a category
const deletecategory = async (req, res) => {
    try {
        const { categoryid } = req.body;
        if (!categoryid) {
            return res.status(400).json({ message: "Category ID is required" });
        }

        await CategoryModel.deleteOne({ _id: categoryid });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        console.error("Error deleting category:", err);
        res.status(500).json({ message: "Error deleting category" });
    }
};

// Insert a new subcategory
const insertsubcategory = async (req, res) => {
    try {
        const { categoryname, subcategoryname, subcategoryimage, content } = req.body;

        console.log("Received Data:", req.body);

        // Find the category
        const category = await CategoryModel.findOne({ categoryname });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const newSubcategory = {
            subcategoryname,
            subcategoryimage,
            content,
        };

        category.subcategories.push(newSubcategory);
        await category.save();
        res.status(201).json({ message: "Sub-category added successfully!", category });
    } catch (error) {
        console.error("Error adding sub-category:", error);
        res.status(500).json({ message: "Error adding sub-category" });
    }
};

// Delete a subcategory
const deleteSubCategory = async (req, res) => {
    try {
        const { categoryid, subcategoryid } = req.body;
        if (!categoryid || !subcategoryid) {
            return res.status(400).json({ message: "Category ID and Sub-category ID are required" });
        }

        const category = await CategoryModel.findById(categoryid);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        category.subcategories = category.subcategories.filter(sub => sub._id.toString() !== subcategoryid);
        await category.save();
        res.status(200).json({ message: "Sub-category deleted successfully" });
    } catch (err) {
        console.error("Error while deleting sub-category:", err);
        res.status(500).json({ message: "Error deleting sub-category" });
    }
};

// Get subcategories for a specific category
const getSubcategories = async (req, res) => {
    try {
        const { categoryname } = req.params;
        const category = await CategoryModel.findOne({ categoryname });

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json(category.subcategories);
    } catch (error) {
        console.error("Error fetching subcategories:", error);
        res.status(500).json({ message: "Error fetching subcategories" });
    }
};

// Get small subcategories for a specific subcategory in a category
const getSubsmallcategories = async (req, res) => {
    try {
        const { categoryname, subcategoryname } = req.params;

        if (!categoryname || !subcategoryname) {
            return res.status(400).json({ message: "Categoryname and Subcategoryname are required" });
        }

        const category = await CategoryModel.findOne({ categoryname });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.find(
            (sub) => sub.subcategoryname === subcategoryname
        );

        if (!subcategory || !subcategory.smallsubcategories) {
            return res.status(404).json({ message: "Small Subcategories not found" });
        }

        res.json(subcategory.smallsubcategories);
    } catch (error) {
        console.error("Error fetching small subcategories:", error);
        res.status(500).json({ message: "Error fetching small subcategories" });
    }
};

// Insert a new small subcategory
const insertsmallsubcategory = async (req, res) => {
    try {
        const { categoryname, subcategoryname, smallsubcategoryname, smallsubcategoryimage, smallsubcategorycontent, price } = req.body;

        const category = await CategoryModel.findOne({ categoryname });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.find(
            (sub) => sub.subcategoryname === subcategoryname
        );
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        subcategory.smallsubcategories.push({
            smallsubcategoryname,
            smallsubcategoryimage,
            smallsubcategorycontent,
            price,
        });

        await category.save();
        res.status(201).json({ message: "Small sub-category added successfully!" });
    } catch (error) {
        console.error("Error adding small sub-category:", error);
        res.status(500).json({ message: "Error adding small sub-category" });
    }
};

// Delete a small subcategory
const deleteSmallSubCategory = async (req, res) => {
    try {
        const { categoryid, subcategoryid, smallsubcategoryid } = req.body;

        if (!categoryid || !subcategoryid || !smallsubcategoryid) {
            return res.status(400).json({ message: "Category ID, Sub-category ID, Small Sub-category ID are required" });
        }

        const category = await CategoryModel.findById(categoryid);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.find(
            (sub) => sub._id.toString() === subcategoryid
        );
        if (!subcategory) {
            return res.status(404).json({ message: "Sub-category not found" });
        }

        subcategory.smallsubcategories = subcategory.smallsubcategories.filter(
            (smallsub) => smallsub._id.toString() !== smallsubcategoryid
        );

        await category.save();
        res.status(200).json({ message: "Small sub-category deleted successfully" });
    } catch (err) {
        console.error("Error deleting small sub-category:", err);
        res.status(500).json({ message: "Error deleting small sub-category" });
    }
};

// View category by ID
const viewcategory = async (req, res) => {
    try {
        const { id } = req.body;
        const category = await CategoryModel.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error("Error fetching category:", error.message);
        res.status(500).json({ message: "Error fetching category" });
    }
};

// Update category
const updatecategory = async (req, res) => {
    try {
        const updatecategory = await CategoryModel.updateOne({ _id: req.body.id }, req.body);
        if (updatecategory.nModified === 0) {
            return res.status(400).json({ message: "Category not updated" });
        }
        res.status(200).json({ message: "Category updated successfully", updatecategory });
    } catch (error) {
        console.error("Error updating category:", error.message);
        res.status(500).json({ message: "Error updating category" });
    }
};

// View subcategory
const viewsubcategory = async (req, res) => {
    try {
        const { CategoryId, SubcategoryId } = req.body;
        const category = await CategoryModel.findOne({ _id: CategoryId });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.find(sub => sub._id.toString() === SubcategoryId);
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        res.status(200).json(subcategory);
    } catch (error) {
        console.error("Error fetching subcategory:", error.message);
        res.status(500).json({ message: "Error fetching subcategory" });
    }
};

// Update subcategory
const updatesubcategory = async (req, res) => {
    try {
        const { categoryId, subcategoryId, subcategoryname, subcategoryimage, content } = req.body;
        const category = await CategoryModel.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.id(subcategoryId);
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        subcategory.subcategoryname = subcategoryname;
        subcategory.subcategoryimage = subcategoryimage;
        subcategory.content = content;

        await category.save();
        res.status(200).json({ message: "Subcategory updated successfully", subcategory });
    } catch (error) {
        console.error("Error updating subcategory:", error.message);
        res.status(500).json({ message: "Error updating subcategory" });
    }
};

// View small subcategory
const viewsubsmallcategory = async (req, res) => {
    try {
        const { CategoryId, SubcategoryId, SmallsubcategoryId } = req.body;
        const category = await CategoryModel.findOne({ _id: CategoryId });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.find(sub => sub._id.toString() === SubcategoryId);
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        const smallsubcategory = subcategory.smallsubcategories.find(
            small => small._id.toString() === SmallsubcategoryId
        );
        if (!smallsubcategory) {
            return res.status(404).json({ message: "Small Subcategory not found" });
        }

        res.status(200).json(smallsubcategory);
    } catch (error) {
        console.error("Error fetching small subcategory:", error.message);
        res.status(500).json({ message: "Error fetching small subcategory" });
    }
};

// Update small subcategory
const updatesubsmallcategory = async (req, res) => {
    try {
        const { categoryId, subcategoryId, smallsubcategoryId, smallsubcategoryname, smallsubcategoryimage, smallsubcategorycontent, price } = req.body;

        const category = await CategoryModel.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const subcategory = category.subcategories.id(subcategoryId);
        if (!subcategory) {
            return res.status(404).json({ message: "Subcategory not found" });
        }

        const subsmallcategory = subcategory.smallsubcategories.id(smallsubcategoryId);
        if (!subsmallcategory) {
            return res.status(404).json({ message: "Small Subcategory not found" });
        }

        subsmallcategory.smallsubcategoryname = smallsubcategoryname;
        subsmallcategory.smallsubcategoryimage = smallsubcategoryimage;
        subsmallcategory.smallsubcategorycontent = smallsubcategorycontent;
        subsmallcategory.price = price;

        await category.save();
        res.status(200).json({ message: "Small Subcategory updated successfully", subsmallcategory });
    } catch (error) {
        console.error("Error updating small subcategory:", error.message);
        res.status(500).json({ message: "Error updating small subcategory" });
    }
};

module.exports = {
    insertcategory,
    category,
    insertsubcategory,
    getSubcategories,
    insertsmallsubcategory,
    deletecategory,
    deleteSubCategory,
    deleteSmallSubCategory,
    viewcategory,
    updatecategory,
    updatesubcategory,
    viewsubcategory,
    updatesubcategory,
    viewsubsmallcategory,
    updatesubsmallcategory,
    getSubsmallcategories
};
