"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const http_status_codes_1 = require("http-status-codes");
const base_error_1 = require("./base.error");
class NotFoundError extends base_error_1.BaseError {
    constructor(name, previusException = null) {
        super(name, http_status_codes_1.StatusCodes.BAD_REQUEST, http_status_codes_1.ReasonPhrases.BAD_REQUEST, previusException);
    }
}
exports.NotFoundError = NotFoundError;
