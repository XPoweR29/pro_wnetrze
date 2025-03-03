import { Start } from '@/sections/Start/Start';
import { About } from '@/sections/About/About';
import { Services } from '@/sections/Services/Services';
import { Process } from '@/sections/Process/Process';
import { Contact } from '@/sections/Contact/Contact';
import { Toaster } from 'react-hot-toast';
import { Portfolio } from '@/sections/Portfolio/Portfolio';

export default function Home() {
	return (
		<>
			<Start />
			<About />
			<Services />
			<Portfolio />
			<Process />
			<Contact />
			<Toaster />
		</>
	);
}
