export const getWeekDays = (date: Date) => {
  const startOfWeek = new Date(date);

  const day = startOfWeek.getDay();

  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);

  startOfWeek.setDate(diff);

  const week = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);

    d.setDate(startOfWeek.getDate() + i);

    week.push(d);
  }

  return week;
};
export default getWeekDays;