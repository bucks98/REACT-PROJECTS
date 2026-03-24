

export const ArraySample = (props) => {
    const {items} = props;
  return (
    <div>
        <h2>Items list</h2>
        <ul>
            {items.map((item)=> (
                <li Key={item.id}>{item.name}</li> 
           ))}
        </ul>
    </div>
  )
}
