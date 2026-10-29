const rows=[100, 200, 300, 150];
let minimum:number=rows[0];
let row:number=0;
for (let index = 1; index < rows.length; index++) {
    const element=rows[index];
   if (element<minimum) {
        minimum=element;
        row=index
   }   
}
console.log(`${row} is the index of ${minimum}`);
