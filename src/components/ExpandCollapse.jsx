import PropTypes from 'prop-types';
import { useState } from 'react';

function ExpandCollapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6 text-sm text-gray-600">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-black">{title}</h3>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

ExpandCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExpandCollapse;