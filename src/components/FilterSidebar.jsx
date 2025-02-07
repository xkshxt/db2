import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CollapsibleSection from './ExpandCollapse';

function FilterSidebar({ isMobile, toggleSidebar, onFilterChange }) {
  const [companyTypes, setCompanyTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [salaries, setSalaries] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    onFilterChange({
      companyTypes,
      locations,
      industries,
      salaries,
      experiences,
    });
  }, [companyTypes, locations, industries, salaries, experiences, onFilterChange]);

  const handleCheckboxChange = (event, setState, state) => {
    const { value, checked } = event.target;

    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };

  const clearAllFilters = () => {
    setCompanyTypes([]);
    setLocations([]);
    setIndustries([]);
    setSalaries([]);
    setExperiences([]);
  };

  return (
    <aside
      className={`FilterSidebar ${
        isMobile
          ? 'fixed top-0 left-0 w-64 h-full bg-white z-50 overflow-y-auto p-6'
          : 'w-58 mr-8 h-screen overflow-y-auto'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filter Jobs</h2>
        {isMobile ? (
          <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
            &times;
          </button>
        ) : (
          <button
            onClick={clearAllFilters}
            className="text-sm text-purple-600 border border-purple-600 px-2 py-1 rounded-lg ml-12"
          >
            Clear All
          </button>
        )}
      </div>
      <hr className="mb-6" />

      <CollapsibleSection title="Company Type">
  {['Startup', 'Foreign MNC', 'Indian MNC', 'Corporate', 'Others'].map((type) => (
    <div key={type}>
      <label>
        <input
          type="checkbox"
          value={type}
          checked={companyTypes.includes(type)}
          onChange={(e) => handleCheckboxChange(e, setCompanyTypes, companyTypes)}
        />{' '}
        {type}
      </label>
    </div>
  ))}
</CollapsibleSection>

<CollapsibleSection title="Location">
  {['Delhi NCR', 'Bengaluru', 'Ahmedabad', 'Mumbai', 'Hyderabad', 'Chennai', 'New Delhi'].map(
    (location) => (
      <div key={location}>
        <label>
          <input
            type="checkbox"
            value={location}
            checked={locations.includes(location)}
            onChange={(e) => handleCheckboxChange(e, setLocations, locations)}
          />{' '}
          {location}
        </label>
      </div>
    )
  )}
</CollapsibleSection>

<CollapsibleSection title="Industry">
  {[
    'Financial Services',
    'Insurance',
    'Hardware & Networking',
    'Marketing',
    'Information Technology',
    'Mechanical',
    'Automotive',
    'Medical',
  ].map((industry) => (
    <div key={industry}>
      <label>
        <input
          type="checkbox"
          value={industry}
          checked={industries.includes(industry)}
          onChange={(e) => handleCheckboxChange(e, setIndustries, industries)}
        />{' '}
        {industry}
      </label>
    </div>
  ))}
</CollapsibleSection>

<CollapsibleSection title="Salary">
  {['$0-$60,000', '$61,000-$99,000', '$100,000 & More'].map((salaryRange) => (
    <div key={salaryRange}>
      <label>
        <input
          type="checkbox"
          value={salaryRange}
          checked={salaries.includes(salaryRange)}
          onChange={(e) => handleCheckboxChange(e, setSalaries, salaries)}
        />{' '}
        {salaryRange}
      </label>
    </div>
  ))}
</CollapsibleSection>

<CollapsibleSection title="Experience">
  {['0-2 Years', '3-5 Years', '6-10 Years', '10+ Years'].map((exp) => (
    <div key={exp}>
      <label>
        <input
          type="checkbox"
          value={exp}
          checked={experiences.includes(exp)}
          onChange={(e) => handleCheckboxChange(e, setExperiences, experiences)}
        />{' '}
        {exp}
      </label>
    </div>
  ))}
</CollapsibleSection>

    </aside>
  );
}

FilterSidebar.propTypes = {
  isMobile: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterSidebar;