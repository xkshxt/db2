function FilterSidebar() {
    return (
      <aside className="w-64 mr-8 hidden md:block">
        <div className="sticky top-20">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          {/* Add filter sections */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Company Type</h3>
            {/* Add checkboxes */}
            <div>
              <label>
                <input type="checkbox" /> Startup
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Corporation
              </label>
            </div>
            {/* Add more options */}
          </div>
          {/* Repeat for other filter categories */}
        </div>
      </aside>
    )
  }
  
  export default FilterSidebar
  