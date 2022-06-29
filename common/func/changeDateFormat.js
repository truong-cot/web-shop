export const changeDateFormat = (date) => {
    const newDate = new Date(date);
    const day = `0${newDate.getDate()}`.slice(-2);
    const month = `0${newDate.getMonth() + 1}`.slice(-2);
    const year = newDate.getFullYear();
    const hours = `0${newDate.getHours()}`.slice(-2);
    const minutes = `0${newDate.getMinutes()}`.slice(-2);
    return `${day}/${month}/${year} ${hours}:${minutes}`;
};
