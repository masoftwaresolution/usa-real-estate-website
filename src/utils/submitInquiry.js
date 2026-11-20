/**
 * DEMO submission handler — nothing is actually emailed.
 * To send real inquiries, replace the body with a call to an email service
 * or backend (EmailJS, Formspree, or your own serverless function).
 * Throw an Error on failure so the form shows its error message.
 */
export async function submitInquiry(payload) {
  await new Promise((resolve) => setTimeout(resolve, 1100))
  console.info('[Demo] Inquiry captured (not sent):', payload)
  return { ok: true }
}
