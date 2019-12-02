import {DesignPatterns} from '../namespaces/design-patterns';
export namespace DataStructure {
  export namespace ElementData {
    export class Data<T>{
      dataInsideThisElements:T;
      id:number;
      constructor(_id:number){
        this.id = _id;
      }
    }
    export class Element<T>{
      data: DataStructure.ElementData.Data<T>;
      next: DataStructure.ElementData.Element<T>;
      constructor(_data:Data<T>){
        this.data = _data;
        this.next = null;
      }
    }
  }
  export namespace List {
    export class List<T>{
      lenght: number;
      sentinel: DataStructure.ElementData.Element<T>;
      last: DataStructure.ElementData.Element<T>;
      constructor() {
        this.lenght = 0;
        this.sentinel.data = null;
        this.sentinel.next = null;
        this.last = this.sentinel;
      }
      public AddElement(_newElement: DataStructure.ElementData.Element<T>) {
        this.last.next = _newElement;
        this.last = _newElement;
        this.AddToCounter();
      }
      public RemoveEspecificElement(_element: DataStructure.ElementData.Element<T>): DataStructure.ElementData.Element<T> {
        let auxiliary: DataStructure.ElementData.Element<T> = this.sentinel;
        while (_element != auxiliary.next) {
          auxiliary = auxiliary.next;
        }
        let elementToBeReturned: DataStructure.ElementData.Element<T> = auxiliary.next;
        auxiliary.next = elementToBeReturned.next;
        if (elementToBeReturned == this.last) {
          this.last = auxiliary;
        }
        this.SubtractToCounter();
        return elementToBeReturned;
      }
      public GetIndexOfElement(_data: DataStructure.ElementData.Data<T>): number {
        let currentElement: DataStructure.ElementData.Element<T>;
        let index: number = 0;
        while (_data != currentElement.data) {
          currentElement = currentElement.next;
          index++;
        }
        if (index == 0) {
          throw new Error("The element wasnt found inside the list.");
        }
        return index;
      }
      public GetSentinel() {
        return this.sentinel;
      }
      public ClearList() {
        this.sentinel.next = null;
        this.lenght = 0;
      }
      public AddToCounter(): void {
        this.lenght++;
      }
      public SubtractToCounter(): void {
        this.lenght--;
      }
      public CreateArrayFromList():ElementData.Element<T>[]{
        let auxiliaryArray:ElementData.Element<T>[];
        let auxiliaryElement:ElementData.Element<T> = this.sentinel.next;
        let index:number = 1;
        while (auxiliaryElement.next!=null) {
          auxiliaryArray[index] = auxiliaryElement;
          auxiliaryElement = auxiliaryElement.next;
          index++;
        }
        return auxiliaryArray;
      }
    }
  }
}