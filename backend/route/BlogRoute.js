const express=require("express")
const {blog,getblog, viewblog, deleteBlogs, updateblog} = require("../controllers/BlogController")
const router=express.Router()
router.post("/blog",blog)
router.get("/getblog",getblog)
router.post("/viewblog/:id",viewblog)
router.post("/updateblog",updateblog)


router.delete("/deleteblog/:id",deleteBlogs)

module.exports=router;