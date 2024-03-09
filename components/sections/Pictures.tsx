"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const pictures = ["1.webp", "2.webp", "3.webp"];

export default function Pictures() {
	return (
		<>
			<Carousel
				className='w-full max-w-xl'
				opts={{
					loop: true,
					skipSnaps: true,
				}}
				plugins={[
					Autoplay({
						delay: 3000,
					}),
				]}>
				<CarouselContent>
					{pictures.map((picture, index) => (
						<CarouselItem key={index} className='flex items-center justify-center w-full h-[500px] max-w-[500px]'>
							<div className='relative mx-8 rounded-lg overflow-hidden max-h-full w-full'>
								<Image
									src={`/images/${picture}`}
									alt={`Picture ${index + 1}`}
									width={500}
									height={500}
									loading='lazy'
									className='object-contain'
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious variant='default' className='sm:flex hidden' />
				<CarouselNext variant='default' className='sm:flex hidden' />
			</Carousel>
		</>
	);
}
