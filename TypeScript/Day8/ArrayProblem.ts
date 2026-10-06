class MyArray {
    length: number;
    data: { [index: number]: any };

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item: any): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
}

const myArray = new MyArray();
console.log(myArray.push(1)); 