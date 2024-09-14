import nodemailer from "nodemailer";
import { ADMIN_EMAIL, ADMIN_PASSWORD, FRONTEND_URL } from "../config/serverConfig.js";
import { asyncHandler } from "./asyncHandler.js";

const sendRegistrationMail = asyncHandler(async (email) => {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: ADMIN_EMAIL,
            pass: ADMIN_PASSWORD
        }
    });

    const userName = email.split('@')[0];
    const registrationUrl = `${FRONTEND_URL}/register`;

    const mailOptions = {
        from: ADMIN_EMAIL,
        to: email,
        subject: "Complete Your Registration",
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                <h1 style="color: #4CAF50; text-align: center;">Welcome to Our Platform</h1>
                <p style="text-align: center; font-size: 16px; color: #555;">Complete your registration to get started</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p>Dear ${userName},</p>
                <p>You have been added by your doctor. Please complete your registration by clicking the link below:</p>
                <p style="text-align: center;"><a href="${registrationUrl}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #4CAF50; text-decoration: none; border-radius: 5px;">Complete Registration</a></p>
                <p>If you did not request this, please ignore this email.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="text-align: center;">Thank you,</p>
                <p style="text-align: center;">The Team</p>
            </div>
        `
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new ApiError(500, "Failed to send registration email");
    }
});

export { sendRegistrationMail };