import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TipTapWord = ({change, value}) => {


  return (
    <section className="w-full h-auto mt-2">
      <p className='mb-2 font-normal dark:text-gray-400'>Content</p>
      <div className="border border-gray-400 rounded-lg overflow-hidden dark:text-gray-300 h-60">
        <ReactQuill theme="snow" onChange={change} value={value} className='h-full' />
      </div>
    </section>
  );
};

export default TipTapWord;
