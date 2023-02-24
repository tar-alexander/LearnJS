function getWeekDay(date) {
    let day = date.getDay();

    switch (day) {
      case 0:
        return "ВС";
        break;
      case 1:
        return "ПН";
        break;
      case 2:
        return "ВТ";
        break;
      case 3:
        return "СР";
        break;
      case 4:
        return "ЧТ";
        break;
      case 5:
        return "ПТ";
        break;
      case 6:
        return "СБ";
        break;
    }
}

//better one
function getWeekDay(date) {
	return ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][date.getDay()];
}