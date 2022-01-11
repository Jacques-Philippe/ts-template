import { add } from "./add";
(async () => {
  const arg1 = 1;
  const arg2 = 2;
  console.log(`Hello world! Fun fact, ${arg1} + ${arg2} = ${add(arg1, arg2)}`);
})();
