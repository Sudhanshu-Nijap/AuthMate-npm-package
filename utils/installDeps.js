import { execSync } from "child_process";

export function installDeps(targetPath) {
    try {
        execSync("npm install --no-audit --no-fund --silent", { // Removes npm logs like added 152 packages...
            cwd: targetPath,
            stdio: "ignore" // completely hides terminal output
        });
    } catch {
        // rerun with logs so user can see error
        execSync("npm install", {
            cwd: targetPath, // current working directory
            stdio: "inherit" // shows terminal output       
        });

        process.exit(1); // exit with error code
    }
}
