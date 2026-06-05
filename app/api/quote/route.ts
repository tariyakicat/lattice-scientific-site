import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") ?? "");
  const name = String(form.get("name") ?? "");
  const message = String(form.get("message") ?? "");

  if (!email || !name || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Quote request received. Connect email delivery here for production.",
  });
}
