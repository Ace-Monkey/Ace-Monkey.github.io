import { useState, useEffect } from 'react'

function BackendSingleField({ label, value})
{
    const [_label, setLabel] = useState(label)
    const [_value, setValue] = useState(value)
    const [multiValues, setMultiValues] = useState("Error - somthing wrong with the data!")

    useEffect(()=>{
    if (_value.constructor.name === "Array")
    {
        const arrType = _value.map((val) => (
            <BackendSingleField label={val.id} value={val} />
        ));
        setMultiValues(arrType)
    } else if (_value.constructor.name === "Object")
    {
        const objType = Object.keys(_value).map((val) => (
            <BackendSingleField label={val} value={_value[val]} />
        ));
        setMultiValues(objType)
    } else
    {
        console.log(_label + ":" + _value)
        setMultiValues(
            <div className="row" key={ _label }>
                <label>{ _label }</label>
                <input type="text" name={_label} id={_label} value={_value} onChange={(e) => setValue(e.target.value)} />
            </div>
            )
        }
    },[_label, _value])

    return multiValues
}

export default BackendSingleField
