'use server';

import { ContactFormFields, contactSchema } from '@/app/_lib/types';
import { Resend } from 'resend';
import React from 'react';
import ContactTemplate from './_components/emails/contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(request: ContactFormFields) {
	const result = contactSchema.safeParse(request);
	console.log(result);

	if (result.success) {
		const { name, email, company, message } = result.data;
		try {
			const data = await resend.emails.send({
				from: 'Trevor Collins <contact@trevorcollins.me>',
				to: email,
				subject: 'Hello from Trevor!',
				react: ContactTemplate({ name, company }),
			});

			return { success: true, data };
		} catch (error) {
			return { success: false, error };
		}
	} else {
		return { success: false, error: result.error.format };
	}
}
