import { ChevronLeft, ChevronRight } from "lucide-react";
import getWeekDays from "../utils/getWeekDays";

interface Props {
  activeDate: Date;
  setActiveDate: (date: Date) => void;
}

export const DateNavigator = ({ activeDate, setActiveDate }: Props) => {

  const today = new Date();
  const week = getWeekDays(activeDate);

  const nextWeek = () => {
    const next = new Date(activeDate);
    next.setDate(next.getDate() + 7);
    setActiveDate(next);
  };

  const prevWeek = () => {
    const prev = new Date(activeDate);
    prev.setDate(prev.getDate() - 7);
    setActiveDate(prev);
  };

  const formatDay = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "short" });

  const isSameDay = (d1: Date, d2: Date) =>
    d1.toDateString() === d2.toDateString();

  return (

    <div className="flex items-center mt-3 justify-between p-4 rounded-2xl bg-[#0B1120] border border-white/10">

      <ChevronLeft
        onClick={prevWeek}
        className="text-gray-400 cursor-pointer hover:text-white"
      />

      <div className="flex gap-3 sm:gap-6">

        {week.map((date, index) => {

          const isActive = isSameDay(date, activeDate);
          const isToday = isSameDay(date, today);

          return (

            <div
              key={index}
              onClick={() => setActiveDate(date)}
              className={`flex flex-col items-center cursor-pointer transition-all
              
              ${
                isActive
                  ? "px-4 py-2 rounded-xl bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,.6)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-sm">{formatDay(date)}</span>

              <span
                className={`text-[10px] sm:text-sm ${
                  isToday ? "text-blue-400" : ""
                }`}
              >
                {date.getDate()}
              </span>

            </div>
          );

        })}

      </div>

      <ChevronRight
        onClick={nextWeek}
        className="text-gray-400 cursor-pointer hover:text-white"
      />

    </div>

  );
};

export default DateNavigator;