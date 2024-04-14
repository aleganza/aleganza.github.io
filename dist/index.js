"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var video_1 = __importDefault(require("./routes/video"));
var app = (0, express_1.default)();
app.use("/static", express_1.default.static("src/public"), express_1.default.static("src/media"), express_1.default.static("dist/public"));
app.use(video_1.default);
app.get("/", function (req, res) {
    res.sendFile(path_1.default.resolve("src/public/home/index.html"));
});
app.get("/course", function (req, res) {
    res.sendFile(path_1.default.resolve("src/public/course/index.html"));
});
app.listen(process.env.PORT || 8080, function () {
    console.log("Server running on port " + process.env.PORT || 8080);
});
