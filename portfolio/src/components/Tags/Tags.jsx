function Tags({ items }) {
    return (
      <div className='tags flex flex-row flex-wrap gap-sm'>
        {items.map((item, index) => (
          <p key={index} className='tag interact cursor-pointer px-3 py-1 bg-secondary rounded-lg flex flex-row gap-sm items-center'>
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