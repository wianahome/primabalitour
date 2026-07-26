// lib/ai-agent.ts

export type AgentAction =
  | "generate_itinerary"
  | "generate_proposal"
  | "create_destination"
  | "create_hotel";

interface GenerateParams {
  action: AgentAction;
  prompt: string;
  payload?: Record<string, any>;
}

export async function askAiAgent({ action, prompt, payload }: GenerateParams) {
  try {
    const res = await fetch("/api/ai/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, prompt, payload }),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.error || "Gagal mendapatkan respon dari AI Agent");
    }

    return result.data;
  } catch (error: any) {
    console.error("AI Agent Call Error:", error);
    throw error;
  }
}