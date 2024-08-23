import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
	return (
		<>
			<motion.div
				className='top-0 bottom-o right-full fixed z-30 w-full h-full bg-primary'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
				exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
			/>

			<motion.div
				className='top-0 bottom-o right-full fixed z-20 w-full h-full bg-light'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				transition={{
					delay: 0.2,
					duration: 0.8,
					ease: 'easeInOut',
				}}
			/>

			<motion.div
				className='top-0 bottom-o right-full fixed z-10 w-full h-full bg-dark'
				initial={{ x: '100%', width: '100%' }}
				animate={{ x: '0%', width: '0%' }}
				transition={{
					delay: 0.4,
					duration: 0.8,
					ease: 'easeInOut',
				}}
			/>
		</>
	);
};

export default TransitionEffect;
