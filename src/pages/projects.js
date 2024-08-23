import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { GithubIcon } from '../components/Icons';
import gpt3Blog from '../../public/images/projects/gpt3Blog.svg';
import bankApp from '../../public/images/projects/bankApp.svg';
import academiaNumen from '../../public/images/projects/academiaNumen.svg';
import todoApp from '../../public/images/projects/todoApp.svg';
import turnero from '../../public/images/projects/turnero.svg';
import cuyanasForm from '../../public/images/projects/cuyanasForm.svg';
import calendarioAcademia from '../../public/images/projects/calendarioAcademia.svg';
import sofiLanding from '../../public/images/projects/sofiLanding.svg';
import turnosSalud from '../../public/images/projects/turnosSalud.svg';
import mutsepu from '../../public/images/projects/mutsepu.svg';

import TransitionEffect from '@/components/TransitionEffect';

const FeaturedProject = ({
	type,
	title,
	summary,
	img,
	link,
	github,
}) => {
	return (
		<article
			className='flex justify-between items-center w-full border border-solid 
    border-dark rounded-3xl bg-light dark:bg-dark dark:border-light shadow-2xl p-12 
    relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
		>
			<div
				className='absolute top-0 -right-3 rounded-[2.5rem] bg-dark dark:bg-light w-[101%] h-[103%]
      -z-10 rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] '
			/>
			<Link
				href={link}
				target='_blank'
				className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
			>
				<Image
					src={img}
					alt={title}
					className='w-full h-auto '
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
				/>
			</Link>
			<div className='w-1/2 flex  flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
				<span className='font-medium text-primary dark:text-primaryDark text-lg xs:text-base'>
					{type}
				</span>
				<Link
					href={link}
					target='_blank'
					className='hover:underline underline-offset-2'
				>
					<h2 className='my-1 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
						{title}
					</h2>
				</Link>
				<p className='my-2 fon text-dark dark:text-light sm:text-sm'>
					{summary}
				</p>
				<div className='mt-2 flex items-center'>
					<Link
						href={github}
						target='_blank'
						className='w-10'
					>
						<GithubIcon />
					</Link>
					<Link
						href={link}
						target='_blank'
						className='bg-dark text-light dark:bg-light sm:px-4 sm:text-base
            dark:text-dark rounded-lg text-lg font-semibold p-2 px-6 ml-4'
					>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

const Projects = ({ type, title, img, link, github }) => {
	return (
		<article
			className='w-full flex flex-col justify-center items-center rounded-2xl 
    bg-light dark:bg-dark dark:border-light p-6 relative border border-solid
    border-dark rounded-br-2xl xs:p-4'
		>
			<div
				className='absolute top-0 -right-3 rounded-[1.5rem] dark:bg-light
      bg-dark w-[101%] h-[103%] -z-10 rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'
			/>
			<Link
				href={link}
				target='_blank'
				className='w-full cursor-pointer overflow-hidden rounded-lg'
			>
				<Image
					src={img}
					alt={title}
					className='w-full max-h-[200x]'
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
				/>
			</Link>
			<div className='w-full flex  flex-col items-start justify-between mt-4'>
				<span className='font-medium text-primary dark:text-primaryDark text-xl lg:text-lg md:text-base'>
					{type}
				</span>
				<Link
					href={link}
					target='_blank'
					className='hover:underline underline-offset-2'
				>
					<h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl sm:text-sm'>
						{title}
					</h2>
				</Link>
				<div className='mt-2 flex items-center justify-between w-full'>
					<Link
						href={link}
						target='_blank'
						className='text-lg font-semibold underline md:text-base'
					>
						Visit
					</Link>
					<Link
						href={github}
						target='_blank'
						className='w-8 md:w-6'
					>
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	);
};

const projects = () => {
	return (
		<>
			<Head>
				<title>Rosmildo Lopes | Projects Page</title>
				<meta name='description' description='about page' />
			</Head>
			<TransitionEffect />
			<main className='w-full mb-16 flex flex-col justify-center items-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText
						className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
						text='¡Take a look on some of my projects!'
					/>

					<div className='grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-12 lg:gap-x-8 md:gap-y-12 sm:gap-x-0'>
						<div className='col-span-12'>
							<FeaturedProject
								type='Academia Numen'
								title='Landing Page'
								img={academiaNumen}
								summary='A visually appealing educational course platform using Next.js, and Tailwind CSS. Integrated react-motion for smooth animations. Implemented a diploma search feature allowing students to retrieve and download their diplomas. Demonstrated proficiency in modern JavaScript frameworks, responsive design, and data integration.'
								link='https://www.academianumen.com.ar/'
								github='https://github.com/NumenPublicidad/landingAcademia'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Inversiones Cuyanas'
								title='Multistep Form'
								img={cuyanasForm}
								summary='A complete multistep form with zod validation in each step, react-hook-form, images uploading,email sending using resend and react email and integration with appwrite database and storage'
								link='https://landing-academia.vercel.app/'
								github='#'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Carepulse'
								title='Fullstack'
								img={turnosSalud}
								summary='A healthcare patient management application using Next.js, enabling patients to easily register, book, and manage their appointments with doctors. The application includes administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications to keep patients informed.'
								link='https://turnos-salud.vercel.app/'
								github='https://github.com/rosmildoLopes/turnos_salud'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='SoFi Industries'
								title='Landing Page'
								img={sofiLanding}
								summary='A sleek and responsive landing page for a tech company using Next.js and Tailwind CSS. The design emphasizes simplicity and modern aesthetics, ensuring a seamless user experience across all devices.'
								link='https://sofi-landing-bice.vercel.app/'
								github='https://github.com/NumenPublicidad/SOFI-landing'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Billing App'
								title='Landing Page'
								img={bankApp}
								summary='Made with vite and tailwing used to improve my skills and learnings'
								link='https://modern-website-tau.vercel.app/'
								github='https://github.com/rosmildoLopes/modern-website'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Project'
								title='Password Generator'
								img={gpt3Blog}
								summary='Simply description about the project 0that I made using aan API with ReactJS'
								link='https://gpt3-blog.vercel.app/'
								github='https://github.com/rosmildoLopes/gpt3-blog'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Municipio Malvinas'
								title='CRUD Application'
								img={turnero}
								summary="Online processing of administrative tasks, streamlining procedures such as licenses, permits, and municipal registrations.A page to create appointment to driver's license integrate with backend. You can create an appointment, remind appointment,etc. Admin panel to advanced settings"
								link='https://rosmildolopes.github.io/Calculator/'
								github='https://github.com/NumenPublicidad/turnero'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Calandar Project'
								title='Fullstack Application'
								img={calendarioAcademia}
								summary='A complete CRUD application to manage a full team of work. Created to a company that sells course of technologies. The app creates new courses, new users, registers new teachers,  manages the whole organization to a better project management'
								link='https://numencalendar.vercel.app/login'
								github='https://github.com/NumenPublicidad/FrontCalendar'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Health Care'
								title='CRUD Application'
								img={cuyanasForm}
								summary='Auth authentication, appwrite integration, create appointment, this project is a personal project that is process yet'
								link='https://todo-list-rho-flax.vercel.app/'
								github='https://github.com/rosmildoLopes/todo-list'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='GPT-3 BLOG'
								title='Landing Page'
								img={mutsepu}
								summary='A landing page to a friends coorporation.'
								link='https://mutsepu.vercel.app/'
								github='https://github.com/NumenPublicidad/mutsepu-'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Project'
								title='Todo App'
								img={todoApp}
								summary='a task management application using vanilla JavaScript, allowing users to create and delete tasks efficiently. The application features a clean and intuitive interface, ensuring ease of use. Implemented local storage to persist tasks across sessions, enhancing user experience. Demonstrated strong skills in JavaScript, DOM manipulation, and state management.'
								link='https://todo-list-rho-flax.vercel.app/'
								github='https://github.com/rosmildoLopes/todo-list'
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default projects;
