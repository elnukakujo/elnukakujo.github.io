function ProjectStatusTag({ status }) {
  const statusClass = status === 2 ? 'text-green-500 border-green-500 shadow-green-500' : status===1 ? 'text-yellow-500 border-yellow-500 shadow-yellow-500' : 'text-gray-500 border-gray-500 shadow-gray-500';
  return (
    <p className={`interact text-xs cursor-pointer px-3 py-1 bg-secondary rounded-lg w-fit border-1 ${statusClass}`}>
      {status === 2 ? 'Completed' : status === 1 ? 'In Progress' : 'Not Started'}
    </p>
  );
}

export default ProjectStatusTag;