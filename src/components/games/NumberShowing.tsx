export default function NumberShowing({ number }: { number: number }) {
  return (
    <span className="text-5xl font-bold text-white bg-linear-to-br from-blue-500 to-blue-600 px-8 py-4 rounded-full shadow-lg">
      {number}
    </span>
  );
}
