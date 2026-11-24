import spares from "./spares.json";

function App() {
    // const spareData = '{"id":102,"spare":"radiator","model":"Toyota"}';
    // const result = JSON.parse(spareData);
    // console.log(JSON.stringify(spares));
    // console.log(result);
    // console.log(result.spare)
    return (
        <div>
            <h1>Available Parts</h1>

 {spares.map((sp, index) => (
                <div key={index}>
         <h4>Part ID: {sp.id}</h4>
                    <h6>Model: {sp.model}</h6>
                    <h6>Spare name: {sp.spare}</h6>
                </div>
            ))} 
        </div>
    );
}

export default App;