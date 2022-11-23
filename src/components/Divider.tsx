import {FC} from 'react';
import cx from 'classnames';

import styles from './divider.module.scss'

type Props = {
    orientation?: 'horizontal' | 'vertical',
    size?: string
};

const STATIC_SIZE = '1px'

const Divider: FC<Props> = ({
    size = '100%',
    orientation = 'horizontal'
}) => {
    return (
        <div
            className={cx(styles.divider, styles[orientation])}
            style={{
                height: orientation === 'vertical' ? size : STATIC_SIZE,
                width: orientation === 'horizontal' ? size : STATIC_SIZE
            }}
        />
    );
};

export default Divider;
