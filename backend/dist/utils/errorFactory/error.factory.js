"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFactory = void 0;
const notFoundError_1 = require("../notFoundError");
class ErrorFactory {
    /**
     * @param description
     * @param previusException
     * @returns NotFoundError
     */
    static getNotFoundError(description, previusException = null) {
        return new notFoundError_1.NotFoundError(description, previusException);
    }
}
exports.ErrorFactory = ErrorFactory;
