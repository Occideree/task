import { useRef, useState } from 'react';
import Modal from './ErrorModal';
export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const modal = useRef();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask('');
  }
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
      <div className='flex items-center gap-4'>
        <input
          type='text'
          className='w-64 px-2 py-1 rounded-sm bg-stone-200'
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className='text-stone-700 hover:text-stone-950'
        >
          Add Task
        </button>
      </div>
    </>
  );
}
