import React from 'react';
import { MultiSelect } from 'primereact/multiselect';


export const SelectMultiple = (props: any) => {
    const { optionLabel, items, option, setOption , placeholder} = props
    return (
        <div className="field mt-4">
            <MultiSelect optionLabel={optionLabel} placeholder={ placeholder}  value={option} options={items} onChange={setOption} />
        </div>
    )
}
