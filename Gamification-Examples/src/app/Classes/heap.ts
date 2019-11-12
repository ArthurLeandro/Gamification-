
export class HeapSort {}

  // number1: number;
  // number2: number;
  // parent:number;
  // firstSon:number;
  // secondSon:number;

  // constructor() {
  //   this.heap = null;
  //   this.parent=this.firstSon=this.secondSon=this.number1=this.number2=0;
  // }

  // private SetHeap(_array: Array<RankingEntry>): void {
  //   this.heap = _array;
  //   console.log("It just setted the heap");
  // }
  // public HeapSort(_array: Array<RankingEntry>, _typeOfSort: string): Array<RankingEntry> {
  //   this.SetHeap(_array);
  //   this.parent= (this.heap.length / 2)-1;
  //   this.secondSon= this.heap.length ;
  //   this.firstSon= this.heap.length - 1;
  //   for (this.parent; this.parent >= 0; this.parent--) {
  //     this.Swap(this.heap[this.firstSon], this.heap[this.secondSon], _typeOfSort);
  //     this.Swap(this.heap[this.parent], this.heap[this.firstSon], _typeOfSort);
  //     // console.log("The element  Parent: "+ this.parent);
  //     // console.log("The element  FirstSon: " + this.firstSon);
  //     // console.log("The element  SecondSon: " + this.secondSon);
  //     this.firstSon -=2;
  //     this.secondSon -=2;
  //   }
  //   for (let index = 0; index < this.heap.length; index++) {
  //     console.log(this.heap[index].points);      
  //   }
  //   return this.heap;
  // }
  // public Compare(i: number, j: number): boolean {
  //   let shouldChange: boolean = false;
  //   if (i < j) {
  //     shouldChange = true;
  //   }
  //   // console.log("The result of Compare method is " + shouldChange);
  //   return shouldChange;
  // }
  // public Swap(_Entry1: RankingEntry, _Entry2: RankingEntry, _typeOfSort: string): void {
  //   if (_Entry1 === null || _Entry1 === undefined|| _Entry2 === null || _Entry2 === undefined) {
  //     console.log("Uma das entradas do ranking estava nula ou indefinida.");
  //     return null;
  //   }
  //   if (this.ExtractValueByType(_Entry1, _Entry2, _typeOfSort)) {
  //     this.ChangeElementPositions();
  //   }
  // }
  // public ChangeElementPositions(): void {
  //   let temporaryNumber = this.heap[this.firstSon];
  //   this.heap[this.firstSon] = this.heap[this.secondSon];
  //   this.heap[this.secondSon] = temporaryNumber;
  //   console.log("The value that was into the array at the position "+ this.heap[this.firstSon].name + " was changed with the value in the position "+ this.heap[this.secondSon].name);  
  // }
  
  // public ExtractValueByType(_Entry1: RankingEntry, _Entry2: RankingEntry, _typeOfSort: string): boolean {
  //   switch (_typeOfSort) {
  //     case " PONTUAÇÃO ":
  //       this.number1 = _Entry1.points;
  //       this.number2 = _Entry2.points;
  //       break;
  //     case " EDUCOIN ":
  //       this.number1 = _Entry1.educoins;
  //       this.number2 = _Entry2.educoins;
  //       break;
  //     case " LEVEL ":
  //       this.number1 = _Entry1.level;
  //       this.number2 = _Entry2.level;
  //       break;
  //     case " EXPERIÊNCIA ":
  //       this.number1 = _Entry1.experience;
  //       this.number2 = _Entry2.experience;
  //       break;
  //     default:
  //       // console.log("The type wasnt understood so its gonna return false");
  //       return false;
  //   }
  //   // console.log("It just extracted the values and based into the actual type its gonna  make the Comparison "+ this.number1 + " " + this.number2);
  //   return this.Compare(this.number1, this.number2);
  // }
