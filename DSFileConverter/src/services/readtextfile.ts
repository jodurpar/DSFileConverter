import * as fs from 'fs';
import { ConverterOptions } from '../interfaces/converterOptions';

export class ReadTextFile {
    public static read(filename: string): Array<string> {
        try {
            return fs.readFileSync(filename).toString().split('\r\n');
        } finally {
            // Nothing to do
        }
    }
    public static readAsJson(filename: string): ConverterOptions {
        try {
            return JSON.parse(fs.readFileSync(filename).toString()) as ConverterOptions;
        } finally {
            // Nothing to do
        }
    }
}