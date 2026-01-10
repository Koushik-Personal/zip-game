import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function OpeningPage() {

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4 bg-white/90 rounded-xl p-9 shadow-lg max-w-md w-full text-center">
        <img src={logo} alt="Tip Game logo" className="w-24 h-24" />
        <h1 className="m-0 text-3xl text-[#0b2545] font-semibold">Tip Game</h1>
        <p className="m-0 text-sm text-gray-600">
          Make quick tips — challenge friends or play solo.
        </p>
        <Link
          to="/game"
          className="mt-2 bg-[#0b67ff] text-white px-5 py-3 rounded-lg text-base transition transform-gpu hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
        >
          Start Game
        </Link>
      </div>
    </div>
  );
}
