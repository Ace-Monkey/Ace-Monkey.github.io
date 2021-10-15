import Timeline from "./Timeline"

function MainTimelines({ tl1, tl2 })
{
    return (
        <div className="main-timelines">
            <Timeline tl={tl1} />
            <Timeline tl={tl2} />
        </div>
    )
}

export default MainTimelines
