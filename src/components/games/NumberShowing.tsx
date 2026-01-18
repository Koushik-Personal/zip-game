export default function NumberShowing({ number }: { number: number }) {
  return (
    <span
      className="sm:text-2xl md:text-4xl font-bold text-white bg-linear-to-br 
        from-blue-500 to-blue-600 px-4
          sm:px-1 md:px-8 py-2
          sm:py-1 md:py-4
          rounded-full shadow-lg text-2xl"
    >
      {number}
    </span>
  );
}
