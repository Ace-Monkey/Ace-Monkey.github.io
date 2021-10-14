import Asidebar from "./Asidebar";
import Main from "./Main";

function Eportfolio({ data })
{
    return (
        <div className="eportfolio-section">
            <Asidebar info={data} />
            <Main info={data} />
        </div>
    )
}

export default Eportfolio
