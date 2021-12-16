import { useState, useEffect } from "react";
import "./GenerateGrid.css";

/**
 * Copyright (c) 2019 FarmLead Resources Ltd. All rights reserved.
 */

// lodash
var _ = require("lodash");

// The colors this grid allows
var COLORS = ["red", "blue", "green"];

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
  const [randomColor, setRandomColor] = useState([]);
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
        var colorForCurrentCoord = COLORS[_.random(0, 2)];

        // Set the color
        grid[rowIndex][columnIndex] = colorForCurrentCoord;
      }
    }
    setRandomColor(grid);
  }, []);
  console.log("THIS IS RANDOM COLOR", randomColor);

  const getIndex = (e) => {
    console.log(e.target.getAttribute("data-index")); //will log the index of the clicked item
  };

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
          {randomColor.map((oneColor) => {
            return oneColor.map((item, index) => {
              return (
                <div
                  onClick={getIndex}
                  key={index}
                  data-index={index}
                  style={{
                    backgroundColor: `${item}`,
                    border: "solid 1px black",
                  }}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default NewGrid;
