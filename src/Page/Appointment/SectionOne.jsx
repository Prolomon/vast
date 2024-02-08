import Input from "./Input"
import TipTapWord from "./TipTapWord"
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
            <TipTapWord change={formik.handleChange} value={formik.values.content} />
            <button type="submit" className="py-3 px-4 block w-full border-violet-700 rounded-lg text-sm bg-violet-700 capitalize text-white hover:bg-violet-800 mt-2">submit
            </button>
        </form>
    </section>
  )
}

export default SectionOne