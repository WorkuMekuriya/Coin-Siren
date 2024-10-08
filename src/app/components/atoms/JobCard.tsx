import React from 'react';

interface JobCardProps {
  Icon: React.ComponentType; // Icon is a React component
  title: string; // Title is a string
}

const JobCard: React.FC<JobCardProps> = ({ Icon, title }) => {
  return (
    <div className="text-white font-[24px] p-4 rounded-lg bg-white/20 flex gap-6 items-center">
      <div className="h-14 w-14 bg-white/40 rounded-lg flex items-center justify-center">
        <Icon />
      </div>
      {title}
    </div>
  );
};

export default JobCard;
