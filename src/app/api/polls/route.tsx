import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET /api/polls
 * Fetch all polls (latest first)
 */
export async function GET() {
  try {
    const polls = await prisma.poll.findMany({
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

/**
 * POST /api/polls
 * Create a new poll
 */
