import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("landing");
	return (
		<div className='flex flex-col mt-24 sm:mt-36 items-center text-center h-screen mx-4 sm:mx-12 w-full max-w-[1200px] gap-12 z-0'>
			<span className='text-6xl font-extralight '>THOMAS GENDRON</span>
			<div className='h-[1px] w-1/2 bg-foreground'></div>
			<span className='text-5xl font-thin'>{t("welcome")}</span>
			<span className='text-2xl font-thin mt-10'>{t("subWelcome")}</span>
			<div className='fixed sm:top-8 top-2 sm:right-8 right-2'>
				<LocaleSwitcher />
			</div>
			<div className='flex flex-col sm:flex-row items-center my-6 sm:gap-0 gap-8 justify-between max-w-[800px] w-full'>
				<Button asChild variant={"custom"} className='socials linkedin w-fit'>
					<Link href='https://www.linkedin.com/in/gendron-thomas/' target='_blank'>
						<Linkedin className='mr-4 h-6 w-6 stroke-[1.2]' />
						{t("socials.linkedin")}
					</Link>
				</Button>
				<Button asChild variant={"custom"} className='socials github w-fit'>
					<Link href='https://github.com/Tomspace900' target='_blank'>
						<Github className='mr-4 h-6 w-6 stroke-[1.2]' />
						{t("socials.github")}
					</Link>
				</Button>
				<Button asChild variant={"custom"} className='socials instagram rounded-full w-fit'>
					<Link href='https://www.instagram.com/thek_nick/' target='_blank'>
						<Instagram className='mr-4 h-6 w-6 stroke-[1.2]' />
						{t("socials.instagram")}
					</Link>
				</Button>
			</div>
			<div className='h-[150px] w-[1px] bg-foreground'></div>
			<span className='text-4xl font-thin'>J'y ai travaillé</span>
		</div>
	);
}
