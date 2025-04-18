function Tags({ items, containerClass = "tags", tagClass = "tag" }) {
    return (
      <div className={containerClass}>
        {items.map((item, index) => (
          <p key={index} className={tagClass}>
            {item.logo && (
              <img src={item.logo} alt={item.name} className="h-9 rounded-full" />
            )}
            {item.name}
          </p>
        ))}
      </div>
    );
  }
  
  export default Tags;