export default function NumberShowing({ number }: { number: number }) {
  return (
    <span className="text-base sm:text-lg md:text-xl font-bold text-white bg-linear-to-br from-blue-500 to-blue-600 px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-full shadow-lg">
      {number}
    </span>
  );
}
