import { forwardRef } from 'react';
import Tasks from './Tasks';
const Project = forwardRef(function Project(
  { tasks, project, handleProjectDelete, onAddTask, onDeleteTask },
  ref
) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return (
    <section className='w-[35rem] mt-16'>
      <header className='pb-4 mb-4 border-b-8 border-stone-300'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-stone-600 mb-2'>
            {project.title}
          </h1>
          <button
            className='text-stone-600 hover:text-stone-950'
            onClick={handleProjectDelete}
          >
            Delete
          </button>
        </div>
        <p className='text-stone-400 mb-4'>{formattedDate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>
          {project.description}
        </p>
      </header>
      <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </section>
  );
});
export default Project;
