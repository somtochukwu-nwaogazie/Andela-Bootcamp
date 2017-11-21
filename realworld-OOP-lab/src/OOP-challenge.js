export class Phone{
  constructor(type){
    this._type = type;
    this._photoCount = 0;
  }
  
  get type(){
    return this._type;
  }
  
  get photoCount(){
    return this._photoCount;
  }
  
  takePhoto(){
    this._photoCount+=1;
  }
}

export class Iphone extends Phone {
  constructor(type, model) {
    super(type);
    this._model = model;
  }
  get model(){
    return this._model;
  }
}

export class Samsung extends Phone {
  constructor(type, model) {
    super(type);
    this._model = model;
  }
  get model(){
    return this._model;
  }
}

export class Microsoft extends Phone{
  constructor(type, model){
    super(type);
    this._model = model;
  }
  get model(){
    return this._model;
  }
}
