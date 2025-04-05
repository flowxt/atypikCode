import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialisation de Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Récupération des données du formulaire
    const { name, email, subject, message } = await request.json();

    // Vérification des données requises
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Envoi de l'email avec Resend
    const data = await resend.emails.send({
      from: "Formulaire de contact <onboarding@resend.dev>", // Domaine par défaut de Resend
      to: ["floriandev74@gmail.com"], // Votre adresse email pour recevoir les messages
      subject: `Nouveau message: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
      // Envoi d'une copie à l'expéditeur
      reply_to: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
