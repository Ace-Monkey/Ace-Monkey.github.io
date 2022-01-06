import BackendSingleField from "./BackendSingleField";

function randID()
{ 
    return Math.random().toString(36).substr(2, 8)
}

function Backend({ data })
{
    console.log(data)
    const admindata = Object.keys(data).map((key) => (
        <BackendSingleField label={key} value={data[key]} key={randID() } />
    ));
    
    return (
        <div className="backend">
            <div className="backend-inner">
                <form>
                    { admindata }
                </form>
            </div>
        </div>
    )
}

export default Backend
