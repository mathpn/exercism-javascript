const WEEK_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const TEENS = [13, 14, 15, 16, 17, 18, 19];
const NTH = ["last", "first", "second", "third", "fourth", "fifth"];

export const meetup = (year, month, nth, weekDay) => {
    let date = new Date(year, month, 0);
    let range;
    if (nth == "teenth") {
        return getWeekday(date, TEENS, weekDay);
    } else {
        range = getNthRange(NTH.indexOf(nth) - 1, date);
        return getWeekday(date, range, weekDay);
    }
};

const getNthRange = (nth, date) => {
    let daysInMonth = date.getDate();
    return [...Array(daysInMonth + 1).keys()].slice(1).slice(nth * 7);
}

const getWeekday = (date, range, weekDay) => {
    for (let day of range) {
        date.setDate(day);
        if (WEEK_DAYS[date.getDay()] == weekDay) {
            return date;
        }
    }
};
