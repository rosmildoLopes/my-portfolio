import React, { Children } from 'react';

const Layout = ({ children, className = '' }) => {
	return (
		<div
			className={`${className} h-full w-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 
    dark:bg-dark`}
		>
			{children}
		</div>
	);
};

export default Layout;
