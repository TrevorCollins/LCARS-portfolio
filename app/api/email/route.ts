import { contactSchema } from '@/app/_lib/types';
import { Resend } from 'resend';
import { ContactTemplate } from '@/app/_components/emails/contact-template';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const { name, email, message, company } = contactSchema.parse(await req.formData());
	console.log({ name, email, message, company });
	try {
		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delivered@resend.dev'],
			subject: 'Hello world',
			react: ContactTemplate({ name }) as React.ReactElement,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		console.error('Error:', error);
		return Response.json({ error }, { status: 500 });
	}
}
