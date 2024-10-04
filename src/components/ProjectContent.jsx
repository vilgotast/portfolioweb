import React from 'react';

const ProjectContent = ({ content }) => {
  return (
    <div className="prose prose-invert max-w-none">
      {content}
    </div>
  );
};

export default ProjectContent;