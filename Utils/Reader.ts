export class Reader {
    static readFile(files: any, onLoadCallback: any): any {
        if (files.length == 0) return [];
        let reader: any = new FileReader();
        // reader.onload = onLoadCallback;
        reader.onload = (e: any) => {
            const file = e.target.result;
            const lines = file.split(/\r\n|\n/);
            console.log(lines.join('\n'));
        }
    }
}
