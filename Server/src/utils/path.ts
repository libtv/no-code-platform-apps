import path from "path";
import fs from "fs";

export function getDirectory(myPath: string) {
    const dir = path.join(__dirname, "../" + myPath);
    let dirs = fs.readdirSync(dir, { encoding: "utf8" });
    let apiDirs = dirs.map((val) => {
        return { dir: dir + "/" + val, api: val };
    });

    return apiDirs;
}

export async function importDirectory(directory: string): Promise<any> {
    return await import(directory);
}
