import { readFileIntoArray } from "../helpers/inputHelper";

const day1Part1 = (input: string) => {
  const fileArray: string[] = readFileIntoArray(input);

  const returningValue = fileArray.map((item) => {
    const itemArray = item.replace(/\D/g, "").split("");

    return parseInt(itemArray[0] + itemArray[itemArray.length - 1]);
  });

  return returningValue.reduce((partialSum, a) => partialSum + a, 0);
};

const day1Part2 = (input: string) => {
  const fileArray: string[] = readFileIntoArray(input);
  const returningValue = fileArray.map((item) => {
    const firstNum = findFirstNumberInString(item);
    const lastNum = findLastNumberInString(item);

    return (parseInt(firstNum + lastNum));
  });


  return returningValue.reduce((partialSum, a) => partialSum + a, 0);
};

const findFirstNumberInString = (string: string) => {
  const one = string.search(`1|one`);
  const two = string.search(`2|two`);
  const three = string.search(`3|three`);
  const four = string.search(`4|four`);
  const five = string.search(`5|five`);
  const six = string.search(`6|six`);
  const seven = string.search(`7|seven`);
  const eight = string.search(`8|eight`);
  const nine = string.search(`9|nine`);

  const arrayOfAll = [
    { key: one, value: "1" },
    { key: two, value: "2" },
    { key: three, value: "3" },
    { key: four, value: "4" },
    { key: five, value: "5" },
    { key: six, value: "6" },
    { key: seven, value: "7" },
    { key: eight, value: "8" },
    { key: nine, value: "9" },
  ];

  const resp = arrayOfAll.filter(x=>x.key !== -1).sort((a, b) => a.key - b.key)
  return resp[0].value;

};



const findLastNumberInString = (string: string) => {

const reversedString = string.split("").reverse().join("");;

    const one = reversedString.search(`1|eno`);
    const two = reversedString.search(`2|owt`);
    const three = reversedString.search(`3|eerht`);
    const four = reversedString.search(`4|ruof`);
    const five = reversedString.search(`5|evif`);
    const six = reversedString.search(`6|xis`);
    const seven = reversedString.search(`7|neves`);
    const eight = reversedString.search(`8|thgie`);
    const nine = reversedString.search(`9|enin`);
  
    const arrayOfAll = [
        { key: one, value: "1" },
        { key: two, value: "2" },
        { key: three, value: "3" },
        { key: four, value: "4" },
        { key: five, value: "5" },
        { key: six, value: "6" },
        { key: seven, value: "7" },
        { key: eight, value: "8" },
        { key: nine, value: "9" },
      ];
  
    const resp = arrayOfAll.filter(x=>x.key !== -1).sort((a, b) => a.key -b.key)
   return resp[0].value;
};


export { day1Part1, day1Part2 };
