type ContentFR = typeof import("./content/fr.json");
type ContentEN = typeof import("./content/en.json");

// type-safe way to declare the content
declare interface IntlMessages extends ContentFR, ContentEN {}

declare type Locale = "fr" | "en";
