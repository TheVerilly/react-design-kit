import {FC, InputHTMLAttributes, useState, useCallback} from 'react';

import styles from './checkbox.module.scss';

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = useCallback(() => {
        setIsChecked(!isChecked);
    }, [isChecked]);

    return (
        <div className={styles.wrapper}>
            <input className={styles.checkbox} type="checkbox" checked={props.checked} onChange={handleOnChange}/>
        </div>
    );
};

export default Checkbox;
