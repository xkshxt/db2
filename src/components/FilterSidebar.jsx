import PropTypes from 'prop-types';
import CollapsibleSection from './ExpandCollapse';

function FilterSidebar({ isMobile, toggleSidebar }) {
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
          <button className="text-sm text-purple-600 border border-purple-600 px-2 py-1 rounded-lg ml-12">
            Clear All
          </button>
        )}
      </div>
      <hr className="mb-6" />

      <CollapsibleSection title="Company Type">
        <div>
          <label>
            <input type="checkbox" /> Startup
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Foreign MNC
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Indian MNC
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Corporate
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Others
          </label>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Location">
        <div>
          <label>
            <input type="checkbox" /> Delhi NCR
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Bengaluru
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Ahmedabad
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Mumbai
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Hyderabad
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Chennai
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> New Delhi
          </label>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Industry">
        <div>
          <label>
            <input type="checkbox" /> Financial Services
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Insurance
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Hardware & Networking
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Marketing
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Information & Technology
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Mechanical
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Automotive
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Medical
          </label>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Salary">
        <div>
          <label>
            <input type="checkbox" /> $0-$60,000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> $61,000-$99,000
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> $100,000 & More
          </label>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Experience">
        <div>
          <label>
            <input type="checkbox" /> 0-2 Years
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 3-5 Years
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 6-10 Years
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> 10+ Years
          </label>
        </div>
      </CollapsibleSection>
    </aside>
  );
}

FilterSidebar.propTypes = {
  isMobile: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default FilterSidebar;