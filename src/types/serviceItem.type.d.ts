interface ServiceItem {
	className?: string;
	title: string | React.ReactNode;
	children: React.ReactNode;
	image?: string | StaticImageData;
	alt: string;
	isEven?: boolean;
}
