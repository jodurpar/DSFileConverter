
import { CommandPrompt } from './src/commadprompt/commandprompt';
import { Command } from './src/commands/commands';

try {
    Command.Execute(CommandPrompt.GetOptions());
    process.exit();
} catch (error) {
    console.log(error.message)
    process.exit(-1);
}
