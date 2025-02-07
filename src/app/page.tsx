import styles from './page.module.scss';
import { Start } from '@/sections/Start/Start';
import { About } from '@/sections/About/About';
import { Services } from '@/sections/Services/Services';
import { Portfolio } from '@/sections/Portfolio/Portfolio';
import { Process } from '@/sections/Process/Process';
import { TimelineSteps } from '@/components/TimelineSteps/TimelineSteps';
import { Contact } from '@/sections/Contact/Contact';

export default function Home() {
	return (
		<section className={styles.section}>
			<Start />
			<About/>
			<Services/>
			<Portfolio/>
			<Process/>
			<Contact/>
		</section>
	);
}
