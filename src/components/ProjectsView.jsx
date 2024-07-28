import { useEffect, useRef, useState } from "react";

function ProjectsView({ title, description, src, link, color }) {
  useEffect(() => {
    console.log(title);
  }, []);
  return (
    <>
      <div>I am project</div>
    </>
  );
}

export default ProjectsView;
