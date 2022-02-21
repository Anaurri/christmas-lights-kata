import { Fragment } from 'react';

function ControlPanel(props) {


    return (
        <div>
            <h2>Control Panel</h2>
            <button style={{ width: "20" }}>ON/OFF</button>

            <div className="btn-group" style={{ width: "100" }}>

                <button style={{ width: "20" }}>First</button>
                <button style={{ width: "20" }}>Second</button>
                <button style={{ width: "20" }}>Third</button>
                <button style={{ width: "20" }}>Fourth</button>

                <div style={{ width: "20" }}>
                    <p>Try X-Y</p>
                    <input
                        type="number"
                        // value={col.length}
                        min="0"
                        max="100"
                    // onChange={(e) => crearArreglo(e.target.value, setCol)}
                    />
                    <input
                        type="number"
                        // value={row.length}
                        min="0"
                        max="100"
                    // onChange={(e) => crearArreglo(e.target.value, setRow)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ControlPanel;