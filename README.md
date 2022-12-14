# DSFileConverter
Author: (&copy;) [@JoseDuranPareja](https://github.com/jodurpar) / (September 2022)
Portions of (&copy;) https://sheetjs.com/ Community Edition

## Build in VisualStudio 2022

   - Open solution with VisualStudio 2022
   - Goto solution item and rebuild 
   - If you want run from ide, configure params in project/properties

## Usage without webpack

### Go to dist folder and run 'node app [params]

	|      Param      |                 Description                  |
	|-----------------|----------------------------------------------|
	| '--f'           |                                              |
	| '--file'        | Json file for params, no other params needed |
	| '--i'           |                                              |
	| '--input'       | Input file                                   |
	| '--it'          |                                              |
	| '--inputType'   | txt for now                                  |
	| '--o'           |                                              |
	| '--output'      | Output file                                  |
	| '--ot'          |                                              |
	| '--outputType'  | ods for now                                  |
	| '--s'           |                                              |
	| '--sheet'       | First sheet name                             |
	| '--d'           |                                              |
	| '--delimiter'   | Char delimiter columns in txt                |
	| '--h'           |                                              |
	| '--headers'     | yes to include headers in outpur file        |
	| '--a'           |                                              |
	| '--author'      | Include author copyright                     |
	| '--c'           |                                              |
	| '--company'     | Include company copyright                    |

## Usage With webpack
### You can use webpack to minimize and compress in one file all the js.

 - Go to main folder (where webpack.config.ts exits) and at commandprompt run "webpack", 
 - When ends, in the dist folder must be a dsfileconverter.js file
 - At command prompt run "node dsfileconverter.js" 

### Json file example

**For read parameters from file write Json whith this interface:

      {
	    "inputFile": "Input filename with paths",
        "outputFile": "Output filename with paths",
        "inputFileType": "txt",                      // only txt for now
        "outputFileType": "ods",                     // only one for now
        "firstSheetName": "Sheet1",                  // Only one Sheet for now
        "delimiter": "|",                            // character delimiter
        "headers": false,                            // true or false
        "author": "",
        "company": ""
     }

