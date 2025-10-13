export default function Item({name, quantity, category})
{
  return (
      <div className="my-2 border border-white p-2 rounded-md">
        <ul>
          <li>{name}</li>
          <li>Quantity: {quantity}</li>
          <li>Category: {category}</li>
        </ul>
      </div>  
  );
}