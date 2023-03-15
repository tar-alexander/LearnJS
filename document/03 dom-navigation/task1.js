/*<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>*/

//элемент <div>?
document.body.firstChild;
let div = document.body.children[0];

//<ul>?
document.body.children[1];
div.nextElementSibling;
document.body.lastElementChild

//второй <li> (с именем Пит)?
document.body.children[1].children[1];
document.body.lastElementChild.lastElementChild