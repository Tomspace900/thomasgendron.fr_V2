"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { ImageDataWithSrc } from "@/utils/fetchImages";
import { useTranslations } from "next-intl";

type PicturesProps = {
	images: ImageDataWithSrc[];
};

export default function Pictures({ images }: PicturesProps) {
	const t = useTranslations("pictures");
	return (
		<>
			<span className='text-4xl font-thin'>{t("title")}</span>
			<Carousel
				className='w-full max-w-xl'
				opts={{
					loop: true,
					skipSnaps: true,
				}}
				plugins={[
					Autoplay({
						delay: 3000,
						stopOnMouseEnter: true,
						stopOnInteraction: false,
					}),
				]}>
				<CarouselContent>
					{images &&
						images.map((picture, index) => (
							<CarouselItem key={index} className='flex items-center justify-center w-full h-[500px] '>
								<div className='relative rounded-lg overflow-hidden max-h-full w-full max-w-[500px]'>
									<Image
										src={picture.src}
										alt={picture.alt}
										width={500}
										height={500}
										loading={index > 0 ? "lazy" : "eager"}
										priority={index === 0}
										className='object-contain'
									/>
									<div className='absolute bottom-3 right-8 flex flex-col items-end'>
										{picture.location ? (
											<div className='flex items-center gap-2'>
												<MapPin className='h-4 w-4 text-white opacity-80' />
												<span className='text-white opacity-80'>{picture.location}</span>
											</div>
										) : null}
									</div>
								</div>
							</CarouselItem>
						))}
				</CarouselContent>
				<CarouselPrevious variant='default' className='md:flex hidden' />
				<CarouselNext variant='default' className='md:flex hidden' />
			</Carousel>
		</>
	);
}
