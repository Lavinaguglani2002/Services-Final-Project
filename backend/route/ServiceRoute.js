
const express = require("express");
const {category,insertcategory,insertsubcategory, getSubcategories, insertsmallsubcategory, 
    deletecategory, deleteSubCategory, deleteSmallSubCategory, viewcategory, updatecategory, 
     viewsubcategory, updatesubcategory,
     viewsubsmallcategory,
     updatesubsmallcategory,
     getSubsmallcategories} = require("../controllers/servicecontroller");
const {placeorder, getOrdersByEmail, getAllOrders, updateOrder, getUserOrder} = require("../controllers/OrderController");
const { getUserCount } = require("../controllers/UserCountController");

const router = express.Router();

router.get("/categories", category);
router.post("/addcategory", insertcategory);    
router.post("/insertsubcategory", insertsubcategory);
router.post("/insertsmallsubcategory", insertsmallsubcategory);
router.get("/subcategories/:categoryname", getSubcategories);

router.post("/deletecategory", deletecategory);
router.post("/deletesubcategory", deleteSubCategory);

router.post("/deletesmallsubcategory", deleteSmallSubCategory); 

router.post("/view", viewcategory);
router.post("/viewsubcategory",viewsubcategory);
router.post("/viewsubsmallcategory",viewsubsmallcategory);

router.get("/getsubsmallcategory/:categoryname/:subcategoryname", getSubsmallcategories);


router.post("/updatecategory",updatecategory)
router.post("/updatesubcategory",updatesubcategory)

router.post("/updatesubsmallcategory",updatesubsmallcategory)
router.post("/orders",placeorder)
router.get("/getorders",getAllOrders)
router.put("/updateorder/:id",updateOrder)
router.get("/ordersbyemail/:email",getOrdersByEmail);
router.get("/getuserorders/:id",getUserOrder)
router.get("/count-users",getUserCount)

module.exports = router;


