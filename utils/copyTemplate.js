import fs from "fs-extra";

// Copy template of authenticator to target path  
export async function copyTemplate(authenticatorPath, targetPath) {
    await fs.copy(authenticatorPath, targetPath, { overwrite: false });
}
