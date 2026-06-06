import { NextResponse } from "next/server";
import { Resend } from "resend";

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(data: ContactEmailPayload) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Service", data.service],
    ["Message", data.message || "Not provided"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 12px;font-weight:600;color:#1A2B56;border-bottom:1px solid #eee;vertical-align:top;width:120px;">${label}</td>
          <td style="padding:10px 12px;color:#333;border-bottom:1px solid #eee;white-space:pre-wrap;">${value}</td>
        </tr>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;">
        <div style="background:#1A2B56;padding:24px;border-radius:8px 8px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:20px;">New Contact Form Submission</h1>
          <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:14px;">AIMS Website</p>
        </div>
        <div style="background:#fff;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px;padding:8px 0;">
          <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
        </div>
        <p style="font-size:12px;color:#999;margin-top:16px;">
          Reply directly to this email to reach ${data.name}.
        </p>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactEmailPayload;
    const { name, email, service } = body;

    if (!name?.trim() || !email?.trim() || !service?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and service are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.warn("Resend not configured. Skipping email send.");
      return NextResponse.json({ success: true, skipped: true });
    }

    const resend = new Resend(apiKey);
    const data: ContactEmailPayload = {
      name: name.trim(),
      email: email.trim(),
      phone: body.phone?.trim() ?? "",
      service: service.trim(),
      message: body.message?.trim() ?? "",
    };

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New inquiry from ${data.name} — ${data.service}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
