import React, { useRef, useEffect } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

const XtermComponent = () => {
	// Créez une référence pour le conteneur du terminal
	const terminalRef = useRef(null);
	const xtermRef = useRef(null);

	useEffect(() => {
		// Créez une nouvelle instance de terminal
		const terminal = new Terminal();

		// Ajoutez l'addon Fit pour ajuster automatiquement la taille du terminal
		const fitAddon = new FitAddon();
		terminal.loadAddon(fitAddon);

		// Montez le terminal sur le conteneur du terminal
		terminal.open(terminalRef.current);

		// Gardez une référence à l'instance de terminal pour une utilisation future
		xtermRef.current = terminal;

		// Définissez une fonction pour envoyer les commandes du terminal à votre application
		terminal.onData((data) => {
			// Ici, vous pouvez envoyer les données du terminal à votre backend ou les traiter localement
			console.log("Terminal Input:", data);
		});

		// Nettoyage lors du démontage
		return () => {
			if (xtermRef.current) {
				xtermRef.current.dispose();
			}
		};
	}, []);

	// Fonction pour envoyer des commandes au terminal
	const sendCommand = (command) => {
		if (xtermRef.current) {
			xtermRef.current.write(command + "\r\n");
		}
	};

	// Styles pour le conteneur du terminal
	const containerStyle = {
		width: "80%",
		height: "200px",
		backgroundColor: "#282c34",
	};

	return <div ref={terminalRef} style={containerStyle}></div>;
};

export default XtermComponent;
