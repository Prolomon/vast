
const Input = ({change, value, type, name, label, placeholder}) => {
  return (
    <div className="mb-2">
        <label htmlFor="input-label" className="block text-sm font-medium mb-2 capitalize dark:text-gray-400">{label}</label>
        <input type={type} id="input-label" className="py-3 px-4 block w-full bg-transparent border-gray-400 rounded-lg text-sm dark:text-gray-300 focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none uppercase" placeholder={placeholder} name={name} onChange={change} value={value} />
    </div>
  )
}

export default Input
