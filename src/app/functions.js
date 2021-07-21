function plural(word, num) {
  var forms = word.split("_");
  return num % 10 === 1 && num % 100 !== 11
    ? forms[0]
    : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
    ? forms[1]
    : forms[2];
}
export function relativeTimeWithPlural(number, withoutSuffix, key) {
  if (!number) number = 8;
  var format = {
    ss: withoutSuffix ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
    mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
    hh: "час_часа_часов",
    dd: "день_дня_дней",
    ww: "неделя_недели_недель",
    MM: "месяц_месяца_месяцев",
    yy: "год_года_лет",
  };
  if (key === "m") {
    return withoutSuffix ? "минута" : "минуту";
  } else {
    return plural(format[key], +number);
  }
}
