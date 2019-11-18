export namespace DesignPatterns{

  export namespace SingletonDesignPattern{
    
    export interface ISingleton{
      instance:ISingleton;
      GetInstance():ISingleton;
    }
  }
  export namespace FaçadeDesignPattern{
    export interface IMainSystem{
      subSystems:ISubSystem[];
    }
    export interface ISubSystem{
      PerformAction():void;
    }
  }
  export namespace ObservableDesignPattern{
    export interface IObserver{
      Update():void;
    }
    export interface ISubject{
      RegisterObserver(_observer:IObserver):void;
      UnregisterObserver(_observer:IObserver):void;      
      NotifyAllObservers():void;      
      NotifyObserver(_observer:IObserver):void;
    }
  }

}