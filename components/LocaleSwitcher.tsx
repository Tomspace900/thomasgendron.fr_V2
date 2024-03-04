"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";

export default function LocaleSwitcher() {
	const t = useTranslations("LocaleSwitcher");
	const locale = useLocale();
	const router = useRouter();

	function handleChangeLocale(newLocale: Locale): void {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	}

	return (
		<Button onClick={() => handleChangeLocale(locale === "fr" ? "en" : "fr")}>
			<Globe className='mr-2 h-6 w-6 stroke-[1.2]' />
			{locale === "fr" ? t("en") : t("fr")}
		</Button>
	);
}
