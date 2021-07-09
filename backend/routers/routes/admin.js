const express = require("express");

const{
    getReportingPost,
    deleteReportingPost
}=require("../controllers/admin")

const adminRouter = express.Router();

adminRouter.get("/admin", getReportingPost);
adminRouter.delete("/admin/:id", deleteReportingPost);

module.exports = adminRouter;
