import * as XLSX from 'xlsx';
import { converterOptions } from '../interfaces/converterOptions';

export class insertline {
    public static insert(line: string, worksheet: XLSX.WorkSheet, options : converterOptions): void {
        var columns = line.split(options.delimiter);
        XLSX.utils.sheet_add_aoa(worksheet, [columns], { origin: -1 });
    }
}