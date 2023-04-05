import { ErrorHandler } from "@angular/core";
import { CrmError } from "./crm.error";
import { NotFound } from "./notfound.error";
import { BadInput } from "./badinput.error";

export class CrmErrorHandler implements ErrorHandler {
    handleError(error: CrmError): void {
        // console.log(error.originalError);

        if (error instanceof NotFound)
            return alert('NotFoundError')

        if (error instanceof BadInput)
            return alert('badInput')

        if (error instanceof CrmError)
            return alert('AppError')

    }

}