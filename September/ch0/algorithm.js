var jumin_nums = "0602024685716";
console.log("< 주민정보 >");
checkAdult(jumin_nums);

function checkAdult(jumin) {
  if (jumin.length != 13) {
    console.log("주민번호는 13자리로 구성되어야 합니다.");
    return;
  }

  let Gender = jumin.substring(6, 7);
  let BirthYear = jumin.substring(0, 2);
  Gender = Number(Gender);
  BirthYear = Number(BirthYear);

  let CurrentYear = new Date().getFullYear();

  if (Gender == 1 || Gender == 2) {
    BirthYear = 1900 + BirthYear;
  } else if (Gender == 3 || Gender == 4) {
    BirthYear = 2000 + BirthYear;
  } else {
    console.log("잘못된 주민번호입니다.");
    return;
  }

  let Age = CurrentYear - BirthYear;

  if (Gender == 1 || Gender == 3) {
    Gender = "남자";
  } else if (Gender == 2 || Gender == 4) {
    Gender = "여자";
  }
  console.log(
    "성별: " +
      Gender +
      "\n생년월일: " +
      BirthYear +
      jumin.substring(2, 5) +
      "\n만 나이: " +
      Age
  );

  //   if (Age > 19) {
  //     console.log("\n당신은 성인입니다.");
  //   } else {
  //     console.log("\n당신은 미성년자입니다.");
  //   }

  console.log(Age >= 19 ? "\n당신은 성인입니다." : "\n당신은 미성년자입니다.");
}
