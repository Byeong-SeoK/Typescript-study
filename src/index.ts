//import {init, exit} from "./myPackage"

//init()
//따로 myPackage.js에 대해 모듈화를 하지 않고
//이 함수가 바로 동작하는 이유는 타입스크립트가 
//코드를 보호하지 못하고 있기 때문이다.
//그런 이유는 tsconfig.json에서 strict 모드로 설정하지 않았기 때문이다.

import crypto, { createHash } from "crypto";

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
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain{
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0){
            return "";
        }
        else{
            return this.blocks[this.blocks.length - 1].hash;
        }
    }
    public addBlock(data: string){
        const newblock = new Block(this.getPrevHash(), this.blocks.length+1, data);
        this.blocks.push(newblock);
    }
    public getBlocks(){
        //return this.blocks;
        //private 값 자체를 반환하는 것은 해킹등의 보안적인 문제가 생길 수 있다.
        //그래서 새로운 배열을 만들어서 private의 정보를 그 배열에 담은 다음
        //그 새로운 배열을 return하는 것이 보안적으로 더 좋다.

        return [...this.blocks]
        //[]안에 ...을 함으로써 this.blocks의 정보가 그대로 복사되어 새로운 배열에 저장된다.
    }
}


const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Seconde one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());