function Listdemo() {
    const d=["hi","siva","urukutla"]
    return (
        <div>
            <ul>
                {d.map(e=>
                   {return(<li key={e}>{e}</li>)} )}

                   <li>i  am siva</li>
            </ul>
        </div>
      );
}

export default Listdemo;