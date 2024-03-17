"use server";

import Landing from "@/components/sections/Landing";
import Pictures from "@/components/sections/Pictures";
import fetchImagesData from "@/utils/fetchImages";

export default async function Home() {
	const images = await fetchImagesData();

	return (
		<div className='flex flex-col mt-24 sm:mt-36 items-center text-center mx-4 sm:mx-12 w-full max-w-[1200px] gap-12 z-0'>
			<Landing />

			<Pictures images={images} />
		</div>
	);
}
