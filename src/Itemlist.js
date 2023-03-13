function Itemlist() {
    const varification=[
        "buy a grocery", 
        "get adhar address modified ",
        " apply for e bill"," pan number ",
        " bank account",
        " state",
        " confirm"
    ]
    return (
        <div>
          <ul>
           {varification.map(e=>
             { return(<li key={e}>{e}</li>)}
            )}
          </ul>
        </div>
     );
}

export default Itemlist;