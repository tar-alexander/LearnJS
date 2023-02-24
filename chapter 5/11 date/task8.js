function formatDate(date) {
    let now = new Date();
    let diff = now - date;

    if (diff < 1000) {
      return "прямо сейчас";
    } else if (diff < 60000) {
      return `${Math.round(diff / 1000)} сек. назад`;
    } else if (diff < 3600000) {
      return `${Math.floor(diff / 60000)} мин. назад`;
    } else {
      let resDate = date.getDate();
      if (+resDate < 10) {
        resDate = "0" + resDate;
      }

      let resMonth = date.getMonth() + 1;
      if (+resMonth < 10) {
        resMonth = "0" + resMonth;
      }
      return `${resDate}.${resMonth}.${date.getFullYear() % 100} ${date.getHours()}:${date.getMinutes()}`;
    };
}

//better
function formatDate(date) {
    let now = new Date();
    let diff = now - date;

    if (diff < 1000) {
      return "прямо сейчас";
    } else if (diff < 60000) {
      return `${Math.round(diff / 1000)} сек. назад`;
    } else if (diff < 3600000) {
      return `${Math.floor(diff / 60000)} мин. назад`;
    } else {
      let d = date;
      d = [
        "0" + date.getDate(),
        "0" + (date.getMonth() + 1),
        "" + date.getFullYear(),
        "0" + date.getHours(),
        "0" + date.getMinutes()
      ].map(value => value.slice(-2));

      return d.slice(0,3).join(".") + " " + d.slice(3).join(":");
    };
}