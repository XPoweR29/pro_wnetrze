import { Wrapper } from '@/components/Wrapper/Wrapper';
import styles from './page.module.scss';

export default function Home() {

	return (
		<section className={styles.section}>
			<Wrapper className={styles.wrapper}>
				<h1 className={styles.heading}>Project_Starter</h1>

				<ul className={styles.list}>
					<li>➡️ npm install</li>
					<li>➡️ change project name in <i>'package.json'</i></li>
					<li>➡️ edit <i>'app/page.tsx'</i></li>
				</ul>
			</Wrapper>
		</section>
	);
}
