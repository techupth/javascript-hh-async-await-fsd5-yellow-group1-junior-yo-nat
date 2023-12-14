//Exercise #1

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

// Start coding here
let profilePromise = getJohnProfile();
profilePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
