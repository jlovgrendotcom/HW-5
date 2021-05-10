
let friendsArray = [];

let friendsObject = function (pFriend, pAnimal,pFiction,pColor) {
    this.Friend = pFriend;
    this.Animal = pAnimal;
    this.Fiction = pFiction;
    this.Color = pColor;
}

//---------- wait until document load event --------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
      friendsArray.push(new friendsObject(document.getElementById("friendname").value, 
      document.getElementById("favoriteanimal").value, document.getElementById("fictionanimal").value,document.getElementById("colors").value ));
    });

    document.getElementById("buttonClear").addEventListener("click", function () {
      document.getElementById("friendname").value = "";
      document.getElementById("favoriteanimal").value = "";
      document.getElementById("fictionanimal").value = "";
      document.getElementById("colors").value = "";
    });

    document.getElementById("buttonSortFriend").addEventListener("click", function () {
      friendsArray.sort(dynamicSort("Friend"));
      createList();
  });

    document.getElementById("buttonSortAnimal").addEventListener("click", function () {
      friendsArray.sort(dynamicSort("Animal"));
      createList();
  });
    document.getElementById("buttonSortFiction").addEventListener("click", function () {
      friendsArray.sort(dynamicSort("Fiction"));
      createList();
  });
    document.getElementById("buttonSortColor").addEventListener("click", function () {
      friendsArray.sort(dynamicSort("Color"));
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
        li.innerHTML =  element.Friend + ":  " + element.Animal+ ":  " + element.Fiction+ ":  " + element.Color;
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
