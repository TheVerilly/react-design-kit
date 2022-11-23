import {FC, ButtonHTMLAttributes} from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

// type ButtonElement = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
};

const Button: FC<Props> = ({
    variant = 'primary',
    ...props
}) => {
    return (
        <button className={cx(styles.mainButton, styles[variant])} {...props}>
            {props.children}
        </button>
    );
};

export default Button;
