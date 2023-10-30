/* eslint-disable react/prop-types */
import StarRating from '../../ui/StarRating';
import { BiBookReader } from 'react-icons/bi';

function ListElements({ books }) {
  return (
    <>
      <div className="my-3 ml-10 mr-10 mt-16">
        <ul className=" relative mx-8 mr-8 grid grid-cols-5   gap-9">
          {books.map((book) => (
            <li
              key={book.id}
              className="border-1 box-content h-80 w-56  items-center rounded-3xl border-green-500 bg-emerald-100  hover:shadow-lg "
            >
              <div className="  border-1 flex items-center justify-center rounded-3xl bg-slate-300 ">
                <img src={book.image} className="mt-4 h-32 w-32 " />
              </div>
              <div></div>
              <h2 className=" border-1 mt-3 w-20 rounded-2xl bg-slate-400 text-center font-serif text-white">
                {book.category}
              </h2>
              <h2 className="font-mono-Consolas mt-2 text-center text-xl font-semibold ">
                {book.name}
              </h2>
              <p className="mt-1 text-center font-mono font-semibold text-stone-800">
                {book.author}
              </p>
              <div className="flex items-center justify-around">
                <StarRating
                  maxrating={5}
                  size={23}
                  color="black"
                  defaultRating={book.rating}
                />
                <a
                  href="https://yfwuozmpqynafptsskcq.supabase.co/storage/v1/object/public/resources/DS_Notes_C++_Version.pdf?t=2023-10-30T10%3A50%3A51.920Z"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BiBookReader
                    onClick={console.log('button pressed')}
                    className=" cursor-pointer"
                    size={'2em'}
                  />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListElements;
