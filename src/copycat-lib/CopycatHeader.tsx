import { useState, useRef, type FormEventHandler } from "react";

function CopycatHeader() {
    const [time, setTime] = useState(0)
    const intervalRef = useRef<ReturnType<typeof setInterval>>(0)

    const handleTick = () => {
        setTime(c => {
            const newVal = c-1000
            if (newVal <= 0) {
                clearInterval(intervalRef.current)
                return 0
            } else {
                return newVal
            }
        })
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        clearInterval(intervalRef.current)
        const fd = new FormData(e.currentTarget)
        const m = Number(fd.get('m')) || 0;
        const s = Number(fd.get('s')) || 1;
        setTime(s*1000 + m*60*1000)
        intervalRef.current = setInterval(() => {
            handleTick()
        }, 1000);
    }

    const displayTime = () => {
        const absSeconds = time/1000;
        const m = Math.floor(absSeconds/60);
        const s = absSeconds - (m*60);
        return `${pad0(m)}:${pad0(s)}`
    }

    return (
        <header>
            <div className="controls">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        M
                        <input type="number" name="m" step={1} min={0} max={40} defaultValue={1} />
                    </div>
                    <div className="field">
                        S
                        <input type="number" name="s" min={0} max={59} step={1} defaultValue={0} />
                    </div>
                    <button type="submit">
                        Start
                    </button>
                </form>
                <p className={`${time <= 0 ? 'times-up': ''}`}>Time remaining: {displayTime()}</p>
            </div>
        </header>
    )
}

export default CopycatHeader;


// helper
function pad0(n: number): string {
    if (n >= 10 || n <= -10) return n.toString();
    if (n < 0) return "-0" + Math.abs(n);
    return "0" + n;
} 