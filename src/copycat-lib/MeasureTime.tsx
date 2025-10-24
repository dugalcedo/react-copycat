import { Profiler, type ReactNode, type ProfilerOnRenderCallback, useRef } from "react"
import { useMeasurments } from "./MeasurementContext.tsx"

type MeasurementsRecord = Record<string, number>

export default function MeasureTime({ children, label }: { children: ReactNode, label: MeasureLabel }) {

    const previousValues = useRef<MeasurementsRecord>({})

    const m = useMeasurments()

    const handleRender: ProfilerOnRenderCallback = (id, phase, actualDuration) => {
        console.log(`Measuring time: ${id} | ${phase} | ${actualDuration.toFixed(3)}`)
        const previousValue = previousValues.current[phase];
        if (Math.abs(actualDuration-previousValue) < 10) return;
        previousValues.current[phase] = actualDuration;
        m.setValue(label, phase, actualDuration)
    }

    return <Profiler id={label} onRender={handleRender}>
        {children}
    </Profiler>
}