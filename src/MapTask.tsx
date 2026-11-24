    function MapTask(){

    const prodcut=["dell","lenova","apple","sony"]
    const number=[23,34,4432,232,221]
    const isway=true;
    const sass=[""];
    return(

    <div>
        <h1>task rendering</h1>
    {
        prodcut.map((products)=>
        <p>{products}</p>)
    }
    <h2>Rendering Task</h2>
    {
        number.map((n,index)=>
            <h4 key={index}>{n}</h4>
        )
    }
        <h2>boolean operation</h2>
    {
        isway===true ?(
            <h6>login succedd</h6>
        ):(
            <h6>fialed bro</h6>
        )
    }
    <h2>Empty state</h2>
    {
       sass.map((revs,index)=>
       <h1 key={index}>{revs}</h1>) 
    }
    </div>

    )
    }
    export default MapTask