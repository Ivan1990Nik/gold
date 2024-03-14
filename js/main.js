/* var uzer = {};
uzer ["leng"] = 5;
uzer ["name"] = "ivan";
uzer ["femali"] = "pelevin";
console.log(uzer); */


/* var uzer = {
  name: "ivan",
  legs: 34,
  famili: "pelevin"
};
console.log(uzer.famili); */
/* 
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40,15,12] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];
console.log(friends[1].luckyNumbers.length); */

/* var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, {name: "drug"}, 3.3],
  "random animal": "Банановая акула"
  };
  console.log(alert(myCrazyObject["some array"][2].number)); */
/* 
  var message = "Привет, мир!";
  console.log(alert(message)); */

/*   var scores = {
    ivan: 4,
    vova: 5,
    ruslan: 6
  };
scores ["ivan"] +=4
scores ["ivan"] +=4
scores ["vova"] +=3
scores ["ruslan"] +=3
scores ["vova"] +=3
scores ["ruslan"] +=5
scores ["vova"] +=3


  console.log(scores) */

/* 
  var name = "Ivan";
  console.log("добрый день ", name);
  if (name.length >= 5) {
    console.log("какое прекрасное имя!")
  }
  else {
    console.log("какое маленькое имя")
  } */

/*   var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
var ris = false;
if (lemonChicken) {
 console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
 console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
 console.log("Ладно, закажу свинину.");
} else if (ris) {
 console.log("Что ж, остается рис с яйцом.");
} else {
console.log("принисите уже хоть что нибудь");
 } */
/* var condition1 = false;
var condition2 = "45";
var condition3 = false;
var condition4 = 1;

 if (condition1) {
  console.log("Сделай это, если условие 1 истинно");
 } else if (condition2) {
  console.log("Сделай это, если условие 2 истинно ");
 } else if (condition3) {
  console.log("Сделай это, если условие 3 истинно");
 } else if (condition4) {
  console.log("Иначе сделай это " + condition4);
 } */
/* 
 var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
if (lemonChicken) {
 console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
 console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
 console.log("Ладно, закажу свинину.");
}  */


/* 

var name = "paha";

if (name === "andrei") {
console.log("привет мне! ");
}
else if (name === "ivan") {
console.log("привет мне! ");
}
else if (name === "olga") {
console.log("привет мне! ");
}
else {
  console.log("привет незнакомец");
} */

/* var sheepCounted = 0;
while (sheepCounted < 10) {
  console.log("Посчитано овец: " + sheepCounted + "!");
  sheepCounted++;
}
console.log("Хрррррррррр-псссс");
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
console.log("Посчитано овец: " + sheepCounted + "!");
}
console.log("Хрррррррррр-псссс"); */

/* var animals = "ivan"; */
/* for (var i = 3; i < 10000; i = i * 3) {
  console.log(i);
}
 */


/* 
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (var i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals); 

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 6) {
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  randomString += alphabet[randomIndex]

}
console.log(randomString);

 */
/* var name = prompt("Как вас зовут?") ;
console.log("Привет, " + name) ; */

/* var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
 console.log("Ты классная кошка!");
} else {
 console.log("Что ж, не проблема. Все равно ты молодец!");
} */


/* var likesCats = confirm("Тебе нравятся кошки?");
if (likesCats) {
  console.log(alert("Ты классная кошка!"));
} else {
  console.log("Что ж, не проблема. Все равно ты молодец!");
} */

/* 
var words = [
  "программа",
  "макака",
  "прекрасны",
  "оладушек",
  "максим"
];
// Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;
var attempts = 15;
// Игровой цикл
while (remainingLetters > 0 && attempts > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));
  // Запрашиваем вариант ответа
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    alert("до свидание!!!")
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");

  } else {
    // Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  if (guess.toLowerCase() ) {
    attempts--;
    console.log(attempts)
  }
}
// Конец игрового цикла
// // Отображаем ответ и поздравляем игрока
if (remainingLetters === 0) {
  alert(answerArray.join("  "));
  alert("Отлично молодец!");
} else if (attempts === 0) {
  alert("вы повешаный!!!")
} */

/* 
var ourFirstFunction = function () {
  console.log("!!!");
};
var sayHelloTo = function (uzer, z) {
  alert("Привет, " + uzer + "!");
  alert("Привет, " + z + "?");
};

var cat = function (ck) {
  for (var i = 0; i < ck; i++) {
    console.log(i + "=^.^=");
  }
};

var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
}

var printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

var x = function (c) {
  return c[Math.floor(Math.random() * c.length)];
};
/* 
var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
var randomString = "У тебя " + x(randomBodyParts) +
  " словно " + x(randomAdjectives) +
  " " + x(randomWords) + "!!!";
randomString;
 */

