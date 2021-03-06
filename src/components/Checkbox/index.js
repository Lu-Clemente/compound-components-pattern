import React, { Children, cloneElement, useState } from "react";
import { Checks, ChecksLabel } from "./styles";

const OuterBox = ({ children }) => {
    const [checked, setChecked] = useState(false)

    const allChidren = Children.map(children, (child) => {

        if (child.type !== Label && child.type !== CheckboxInput) {
            throw new Error(`No custom elements allowed, but found <${child.type}/>`)
        }

        const clone = cloneElement(child, {
            checked,
            setChecked
        })
        return clone
    })

    return allChidren

}

const CheckboxInput = ({ checked, setChecked }) => {

    if (!setChecked) {
        throw new Error('CheckboxInput should be called inside a OuterBox component')
    }

    return (
        <Checks
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}

const Label = ({ label = "Are you a developer?", setChecked }) => {

    if (!setChecked) {
        throw new Error('Label should be called inside a OuterBox component')
    }

    return (
        <ChecksLabel onClick={() => setChecked(value => !value)}>{label}</ChecksLabel>
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