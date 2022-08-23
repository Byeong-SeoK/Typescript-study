interface Config{
    url: string;
}

declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}
//myPackage.d.ts에서 myPackage.js를 모듈화 하였으므로
//myPackage.js를 갖다쓰는 index.ts에서 더 이상 모듈이 없다는 오류는 발생하지 않는다.
//이때 myPackage.js 안에 있는 함수를 typescript 형태로 call signature를 만들어야지만
//index.ts에서 온전히 myPackage.js에서 정의한 함수를 사용할 수 있다.