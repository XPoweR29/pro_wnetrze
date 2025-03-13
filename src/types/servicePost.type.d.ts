import { StaticImageData } from "next/image";

interface ServicePost {
	title: string | React.ReactNode;
	text: string | React.ReactNode;
	image?: string | StaticImageData;
	imageAlt?: string;
}