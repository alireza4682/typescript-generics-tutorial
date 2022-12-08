<<<<<<< HEAD:src/03-generic-slots/16-class-names-creator.problem.ts
import { expect, it } from "vitest";

const createClassNamesFactory =
  <T extends string>(classes: Record<T, string>) =>
  (type: T, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(" ");
  };

const getBg = createClassNamesFactory({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});

it("Should let you create classes from a className factory", () => {
  expect(getBg("primary")).toEqual("bg-blue-500");
  expect(getBg("secondary")).toEqual("bg-gray-500");
});

it("Should let you pass additional classes which get appended", () => {
  expect(getBg("primary", "text-white", "rounded", "p-4")).toEqual(
    "bg-blue-500 text-white rounded p-4"
  );
});

it("Should not let you pass invalid classes", () => {
  // @ts-expect-error
  getBg("123123");
});

it("Should not let you pass an invalid object to createClassNamesFactory", () => {
  // @ts-expect-error
  createClassNamesFactory([]);

  // @ts-expect-error
  createClassNamesFactory(123);

  createClassNamesFactory({
    // @ts-expect-error
    a: 1,
  });
});
=======
import { expect, it } from "vitest";

const createClassNamesFactory =
  (classes: unknown) =>
  (type: unknown, ...otherClasses: unknown[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(" ");
  };

const getBg = createClassNamesFactory({
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
});

it("Should let you create classes from a className factory", () => {
  expect(getBg("primary")).toEqual("bg-blue-500");
  expect(getBg("secondary")).toEqual("bg-gray-500");
});

it("Should let you pass additional classes which get appended", () => {
  expect(getBg("primary", "text-white", "rounded", "p-4")).toEqual(
    "bg-blue-500 text-white rounded p-4",
  );
});

it("Should not let you pass invalid classes", () => {
  // @ts-expect-error
  getBg("123123");
});

it("Should not let you pass an invalid object to createClassNamesFactory", () => {
  // @ts-expect-error
  createClassNamesFactory([]);

  // @ts-expect-error
  createClassNamesFactory(123);

  createClassNamesFactory({
    // @ts-expect-error
    a: 1,
  });
});
>>>>>>> 8114de48bdc0d260fc56f6a0f986455ffaade3d2:src/03-art-of-type-arguments/16-class-names-creator.problem.ts
