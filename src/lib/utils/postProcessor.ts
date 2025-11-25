export const processedKeywords = (keywords: string[]) =>
	keywords.map((keyword) => keyword.trim().toLowerCase()).join(', ');
