export interface ContactFormPayload {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormPayload, string>
>;

const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const CODE_REGEX =
  /<\/?[a-z][\s\S]*>|function\s*\(|=>|\{|\};|<\/script>/i;

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });
}

export function validateContactForm(
  data: Partial<ContactFormPayload>
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = "Veuillez entrer un prénom valide.";
  }

  if (!data.email) {
    errors.email = "L'email est obligatoire.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Veuillez entrer une adresse email valide.";
  }

  if (!data.message || data.message.trim().length < 20) {
    errors.message = "Le message doit contenir au moins 20 caractères.";
  } else if (CODE_REGEX.test(data.message)) {
    errors.message = "Le code ou HTML n'est pas autorisé dans le message.";
  }

  return errors;
}
