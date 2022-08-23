import {init, exit} from "myPackage"

//init()
//따로 myPackage.js에 대해 모듈화를 하지 않고
//이 함수가 바로 동작하는 이유는 타입스크립트가 
//코드를 보호하지 못하고 있기 때문이다.
//그런 이유는 tsconfig.json에서 strict 모드로 설정하지 않았기 때문이다.

init({
    url: "true"
})

exit(1)