import path from "path";
import fs from "fs";

type ImageData = {
	id: number;
	alt: string;
	location?: string;
};

export type ImageDataWithSrc = ImageData & {
	src: string;
};

export default async function fetchImagesData() {
	const jsonPath = path.join(process.cwd(), "data/images.json");
	const imgDirPath = path.join(process.cwd(), "public/images");

	const jsonData = fs.readFileSync(jsonPath, "utf-8");
	const imgSrc = fs.readdirSync(imgDirPath, "utf-8");

	const data = JSON.parse(jsonData) as { images: ImageData[] };

	const images: ImageDataWithSrc[] = data.images
		.map((img: ImageData) => {
			const src = `/images/${img.id}.webp`;
			return { ...img, src };
		})
		.filter((img) => imgSrc.includes(img.src.split("/").pop()!));

	return images;
}
