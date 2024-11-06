import { app } from "../main";

export async function loadPlugin(url: string) {
    try {
        const response = await fetch(url);
        const pluginCode = await response.text();

        const blob = new Blob([pluginCode], { type: 'application/javascript' });
        const pluginUrl = URL.createObjectURL(blob);
        const pluginModule = await import(/* @vite-ignore */ pluginUrl);

        app.use(pluginModule.default);
        console.log("Encrypted plugin loaded and applied");
    } catch (error) {
        console.error("Failed to load encrypted plugin:", error);
    }
}