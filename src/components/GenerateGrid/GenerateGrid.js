import { useState, useEffect } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import "./GenerateGrid.css";

/**
 * Copyright (c) 2019 FarmLead Resources Ltd. All rights reserved.
 */

// lodash
var _ = require("lodash");

// The colors this grid allows
var allCOLORS = [
  { id: 0, color: "red" },
  { id: 1, color: "blue" },
  { id: 2, color: "green" },
];

/**
 * Flood fills the given grid by changing the color of the point at x and y
 *
 * @param {[][]string} grid Grid on which you should implement the flooding algorithm using the color defined at the x and y coordinates given in the x and y args
 * @param {number} x X coordinate
 * @param {number} y Y coordinate
 * @param {string} color New color to fill with using the flood algorithm, will be one of the COLORS
 * @returns {[][]string} Grid array with the implemented flood fill algorithm
 */

/**
 * Generates a (rowsxcolumns) grid where the color of each point in the grid is randomly selected to be red, blue or green
 *
 * @param {number} rows Number of rows in this grid
 * @param {number} columns Number of columns in this grid
 * @returns {[][]string} Grid array
 */

const NewGrid = () => {
  const [gridState, setGridState] = useState([]);
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const [width, setWidth] = useState(50);

  useEffect(() => {
    // The 2D array which will be used to store the randomly generated color values
    var grid = [];

    // Move row by row and populate each point in the row with a random color
    for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
      // Create the array at this row which represents the column
      grid[rowIndex] = [];

      // Go through each point in the column
      for (var columnIndex = 0; columnIndex < columns; columnIndex++) {
        // Generate the random color for the point at rowIndex,columnIndex
        const generateSingleColor = allCOLORS.map((item) => item.color);
        console.log(generateSingleColor);
        var colorForCurrentCoord = generateSingleColor[_.random(0, 2)];

        // Set the color
        grid[rowIndex][columnIndex] = colorForCurrentCoord;
      }
    }
    setGridState(grid);
  }, []);

  return (
    <div>
      <h1>JS Technical Interview Paint</h1>
      <div className="grid-container">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, ${width}px)`,
            gridTemplateRows: `repeat(${rows}, ${width}px)`,
          }}
        >
          {gridState.map((oneColor, i) => {
            return oneColor.map((item, j) => {
              return (
                <div
                  id={`${i},${j}`}
                  //   onClick={}
                  key={`${i},${j}`}
                  data-index={`${i},${j}`}
                  style={{
                    backgroundColor: `${item}`,
                  }}
                />
              );
            });
          })}
        </div>
      </div>

      <ColorPicker classColor="red" title="Red" />
      <ColorPicker classColor="blue" title="Blue" />
      <ColorPicker classColor="green" title="Green" />
    </div>
  );
};

export default NewGrid;
