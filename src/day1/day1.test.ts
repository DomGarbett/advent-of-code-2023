import { day1Part1, day1Part2 } from "./day1";

describe("day1", () => {
  it("part 1 testInput", () => {

    const input = "src/day1/testInput.txt";

    const repsponse = day1Part1(input);

    expect(repsponse).toBe(142);
  });

  it("part 1 real input", () => {

    const input = "src/day1/input.txt";

    const repsponse = day1Part1(input);

    expect(repsponse).toBe(56397);
  });

  it("part 2 testInput", () => {

    const input = "src/day1/part2TestInput.txt";

    const repsponse = day1Part2(input);

    expect(repsponse).toBe(281);
  });

  it("part 2 real input", () => {

    const input = "src/day1/input.txt";

    const repsponse = day1Part2(input);

    expect(repsponse).toBe(55701);
  });

});
