//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");

  const updateOutput = (message) => {
    output.textContent = message;
  };

  const resolveAfter = (time, value) =>
    new Promise((resolve) => setTimeout(() => resolve(value), time));

  resolveAfter(2000, Number(input))
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return resolveAfter(1000, number * 2);
    })
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return resolveAfter(1000, number - 3);
    })
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return resolveAfter(1000, number / 2);
    })
    .then((number) => {
      updateOutput(`Result: ${number}`);
      return resolveAfter(1000, number + 10);
    })
    .then((number) => {
      updateOutput(`Final Result: ${number}`);
    })
    .catch((error) => {
      updateOutput(`Error: ${error.message}`);
    });
});
