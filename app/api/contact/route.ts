import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const subjectLabels: Record<string, string> = {
  'new-project': 'New project',
  'product-enquiry': 'Product enquiry',
  'partnership': 'Partnership',
  'other': 'Other',
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { name, email, company, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const subjectLabel = subjectLabels[subject] ?? subject

    const { error } = await resend.emails.send({
      from: 'Aquleo Website <hello@aquleo.in>',
      to: 'hello@aquleo.in',
      replyTo: email,
      subject: `[Website Enquiry] ${subjectLabel} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Arial, sans-serif; color: #1a1a1a; margin: 0; padding: 0; background: #f4f4f4; }
              .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
              .header { background: #042C53; padding: 24px 32px; }
              .header h1 { color: #ffffff; font-size: 18px; margin: 0; font-weight: 700; letter-spacing: 0.5px; }
              .header p { color: #B5D4F4; font-size: 13px; margin: 4px 0 0; }
              .body { padding: 28px 32px; }
              .field { margin-bottom: 20px; }
              .field label { display: block; font-size: 11px; font-weight: 700; color: #888780; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px; }
              .field p { font-size: 15px; color: #042C53; margin: 0; line-height: 1.5; }
              .message-box { background: #E6F1FB; border-left: 3px solid #185FA5; border-radius: 4px; padding: 14px 16px; }
              .message-box p { font-size: 14px; color: #042C53; margin: 0; line-height: 1.7; white-space: pre-wrap; }
              .divider { border: none; border-top: 1px solid #e5e7eb; margin: 8px 0 20px; }
              .footer { background: #F1EFE8; padding: 16px 32px; text-align: center; }
              .footer p { font-size: 12px; color: #888780; margin: 0; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <h1>New Website Enquiry</h1>
                <p>${subjectLabel}</p>
              </div>
              <div class="body">
                <div class="field">
                  <label>Name</label>
                  <p>${name}</p>
                </div>
                <hr class="divider" />
                <div class="field">
                  <label>Email</label>
                  <p><a href="mailto:${email}" style="color:#185FA5;">${email}</a></p>
                </div>
                <hr class="divider" />
                <div class="field">
                  <label>Company</label>
                  <p>${company?.trim() || 'Not provided'}</p>
                </div>
                <hr class="divider" />
                <div class="field">
                  <label>Subject</label>
                  <p>${subjectLabel}</p>
                </div>
                <hr class="divider" />
                <div class="field">
                  <label>Message</label>
                  <div class="message-box">
                    <p>${message.replace(/\n/g, '<br />')}</p>
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>Sent from the contact form at <strong>aquleo.in</strong></p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
