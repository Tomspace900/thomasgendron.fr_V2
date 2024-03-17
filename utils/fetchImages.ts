import { promises as fs } from "fs";

type ImageData = {
	id: number;
	alt: string;
	location?: string;
};

export type ImageDataWithSrc = ImageData & {
	src: string;
};

export default async function fetchImagesData() {
	const jsonData = await fs.readFile(process.cwd() + "/public/images.json", "utf-8");
	const imgSrc = await fs.readdir(process.cwd() + "/public/images");
	const data = JSON.parse(jsonData) as { images: ImageData[] };

	const images: ImageDataWithSrc[] = data.images
		.map((img: ImageData) => {
			const src = `/images/${img.id}.webp`;
			return { ...img, src };
		})
		.filter((img) => imgSrc.includes(img.src.split("/").pop()!));

	return images;
}
