// filtrar tabla

import React, { useState } from "react";

function SearchTable({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) => {
      return Object.values(item).some((value) => {
        if (typeof value === "object") {
          return value.value.toLowerCase().includes(query);
        } else {
          return value.toLowerCase().includes(query);
        }
      });
    });

    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
     
    </div>
  );
}

export default SearchTable;
