const {StatusCodes} = require('http-status-codes')
const CustomAPIError = require('./custom-error')

class NotFoundError extends CustomAPIError {
    constructor(message){
        super(message);
        this.statuscode = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError