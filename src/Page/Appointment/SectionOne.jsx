import Input from "./Input"
import { useFormik } from 'formik'

const SectionOne = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      date: '',
      content: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <section className="lg:w-7/12 md:w-7/12 w-full order-2 lg:order-1 md:order-1">
        <form onSubmit={formik.handleSubmit} className="w-full h-auto">
            <Input name="title" type="text" label="title" change={formik.handleChange} value={formik.values.title} placeholder="Meeting at john's" />
            <Input name="date" type="datetime-local" label="date time" change={formik.handleChange} value={formik.values.date} />
            {/* <TipTapWord  /> */}
            <label htmlFor="content" className="block text-sm font-medium mb-2 capitalize dark:text-gray-400">body</label>
            <textarea name="content" id="content" cols="30" rows="10" className="py-3 px-4 block w-full bg-transparent border-gray-400 rounded-lg text-sm dark:text-gray-300 focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none uppercase" placeholder="my next appointment" onChange={formik.handleChange} value={formik.values.content}></textarea>
            <button type="submit" className="py-3 px-4 block w-full border-violet-700 rounded-lg text-sm bg-violet-700 capitalize text-white hover:bg-violet-800 mt-2">submit
            </button>
        </form>
    </section>
  )
}

export default SectionOne