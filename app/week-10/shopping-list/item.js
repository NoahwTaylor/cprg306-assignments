export default function Item({name, quantity, category, onSelect})
{
  return (
    <div className="my-2 border border-white p-2 rounded-md" onClick={() => onSelect(name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim("  ").split(",")[0])}>
      <ul>
        <li>{name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </div>  
  );
}