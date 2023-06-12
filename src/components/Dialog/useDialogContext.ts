import { MouseEventHandler, createContext, useContext } from "react";

export type DialogContextObj = {
	closeModal: MouseEventHandler;
};

export const DialogContext = createContext<DialogContextObj | null>(null);

export const useDialogContext = (): DialogContextObj => {
	const context = useContext(DialogContext);
	if (!context) {
		throw new Error("DialogButtons must be used within Dialog component.");
	}
	return context;
};