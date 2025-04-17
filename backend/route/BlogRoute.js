const express=require("express")
const {blog,getblog, viewblog, deleteBlogs, updateblog} = require("../controllers/BlogController")
const router=express.Router()
router.post("/api/blog",blog)
router.get("/api/getblog",getblog)
router.post("/api/viewblog/:id",viewblog)
router.post("/api/updateblog",updateblog)


router.delete("/api/deleteblog/:id",deleteBlogs)

module.exports=router;