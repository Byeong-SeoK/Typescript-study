// @ts-check
/**
 * Initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
//위 코드 덕분에 타입스크립트는 자바스크립트 파일을 확인할 수 있게 된다.
//뿐만 아니라 init함수의 config 인자가 객체이고 그 객체 안에는
//boolean 타입의 debug, string 타입의 url이 property로 존재하고 있음을 알려준다.
//또 cofig를 받는 함수의 return값이 void임을 알려준다.

export function init(config){
    return true;
}


/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code+1;
}