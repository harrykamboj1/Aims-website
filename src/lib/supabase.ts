import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Create a nullable supabase client - only initialize if environment variables are set
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
}

// Types for contact form submission
export interface ContactSubmission {
    id?: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    created_at?: string;
}

// Functions for database operations
export async function saveContactSubmission(
    data: Omit<ContactSubmission, "id" | "created_at">
) {
    if (!supabase) {
        console.warn("Supabase not configured. Skipping database save.");
        // Return a mock response for development
        return [{ id: "mock-id", ...data, created_at: new Date().toISOString() }];
    }

    const { data: result, error } = await supabase
        .from("contact_submissions")
        .insert([
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service,
                message: data.message,
            },
        ])
        .select();

    if (error) {
        console.error("Error saving contact submission:", error);
        throw error;
    }

    return result;
}

// Types for student reviews
export interface StudentReview {
    id?: string;
    name: string;
    email: string;
    service: "ielts" | "pte" | "french" | "celpip" | "immigration" | "general";
    rating: number;
    review: string;
    score?: string; // e.g., "Band 7.5" for IELTS, "CLB 9" for CELPIP
    approved?: boolean;
    created_at?: string;
}

// Save a new review (no approval needed - shows immediately if 5 stars)
export async function saveStudentReview(
    data: Omit<StudentReview, "id" | "created_at" | "approved">
) {
    if (!supabase) {
        console.warn("Supabase not configured. Skipping review save.");
        return [{ id: "mock-id", ...data, approved: true, created_at: new Date().toISOString() }];
    }

    const { data: result, error } = await supabase
        .from("student_reviews")
        .insert([
            {
                name: data.name,
                email: data.email,
                service: data.service,
                rating: data.rating,
                review: data.review,
                score: data.score || null,
                approved: true, // Auto-approve all reviews
            },
        ])
        .select();

    if (error) {
        console.error("Error saving review:", error);
        throw error;
    }

    return result;
}

// Fetch 5-star reviews, optionally filtered by service (ordered by latest)
export async function getApprovedReviews(service?: string) {
    if (!supabase) {
        console.warn("Supabase not configured. Returning mock reviews.");
        return getMockReviews(service);
    }

    let query = supabase
        .from("student_reviews")
        .select("*")
        .eq("rating", 5) // Only 5-star reviews
        .order("created_at", { ascending: false }); // Latest first

    if (service && service !== "all") {
        query = query.eq("service", service);
    }

    const { data, error } = await query.limit(20);

    if (error) {
        console.error("Error fetching reviews:", error);
        return getMockReviews(service);
    }

    return data || [];
}

// Mock reviews for development when Supabase is not configured
function getMockReviews(service?: string): StudentReview[] {
    const allReviews: StudentReview[] = [
        {
            id: "1",
            name: "Jaspreet Singh",
            email: "jaspreet@example.com",
            service: "ielts",
            rating: 5,
            review: "Amazing coaching! Achieved Band 8 in my first attempt. The personalized feedback really helped.",
            score: "Band 8",
            approved: true,
            created_at: new Date().toISOString(),
        },
        {
            id: "2",
            name: "Priya Sharma",
            email: "priya@example.com",
            service: "pte",
            rating: 5,
            review: "Best PTE coaching! Got 79+ in all sections. The mock tests were exactly like the real exam.",
            score: "79+",
            approved: true,
            created_at: new Date().toISOString(),
        },
        {
            id: "3",
            name: "Rahul Verma",
            email: "rahul@example.com",
            service: "french",
            rating: 5,
            review: "Cleared DELF B2 with excellent scores. The French teachers are native speakers and very supportive.",
            score: "DELF B2",
            approved: true,
            created_at: new Date().toISOString(),
        },
        {
            id: "4",
            name: "Simran Kaur",
            email: "simran@example.com",
            service: "celpip",
            rating: 5,
            review: "Achieved CLB 10 in all components! The Canadian English focus made a huge difference.",
            score: "CLB 10",
            approved: true,
            created_at: new Date().toISOString(),
        },
        {
            id: "5",
            name: "Amit Patel",
            email: "amit@example.com",
            service: "immigration",
            rating: 5,
            review: "Got my Canada PR within 6 months! The team guided me through every step of the process.",
            score: "PR Approved",
            approved: true,
            created_at: new Date().toISOString(),
        },
        {
            id: "6",
            name: "Neha Gupta",
            email: "neha@example.com",
            service: "ielts",
            rating: 5,
            review: "Improved from Band 6 to Band 7.5 in just 4 weeks! Highly recommend AIMS for IELTS prep.",
            score: "Band 7.5",
            approved: true,
            created_at: new Date().toISOString(),
        },
    ];

    if (service && service !== "all") {
        return allReviews.filter((r) => r.service === service);
    }
    return allReviews;
}

export { supabase };
