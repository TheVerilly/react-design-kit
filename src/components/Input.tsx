import {forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes} from 'react';
import cx from 'classnames';
import styles from './input.module.scss';

import Label from 'Components/Label';

type InputElement = Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type Props = InputElement & {
    label?: string
    type?: HTMLInputTypeAttribute // TODO: using analog Pick
    error?: string
    isErrorMessage?: boolean
};

const Input = forwardRef<HTMLInputElement, Props>(({
    type = 'text',
    isErrorMessage = true,
    ...props
}, ref) => {
    const isError = Boolean(props.error);
    return (
        <div className={styles.wrapper}>
            {props.label && <Label isError={isError}>{props.label}</Label>}
            <input className={cx(styles.input, {[styles.error]: isError})} {...props} ref={ref}/>
            {isErrorMessage && props.error && <Label isError={isError}>{props.error}</Label>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
