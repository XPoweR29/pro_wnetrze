import { StaticImageData } from 'next/image';
import contact from '../assets/img/step_contact.png';
import consult from '../assets/img/step_consult.png';
import contract from '../assets/img/step_contract.png';
import working from '../assets/img/step_working.png';
import housecheck from '../assets/img/step_checking.png';

export interface TimelineEntry {
	title: string;
	content: string;
	image: string | StaticImageData;
}

export const timelineSteps: TimelineEntry[] = [
	{
		title: 'Pierwszy kontakt',
		content:
			'Skontaktuj się z nami telefonicznie, mailowo lub za pomocą formularza na naszej stronie. Opisz swoje potrzeby i oczekiwania – czy to remont łazienki, wykończenie wnętrz, czy drobne naprawy. Nasz zespół odpowie na Twoje pytania i umówi termin pierwszej konsultacji.',
		image: contact,
	},
	{
		title: 'Konsultacja i wycena',
		content:
			'Podczas konsultacji omówimy szczegóły Twojego projektu. Przeanalizujemy Twoje potrzeby, doradzimy najlepsze rozwiązania i przedstawimy szczegółową, darmową wycenę. Dzięki temu dokładnie wiesz, czego się spodziewać, zarówno pod względem kosztów, jak i harmonogramu prac.',
		image: consult,
	},
	{
		title: 'Podpisanie umowy',
		content:
			'Po zaakceptowaniu wyceny wspólnie ustalamy warunki współpracy, w tym harmonogram prac i zakres obowiązków. Umowa gwarantuje przejrzystość i bezpieczeństwo na każdym etapie realizacji, abyś mógł czuć się spokojny o swój projekt.',
		image: contract,
	},
	{
		title: 'Realizacja prac',
		content:
			'Rozpoczynamy prace zgodnie z ustalonym harmonogramem. Nasz zespół dba o precyzję, terminowość i najwyższą jakość wykonania. Na bieżąco informujemy Cię o postępach, abyś zawsze wiedział, na jakim etapie realizacji jesteśmy.',
		image: working,
	},
	{
		title: 'Kontrola i odbiór',
		content:
			'Po zakończeniu prac wspólnie dokonujemy szczegółowej kontroli efektów. W razie potrzeby wprowadzamy poprawki, aby finalny rezultat w pełni spełniał Twoje oczekiwania. Po odbiorze projektu możesz cieszyć się perfekcyjnie wykończonym wnętrzem!',
		image: housecheck,
	},
];
