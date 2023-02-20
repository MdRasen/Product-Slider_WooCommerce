// selecting dom element
const element = document.querySelector(".carousel"); //add your selector name .class/#id

// call the function slider parameters:-
// 1. parent/main element
// 2. Object for options -eg: {auto:true}
const mySlider = slider(element, { auto: false });

const previousBtn = document.querySelector("#pre");
const nextBtn = document.querySelector("#nxt");

mySlider.click(previousBtn); //2nd parameter -1 refers to negative positioning & default is +1
mySlider.click(nextBtn); // default is +1 so you don't have to write twice

const $ = document.querySelector.bind(document);
const a = slider($(".carousel"), {
  show: 4, //Number of items shown per page
  to: 1, //Number of items change
  responsive: {
    900: {
      show: 4,
      to: 1,
    },
    700: {
      show: 3,
      to: 1,
    },
    500: {
      show: 2,
      to: 1,
    },
    200: {
      show: 1,
      to: 1,
    },
  },
  auto: { delay: 2500 },
});

a.click($("#pre"), -1);
a.click($("#nxt"));
