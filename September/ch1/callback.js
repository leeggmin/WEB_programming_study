function getData(callbaackFunc) {
  let result = true;
  //   callbaackFunc(result, callbaackFunc2);

  return new Promise((resolve, reject) => {
    if (result == true) {
      resolve(result);
    } else reject(result);
  });
}

var callbackFunc1 = function (result) {
  return new Promise((resolve, reject) => {
    if (result == true) resolve(result);
    else reject(result);
  });
};

// var callbaackFunc1 = function (response, callbaackFunc) {
//   if (response == true) {
//     callbaackFunc(response);
//   } else {
//     console.log("callbackFun1 Error");
//   }
// };

var callbackFunc2 = function (response) {
  console.log(response);
};

getData()
  .then((response) => callbackFunc1(response))
  .then((response) => callbackFunc2(response))
  .catch((error) => {
    console.log("error " + error);
  });

async function getData_await() {
  try {
    let result = await getData();
    result = await callbackFunc1(result);
    if (result) {
      console.log("succes");
      callbackFunc2(result);
    }
  } catch (error) {
    console.log("failed");
    console.log(error);
  }
}

getData_await();
