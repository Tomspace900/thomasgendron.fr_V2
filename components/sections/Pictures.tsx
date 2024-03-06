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
						stopOnHover: true,
					}),
				]}>
				<CarouselContent>
					{pictures.map((picture, index) => (
						<CarouselItem key={index} className='flex items-center justify-center w-full aspect-square'>
							<div className='relative w-full h-full mx-8 rounded-lg overflow-hidden'>
								<Image
									src={`/images/${picture}`}
									alt={`Picture ${index + 1}`}
									fill
									objectFit='cover'
									loading='lazy'
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='sm:flex hidden' />
				<CarouselNext className='sm:flex hidden' />
			</Carousel>
		</>
	);
}
