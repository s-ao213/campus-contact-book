import { NextResponse } from "next/server";
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from "@/lib/contacts";

export function GET() {
  return NextResponse.json({ contacts: getContacts() });
}

export async function POST(request: Request) {
  const body: any = await request.json();
  const contact = addContact(body);

  return NextResponse.json({ contact }, { status: 200 });
}

export async function PUT(request: Request) {
  const body: any = await request.json();
  const contact = updateContact(body.id, body);

  return NextResponse.json({ contact });
}

export async function DELETE(request: Request) {
  const body: any = await request.json();
  deleteContact(body.id);

  return NextResponse.json({ ok: true });
}
