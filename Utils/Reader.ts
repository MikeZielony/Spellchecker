export class Reader {

    static readFile(files: any): any {
        let file: any;
        let lines: string[]=[];
        if (files.length == 0) return [];
        file = files[0];
        let reader: any = new FileReader();

        return reader.onload = (e: any) => {
            const file = e.target.result;

            // console.log(lines)
        };
        /*reader.onerror = (e: any) => alert(e.target.error.name);
        return reader.readAsText(file);*/
    }
}