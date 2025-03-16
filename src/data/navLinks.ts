export const navLinks: NavLink[] = [
	{ href: '/#o-nas', label: 'O nas' },
	{
		href: '/#uslugi',
		label: 'Usługi',
		children: [
			{
				label: 'Usługi remontowe',
				slug: '/uslugi-remontowo-budowlane',
				children: [
					{
						slug: 'glazurnictwo-ukladanie-plytek-kafelkowanie',
						label: 'Glazurnictwo',
					},
					{ slug: 'malowanie-scian', label: 'Malowanie ścian' },
					{ slug: 'tapetowanie-scian', label: 'Tapetowanie' },
					{ slug: 'gladzie-gipsowe', label: 'Gładzie gipsowe' },
					{ slug: 'sucha-zabudowa', label: 'Sucha zabudowa' },
					{ slug: 'sufity-podwieszane', label: 'Sufity podwieszane' },
				],
			},
			{
				label: 'Wykończenia wnętrz',
				slug: '/wykonczenia-wnetrz-mieszkan-domow',
				children: [
					{ slug: 'remont-lazienki', label: 'Remont łazienki' },
					{ slug: 'adaptacja-poddasza', label: 'Adaptacja poddasza' },
					{
						slug: 'montaz-drzwi-wewnetrznych',
						label: 'Montaż drzwi wewnętrznych',
					},
					{
						slug: 'ukladanie-podlog-i-parkietow-ukladanie-paneli',
						label: 'Ukladanie podłóg',
					},
					{ slug: 'wykonczenia-pod-klucz', label: 'Wykończenia pod klucz' },
				],
			},
			{
				label: 'Tynki dekoracyjne',
				slug: '/tynki-dekoracyjne-i-wykonczenia-scian',
				children: [
					{ slug: 'imitacja-betonu', label: 'Imitacja betonu' },
					{ slug: 'glinka-wenecka', label: 'Glinka wenecka' },
					{ slug: 'trawertyn', label: 'Trawertyn' },
					{ slug: 'stiuki-weneckie', label: 'Stiuki weneckie' },
				],
			},
		],
	},
	{ href: '/#portfolio', label: 'Galeria' },
	{ href: '/#proces', label: 'Jak działamy?' },
	{ href: '/kontakt', label: 'Kontakt' },
];

export const renovationServicesLinks: LinkData[] = [
	{ slug: 'glazurnictwo-ukladanie-plytek-kafelkowanie', label: 'Glazurnictwo' },
	{ slug: 'malowanie-scian', label: 'Malowanie ścian' },
	{ slug: 'tapetowanie-scian', label: 'Tapetowanie' },
	{ slug: 'gladzie-gipsowe', label: 'Gładzie gipsowe' },
	{ slug: 'sucha-zabudowa', label: 'Sucha zabudowa' },
	{ slug: 'sufity-podwieszane', label: 'Sufity podwieszane' },
];

export const interiorDesignLinks: LinkData[] = [
	{ slug: 'remont-lazienki', label: 'Remont łazienki' },
	{ slug: 'adaptacja-poddasza', label: 'Adaptacja poddasza' },
	{ slug: 'montaz-drzwi-wewnetrznych', label: 'Montaż drzwi wewnętrznych' },
	{ slug: 'ukladanie-podlog-i-parkietow-ukladanie-paneli', label: 'Ukladanie podłóg'},
	{ slug: 'wykonczenia-pod-klucz', label: 'Wykończenia pod klucz' },
];

export const decorationsLinks: LinkData[] = [
	{ slug: 'imitacja-betonu', label: 'Imitacja betonu' },
	{ slug: 'glinka-wenecka', label: 'Glinka wenecka' },
	{ slug: 'trawertyn', label: 'Trawertyn' },
	{ slug: 'stiuki-weneckie', label: 'Stiuki weneckie' },
];
