import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const classes =
    'w-full p-1 border-b-2 border-stone-300 bg-stone-200 rounded-sm focus:outline-none focus:border-stone-600 text-stone-600';
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='uppercase text-stone-500 font-bold text-sm'>
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input className={classes} ref={ref} {...props} />
      )}
    </p>
  );
});
export default Input;
