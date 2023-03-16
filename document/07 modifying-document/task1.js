elem.append(document.createTextNode(text));  //добавляет в начало elem без переписывания. текст как есть

//полное переписывание, но вставка по-разному. innerHTML переформатирует. textContent текст как есть
elem.innerHTML = text;
elem.textContent = text;