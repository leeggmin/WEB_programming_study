const timeout = setTimeout(() => {
  //해당 함수가 선언만 했는데 실행되는 이유? -> 함수를 선언할 때 다른 함수를 호출하기 때문에
  console.log("1.5초 만료됨");
}, 1500);

const interval = setInterval(() => {
  console.log("1초 마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다.");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다.");
});

clearImmediate(immediate2);
