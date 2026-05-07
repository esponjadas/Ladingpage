import { NextResponse } from "next/server";
import { insertWaitlistLead } from "@/lib/waitlist";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { nome?: string; email?: string };
    const result = await insertWaitlistLead({
      nome: body.nome ?? "",
      email: body.email ?? "",
    });

    if (!result.ok) {
      return NextResponse.json(result, {
        status: result.type === "duplicate" ? 409 : 400,
      });
    }

    return NextResponse.json({
      ok: true,
      queuePosition: result.queuePosition,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        type: "unknown",
        message: "Não foi possível enviar agora. Tente novamente.",
      },
      { status: 500 },
    );
  }
}
