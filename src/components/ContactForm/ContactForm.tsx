'use client';

import React from 'react';
import styles from './ContactForm.module.scss';
import { ContactFormData, useContactForm } from '@/hooks/useContactForm';
import icon_envelope from '../../assets/icons/btn_envelope.svg';

export const ContactForm = ({ className }: {className?: string;}) => {
	const onSubmit = (data: ContactFormData) => {
		console.log('Dane formularza:', data);
		// Tutaj możesz wysłać dane do API Next.js, np. za pomocą fetch
	};

	const { register, submitHandler, errors } = useContactForm(onSubmit);

	return (
		<form onSubmit={submitHandler} className={`${styles.form} ${className}`}>
			<div className={styles.formGroup}>
				<label htmlFor='name' className={`${styles.label} ${styles.srOnly}`}>
					Imię:
				</label>
				<input
					id='name'
					type='text'
					className={styles.input}
					placeholder='Imię'
					{...register('name', { required: 'Imię jest wymagane' })}
				/>
				{errors.name && <p className={styles.error}>{errors.name.message}</p>}
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='email' className={`${styles.label} ${styles.srOnly}`}>
					Adres mail:
				</label>
				<input
					id='email'
					type='email'
					className={styles.input}
					placeholder='Adres mail'
					{...register('email', {
						required: 'Adres email jest wymagany',
						pattern: {
							value: /^\S+@\S+$/i,
							message: 'Nieprawidłowy adres email',
						},
					})}
				/>
				{errors.email && <p className={styles.error}>{errors.email.message}</p>}
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='phone' className={`${styles.label} ${styles.srOnly}`}>
					Telefon (opcjonalnie):
				</label>
				<input
					id='phone'
					type='tel'
					className={styles.input}
					placeholder='Telefon (opcjonalnie)'
					{...register('phone')}
				/>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='message' className={`${styles.label} ${styles.srOnly}`}>
					Wiadomość:
				</label>
				<textarea
					id='message'
					className={styles.textarea}
					placeholder='Wiadomość'
					{...register('message', { required: 'Wiadomość jest wymagana' })}
				/>
				{errors.message && (
					<p className={styles.error}>{errors.message.message}</p>
				)}
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='privacyPolicy' className={styles.checkboxLabel}>
					<input
						id='privacyPolicy'
						type='checkbox'
						className={styles.checkbox}
						{...register('privacyPolicy', {
							required: 'Musisz zaakceptować politykę prywatności',
						})}
					/>
					<p>
						{' '}
						Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
						<a
							href='/polityka-prywatnosci'
							target='_blank'
							rel='noopener noreferrer'>
							Polityką Prywatności
						</a>
						.
					</p>
				</label>
				{errors.privacyPolicy && (
					<p className={styles.error}>{errors.privacyPolicy.message}</p>
				)}
			</div>

			<button type='submit' className={styles.submitButton}>
				Wyślij <img className={styles.icon} src={icon_envelope.src} alt="" aria-hidden/>
			</button>
		</form>
	);
};