/* var z = function () {
  var randomBodyParts = ["глаз", "нос", "череп"];
  var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
  var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
  // Соединяем случайные строки в предложение:
  var randomString = "У тебя " + x(randomBodyParts) +
    " словно " + x(randomAdjectives) +
    " " + x(randomWords) + "!!!";
  return randomString;
}
console.log(z)  */
/* 
var medalForScore = function (score) {
  if (score <= 3) {
    return "Бронзовая";
  }
  if (score <= 7) {
    return "Серебряная";

  } return "Золотая";
}
  console.log(medalForScore) */
/* 
  var add = function(number1, number2) {
    var x = number1;
    var c = number2;
    var xc = number1 + number2;
    return xc;
     console.log(add);

  }
  var Multiply = function(number1, number2) {
    var v = number1;
    var b = number2;
    var vb = number1 === number2;
    return vb;
     console.log(add);

  }
 */
/* 
  var headerPlay = document.getElementById("header");
  console.log(headerPlay.innerHTML);
  var neyText = prompt("как заголовок ты бы хотел вести");
  headerPlay.innerHTML = neyText;  */
/* 
  $("h1").append("<h1> </h1>");  */
/*     var ha = prompt("делай") ;
      $("h1").append("<h1>" + ha + "</h1>") ;

 $("body").append("<p>Это новый параграф</p>");
  for (var i = 0; i < 1; i++) {
    var hobby = prompt("Назови одно из своих хобби!");
    $("body").append("<p>"  + hobby + "</p>");
    }  */
/*     
    $("h1").text("Этот текст скоро исчезнет").fadeOut(2000);
    $("h1").fadeOut(3000).fadeIn(2000);
    $("h1").slideUp(1000).slideDown(1000);
    $("h1").fadeOut(1000);
$("h1").fadeIn(1000); 
 */
/* $("h1").fadeOut(1000).fadeIn(1000); */


/* for (var i = 0; i < 3; i++) { */
/*   $("h1").slideUp(1000).slideDown(1000); */
/*   $("h1").fadeOut(500).show(500); */
/*   $("h1").fadeOut(3000).show(500);
console.log(i)
} */

/* 
var timeUp = function() {
  alert("время вышло!");
} */
/* for( var i = 0; i < 5; i++){
setTimeout(timeUp, (5000))
console.log(i)
} */
/* var contant = 1;
var massegs = function () {
  console.log("вы уже зыряти " + contant + "сек");
  contant++
}
var intervalid = setInterval (massegs, 5000); */

/* clearInterval(intervalid); */

/* var leftOffset = 0;
var topOffset = 20
var moveHeading = function () {
  $("#heading").offset({ left: leftOffset });
  leftOffset++;
  if (leftOffset > 200) {
    leftOffset = 200;
    $("#heading").offset({ top: topOffset });
    topOffset++;
    if (topOffset > 200) {
/* ]\ */

/* 
var getRandomNumber = function(size) {
   return Math.floor(Math.random() * size);
}

var width = 400;
var heigth = 400;

var target = {
  x: getRandomNumber (width),
  x: getRandomNumber (heigth)
};
console.log(getRandomNumber); */



var getRandomNumber = function (size) {
  return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
// Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
  if (distance < 15) {
    return "Обожжешься!";
  } else if (distance < 30) {
    return "Очень горячо";
  } else if (distance < 60) {
    return "Горячо";
  } else if (distance < 100) {
    return "Тепло";
  } else if (distance < 260) {
    return "Холодно";
  } else if (distance < 420) {
    return "Очень холодно";
  } else if (distance < 620) {
    return "Очень очень холодно";
  } else {
    return "Замерзнешь!";
  }
};

// Создаем переменные
var width = 800;
var height = 800;
var clicks = 0;
// Случайная позиция клада
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
// Добавляем элементу img обработчик клика
$("#map").click(function (event) {
  clicks++;
  var endClick = clicks;
  if (clicks > 20) {
    alert("КОНЕЦ ИГРЫ");
  }
  
  // Получаем расстояние от места клика до клада
  var distance = getDistance(event, target);
  // Преобразуем расстояние в подсказку
  var distanceHint = getDistanceHint(distance);
  // Записываем в элемент #distance новую подсказку
  $("#distance").text(distanceHint);
  // Если клик был достаточно близко, поздравляем с победой
  if (distance < 10) {
    alert("Клад найден! Сделано кликов: " + clicks);
  }
  var endClickS = 20
  var sumClick = endClickS - clicks;
  if (distance < 260 && distance > 100) {
    alert("Поторопись осталось " + sumClick + " ХОДОВ!");
  }


  console.log( sumClick);
});


/* var Car = function (x, z) {
  this.x = x;
  this.z = z;
};

 */