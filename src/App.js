import './App.css';
import Itemlist from './Itemlist';
import Productlistbs from './Productlistbs';

function App() {
  const products=[
    { "id":36,
    "img":"../assets/bluetooth.jpeg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for redmi ",
    "price":2000
  },
    {
      "id":37,
      "img":"../assets/bluetooth.jpeg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for redmi ",
    "price":2000
    },
    {
      "id":38,
      "img":"../assets/bluetooth.jpeg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for redmi ",
    "price":2000
    },
  ]
  return (
    <div >
      
    { products.map((p)=>{
      return(
            <div key={p.id} className='product'>
              <img src={p.img} alt={p.tittle}></img>
              <h5>{p.tittle}</h5>
              <p>{p.desc}</p>
              <h6>{p.price}</h6>
              </div>)
            
      })}
      <hr></hr>
      
      <Productlistbs prds={products}></Productlistbs>
      <Itemlist></Itemlist>
    </div>
  );
}

export default App;
