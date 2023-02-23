function sumSalaries(salaries) {
    return Object.values(salaries).reduce( (sum, current) => sum + current, 0);
}