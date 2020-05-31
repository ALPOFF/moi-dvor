import Select from "react-select";
import React from "react";

const colourOptions = [
    { value: 'ocean', label: 'Ocean'},
    { value: 'blue', label: 'Blue'},
    { value: 'purple', label: 'Purple'}
];

let xxx = (e) => {
    console.log(e)
}

export default (props) => (
    <Select
        {...props}
        value={props.input.value}
        onChange={(value) => props.input.onChange(value)}
        onBlur={() => props.input.onBlur(props.input.value)}
        options={props.options}
        isMulti
    />
);
