export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
}

export type ContactSubmitResult =
  | { status: "sent" }
  | { status: "not_configured" }
  | { status: "failed"; detail?: string };

/**
 * Integration point: set VITE_CONTACT_ENDPOINT in your environment to a real
 * email/API service (e.g. a serverless function, Formspree, or your own backend)
 * to make this form functional. Until it's set, submissions are not sent anywhere —
 * the UI reflects that honestly instead of claiming a fake success.
 */
export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint) {
    return { status: "not_configured" };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return { status: "failed", detail: `Server responded with ${res.status}` };
    }
    return { status: "sent" };
  } catch (err) {
    return { status: "failed", detail: err instanceof Error ? err.message : "Network error" };
  }
}
