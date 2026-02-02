import pc from "picocolors";

export const info = (msg) => console.log(pc.cyan(msg));
export const success = (msg) => console.log(pc.green(msg));
export const error = (msg) => console.log(pc.red(msg));
