const { codeToHtml } = await import ('shiki/bundle/web')

export const highlightExistingPreCodeBlocks = async () => {
	const pres = document.querySelectorAll('pre');

	for (const pre of pres) {
		const codeElement = pre.querySelector('code');
		if (!codeElement) continue;

		const code = codeElement.textContent;
		const lang =
			Array.from(codeElement.classList)
				.find((cls) => cls.startsWith('language-'))
				?.replace('language-', '') || 'javascript';

		const highlighted = await codeToHtml(code, {
			lang,
			theme: 'vitesse-dark',
		});

		// Replace the existing pre with highlighted version
		pre.outerHTML = highlighted;
	}
};
