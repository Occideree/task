import Modal from './ErrorModal';
import Input from './Input';
import { forwardRef, useImperativeHandle, useRef } from 'react';
const NewProject = forwardRef(function NewProject(
  { handleSubmit, handleCancel },
  ref
) {
  const titleRef = useRef();
  const descrRef = useRef();
  const dateRef = useRef();
  const modal = useRef();
  useImperativeHandle(ref, () => {
    return {
      collectData() {
        const enteredTitle = titleRef.current.value;
        const enteredDesc = descrRef.current.value;
        const enteredDate = dateRef.current.value;
        if (
          enteredTitle.trim() === '' ||
          enteredDesc.trim() === '' ||
          enteredDate.trim() === ''
        ) {
          modal.current.open();
          return;
        }
        return {
          title: enteredTitle,
          description: enteredDesc,
          dueDate: enteredDate,
        };
      },
    };
  });
  return (
    <>
      <Modal ref={modal}>
        <h2 className='my-4 font-bold md:text-xl text-stone-500'>
          Invalid input
        </h2>
        <p className='text-stone-400 mb-4'>
          Looks like you forgot to enter a value
        </p>
        <p className='text-stone-400 mb-4'>Make sure...</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center item gap-4 justify-end my-4'>
          <li>
            <button
              className=' text-stone-800 hover:text-stone-950'
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'
              onClick={handleSubmit}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label='Title' ref={titleRef} />
          <Input label='Description' isTextArea ref={descrRef} />
          <Input label='Due date' type='date' ref={dateRef} />
        </div>
      </div>
    </>
  );
});
export default NewProject;
