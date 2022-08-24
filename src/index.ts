//import {init, exit} from "./myPackage"

//init()
//따로 myPackage.js에 대해 모듈화를 하지 않고
//이 함수가 바로 동작하는 이유는 타입스크립트가 
//코드를 보호하지 못하고 있기 때문이다.
//그런 이유는 tsconfig.json에서 strict 모드로 설정하지 않았기 때문이다.

import crypto from "crypto";

interface BlockShape{
    hash: string,
    prevHash: string,
    height: number,
    data: string
}

class Block implements BlockShape{
    public hash: string;
    //hash는 나머지 3가지 property의 연산을 통해 값이 결정되기 때문에
    //hash는 constructor에 넣지 않고 외부에 따로 선언한다.
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, height, data)
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`;
    }
}