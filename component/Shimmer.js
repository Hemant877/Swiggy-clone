export default function Shimmer() {
  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-[280px] rounded-xl bg-white shadow-sm p-2 animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-[180px] rounded-xl bg-gray-300"></div>

          {/* Text placeholders */}
          <div className="w-[90%] mx-auto mt-3 space-y-2">
            <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
