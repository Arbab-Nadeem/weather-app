import React from 'react';
import { iconUrlFromCode, formatToLocalTime } from '../services/weatherService';

import {
	UilArrowUp,
	UilArrowDown,
	UilTemperature,
	UilTear,
	UilWind,
	UilSun,
	UilSunset,
} from '@iconscout/react-unicons';
function TemperatureAndDetails({
	weather: {
		details,
		icon,
		timezone,
		sunset,
		sunrise,
		temp,
		temp_min,
		temp_max,
		speed,
		humidity,
		feels_like,
	},
}) {
	return (
		<div>
			<div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
				<p>{details}</p>
			</div>
			<div className='flex flex-row items-center justify-between text-white py-3'>
				<img src={iconUrlFromCode(icon)} alt='' className='w-20' />
				<p className='text-5xl'>{`${temp.toFixed()}`}°</p>
				<div
					className='flex flex-col space-y-2
'
				>
					<div className='flex font-light text-sm items-center justify-center '>
						<UilTemperature size={18} className='mr-1 ' />
						Real fell:
						<span className='ml-1 font-medium'>
							{`${feels_like.toFixed()}`}°
						</span>
					</div>
					<div className='flex font-light text-sm items-center justify-center '>
						<UilTear size={18} className='mr-1 ' />
						Humidity:
						<span className='ml-1 font-medium'>
							{`${humidity.toFixed()}%`}
						</span>
					</div>
					<div className='flex font-light text-sm items-center justify-center '>
						<UilWind size={18} className='mr-1 ' />
						Wind:
						<span className='ml-1 font-medium'>
							{`${speed.toFixed()}km/h`}°
						</span>
					</div>
				</div>
			</div>
			<div className='flex flex-row items-center justify-center text-white space-x-2 text-sm py-3'>
				<UilSun />
				<p className='font-light'>
					Rise:
					<span className='font-medium ml-1'>
						{formatToLocalTime(sunrise, timezone, 'hh: mm a')}
					</span>
				</p>
				<p className='font-light'>|</p>
				<UilSun />
				<p className='font-light'>
					Set:
					<span className='font-medium ml-1'>
						{formatToLocalTime(sunset, timezone, 'hh: mm a')}
					</span>
				</p>
				<p className='font-light'>|</p>
				<UilSun />
				<p className='font-light'>
					High:
					<span className='font-medium ml-1'>
						{`${temp_max.toFixed()}`}°
					</span>
				</p>
				<p className='font-light'>|</p>
				<UilSun />
				<p className='font-light'>
					Low:
					<span className='font-medium ml-1'>
						{`${temp_min.toFixed()}`}°
					</span>
				</p>
			</div>
		</div>
	);
}

export default TemperatureAndDetails;
