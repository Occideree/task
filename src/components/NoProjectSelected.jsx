import NoProjectPNG from '../assets/no-projects.png';
import Button from './Button';

export default function NoProject({ onCreateProject }) {
  return (
    <section className='mt-24 text-center w-2/3'>
      <img
        src={NoProjectPNG}
        alt=''
        className='size-16 object-contain mx-auto'
      />
      <h2 className='my-4 font-bold md:text-xl text-stone-500'>
        No project selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get started with a new one
      </p>
      <div className='mt-8'>
        <Button onClick={onCreateProject}>Create new project</Button>
      </div>
    </section>
  );
}
