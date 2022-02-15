import React from 'react';

export const Radio = ( { id, name, elemClass, handler, checkRadio, label } ) => {
    return (
        <>
            <p>
                { checkRadio === 'on'
                ?
                    <input
                        type="radio"
                        id={id}
                        name={name}
                        className={elemClass}
                        defaultChecked
                        onChange={handler}
                    />
                :
                    <input
                        type="radio"
                        id={id}
                        name={name}
                        className={elemClass}
                        onChange={handler}
                    />
                }

                <label htmlFor={id}>{label}</label>
            </p>
        </>
    )
}
