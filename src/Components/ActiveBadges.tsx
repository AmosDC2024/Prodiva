export const ActiveBadges = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg md:hidden">

      {/* Header */}
      <h3 className="text-gray-200 text-lg mb-6 font-medium">
        Badges
      </h3>

      <div className="flex gap-4">

        {/* Badge 1 */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-xl">🔥</span>
          <span className="text-gray-200 text-sm">
            2-Day Streak
          </span>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-xl">⚡</span>
          <span className="text-gray-200 text-sm">
            100
          </span>
        </div>

        {/* Badge 3 */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
          <span className="text-xl">🔥</span>
          <span className="text-gray-200 text-sm">
            10h Focus
          </span>
        </div>

      </div>

    </div>
  );
}; 

export default ActiveBadges;