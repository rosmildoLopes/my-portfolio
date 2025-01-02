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
import patagonia from '../../public/images/projects/patagonia.svg';
import paranaArt from '../../public/images/projects/paranaArt.svg';

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
						text='¡Explorá algunos de mis proyectos más destacados!'
					/>

					<div className='grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-12 lg:gap-x-8 md:gap-y-12 sm:gap-x-0'>
						<div className='col-span-12'>
							<FeaturedProject
								type='Academia Numen'
								title='Landing Page'
								img={academiaNumen}
								summary='Una plataforma educativa visualmente atractiva utilizando Next.js y Tailwind CSS. Se integró react-motion para animaciones fluidas. Se implementó una función de búsqueda de diplomas que permite a los estudiantes recuperar y descargar sus diplomas. Demuestra habilidad en frameworks modernos de JavaScript, diseño responsivo e integración de datos.'
								link='https://www.academianumen.com.ar/'
								github='https://github.com/NumenPublicidad/landingAcademia'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Inversiones Cuyanas'
								title='Multistep Form'
								img={cuyanasForm}
								summary='Un formulario multietapa completo con validación en cada paso utilizando zod, react-hook-form, carga de imágenes, envío de correos electrónicos mediante resend y react-email, e integración con la base de datos y almacenamiento de Appwrite.'
								link='https://cuyanas.vercel.app/'
								github='https://github.com/rosmildoLopes/cuyanas'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Municipio Malvinas'
								title='CRUD Application'
								img={turnero}
								summary='Procesamiento en línea de tareas administrativas, agilizando procedimientos como licencias, permisos y registros municipales. Una página para programar citas para licencias de conducir integrada con el backend. Permite crear, recordar citas, etc. Incluye un panel de administración para configuraciones avanzadas.'
								link='https://turnero.vercel.app/'
								github='https://github.com/NumenPublicidad/turnero'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Patagonia Life Style'
								title='Web page'
								img={patagonia}
								summary='Una página web desarrollada para promocionar un exclusivo proyecto inmobiliario en Villa La Angostura. La aplicación combina un diseño visual atractivo con información detallada sobre departamentos sustentables, vistas panorámicas y amenidades de lujo como gimnasio y piscina. Optimizada para destacar características como eficiencia energética y tecnología domótica, el proyecto resalta la integración de modernidad y naturaleza patagónica.'
								link='https://patagonia-life-style-liart.vercel.app/'
								github='https://github.com/rosmildoLopes/patagoniaLifeStyle'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Carepulse'
								title='Fullstack'
								img={turnosSalud}
								summary='Una aplicación para la gestión de pacientes de atención médica utilizando Next.js, que permite a los pacientes registrarse, programar y gestionar sus citas médicas fácilmente. Incluye herramientas administrativas para agendar, confirmar y cancelar citas, junto con notificaciones por SMS para mantener informados a los pacientes.'
								link='https://turnos-salud.vercel.app/'
								github='https://github.com/rosmildoLopes/turnos_salud'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='SoFi Industries'
								title='Landing Page'
								img={sofiLanding}
								summary='Una página de despliegue elegante y responsiva para una empresa tecnológica utilizando Next.js y Tailwind CSS. El diseño enfatiza la simplicidad y la estética moderna, garantizando una experiencia de usuario fluida en todos los dispositivos.'
								link='https://sofi-landing-bice.vercel.app/'
								github='https://github.com/NumenPublicidad/SOFI-landing'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Billing App'
								title='Landing Page'
								img={bankApp}
								summary='Página web moderna desarrollada para mejorar habilidades técnicas y explorar nuevas herramientas. Creada con Vite y Tailwind CSS, se centra en el diseño responsivo, la experiencia de usuario intuitiva y la optimización del rendimiento.'
								link='https://modern-website-tau.vercel.app/'
								github='https://github.com/rosmildoLopes/modern-website'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='GPT-3 Blog'
								title='Landing Page'
								img={gpt3Blog}
								summary='Landing creada sin frameworks, diseñada con un enfoque moderno y atractivo. Ofrece un diseño limpio y funcional que resalta la información clave de manera efectiva. Este proyecto combina creatividad y habilidades técnicas para brindar una solución web profesional.'
								link='https://gpt3-blog.vercel.app/'
								github='https://github.com/rosmildoLopes/gpt3-blog'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Calandar Project'
								title='Fullstack Application'
								img={calendarioAcademia}
								summary='Una aplicación CRUD completa para gestionar un equipo de trabajo. Creada para una empresa que vende cursos de tecnologías. La aplicación crea nuevos cursos, usuarios, registra nuevos profesores y gestiona toda la organización para un mejor manejo de proyectos.'
								link='https://numencalendar.vercel.app/login'
								github='https://github.com/NumenPublicidad/FrontCalendar'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Parana ART'
								title='Wordpress'
								img={paranaArt}
								summary='Un sitio web corporativo desarrollado en WordPress para una aseguradora de riesgos del trabajo. Ofrece información detallada sobre servicios, normativas, formularios y asistencia en caso de accidentes laborales. Incluye secciones para clientes, proveedores y prestadores, con acceso a capacitación y recursos online. El diseño está orientado a la funcionalidad y accesibilidad.'
								link='https://todo-list-rho-flax.vercel.app/'
								github='#'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='GPT-3 BLOG'
								title='Landing Page'
								img={mutsepu}
								summary='Presenta un diseño simple y profesional que resalta los servicios e información clave de la empresa. Este proyecto refleja la capacidad de desarrollar interfaces modernas y funcionales adaptadas a las necesidades del cliente.'
								link='https://mutsepu.vercel.app/'
								github='https://github.com/NumenPublicidad/mutsepu-'
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								type='Project'
								title='Todo App'
								img={todoApp}
								summary='Una aplicación para la gestión de tareas utilizando JavaScript vanilla, que permite a los usuarios crear y eliminar tareas de manera eficiente. La aplicación cuenta con una interfaz limpia e intuitiva para facilitar su uso. Implementación de almacenamiento local para conservar las tareas entre sesiones, mejorando la experiencia del usuario. Demuestra habilidades sólidas en JavaScript, manipulación del DOM y gestión de estados.'
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
