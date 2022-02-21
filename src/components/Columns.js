import { Fragment } from 'react';
import Item from './Item';


function Columns(props) {
    return (
        <tr>
            {props.rows.map((i) =>
                <Item key={i} valueX={i} valueY={props.valueY}></Item>
            )}
        </tr>
    );
}

export default Columns;