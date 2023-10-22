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

    expect(() => {
      const circle = new generateSVG.Circle();
      circle.setText(data.text);
      circle.setTextColor(data.colorText);
      circle.renderShape();
    }).toThrowError(">> ERROR: Color attribute has not been set");
  });

  it("Should throw an error if text attribute is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    expect(() => {
      const circle = new generateSVG.Circle();
      circle.setColor(data.colorShape);
      circle.setTextColor(data.colorText);
      circle.renderText();
    }).toThrow(">> ERROR: Text attribute has not been set");
  });

  it("Should throw an error if text color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    expect(() => {
      const circle = new generateSVG.Circle();
      circle.setColor(data.colorShape);
      circle.setText(data.text);
      circle.renderText();
    }).toThrow(">> ERROR: Text color attribute has not been set");
  });

  it("Should return SVG tag with corresponding shape data", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    const circle = new generateSVG.Circle();
    circle.setColor(data.colorShape);
    circle.setText(data.text);
    circle.setTextColor(data.colorText);
    const result = circle.renderShape();

    expect(result).toEqual('<circle cx="150" cy="100" r="100" fill="#FFF" />');
  });

  it("Should return SVG tag with corresponding text data", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    const circle = new generateSVG.Circle();
    circle.setColor(data.colorShape);
    circle.setText(data.text);
    circle.setTextColor(data.colorText);
    const result = circle.renderText();

    expect(result).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#000">RDE</text>'
    );
  });
});

describe("Square", () => {
  it("Should throw an error if square color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Square",
      colorShape: "#FFF",
    };

    expect(() => {
      const square = new generateSVG.Square();
      square.setText(data.text);
      square.setTextColor(data.colorText);
      square.renderShape();
    }).toThrowError(">> ERROR: Color attribute has not been set");
  });

  it("Should throw an error if text attribute is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Square",
      colorShape: "#FFF",
    };

    expect(() => {
      const square = new generateSVG.Square();
      square.setColor(data.colorShape);
      square.setTextColor(data.colorText);
      square.renderText();
    }).toThrow(">> ERROR: Text attribute has not been set");
  });

  it("Should throw an error if text color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Square",
      colorShape: "#FFF",
    };

    expect(() => {
      const square = new generateSVG.Square();
      square.setColor(data.colorShape);
      square.setText(data.text);
      square.renderText();
    }).toThrow(">> ERROR: Text color attribute has not been set");
  });

  it("Should return SVG tag with corresponding shape data", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Square",
      colorShape: "#FFF",
    };

    const square = new generateSVG.Square();
    square.setColor(data.colorShape);
    square.setText(data.text);
    square.setTextColor(data.colorText);
    const result = square.renderShape();

    expect(result).toEqual(
      '<rect width="200" height="200" x="50" fill="#FFF" />'
    );
  });

  it("Should return SVG tag with corresponding text data", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Square",
      colorShape: "#FFF",
    };

    const square = new generateSVG.Square();
    square.setColor(data.colorShape);
    square.setText(data.text);
    square.setTextColor(data.colorText);
    const result = square.renderText();

    expect(result).toEqual(
      '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#000">RDE</text>'
    );
  });
});

describe("Triangle", () => {
  it("Should throw an error if triangle color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Triangle",
      colorShape: "#FFF",
    };

    expect(() => {
      const triangle = new generateSVG.Triangle();
      triangle.setText(data.text);
      triangle.setTextColor(data.colorText);
      triangle.renderShape();
    }).toThrowError(">> ERROR: Color attribute has not been set");
  });

  it("Should throw an error if text attribute is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Triangle",
      colorShape: "#FFF",
    };

    expect(() => {
      const triangle = new generateSVG.Triangle();
      triangle.setColor(data.colorShape);
      triangle.setTextColor(data.colorText);
      triangle.renderText();
    }).toThrow(">> ERROR: Text attribute has not been set");
  });

  it("Should throw an error if text color is not defined upon rendering", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Triangle",
      colorShape: "#FFF",
    };

    expect(() => {
      const triangle = new generateSVG.Triangle();
      triangle.setColor(data.colorShape);
      triangle.setText(data.text);
      triangle.renderText();
    }).toThrow(">> ERROR: Text color attribute has not been set");
  });

  it("Should return SVG tag with corresponding shape data", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Triangle",
      colorShape: "#FFF",
    };

    const triangle = new generateSVG.Triangle();
    triangle.setColor(data.colorShape);
    triangle.setText(data.text);
    triangle.setTextColor(data.colorText);
    const result = triangle.renderShape();

    expect(result).toEqual(
      '<polygon points="50,200 150,0 250,200" style="fill:#FFF" />'
    );
  });

  it("Should return SVG tag with corresponding text data", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Triangle",
      colorShape: "#FFF",
    };

    const triangle = new generateSVG.Triangle();
    triangle.setColor(data.colorShape);
    triangle.setText(data.text);
    triangle.setTextColor(data.colorText);
    const result = triangle.renderText();

    expect(result).toEqual(
      '<text x="150" y="150" font-size="40" text-anchor="middle" fill="#000">RDE</text>'
    );
  });
});
