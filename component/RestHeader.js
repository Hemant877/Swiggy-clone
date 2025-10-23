import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function RestHeader() {
  const count = useSelector((state) => state.cart.count);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 shadow-lg backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Left: Brand */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-2"
        >
          <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white animate-text">
            Swiggy<span className="text-yellow-300">Clone</span>
          </h1>
        </motion.div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex gap-10 text-base font-semibold tracking-wide">
          {["Corporate", "Search", "Sign In", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{
                scale: 1.15,
                textShadow: "0px 0px 12px rgba(255,255,255,0.9)",
              }}
              className="relative group transition-all duration-300 hover:text-yellow-200"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 rounded-full group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </nav>

        {/* Right: Cart */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer relative group"
          onClick={() => navigate("/OrderSummary")}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: count > 0 ? Infinity : 0, duration: 1.8 }}
          >
            <div className="absolute inset-0 blur-lg bg-yellow-400/40 rounded-full"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="34"
              height="34"
              className="relative text-white drop-shadow-xl"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h2l1.6 9.6a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.98-1.78L21 6H6" />
                <path d="M6 6l-.5-2.5A1 1 0 0 0 4.5 2h-1" />
                <circle cx="10" cy="20" r="1.6" fill="currentColor" stroke="none" />
                <circle cx="18" cy="20" r="1.6" fill="currentColor" stroke="none" />
              </g>
            </svg>

            {/* Cart Badge */}
            {count > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 bg-yellow-300 text-orange-900 text-xs font-bold rounded-full px-1.5 py-0.5 shadow-md ring-2 ring-white/50"
              >
                {count}
              </motion.span>
            )}
          </motion.div>

          <span className="font-semibold group-hover:text-yellow-200 transition-all duration-300">
            Cart
          </span>
        </motion.div>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden justify-center gap-6 py-3 text-white text-sm bg-gradient-to-r from-orange-600 via-pink-600 to-red-700 border-t border-white/20 backdrop-blur-lg">
        {["Corporate", "Search", "Sign In", "Contact"].map((item) => (
          <button
            key={item}
            className="hover:text-yellow-200 hover:scale-110 transition-all duration-200 font-semibold"
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}
