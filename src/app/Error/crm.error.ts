/**
 * Represents an error that occurs in the CRM system.
*/
export class CrmError {
    /**
     * @param originalError The original error that caused this error
    */
    constructor(public originalError?: any) { }
}