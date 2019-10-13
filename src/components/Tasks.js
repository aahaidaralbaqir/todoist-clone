import React ,{ useEffect,useState } from 'react';
import {Checkbox} from './Checkbox';
import { collatedTasks } from '../constants'
import { getTitle,getCollatedTitle,collatedTaskExist } from '../helpers';
import { useTasks } from '../hooks';
import { useSelectedProjectValue,useProjectsValue } from '../context'; 

export const Tasks = () => {
   const { selectedProject } = useSelectedProjectValue();
   const { projects } = useProjectsValue();
   const {tasks} = useTasks(selectedProject);
   let projectName = '';
   if(projects  && selectedProject && !collatedTaskExist(selectedProject)) {
      projectName = getTitle(projects,selectedProject).name;
      console.log(`project name 1 :`,projectName)      
   }
   if(collatedTaskExist(selectedProject) && selectedProject) {
      projectName = getCollatedTitle(collatedTasks,selectedProject).name;
      console.log(`project name 2 :`,projectName)
   }
   useEffect(() => {
      document.title = `${projectName} : TodoIst`  
   });
   console.log('tasks : ',tasks);
   return (
      <div className="tasks" data-testid="tasks">
         <h2 data-testid="project-name">{projectName}</h2>
         <ul className="tasks__list">
            {
               tasks.map((task) => (
                  <li key={`${task.id}`}>
                  <Checkbox id={task.id} />
                  <span>{task.task}</span>
                  </li>
               ))}
         </ul>
      </div>
   );
};