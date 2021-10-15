function Timeline({ tl })
{
    const tlobject = tl
    const timesections = tlobject.sections.map((section) => 
        <div className="time-section" key={ section.id }>
        <div className="time-content">
                <h5>{ section.title }</h5>
                <span>{ section.dates }</span>
                <p>{ section.text }</p>
        </div>
        <div className="time-line">
            <div className="time-point"></div>
        </div>
    </div>
    );
    return (
        <div className="timeline">
            <h4>{ tlobject.title }</h4>
            <div className="timeline-inner">
                { timesections }
            </div>
        </div>
    )
}

export default Timeline
