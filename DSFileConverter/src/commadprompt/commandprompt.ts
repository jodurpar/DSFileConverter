import { ConverterOptions } from "../interfaces/converterOptions";


export class CommandPrompt {
    public static GetOptions(): ConverterOptions {
        let converterOptions: ConverterOptions = {} as ConverterOptions;
        for (let j = 0; j < process.argv.length; j++) {
            let arg = process.argv[j].toLowerCase();
            switch (arg) {

                case '--i':
                case '--input':
                    converterOptions.inputFile = process.argv[j + 1];
                    break;
                case '--it':
                case '--inputtype':
                    converterOptions.inputFileType = process.argv[j + 1];
                    break;
                case '--o':
                case '--output':
                    converterOptions.outputFile = process.argv[j + 1];
                    break;
                case '--ot':
                case '--outputtype':
                    converterOptions.outputFileType = process.argv[j + 1];
                    break;
                case '--s':
                case '--sheet':
                    converterOptions.firstSheetName = process.argv[j + 1];
                    break;
                case '--d':
                case '--delimiter':
                    converterOptions.delimiter = process.argv[j + 1];
                    break;
                case '--a':
                case '--author':
                    converterOptions.author = process.argv[j + 1];
                    break;
                case '--c':
                case '--company':
                    converterOptions.company = process.argv[j + 1];
                    break;
                case '--h':
                case '--headers':
                    converterOptions.headers = process.argv[j + 1] === 'yes';
                    break;
                default: break;
            }
            
        }
        return converterOptions;
    }
}