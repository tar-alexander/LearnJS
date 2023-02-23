//1st try
function topSalary(salaries) {
    let max = 0;
    let topUser = null;

    Object.entries(salaries).forEach( (user) => {
      if (user[1] > max) {
        topUser = user[0];
        max = user[1];
      }
    });

    return topUser;
}

//2nd try
function topSalary(salaries) {
    let array = Object.entries(salaries).sort( (a,b) => b[1] - a[1] );
    if (array. length == 0) { return null };
     
    let [topUser = null, maxSalary = 0] = array[0];

    return topUser;
 }
