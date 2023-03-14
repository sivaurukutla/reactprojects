
import './App.css';
import Child from './Clild';

function App() {
  const products=[
    { "id":36,
    "img":"../mi/mii.jpg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for realmi ",
    "hi": "new date(20/3/2022)",
    "price":2000
  },
    {
      "id":37,
      "img":"../mi/tshirt.webp",
    "tittle":"tshirt",
    "desc":"dont wash in hot water ",
    "price":200
    },
    {
      "id":38,
      "img":"../mi/mii.jpg",
    "tittle":"bluetooth",
    "desc":"a bluetooth for realmi ",
    "price":2000
    },]
  return (
   <div style={{backgroundColor:"grey"}} >
         {
          products.map((p)=>{
            return(
              <div key={p.id} >
                <div className='stylesheet'> Note that the development build is not optimized.
To create a production build,</div>

              <img src={p.img} alt={p.tittle} ></img>
              
              <h1>{p.tittle}</h1>
              <h3>{p.desc}</h3>
            <h2>{p.price}</h2>
            <h4>{p.hi}</h4>
          
            <button class="btn btn-primary">buynow</button><br></br>

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
