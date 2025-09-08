import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) {
            throw new Error("File path is required");
        }
        const result = await cloudinary.uploader.upload(localfilePath, {
            resource_type: 'auto'
        });
        return result;
    } catch (error) {
        fs.unlinkSync(localfilePath); // Delete the local file in case of error
        throw error;
    }
};

export { uploadOnCloudinary };