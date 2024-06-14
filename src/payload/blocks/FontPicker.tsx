import React from 'react';
import { useFieldType, Label } from 'payload/components/forms';
import { Props } from 'payload/components/fields/Text';

const FontPicker: React.FC<Props> = (props) => {
    const {
        path,
        label, 
        required
    } = props;

    const { value = '', setValue} = useFieldType({
        path: path || ''
    });

    return (
        <div>
            <Label 
                htmlFor={path}
                label={label}
                required={required}
            />

            <select>
                <option>
                    Option 1
                </option>
            </select>

        </div>
    )
}

export default FontPicker;