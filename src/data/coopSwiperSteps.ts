import { TimelineEntry } from './timelineSteps';
import contactImg from '../assets/img/step_contact_white.png';
import consultImg from '../assets/img/step_consult_white.png';
import contractImg from '../assets/img/step_contract_white.png';
import workImg from '../assets/img/step_working_white.png';
import checkImg from '../assets/img/step_checking_white.png';

export const coopStep: TimelineEntry[] = [
	{
		title: 'Pierwszy kontakt',
		content:
			'Skontaktuj się z nami telefonicznie, mailowo lub przez formularz. Opisz swoje potrzeby, a my doradzimy i umówimy konsultację.',
		image: contactImg,
	},
	{
		title: 'Konsultacja i wycena',
		content:
			'Podczas konsultacji omówimy szczegóły projektu i przedstawimy wycenę oraz harmonogram prac, abyś wiedział, czego się spodziewać.',
		image: consultImg,
	},
	{
		title: 'Podpisanie umowy',
		content:
			'Po zaakceptowaniu wyceny ustalamy warunki współpracy, harmonogram i zakres obowiązków. Umowa zapewnia przejrzystość i bezpieczeństwo na każdym etapie realizacji projektu.',
		image: contractImg,
	},
	{
		title: 'Realizacja prac',
		content:
			'Rozpoczynamy prace zgodnie z harmonogramem, dbając o precyzję, terminowość i najwyższą jakość. Na bieżąco informujemy o postępach, abyś wiedział, na jakim etapie jesteśmy.',
		image: workImg,
	},
	{
		title: 'Kontrola i odbiór',
		content:
			'Po zakończeniu prac dokonujemy kontroli i wprowadzamy poprawki, jeśli są potrzebne. Po odbiorze możesz cieszyć się perfekcyjnie wykończonym wnętrzem!',
		image: checkImg,
	},
];
