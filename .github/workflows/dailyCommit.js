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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var simple_git_1 = require("simple-git");
// Configuración
var REPO_PATH = path.resolve(); // Ruta actual
var FILE_NAME = 'daily_commit.txt';
var BRANCH = 'main'; // Cambia si usas otra rama
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var git, filePath, date, commitMessage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                git = (0, simple_git_1.simpleGit)(REPO_PATH);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                // Navegar a la rama correcta
                return [4 /*yield*/, git.checkout(BRANCH)];
            case 2:
                // Navegar a la rama correcta
                _a.sent();
                filePath = path.join(REPO_PATH, FILE_NAME);
                date = new Date().toLocaleString();
                fs.appendFileSync(filePath, "Contribuci\u00F3n diaria: ".concat(date, "\n"));
                // Añadir los cambios al índice
                return [4 /*yield*/, git.add(FILE_NAME)];
            case 3:
                // Añadir los cambios al índice
                _a.sent();
                commitMessage = "Contribuci\u00F3n diaria - ".concat(date);
                return [4 /*yield*/, git.commit(commitMessage)];
            case 4:
                _a.sent();
                // Empujar los cambios al repositorio remoto
                return [4 /*yield*/, git.push('origin', BRANCH)];
            case 5:
                // Empujar los cambios al repositorio remoto
                _a.sent();
                console.log('Contribución diaria realizada con éxito.');
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.error('Error al realizar la contribución diaria:', error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); })();
