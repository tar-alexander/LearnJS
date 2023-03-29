/* В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
1) getComputedStyle().width string
2) + "px"
3) getComputedStyle - не включает внутренние отступы
	clientWidth - размер области внутри рамок элемента. Включает ширину области содержимого + внутренние отступы
4) getComputedStyle().width может вернуть auto, зависит от box-sizing
5) реально доступный размер содержимого с вычетом полосы прокрутки
*/