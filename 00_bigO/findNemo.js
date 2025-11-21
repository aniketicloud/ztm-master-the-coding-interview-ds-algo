const nemo = ["nemo"];
const largeArray = new Array(10000000);

const findNemo = (array) => {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo..!");
    }
  }

  let t1 = performance.now();
  console.log("Call to finding Nemo took" + (t1 - t0) + " milliseconds");
};

findNemo(largeArray);
