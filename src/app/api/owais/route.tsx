import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const poll = await prisma.owais.create({
      data: {
        poll_name: body.poll,
        description: body.description || null,
        departments:
          typeof body.departments === "string"
            ? JSON.parse(body.departments)
            : body.departments,
        publish_type: body.Publish, // enum: NOW | SCHEDULE
        publish_date: body.publishDate ? new Date(body.publishDate) : null,
        expiry_date: body.expiryDate ? new Date(body.expiryDate) : null,
        reminder_date: body.reminderDate ? new Date(body.reminderDate) : null,
        show_on_feed_by: body.showOnFeedEmployee?.name || null,
        hide_voter: body.hideVoter ?? false,
        img_url: body.imgUrl || null,
        options:
          typeof body.options === "string"
            ? JSON.parse(body.options)
            : body.options || null,
      },
    });

    return NextResponse.json(poll, { status: 201 });
  } catch (err: any) {
    console.error("Error creating poll:", err.message || err);
    return NextResponse.json(
      { error: "Failed to create poll" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const polls = await prisma.owais.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(polls, { status: 200 });
  } catch (err: any) {
    console.error("Error fetching polls:", err.message || err);
    return NextResponse.json(
      { error: "Failed to fetch polls" },
      { status: 500 }
    );
  }
}
