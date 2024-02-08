import { IoIosCode } from "react-icons/io";

const TimeLineList = () => {
  return (
    <li className="mb-2">
      <h4 className="text-sm mb-2 dark:text-gray-200">10 Dec 2023</h4>
      <div className="relative">
        <details className="bg-gray-200 dark:bg-slate-800 border-gray-400 border px-4 py-3 rounded-lg marker:content-none shadow-2xl">
          <summary className="capitalize text-violet-700">appointment title</summary>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam itaque obcaecati? Hic molestias quibusdam facere deserunt, praesentium atque. Perspiciatis!</p>
        </details>
        <IoIosCode className="text-violet-700 absolute right-2 top-[0.9rem] rotate-90" size={20} />
      </div>
    </li>
  )
}

export default TimeLineList
