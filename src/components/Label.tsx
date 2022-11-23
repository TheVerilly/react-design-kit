import {FC} from 'react';
import cx from 'classnames';
import type {Property} from 'csstype';

import styles from './label.module.scss';

type TextAlign = Property.TextAlign;
type TextTransform = Property.TextTransform;

type Props = {
    children: string
    isError?: boolean
    textAlign?: TextAlign
    textTransform?: TextTransform
};

const Label: FC<Props> = (props) => {
    return (
        <label
            className={cx(styles.label, {[styles.error]: props.isError})}
            style={{
                textAlign: props.textAlign,
                textTransform: props.textTransform
            }}
        >
            {props.children}
        </label>
    );
};

export default Label;
