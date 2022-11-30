import { NotFoundError } from "../notFoundError"

export class ErrorFactory{
/**
 * @param description
 * @param previusException
 * @returns NotFoundError
 */
public static getNotFoundError(description:string, previusException:Error=null): NotFoundError {
return new NotFoundError(description,previusException);
}
}
