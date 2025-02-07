import React from 'react';

export const Map = ({ className }: {className?: string;}) => {
	return (
		<iframe
			src='https://maps.google.com/maps?q=Parkowa%2043%2C%2034-321%20Kocierz%20Moszczanicki&t=&z=17&ie=UTF8&iwloc=&output=embed'
			allowFullScreen
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'
			className={className}
		/>
	);
};
