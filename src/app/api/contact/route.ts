import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL;

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !toEmail) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY or CONTACT_TO_EMAIL" },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  await resend.emails.send({
    from: "Portfolio <hello@hurairahmateen.com>",
    to: [toEmail],
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}
