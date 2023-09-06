function outerFunc() {
  var x = 10;
  var innerFunc = () => {
    console.log(x);
  };
  return innerFunc;
}

var Inner = outerFunc();
Inner();

//closure : 내부함수 내에서 외부함수 변수를 참조할때 원래는 소멸되어야 하지만 유지되는 것
