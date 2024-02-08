import { IoFilter } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full flex lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col items-center justify-between gap-2">
      <input type="date" className="lg:w-36 md:w-36 sm:w-full xs:w-full xxs:w-full py-2 px-3 bg-transparent uppercase rounded-lg block border-gray-400 shadow-sm text-sm focus:z-10 focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-300" />
      <div className="w-auto flex items-center gap-2">
        <IoFilter size={24} className="dark:text-gray-300" />
        <select className="py-2 px-4 pe-9 bg-transparent block w-auto border-gray-400 rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 dark:text-gray-300 disabled:pointer-events-nonetext-sm">
          <option selected>Filter</option>
          <option>All</option>
          <option>Missed</option>
          <option>Pending</option>
          <option>Successful</option>
        </select>
      </div>
    </header>
  )
}

export default Header
