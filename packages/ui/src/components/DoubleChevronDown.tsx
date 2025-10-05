import React from 'react';

const ChevronDownIcon: React.FC<{ title: string }> = ({ title }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" className="mr-1">
    <title>{title}</title>
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

const DoubleChevronDown: React.FC = () => (
  <>
    <ChevronDownIcon title="Chevron Down 1" />
    <ChevronDownIcon title="Chevron Down 2" />
  </>
);

export default DoubleChevronDown;
