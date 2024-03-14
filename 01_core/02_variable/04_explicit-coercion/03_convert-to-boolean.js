/* explicit-coercion(명시적 타입 변환) */

/* 03. boolean 타입으로 변환 */

// 1. Boolean 생성자 함수를 new 연산자 없이 호출
console.log(Boolean('JavaScript'));             // true
console.log(Boolean(''));                       // false
console.log(Boolean(1));                        // true
console.log(Boolean(0));                        // false
console.log(Boolean(NaN));                      // false
console.log(Boolean(Infinity));                 // true
console.log(Boolean(null));                     // false
console.log(Boolean(undefined));                // false
console.log(Boolean({}));                       // true
console.log(Boolean([]));                       // true

console.log();

// 2. 논리 부정 연산자 !를 두 번 사용하는 방법
console.log(Boolean(!!'JavaScript'));             // true
console.log(Boolean(!!''));                       // false
console.log(Boolean(!!1));                        // true
console.log(Boolean(!!0));                        // false
console.log(Boolean(!!NaN));                      // false
console.log(Boolean(!!Infinity));                 // true
console.log(Boolean(!!null));                     // false
console.log(Boolean(!!undefined));                // false
console.log(Boolean(!!{}));                       // true
console.log(Boolean(!![]));                       // true

// false, undefined, null, 0, NaN, ''(빈 문자열)은 Falsy 값
// 이 외의 모든 값은 Truthy 값