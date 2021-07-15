const express = require("express");

const {
    getReportPost,
    deleteReportPost
} = require("../controllers/admin");

const adminRouter = express.Router();

adminRouter.get("/admin", getReportPost);
adminRouter.delete("/admin/:id", deleteReportPost);

module.exports = adminRouter;
