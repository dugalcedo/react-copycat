import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type MeasurementValues = Record<MeasureLabel, Record<string, number>>

type MeasurementContext = {
    values: MeasurementValues
    resetValues: (label: MeasureLabel) => void
    resetAllValues: () => void
    setValue: (label: MeasureLabel, key: string, value: number) => void
}

const C = createContext<MeasurementContext>({
    values: {
        student: {},
        teacher: {}
    },
    resetValues() {},
    resetAllValues() {},
    setValue() {}
})

export const useMeasurments = () => useContext(C);

export const MeasurementContextProvider = ({ children }: { children: ReactNode }) => {
    const [values, setValues] = useState<MeasurementValues>({
        student: {},
        teacher: {}
    })

    useEffect(() => {
        console.log({values})
    }, [values])

    const resetValues = (label: MeasureLabel) => {
        setValues({
            ...values,
            [label]: {}
        })
    }

    const resetAllValues = () => {
        setValues({
            student: {},
            teacher: {}
        })
    }

    const setValue = (label: MeasureLabel, key: string, value: number) => {
        setValues(current => ({
            ...current,
            [label]: {
                ...current[label],
                [key]: value
            }
        }))
    }

    return <C.Provider value={{
        values,
        resetValues,
        resetAllValues,
        setValue
    }}>{children}</C.Provider>
}