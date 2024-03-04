import createMiddleware from "next-intl/middleware";

// A list of all locales that are supported
export const locales = ["fr", "en"];

export default createMiddleware({
	locales: locales,

	// Used when no locale matches
	defaultLocale: "fr",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(fr|en)/:path*"],
};
