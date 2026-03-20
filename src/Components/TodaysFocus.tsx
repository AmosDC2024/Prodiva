import { StarField } from "./StarField";

interface Props {
  total: number;
  completed: number;
  pending: number;
  activeProgress?: number; // 🔥 NEW
}

export const TodaysFocus = ({ 
  total, 
  completed, 
  activeProgress = 0 
}: Props) => {

  // fallback to task completion if no active progress
  const baseProgress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  // 🔥 use active progress if available
  const progress = activeProgress > 0 ? activeProgress : baseProgress;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050816] p-6 shadow-[0_0_30px_rgba(59,130,246,0.2)] md:hidden">

      <StarField />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(59,130,246,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.25),transparent_40%)]"></div>

      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-blue-500/30 blur-[130px] rounded-full"></div>

      <div className="relative z-10">

        <h3 className="text-gray-200 text-lg mb-6 font-medium">
          Today's Focus
        </h3>

        <div className="flex items-center gap-6">

          <div className="relative w-32 h-32 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full transition-all duration-500"
              style={{
                background: `conic-gradient(#3b82f6 ${progress * 3.6}deg, rgba(255,255,255,0.08) 0deg)`
              }}
            />

            <div className="w-24 h-24 rounded-full bg-[#020617] flex items-center justify-center text-xl font-semibold text-blue-400">
              {progress}%
            </div>
          </div>

          <div className="text-gray-300 space-y-1">
            <p>{progress}% Complete</p>

            <p className="text-xs text-gray-400">
              {completed} of {total} tasks done
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TodaysFocus;