import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body ?? {};

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, message: "Please complete all fields before sending your message." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks ${name}! Your message about “${subject}” has been received.`,
  });
}
