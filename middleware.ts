import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// A list of all locales that are supported
export const locales: Locale[] = ["fr", "en"];

const nextIntlMiddleware = createMiddleware({
	locales,
	// Used when no locale matches
	defaultLocale: "fr",
	// never show the locale prefix in the URL
	localePrefix: "never",
});

export default function middleware(req: NextRequest): NextResponse {
	return nextIntlMiddleware(req);
}

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(fr|en)/:path*"],
};
