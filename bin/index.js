#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";
import { copyTemplate } from "../utils/copyTemplate.js";
import { installDeps } from "../utils/installDeps.js";
import { info, success } from "../utils/logger.js";
import fs from "fs-extra";

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url); // converts file url to file path
const __dirname = path.dirname(__filename); // returns the directory name of the file path

async function main() {
    // 1. Project name
    const { projectName } = await inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "Enter project name:",
            default: "authmate-app"
        }
    ]);

    // 2. Auth provider (firebase, supabase, clerk)
    const { authProvider } = await inquirer.prompt([
        {
            type: "list",
            name: "authProvider",
            message: "Select authentication provider",
            choices: [
                { name: chalk.yellow("Firebase"), value: "firebase" },
                { name: chalk.green("Supabase"), value: "supabase" },
                { name: chalk.magenta("Clerk"), value: "clerk" }
            ],
            default: "firebase"
        }
    ]);

    // 3. Authenticator path (template of authenticator)
    const authenticatorPath = path.join(
        __dirname,
        "../authentications", // parent directory
        authProvider // child directory
    );

    // 4. Target path (created project)
    const targetPath = path.join(process.cwd(), projectName); // current working directory + project name   

    info("\nCreating project...");
    // 5. Copy template of authenticator to target path (created project)
    await copyTemplate(authenticatorPath, targetPath);

    // 5b. Update package.json name
    const packageJsonPath = path.join(targetPath, "package.json");
    try {
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.name = projectName;
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 4 });
    } catch (error) {
        console.error("Error updating package.json:", error);
    }

    info("Installing dependencies...");
    // 6. Install dependencies of created project 
    installDeps(targetPath);

    success("\nProject ready!");
    console.log(`
Next steps:
  cd ${projectName}
  npm run dev
`);
}

main();
