import Button from './Button';

export default function Sidebar({
  onCreateProject,
  projectsList,
  onProjectSelection,
  selectedProjectId,
}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onCreateProject}>+ Add project</Button>
      </div>
      <ul className='mt-8'>
        {projectsList.map((project) => {
          let cssClasses =
            'text-stone-400 hover:text-stone-200 py-1 w-full text-left px-2 ';
          if (selectedProjectId === project.id) {
            cssClasses += 'bg-stone-800 text-stone-200';
          } else {
            cssClasses += 'text-stone-400';
          }

          return (
            <li key={project.id} className='hover:bg-stone-800 mb-2 '>
              <button
                className={cssClasses}
                onClick={() => onProjectSelection(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
