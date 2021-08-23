import { Dialog } from "./";

import { check_outros, group_outros, transition_out } from "svelte/internal";
import type { SvelteComponent } from "svelte";

// Workaround for https://github.com/sveltejs/svelte/issues/4056
const outroAndDestroy = (instance: SvelteComponent) => {
	if (instance.$$.fragment && instance.$$.fragment.o) {
		group_outros();
		transition_out(instance.$$.fragment, 0, 0, () => {
			instance.$destroy();
		});
		check_outros();
	} else {
		instance.$destroy();
	}
};

// TODO: Add support for props
const createDialog = () =>
	new Dialog({
		target: document.body,
		intro: true
	});

const removeDialog = (dialog: Dialog) => outroAndDestroy(dialog);

export { createDialog, removeDialog };
