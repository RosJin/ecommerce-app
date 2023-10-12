import React from "react";

const CustomInput = (props) => {
    const { type, name, placeholder, classname, val, onCh, onBl, dis } = props;
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
                disabled={dis}
            />
        </div>
    );
};

export default CustomInput;
