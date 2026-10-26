import React from 'react';

const ProjectContent = ({ content }) => {
  return (
    <div className="prose max-w-none text-slate-700">
      {content}
    </div>
  );
};

export default ProjectContent;