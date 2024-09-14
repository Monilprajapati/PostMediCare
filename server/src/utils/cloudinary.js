import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config/serverConfig.js';
import { ApiError } from './ApiError.js';
import fs from 'fs';

cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new ApiError(400, 'file path is required');
        }
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });
        console.log('Image uploaded to cloudinary', result.secure_url);
        
        // Delete the local file after successful upload
        if(result.secure_url){
            fs.unlinkSync(localFilePath);
        }
        
        return result;
    } catch (error) {
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        throw error;
    }
}

export { uploadOnCloudinary };
