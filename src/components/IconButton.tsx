import {FC} from 'react';

import {Icon} from 'Types/icon-types';
import {capitalize} from 'Utils/index';
import * as icons from 'Assets/icons';

import styles from './icon-button.module.scss';

type Props = {
    name: Lowercase<Icon>
};

const IconButton: FC<Props> = (props) => {
    const SVG = icons[capitalize(props.name) as Capitalize<Icon>]
    return (
        <button className={styles.iconButton}>
            <SVG width={16} height={16} title={props.name} />
        </button>
    );
};

export default IconButton;
