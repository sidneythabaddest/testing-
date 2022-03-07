//Getting all Required elements

// const searchWrapper = document.querySelectorAll(".search-input");
// let inputBox = document.querySelectorAll(".input-value");
// const suggBox = document.querySelectorAll(".autocom-box");

// //if user press any key and release
// inputBox.onkeyup = (e) => {
//   console.log(e.target.value);
// };

const searchWrapper = document.querySelector(".search-input");
let inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value;

  let emptyArray = [];
  if (userData) {
    emptyArray = suggestion.filter((data) => {
      //filtering array vaule
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<a href="submenu/${data}.html"><li> ${data} </li></a>`);
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active"); //show autocomplet box
    showSuggestion(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute  in all tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); // remove autocomplet box
  }
};

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData; //passing the user selected list item data in tex
  searchWrapper.classList.remove("active"); // remove autocomplet box
}

function showSuggestion(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
