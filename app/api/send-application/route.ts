import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const experience = formData.get('experience') as string;
    const message = formData.get('message') as string;
    const cv = formData.get('cv') as File;

    // CV dosyasını base64'e çevir
    const buffer = await cv.arrayBuffer();
    const base64Cv = Buffer.from(buffer).toString('base64');

    const data = await resend.emails.send({
      from: 'Gedikli Hukuk <onboarding@resend.dev>',
      to: ['zeynepnurgungor41@gmail.com'], // Gedikli İK mail adresi
      replyTo: email, // Başvuran kişinin e-posta adresi
      subject: `Yeni İş Başvurusu: ${position}`,
      html: `
        <h2>Yeni İş Başvurusu</h2>
        <p><strong>İsim:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Pozisyon:</strong> ${position}</p>
        <p><strong>Deneyim:</strong> ${experience}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
      attachments: [
        {
          filename: cv.name,
          content: base64Cv,
        },
      ],
    });

    return NextResponse.json({ message: "E-posta başarıyla gönderildi", data });
  } catch (error) {
    console.error('Başvuru gönderme hatası:', error);
    return NextResponse.json({ error: "E-posta gönderilemedi" }, { status: 500 });
  }
} 