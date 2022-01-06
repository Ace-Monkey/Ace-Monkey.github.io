import { useState, useEffect } from 'react'

function randID()
{ 
    return Math.random().toString(36).substr(2, 8)
}

function BackendSingleField({ label, value})
{
    const [_label, setLabel] = useState(label)
    const [_value, setValue] = useState(value)
    const [multiValues, setMultiValues] = useState("Error - somthing wrong with the data!")
    useEffect(() =>
    {
        if (_value.constructor.name === "Array")
        {
            const arrType = (
                <div className={_label + ' row multiple'} key={_label + "-" + randID()}>
                    <label>{_label}</label>
                    {_value.map((val) => (
                        <BackendSingleField label={val.id} value={val} key={randID()} />
                    ))}
                </div>
            );
            setMultiValues(arrType)
        } else if (_value.constructor.name === "Object")
        {
            const objType = (
                <div className={'id-' + _label + ' row object'} >
                    {Object.keys(_value).map((val) => (
                        <BackendSingleField label={val} value={_value[val]} key={randID()} />
                    ))}
                    <button>Delete</button>
                </div>
            )
        setMultiValues(objType)
    } else
    {
        const ranID = Math.random().toString(36).substr(2, 8);
        setMultiValues(
            <div className="row" key={ _label + "-" + ranID }>
                <label>{ _label }</label>
                <input type="text" name={_label + "-" + ranID} id={_label + "-" + ranID} value={_value}  onChange={(e) => setValue(e.target.value)} />
            </div>
            )
        }
    },[_label, _value])

    return multiValues
}

export default BackendSingleField
