# Excel Merger  

This Node.js script merges all `.xlsx` files from the `xlsx/` directory into a single file named `merged.xlsx`.  

## Requirements  

- Node.js installed  
- `xlsx` package  

## Installation  

1. Clone this repository or download the script.  
2. Run the following command to install dependencies:  

   ```sh
   npm install xlsx
   ```

## Usage  

1. Place all `.xlsx` files you want to merge inside the `xlsx/` folder.  
2. Run the script:  

   ```sh
   node merge.js
   ```

3. The merged file `merged.xlsx` will be generated in the root directory.  

## Notes  

- The script combines all sheets into one file.  
- It assumes that all `.xlsx` files have the same structure (same columns).  
- If a file has multiple sheets, only the first one is used.  

