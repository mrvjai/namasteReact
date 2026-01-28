export const ItemsMenu = ({ data }) => {
  console.log(data, "mainnnn");
  return (
    <div>
      {data.map((x, y) =>
        x.category.items.map((x, y) => (
          <div key={y} className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="py-4 flex justify-between">
              <span>{x.item.name}</span>
              <button className="bg-amber-100">- ADD +</button>
            </div>
            <p className="text-xs">{x.item.desc||"preparing with love"}</p>
          </div>
        )),
      )}
    </div>
  );
};
