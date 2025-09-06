import e from "express";

const asyncHandler =(requeshandler) => {
    (req, res, next) => {
        Promise.resolve(requeshandler(req, res, next)).catch((error) => next(error) );
        
    }
}
export {asyncHandler};
// an example of async handler middleware for express
//first way: cosnt asynHandler=()=>{}
// second way: const asyncHandler =(fn)=>()=> {}
// third way: cosnt asyncHandler = (fn) => async()=>{}
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(500||error.code).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//             data: null,
//             errors: error.errors || [],
//         });
//     }   
// };
// export default asyncHandler;

