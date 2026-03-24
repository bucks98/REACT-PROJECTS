

export const Header = () => {
  let customcss = "code";
  const isLoggedIn = false;
  const greeting = isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
  const items = ["Item 1","Item 2","Item 3","Item 4"];
  return (
    <>
        <h1 className='color1'>John Doe</h1>
        <h3 className='color2'>matrix</h3>
        <p className={customcss} style={{fontSize:"30px", fontStyle:"italic"}}>40+20={40 + 20}</p>
        {greeting}
        <ul>
            {items.map((item, index)=> (<li Key={index}>{item}</li>))}
        </ul>
    </>
  )
}
