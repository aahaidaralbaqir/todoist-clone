import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import  { 
  projectsProvider,
  SelectedProjectProvider, 
  ProjectsProvider } from './context/'
export const App = () => {
return (
  <ProjectsProvider>
  <SelectedProjectProvider>
    <div className="App">
      <Header />
      <Content />
    </div>
    </SelectedProjectProvider>
    </ProjectsProvider>
);
}