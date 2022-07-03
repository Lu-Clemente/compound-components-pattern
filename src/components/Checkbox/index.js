import React,
{ Children, cloneElement, createContext, useContext, useState }
    from "react"

const CheckboxContext = createContext(null);

const OuterBox = ({ children }) => {
    const [checked, setChecked] = useState(false)

    return (
        <CheckboxContext.Provider
            value={{
                checked,
                setChecked
            }}
        >
            {children}
        </CheckboxContext.Provider>
    )
}

const CheckboxInput = () => {

    const context = useContext(CheckboxContext)

    if (!context) {
        throw new Error('CheckboxInput should be called inside a OuterBox component')
    }

    const { checked, setChecked } = context

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}

const Label = ({ label = "Are you a developer?" }) => {

    const context = useContext(CheckboxContext)

    if (!context) {
        throw new Error('Label should be called inside a OuterBox component')
    }

    const { setChecked } = context

    return (
        <label onClick={() => setChecked(value => !value)}>{label}</label>
    )
}

const Checkbox = ({ label }) => {
    return (
        <OuterBox>
            <CheckboxInput />
            <Label label={label} />
        </OuterBox>
    )
}

export default Checkbox;