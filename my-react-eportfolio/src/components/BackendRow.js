import { useState } from 'react'

function BackendRow({ id, val1 = "", val2 = "", val3 = "", val4 = "", val5 = "", onRemove })
{
    const [_val1, setVal1] = useState(val1)
    const [_val2, setVal2] = useState(val2)
    const [_val3, setVal3] = useState(val3)
    const [_val4, setVal4] = useState(val4)
    const [_val5, setVal5] = useState(val5)
    return (
        <div className="row">
            <p>{id}</p>
            {val1 !== "" ? (<input type="text" name={id + '-input1'} id={id + '-input1'} value={_val1} onChange={(e) => setVal1(e.target.value)} />) : ("")}
            {val2 !== "" ? (<input type="text" name={id + '-input2'} id={id + '-input2'} value={_val2} onChange={(e) => setVal2(e.target.value)} />) : ("")}
            {val3 !== "" ? (<input type="text" name={id + '-input3'} id={id + '-input3'} value={_val3} onChange={(e) => setVal3(e.target.value)} />) : ("")}
            {val4 !== "" ? (<input type="text" name={id + '-input4'} id={id + '-input4'} value={_val4} onChange={(e) => setVal4(e.target.value)} />) : ("")}
            {val5 !== "" ? (<textarea name={id + '-input5'} id={id + '-input5'} value={_val5} onChange={(e) => setVal5(e.target.value)} />) : ("")}
            <input type="button" className="del-button" value="X" onClick={() => onRemove(id) } />
        </div>
    )
}

export default BackendRow
