import { Fragment, React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Item(props) {

    var isOn=true;

    const arrayOff = [[1, 3], [1, 4], [1, 2]];

    const jsonOff = [9 ,9];
    const item =[props.valueX, props.valueY]


    arrayOff.forEach(element => {
        if (element[0] === item[0] && element[1] === item[1]){
            isOn=false;
        }

    });

    return (
        <td className="on">
            {isOn && (
                <FontAwesomeIcon icon="fa-solid fa-circle" style={{ color: "yellow" }} />
            )} 
            {!isOn && (
                <FontAwesomeIcon icon="fa-solid fa-circle" style={{ color: "black" }} />
            )}
        </td>
    );
}

export default Item;