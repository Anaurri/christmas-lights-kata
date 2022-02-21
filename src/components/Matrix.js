
import Columns from './Columns';
import React, { useState, useEffect } from "react";

function Matrix() {


    function createArray(num) {
        var array = [];
        for (let i = 0; i < num; i++) {
            array.push(i);
        }
        return array;
    }

    const col = createArray(10);
    const row = createArray(10);

    return (
        <div>
            <table>
                {col.map((i) =>
                    <Columns key={i} valueY={i} rows={row}></Columns>
                )}
            </table>

        </div>
    );
}

export default Matrix;
