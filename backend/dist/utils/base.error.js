"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    /**
     *
     * @param name string
     * @param statusCodes StatusCodes
     * @param description string
     * @param _previusException Error
     */
    constructor(name, statusCode, description, previusException) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this._name = name;
        this._statusCode = statusCode;
        this._previusException = previusException;
        Error.captureStackTrace(this);
    }
    ;
    get name() {
        return this._name;
    }
    get statusCode() {
        return this._statusCode;
    }
    get previusException() {
        return this._previusException;
    }
}
exports.BaseError = BaseError;
