import { NextResponse } from "next/server";

import { getPortfolioData, savePortfolioData } from "@/data/portfolio";

export const dynamic = "force-dynamic";

export async function GET() {
  const portfolio = await getPortfolioData();
  return NextResponse.json(portfolio, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const portfolio = await savePortfolioData(data);
  return NextResponse.json({ ok: true, portfolio }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const portfolio = await savePortfolioData(data);
  return NextResponse.json({ ok: true, portfolio }, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}
