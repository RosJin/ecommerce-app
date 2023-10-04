import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, classname, val, onCh, onBl } = props;
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${classname}`}
                value={val}
                onChange={onCh}
                onBlur={onBl}
            />
        </div>
    );
};

export default CustomInput;
