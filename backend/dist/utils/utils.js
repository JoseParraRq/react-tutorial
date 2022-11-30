"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const http_status_codes_1 = require("http-status-codes");
class Utils {
    static response(res, statusCode = http_status_codes_1.StatusCodes.OK, message = http_status_codes_1.ReasonPhrases.OK, data = []) {
        let responseData = {
            code: statusCode,
            message,
            data
        };
        res.status(statusCode).json(responseData);
    }
}
exports.Utils = Utils;
