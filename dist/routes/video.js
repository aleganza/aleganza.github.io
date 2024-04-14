"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get("/api/video", function (req, res) {
    res.send(process.env.VIDEO_URL || "");
});
exports.default = router;
