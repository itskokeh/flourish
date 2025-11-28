// import hljs from 'highlight.js/lib/core';
// // import html from 'highlight.js/lib/languages/html';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
// import svelte from 'highlight.svelte';

// // import {} from 'highlightjs-svelte/'

// hljs.registerLanguage('js', javascript);
// hljs.registerLanguage('ts', typescript);
// hljs.registerLanguage('svelte', svelte);
// // hljs.registerLanguage('html', html);

// export { hljs };

import {
	// type BundledLanguage,
	// type BundledTheme,
	codeToHtml,
	// createHighlighter,
} from 'shiki/bundle/web';
// import vitesse from 'shiki/themes/vitesse-dark.mjs';

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
