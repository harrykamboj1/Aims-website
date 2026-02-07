import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

export interface EmailData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export async function sendContactEmail(data: EmailData) {
    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.warn("EmailJS not configured. Skipping email send.");
        // Return mock success for development
        return { success: true, response: { status: 200, text: "mock" } };
    }

    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            service: data.service,
            message: data.message,
            to_name: "AIMS Team",
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );

        return { success: true, response };
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}
