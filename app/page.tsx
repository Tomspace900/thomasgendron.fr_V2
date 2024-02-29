"use client";

import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className='flex flex-col mt-24 sm:mt-36 items-center text-center h-screen mx-4 sm:mx-12 w-full max-w-[1200px] gap-12 z-0'>
			<span className='text-6xl font-extralight '>THOMAS GENDRON</span>
			<div className='h-[1px] w-1/2 bg-foreground'></div>
			<span className='text-5xl font-thin'>Bienvenue !</span>
			<span className='text-2xl font-thin mt-10'>Tout ce qu'il y a à savoir sur moi, et même davantage</span>
			{/* <span className='text-2xl font-light my-8'>Les incoutournables</span> */}
			<div className='flex sm:flex-row flex-col my-6 sm:gap-0 gap-8 justify-between items-center max-w-[90%] w-full'>
				<Button asChild variant={"custom"} className='socials linkedin'>
					<Link href='https://www.linkedin.com/in/gendron-thomas/'>
						<Linkedin className='mr-4 h-6 w-6 stroke-[1.2]' />
						Un peu plus formel
					</Link>
				</Button>
				<Button asChild variant={"custom"} className='socials github'>
					<Link href='https://github.com/Tomspace900'>
						<Github className='mr-4 h-6 w-6 stroke-[1.2]' />
						Un peu plus technique
					</Link>
				</Button>
				<Button asChild variant={"custom"} className='socials instagram rounded-full'>
					<Link href='https://www.instagram.com/thek_nick/'>
						<Instagram className='mr-4 h-6 w-6 stroke-[1.2]' />
						Un peu plus personnel
					</Link>
				</Button>
			</div>
			<div className='h-[150px] w-[1px] bg-foreground'></div>
			<span className='text-4xl font-thin'>J'y ai travaillé</span>
		</div>
	);
}
