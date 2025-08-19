'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Sent from './Sent';
import { ContactFormFields, contactSchema } from '@/app/_lib/types';
import { sendEmail } from '@/app/_actions';

const initValues = {
	name: '',
	company: '',
	email: '',
	message: '',
};

const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<ContactFormFields>({
		defaultValues: initValues,
		resolver: zodResolver(contactSchema),
	});

	const onSubmit: SubmitHandler<ContactFormFields> = async (formData) => {
		const result = await sendEmail(formData);

		if (result.success) {
			reset();
			return;
		}

		console.error(result.error);
	};

	if (isSubmitSuccessful) return <Sent />;
	return (
		<form onSubmit={handleSubmit(onSubmit)} method="POST">
			<div className="contact__inputs">
				<div className={`contact__group ${errors.name ? 'error' : ''}`}>
					<label htmlFor="name">Name {errors.name && <span className="error-message"> - {errors.name.message}</span>}</label>
					<input {...register('name')} type="text" id="name" />
				</div>
				<div className="contact__group">
					<label htmlFor="company">Company</label>
					<input {...register('company')} type="text" id="company" />
				</div>
				<div className={`contact__group ${errors.email ? 'error' : ''}`}>
					<label htmlFor="email">Email {errors.email && <span className="error-message"> - {errors.email.message}</span>}</label>
					<input {...register('email')} type="email" id="email" />
				</div>
			</div>
			<div className="contact__area">
				<div className={`contact__group ${errors.message ? 'error' : ''}`}>
					<label htmlFor="message">Message {errors.message && <span className="error-message"> - {errors.message.message}</span>}</label>
					<textarea {...register('message')} id="message" rows={4}></textarea>
				</div>
			</div>
			<div className="contact__actions">
				<p>{errors.root && <p className="error-message">{errors.root.message}</p>}</p>
				<button disabled={isSubmitting} type="submit" className={`contact__button ${isSubmitting ? 'loading' : ''}`}>
					{isSubmitting ? 'Sending...' : 'Send'}
				</button>
			</div>
		</form>
	);
};

export default Form;
