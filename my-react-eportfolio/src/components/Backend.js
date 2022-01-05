import BackendSingleField from "./BackendSingleField";

function Backend({ data })
{
    console.log(data)
    const admindata = Object.keys(data).map((key) => (
        <BackendSingleField label={key} value={data[key]} />
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
