const generateSVG = require("../utils/generateSVG.js");

describe("Circle", () => {
  it("Should throw an error if circle color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    const circle = new generateSVG.Circle();
    circle.setText(data.text);
    circle.setTextColor(data.colorText);

    expect(circle.renderShape()).toThrowError(
      ">> ERROR: Color attribute has not been set"
    );
  });

  it("Should throw an error if text attribute is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    const circle = new generateSVG.Circle();
    circle.setColor(data.colorShape);
    circle.setTextColor(data.colorText);

    expect(circle.renderText()).toThrow(
      ">> ERROR: Text attribute has not been set"
    );
  });

  it("Should throw an error if text color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    const circle = new generateSVG.Circle();
    circle.setColor(data.colorShape);
    circle.setText(data.text);

    expect(circle.renderText()).toThrow(
      ">> ERROR: Text color attribute has not been set"
    );
  });
});

// describe("Square", () => {
//   it("Should throw an error if square color is not defined upon rendering", () => {
//     // Hex values are manually formatted for test
//     const data = {
//       text: "RDE",
//       colorText: "#000",
//       shape: "Square",
//       colorShape: "#FFF",
//     };

//     const square = new generateSVG.Square();
//     square.setText(data.text);
//     square.setTextColor(data.colorText);

//     expect(square.renderShape()).toThrowError(
//       ">> ERROR: Color attribute has not been set"
//     );
//   });

//   it("Should throw an error if text attribute is not defined upon rendering", () => {
//     // Hex values are manually formatted for test
//     const data = {
//       text: "RDE",
//       colorText: "#000",
//       shape: "Square",
//       colorShape: "#FFF",
//     };

//     const square = new generateSVG.Square();
//     square.setColor(data.colorShape);
//     square.setTextColor(data.colorText);

//     expect(square.renderText()).toThrowError(
//       ">> ERROR: Text attribute has not been set"
//     );
//   });

//   it("Should throw an error if text color is not defined upon rendering", () => {
//     // Hex values are manually formatted for test
//     const data = {
//       text: "RDE",
//       colorText: "#000",
//       shape: "Square",
//       colorShape: "#FFF",
//     };

//     const square = new generateSVG.Square();
//     square.setColor(data.colorShape);
//     square.setText(data.text);

//     expect(square.renderText()).toThrowError(
//       ">> ERROR: Text color attribute has not been set"
//     );
//   });
// });

// describe("Triangle", () => {
//   it("Should throw an error if triangle color is not defined upon rendering", () => {
//     // Hex values are manually formatted for test
//     const data = {
//       text: "RDE",
//       colorText: "#000",
//       shape: "Triangle",
//       colorShape: "#FFF",
//     };

//     const triangle = new generateSVG.Triangle();
//     triangle.setText(data.text);
//     triangle.setTextColor(data.colorText);

//     expect(triangle.renderShape()).toThrowError(
//       ">> ERROR: Color attribute has not been set"
//     );
//   });

//   it("Should throw an error if text attribute is not defined upon rendering", () => {
//     // Hex values are manually formatted for test
//     const data = {
//       text: "RDE",
//       colorText: "#000",
//       shape: "Triangle",
//       colorShape: "#FFF",
//     };

//     const triangle = new generateSVG.Triangle();
//     triangle.setColor(data.colorShape);
//     triangle.setTextColor(data.colorText);

//     expect(triangle.renderText()).toThrowError(
//       ">> ERROR: Text attribute has not been set"
//     );
//   });

//   it("Should throw an error if text color is not defined upon rendering", () => {
//     // Hex values are manually formatted for test
//     const data = {
//       text: "RDE",
//       colorText: "#000",
//       shape: "Triangle",
//       colorShape: "#FFF",
//     };

//     const triangle = new generateSVG.Triangle();
//     triangle.setColor(data.colorShape);
//     triangle.setText(data.text);

//     expect(triangle.renderText()).toThrowError(
//       ">> ERROR: Text color attribute has not been set"
//     );
//   });
// });
