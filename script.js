
let friendsArray = [];

let friendsObject = function (pFriend, pAnimal) {
    this.Friend = pFriend;
    this.Animal = pAnimal;
}

//---------- wait until document load event --------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
      friendsArray.push(new friendsObject(document.getElementById("friendname").value, 
      document.getElementById("favoriteanimal").value));
    });

    document.getElementById("buttonClear").addEventListener("click", function () {
      document.getElementById("friendname").value = "";
      document.getElementById("favoriteanimal").value = "";
    });

    document.getElementById("buttonSortFriend").addEventListener("click", function () {
      friendsArray.sort(dynamicSort("Friend"));
      createList();
  });

    document.getElementById("buttonSortAnimal").addEventListener("click", function () {
      friendsArray.sort(dynamicSort("Animal"));
      createList();
  });

//---------- page before show ------------------------------------------------------------

  $(document).on("pagebeforeshow", "#list", function (event) { 
  createList();
  });

});

function createList() {
    // clear list
    var theList = document.getElementById("myul");
    theList.innerHTML = "";

    friendsArray.forEach(function (element,) {   
        var li = document.createElement('li');
        li.innerHTML =  element.Friend + ":  " + element.Animal;
        theList.appendChild(li);
    });

};
  
function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}