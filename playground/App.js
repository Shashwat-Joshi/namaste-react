// console.log(this);

const obj = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

obj.a();
obj.b();

// function a() {
//   console.log(this);
// }

// const b = () => {
//   console.log(this);
// };

// a();
// b();
