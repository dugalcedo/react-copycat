import { useMeasurments } from "./MeasurementContext.tsx";

function Performance({ label }: { label: MeasureLabel }) {

    const m = useMeasurments()

    return (
        <div className="perf">
            {Object.entries(m.values[label]).map(([phase, number]) => {
                const displayedTime = (number/1000).toFixed(2) + "s"
                return <div className="metric" key={`${label}|${phase}`}>
                    <span className="phase">{phase}</span>
                    <span className="number">{displayedTime}</span>
                </div>
            })}
        </div>
    )
}

export default Performance;