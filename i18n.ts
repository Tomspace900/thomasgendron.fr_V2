import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./middleware";

export default getRequestConfig(async ({ locale }) => {
	const baseLocale = new Intl.Locale(locale).baseName;

	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(baseLocale as any)) {
		notFound();
	}

	return {
		messages: (await import(`@/content/${baseLocale}.json`)).default,
	};
});
