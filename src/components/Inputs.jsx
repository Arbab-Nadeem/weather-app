import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

import { toast } from 'react-toastify';

function Inputs({ setQuery, units, setUnits }) {
	const [city, setCity] = useState('');

	const handleSearchClick = () => {
		if (city !== '') setQuery({ q: city });
	};
	const handleLocationClick = () => {
		if (navigator.geolocation) {
			toast.info('Fetching user location');
			navigator.geolocation.getCurrentPosition((position) => {
				toast.success('Fetched user location');
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;
				setQuery({ lat, lon });
			});
		}
	};
	const handleUnitsChange = (event) => {
		const pickedUnits = event.currentTarget.name;
		if (units !== pickedUnits) setUnits(pickedUnits);
	};
	return (
		<div className='flex flex-row justify-center my-6'>
			<div className=' flex flex-row w-3/4 items-center justify-center space-x-4'>
				<input
					value={city}
					onChange={(event) =>
						setCity(event.currentTarget.value)
					}
					type='text'
					placeholder='search'
					className=' text-xl font-light p-2 w-full shadow-xl focus:outline-none  capitalize placeholder:lowercase'
				/>
				<UilSearch
					onClick={handleSearchClick}
					size='25'
					className='text-white cursor-pointer hover:scale-110 transition ease-out'
				/>
				<UilLocationPoint
					onClick={handleLocationClick}
					size='25'
					className='text-white cursor-pointer hover:scale-110 transition ease-out'
				/>
			</div>
			<div className='flex flex-row w-1/4 items-center justify-center'>
				<button
					onClick={handleUnitsChange}
					name='metric'
					className='text-xl text-white font-light hover:scale-110 transition ease-out'
				>
					°C
				</button>
				<p className='text-xl text-white mx-1'>|</p>
				<button
					onClick={handleUnitsChange}
					name='imperial'
					className='text-xl text-white font-light hover:scale-110 transition ease-out'
				>
					°F
				</button>
			</div>
		</div>
	);
}

export default Inputs;
