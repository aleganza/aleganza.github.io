var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
fetch("https://api.github.com/users/aleganza/repos").then(function (res) { return __awaiter(_this, void 0, void 0, function () {
    var repositories, size, suffix;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, res.json()];
            case 1:
                repositories = _a.sent();
                // Find number of repositories
                $(".statistic-repositories").html(repositories.length.toString());
                size = repositories
                    .map(function (repository) { return repository.size; })
                    .reduce(function (prev, curr) { return prev + curr; });
                suffix = "";
                if (size >= 1000000) {
                    size /= 1000000;
                    suffix = " MB";
                }
                else if (size >= 1000) {
                    size /= 1000;
                    suffix = " KB";
                }
                $(".statistic-code-size").html(size.toFixed(1) + suffix);
                return [2 /*return*/];
        }
    });
}); }).catch(function () {
    $(".statistic-repositories").html("Some");
    $(".statistic-code-size").html("Lots");
});
// Calculate my age because I'm lazy
var now = new Date();
var elapsedYears = now.getFullYear() - 2003;
if (now.getMonth() < 4 || (now.getMonth() == 4 && now.getDate() < 13)) {
    elapsedYears--;
}
$(".age").html(elapsedYears.toString());
