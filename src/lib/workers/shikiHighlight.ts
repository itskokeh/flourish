import { codeToHtml } from 'shiki/bundle/web';

// declare const self: WindowOrWorkerGlobalScope

self.onmessage = async (event) => {
	const { code, lang, id } = event.data;

	try {
		const highlighted = await codeToHtml(code, {
			lang: lang || 'text',
			theme: 'vitesse-dark',
		});

		self.postMessage({
			id,
			html: highlighted,
			success: true,
		});
	} catch (error) {
		self.postMessage({
			id,
			error: (error as Error).message,
			success: false,
		});
	}
};
