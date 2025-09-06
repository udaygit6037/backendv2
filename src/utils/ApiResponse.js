class ApiResponse {
    // success: boolean, message: string, data: any
    // cosntructor includes statusCode to indicate HTTP status
    constructor(statusCode, success, message, data = null) {
        this.statusCode = statusCode<400; 
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

export default ApiResponse;