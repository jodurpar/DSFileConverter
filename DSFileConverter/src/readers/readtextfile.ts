import * as fs from 'fs';

export class ReadTextFile {
    public static read(filename: string): Array<string> {
        return fs.readFileSync(filename).toString().split('\r\n');
    }
}