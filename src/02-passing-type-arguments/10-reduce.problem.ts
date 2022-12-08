<<<<<<< HEAD:src/02-type-arguments/10-reduce.problem.ts
import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce<Record<string, { name: string }>>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
  expect(obj).toEqual({
    John: {
      name: "John",
    },
    Steve: {
      name: "Steve",
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
=======
import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];

const obj = array.reduce((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});

it("Should resolve to an object where name is the key", () => {
  expect(obj).toEqual({
    John: {
      name: "John",
    },
    Steve: {
      name: "Steve",
    },
  });

  type tests = [Expect<Equal<typeof obj, Record<string, { name: string }>>>];
});
>>>>>>> 8114de48bdc0d260fc56f6a0f986455ffaade3d2:src/02-passing-type-arguments/10-reduce.problem.ts
