const express = require("express");
const {
    createProfile,
    updateProfile,
    getProfile,
    getAllProfiles,
    deleteProfile,
} = require("../controllers/profileController");
const authMiddleware = require("../authMiddleware");



const router = express.Router();

router.post("/apii/createprofile",authMiddleware, createProfile);
router.put("/apii/update", authMiddleware, updateProfile);
router.post("/apii/get", authMiddleware, getProfile);
router.get("/apii/all", getAllProfiles);
router.delete("/apii/delete/:id", deleteProfile);


module.exports = router;
