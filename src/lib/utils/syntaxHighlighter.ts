// import type { BundledLanguage } from 'shiki/bundle/web';

// export const highlightExistingPreCodeBlocks = async (): Promise<void> => {
// 	const pres = document.querySelectorAll('pre');
// 	if (pres.length === 0) return;

// 	// Show loading state
// 	pres.forEach((pre: HTMLPreElement) => {
// 		pre.style.opacity = '0.7';
// 		const originalHTML = pre.innerHTML;
// 		pre.dataset.original = originalHTML;
// 		pre.innerHTML = `<code style="color: #666; font-style: italic;">Loading syntax highlighting...</code>`;
// 	});

// 	try {
// 		const worker: Worker = new Worker(new URL('../workers/shikiHighlight.ts', import.meta.url), {
// 			type: 'module',
// 		});

// 		await processWithWorker(pres, worker);
// 	} catch (error) {
// 		console.error('Failed to load syntax highlighter:', error);
// 		restoreOriginalContent(pres);
// 	}
// };

// async function processWithWorker(pres: NodeListOf<HTMLPreElement>, worker: Worker): Promise<void> {
// 	const promises: Promise<void>[] = Array.from(pres).map((pre: HTMLPreElement, index: number) => {
// 		return new Promise<void>((resolve) => {
// 			// ← Add <void> generic here
// 			const codeElement = pre.querySelector('code') || pre;
// 			const code = codeElement.textContent || pre.textContent || '';
// 			const langClass =
// 				Array.from(pre.classList)
// 					.find((cls: string) => cls.startsWith('language-'))
// 					?.replace('language-', '') || 'text';

// 			const request = {
// 				code,
// 				lang: langClass as BundledLanguage,
// 				id: index,
// 			};

// 			worker.postMessage(request);

// 			const handleMessage = (event: MessageEvent) => {
// 				if (event.data.id === index) {
// 					if (event.data.success) {
// 						pre.outerHTML = event.data.html;
// 					} else {
// 						console.warn('Highlight failed:', event.data.error);
// 						restorePreContent(pre);
// 					}
// 					worker.removeEventListener('message', handleMessage);
// 					resolve(); // ← This is fine now with Promise<void>
// 				}
// 			};

// 			worker.addEventListener('message', handleMessage);
// 		});
// 	});

// 	await Promise.all(promises);
// 	worker.terminate();
// }

// function restoreOriginalContent(pres: NodeListOf<HTMLPreElement>): void {
// 	pres.forEach((pre: HTMLPreElement) => {
// 		pre.style.opacity = '1';
// 		if (pre.dataset.original) {
// 			pre.innerHTML = pre.dataset.original;
// 		}
// 	});
// }

// function restorePreContent(pre: HTMLPreElement): void {
// 	pre.style.opacity = '1';
// 	if (pre.dataset.original) {
// 		pre.innerHTML = pre.dataset.original;
// 	}
// }
