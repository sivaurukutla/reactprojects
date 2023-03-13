
import './App.css';
import Child from './Clild';

function App() {
  const products=[
    { "id":36,
    "img":"../mi/mii.jpg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for realmi ",
    "price":2000
  },
    {
      "id":37,
      "img":"../mi/mii.jpg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for realmi ",
    "price":2000
    },
    {
      "id":38,
      "img":"../mi/mii.jpg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for realmi ",
    "price":2000
    },]
  return (
   <div >
         {
          products.map((p)=>{
            return(
              <div key={p.id} >

              <img src={p.img} alt={p.tittle}></img>
              
              <h1>{p.tittle}</h1>
              <h3>{p.desc}</h3>
            <h2>{p.price}</h2>
            <input type='button' value="BUY"></input>
            <s >20000</s>
            <h3 >15000</h3>
            
            
            
            </div>
          )})
         }
                     <Child prnds={products}></Child>

    </div>
  );
}

export default App;
