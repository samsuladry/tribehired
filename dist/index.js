"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 5000;
    const corsOptions = { credentials: true, origin: process.env.URL || '*' };
    app.use((0, cors_1.default)(corsOptions));
    // app.use(json());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json({ limit: '2mb' }));
    app.use(express_1.default.urlencoded({ limit: '2mb' }));
    app.get('/', (req, res) => {
        res.status(200).json("Hello from main");
    });
    app.listen(PORT, () => {
        console.log(`Server is listening on port:${PORT}`);
    });
});
main().catch((err) => {
    console.log(err);
});
