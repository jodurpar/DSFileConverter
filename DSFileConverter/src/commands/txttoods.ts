import * as XLSX from 'xlsx';
import { converterOptions } from "../interfaces/converterOptions";
import { readtextfile } from '../readers/readtextfile';
import { insertline } from './insertline';

export class TxtToOds {
    public static Execute(options: converterOptions) {
		const write_opts: XLSX.WritingOptions = {
			type: "buffer",
			cellDates: false,
			bookSST: false,
			bookType: "ods",
			sheet: options.firstSheetName,
			compression: false,
			Props: {
				Author: options.author,
				Company: options.company
			}
		};
		let textile = readtextfile.read(options.inputFile);
		const workbook = XLSX.utils.book_new();
		const ws1b = XLSX.utils.aoa_to_sheet([]);
		for (const element of textile) {
			insertline.insert(element, ws1b, options);
		}
		XLSX.utils.book_append_sheet(workbook, ws1b, options.firstSheetName);
		if (options.headers === false) {
			TxtToOds.deleteRow(ws1b, 0)
		}
		try {
			XLSX.writeFile(workbook, options.outputFile, write_opts)
		} catch (error) {
			console.log(`Can't write output file ${options.outputFile}`)
			//console.log(`Error: ${error.message}`);
			throw (error);
        }
	}
	private static ec(r:number, c:number) : string {
		return XLSX.utils.encode_cell({ r: r, c: c });
	}
	private static deleteRow(ws : XLSX.WorkSheet, row_index: number) {
		let variable = XLSX.utils.decode_range(ws["!ref"])
		for (let R = row_index; R < variable.e.r; ++R) {
			for (let C = variable.s.c; C <= variable.e.c; ++C) {
				ws[TxtToOds.ec(R, C)] = ws[TxtToOds.ec(R + 1, C)];
			}
		}
		variable.e.r--
		ws['!ref'] = XLSX.utils.encode_range(variable.s, variable.e);
	}
}