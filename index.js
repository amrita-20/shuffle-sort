var gridArr = [
  "#000000",
  "#2B8EAD",
  "#333333",
  "#2B8EAD",
  "#6F98A8",
  "#BFBFBF",
  "#72C3DC",
  "#2F454E",
  "#72C3DC",
];
var grid = $(".grid");

for (var i = 1; i <= 9; i++) {
  grid.append(
    '<div class="card" style="background-color:' +
      gridArr[i] +
      ';">' +
      i +
      "</div>"
  );
}

const shuffle = function () {
  var cardNumbers = [];

  $(".card").each(function () {
    cardNumbers.push(this.innerHTML);
  });

  var theLength = cardNumbers.length - 1;
  var toSwap;
  var temp;

  for (var i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * (i + 1));
    temp = cardNumbers[i];
    cardNumbers[i] = cardNumbers[toSwap];
    cardNumbers[toSwap] = temp;
  }

  i = 0;

  $(".card").each(function () {
    this.innerHTML = cardNumbers[i];
    i++;
  });
};

const sortNo = function () {
  var cardNumbers = [];

  $(".card").each(function () {
    cardNumbers.push(+this.innerHTML);
  });

  cardNumbers.sort();

  i = 0;

  $(".card").each(function () {
    this.innerHTML = cardNumbers[i];
    i++;
  });
};
