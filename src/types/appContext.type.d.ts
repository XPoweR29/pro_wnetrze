
export interface AppContextType {
	breakpoint: Breakpoints;

	isBgLoaded: boolean;
	setIsBgLoaded: React.Dispatch<React.SetStateAction<boolean>>;

	mobileMenuShown: boolean;
	setMobileMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}
