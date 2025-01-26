function FilterButtons({ selectedCategory, onFilterChange }) {
  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"];

  const handleFilterChange = (category) => {
    if (selectedCategory === category) {
      onFilterChange("All");
    } else {
      onFilterChange(category);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px", 
        marginBottom: "16px",
        marginLeft: "0.5%",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilterChange(cat)}
          style={{
            padding: "10px 16px",
            fontSize: "17px",
            backgroundColor: selectedCategory === cat ? "rgb(0, 106, 255)" : "white",
            color: selectedCategory === cat ? "white" : "rgb(0, 106, 255)",
            border: `1px solid ${selectedCategory === cat ? "white" : "rgb(0, 106, 255)"}`,
            borderRadius: "11px",
            cursor: "pointer",
            whiteSpace: "nowrap", 
          }}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
