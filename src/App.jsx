import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import NoProject from './components/NoProjectSelected';
import { useState, useRef } from 'react';
import Project from './components/Project';
function App() {
  const [projectsState, updateProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });
  const userInput = useRef();
  function handleSelect() {
    updateProjectState((prevState) => {
      return { ...projectsState, selectedProject: null };
    });
  }

  function handleAddTask(text) {
    updateProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prevState.selectedProject,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    updateProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  function handleSumbit() {
    const collectedInput = userInput.current.collectData();
    if (collectedInput === undefined) {
      return;
    }
    updateProjectState(() => {
      const id = Math.random();

      collectedInput.id = id;
      collectedInput.tasks = [];
      const projects = [...projectsState.projects];
      projects.push(collectedInput);
      return {
        ...projectsState,
        selectedProject: id,
        projects: projects,
      };
    });
  }

  function handleCancel() {
    updateProjectState(() => {
      return {
        ...projectsState,
        selectedProject: undefined,
      };
    });
  }

  let projectsSide = <NoProject onCreateProject={handleSelect} />;
  if (projectsState.selectedProject === null) {
    projectsSide = (
      <NewProject
        ref={userInput}
        handleSubmit={handleSumbit}
        handleCancel={handleCancel}
      />
    );
  } else if (projectsState.selectedProject !== undefined) {
    projectsSide = (
      <Project
        project={projectsState.projects.find(
          (project) => project.id === projectsState.selectedProject
        )}
        handleProjectDelete={handleProjectDelete}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={projectsState.tasks}
      />
    );
  }
  function handleProjectSelection(id) {
    updateProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
    return;
  }

  function handleProjectDelete() {
    updateProjectState((prevState) => {
      const newProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProject
      );
      return {
        projects: newProjects,
        selectedProject: undefined,
      };
    });
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar
        onCreateProject={handleSelect}
        projectsList={projectsState.projects}
        onProjectSelection={handleProjectSelection}
        selectedProjectId={projectsState.selectedProject}
      />
      {projectsSide}
    </main>
  );
}

export default App;
