import { Start } from '@/sections/Start/Start';
import { About } from '@/sections/About/About';
import { Services } from '@/sections/Services/Services';
import { Process } from '@/sections/Process/Process';
import { Contact } from '@/sections/Contact/Contact';
import { Portfolio } from '@/sections/Portfolio/Portfolio';
import { businessSchema } from '@/data/schema';

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
			/>

			<Start />
			<About />
			<Services />
			<Portfolio />
			<Process />
			<Contact />
		</>
	);
}
