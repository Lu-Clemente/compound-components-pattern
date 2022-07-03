import React, { Children, cloneElement, useState } from "react"

const OuterBox = ({ children }) => {
    const [checked, setChecked] = useState(false)

    const allChidren = Children.map(children, (child) => {
        const clone = cloneElement(child, {
            checked,
            setChecked
        })
        return clone
    })

    return allChidren
}

const CheckboxInput = ({ checked, setChecked }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}

const Label = ({ label = "Are you a developer?", setChecked }) => {
    return (
        <label onClick={() => setChecked(value => !value)}>{label}</label>
    )
}

const Checkbox = ({ label }) => {
    return (
        <OuterBox>
            <CheckboxInput />
            <br/>
            <Label label={label} />
        </OuterBox>
    )
}

export default Checkbox;