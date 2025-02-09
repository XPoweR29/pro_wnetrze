// app/loading.tsx (lub w katalogu konkretnej trasy)
'use client';

import React, { useEffect } from 'react';

export default function Loading() {
    useEffect(() => {
        console.log('Ładuję stronę...');
    }, []);

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#fff', 
			}}>
                <h1 style={{fontSize: '7em'}}>Ładowanie zasobów...</h1>
		</div>
	);
}
