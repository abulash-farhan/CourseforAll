import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import * as fs from 'fs';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY , 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});
// save the credentials in env

const uploadonCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath){
            return null;
        }
        // upload file on cloudinary
        //corrected
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
            }
        )

        // file uploaded succesfully
        console.log("File uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath);  // removing from local file
        return response;
    } catch (error) {
        // remove the locally saved temp file from server as upload failed
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export {uploadonCloudinary}











// // Upload an image
//    const uploadResult = await cloudinary.uploader
//    .upload(
//        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//            public_id: 'shoes',
//        }
//    )
//    .catch((error) => {
//        console.log(error);
//    });

// console.log(uploadResult);