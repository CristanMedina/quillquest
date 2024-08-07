'use client'
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
});

export default function BookCard({ title, description, authorName, dateCreated, genres, image }) {
  return (
    <div className="flex items-center justify-center m-2">
      <div
        className="relative w-80 h-96 p-6 bg-slate-800 shadow-lg shadow-black rounded-2xl overflow-hidden bg-cover bg-center transition duration-300 hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-cyan-950 opacity-0 hover:opacity-50 transition duration-300"></div>

        <div className="relative text-md bg-opacity-70 bg-gray-900 p-4 rounded-md">
          <div className="text-center mb-4">
            <div className={oswald.className}>
              <h1 className="text-2xl font-semibold leading-none text-white hover:text-indigo-600 transition duration-500 ease-in-out">
                {title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-100">{authorName}</p>
          <p className="mt-2 p-2 font-mono text-sm bg-emerald-900 text-emerald-200">{dateCreated}</p>
        </div>
        <div className="px-3 pt-2 pb-2">
          {genres.map((genre, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {genre}
            </span>
          ))}
        </div>
        <div className="p-2 mt-2 text-base bg-gray-700 text-gray-300 overflow-hidden">
          {description}
        </div>
      </div>
    </div>
  );
}





