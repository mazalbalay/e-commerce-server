const express = require("express");
const router = express.Router();
const Bll = require("../BLLS/departmentBLL");

// https://e-commerce-server-3zp6.onrender.com/department



router.get("/department", Bll.getAllDepartments);
router.get("/department/:id", Bll.getDepartment);
router.post("/department", Bll.createDepartment);
router.put("/department/:id", Bll.updatedDepartment);
router.delete("/department/:id", Bll.deleteDepartment);

module.exports = router;