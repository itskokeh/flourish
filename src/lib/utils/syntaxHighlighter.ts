const { codeToHtml } = await import('shiki/bundle/web');

export const highlightExistingPreCodeBlocks = async () => {
	const pres = Array.from(document.querySelectorAll('pre'));

	await Promise.all(
		pres.map(async (pre) => {
			const codeElement = pre.querySelector('code');
			if (!codeElement) return;

			const code = codeElement.textContent || '';
			const lang =
				Array.from(codeElement.classList)
					.find((cls) => cls.startsWith('language-'))
					?.replace('language-', '') || 'javascript';

			const highlighted = await codeToHtml(code, {
				lang,
				theme: 'ayu-dark',
			});

			const tmp = document.createElement('div');
			tmp.innerHTML = highlighted;
			codeElement.innerHTML = tmp.querySelector('code')?.innerHTML || '';
			codeElement.className = tmp.querySelector('code')?.className || '';
		}),
	);
};
