// Exercise #4
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
let fetchData = async () => {
  let profile = await getJohnProfile();

  console.log(profile);
};

fetchData();
