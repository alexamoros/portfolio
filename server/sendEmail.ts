"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Correo electrónico inválido",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Mensaje inválido",
    };
  }

  try {
    await resend.emails.send({
      from: "Contacto <onboarding@resend.dev>",
      to: "alejandroemail1@gmail.com",
      subject: "Mensaje Portfolio",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
