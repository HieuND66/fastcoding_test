var tab1 = document.querySelector("#tab1");
var tab2 = document.querySelector("#tab2");
var tab3 = document.querySelector("#tab3");

tab1.onclick = function () {
  console.log(333);
  tab1.classList.add("tab-active");
  tab2.classList.remove("tab-active");
  tab3.classList.remove("tab-active");
};
tab2.onclick = function () {
  tab2.classList.add("tab-active");
  tab1.classList.remove("tab-active");
  tab3.classList.remove("tab-active");
};
tab3.onclick = function () {
  tab3.classList.add("tab-active");
  tab1.classList.remove("tab-active");
  tab2.classList.remove("tab-active");
};
