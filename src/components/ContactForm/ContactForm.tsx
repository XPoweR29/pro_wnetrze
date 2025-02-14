'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { ContactFormData, useContactForm } from '@/hooks/useContactForm';
import icon_envelope from '../../assets/icons/btn_envelope.svg';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Image from 'next/image';

export const ContactForm = ({ className }: { className?: string }) => {
	const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

	const onSubmit = async (data: ContactFormData) => {
		try {
			setIsSubmiting(true);
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('email', data.email);
			if (data.phone) formData.append('phone', data.phone);
			formData.append('message', data.message);
			formData.append('sender', 'kontakt@webcraft-studio.pl');
			formData.append('recipient', 'pawelzydek29@gmail.com');

			const response = await fetch(
				'https://backendapp-gamma.vercel.app/api/send-mail',
				{
					method: 'POST',
					body: formData,
				}
			);

			if (response.ok) {
				toast.success('Twoja wiadomość została wysłana', {
					duration: 5000,
					position: 'top-center',
				});

				reset();
			}
		} catch (err) {
			toast.error(
				'Błąd podczas wysyłania wiadomości. Spróbuj ponownie później',
				{
					duration: 5000,
					position: 'top-right',
				}
			);
			console.error(err);
		} finally {
			setIsSubmiting(false)
		}
	};

	const { register, submitHandler, errors, reset } = useContactForm(onSubmit);

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
					{...register('name', {
						required: 'Imię jest wymagane',
						pattern: {
							value: /^(?!\s*$).+/,
							message: 'Imię musi mieć conajmniej 3 znaki',
						},
						minLength: {
							value: 3,
							message: 'Imię musi mieć conajmniej 3 znaki',
						},
					})}
				/>
				{
					<p
						className={`${styles.error} ${
							errors.name && styles['error--active']
						}`}>
						{errors.name?.message}
					</p>
				}
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
				{
					<p
						className={`${styles.error} ${
							errors.email && styles['error--active']
						}`}>
						{errors.email?.message}
					</p>
				}
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
					{...register('phone', {
						pattern: {
							value: /^(?=(?:.*\d){9,})[0-9\-\s\(\)]+$/,
							message: 'Nieprawidłowy numer telefonu',
						},
					})}
				/>
				{
					<p
						className={`${styles.error} ${
							errors.phone && styles['error--active']
						}`}>
						{errors.phone?.message}
					</p>
				}
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='message' className={`${styles.label} ${styles.srOnly}`}>
					Wiadomość:
				</label>
				<textarea
					id='message'
					className={styles.textarea}
					placeholder='Wiadomość'
					{...register('message', {
						required: 'Wiadomość jest wymagana',
						pattern: {
							value: /^(?!\s*$).+/,
							message: 'Wiadomość nie może być pusta',
						},
					})}
				/>
				{
					<p
						className={`${styles.error} ${
							errors.message && styles['error--active']
						}`}>
						{errors.message?.message}
					</p>
				}
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
						<Link href='/polityka-prywatnosci'>Polityką Prywatności</Link>.
					</p>
				</label>
				{
					<p
						className={`${styles.error} ${
							errors.privacyPolicy && styles['error--active']
						}`}>
						{errors.privacyPolicy?.message}
					</p>
				}
			</div>

			<button type='submit' className={styles.submitButton} disabled={isSubmiting}>
				Wyślij{' '}
				<Image
					className={styles.icon}
					src={icon_envelope}
					alt=''
					aria-hidden
				/>
			</button>
		</form>
	);
};
