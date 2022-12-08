<<<<<<< HEAD:src/03-generic-slots/13-typed-object-keys.solution.1.ts
import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * You can either specify the entire object in
 * the generic slot...
 */
const typedObjectKeys = <TObject extends {}>(obj: TObject) => {
  return Object.keys(obj) as Array<keyof TObject>;
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
=======
import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * You can either specify the entire object in
 * the generic slot...
 */
const typedObjectKeys = <TObject extends object>(obj: TObject) => {
  return Object.keys(obj) as Array<keyof TObject>;
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
>>>>>>> 8114de48bdc0d260fc56f6a0f986455ffaade3d2:src/03-art-of-type-arguments/13-typed-object-keys.solution.1.ts
