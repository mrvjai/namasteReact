export const ItemsMenu = ({ data }) => {
  console.log(data, "mainnnn");
  return (
    <div>
      {data.map((category, categoryIndex) =>
        category.category.items.map((item, itemIndex) => (
          <div key={`${categoryIndex}-${itemIndex}`} className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="py-4 flex justify-between">
              <span>{item.item.name}</span>
              <button className="bg-amber-100">- ADD +</button>
            </div>
            <p className="text-xs">{item.item.desc||"preparing with love"}</p>
          </div>
        )),
      )}
    </div>
  );
};
