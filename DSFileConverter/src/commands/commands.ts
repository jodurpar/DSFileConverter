import { converterOptions } from "../interfaces/converterOptions";
import { TxtToOds } from "./txttoods";


export class Command {
    static commands: { [K: string]: Function } = {
        txttoods: TxtToOds.Execute,
    };
    public static Execute(options: converterOptions) {
        try {
            let commandName = `${options.inputFileType}to${options.outputFileType}`;
            if (this.commands[commandName] !== undefined) {
                this.commands[commandName](options);
                console.log(`File ${options.outputFileType} created!`)
            } else {
                console.log(`Can't convert ${options.inputFileType} to ${options.outputFileType} (missing function: ${commandName})`)
            }
        } catch (error) {
            throw (error);
        }
    }
}