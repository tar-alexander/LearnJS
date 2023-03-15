/*
Объектом какого класса является document?
HTMLDocument

Какое место он занимает в DOM-иерархии?
EventTarget > Node > Document > HTMLDocument

Наследует ли он от Node или от Element, или может от HTMLElement?
от Node
*/

alert(document.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node