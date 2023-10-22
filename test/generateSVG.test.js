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

describe("formatHexadecimal", () => {
  // Predefined string lengths 3, 6, and 8 are tested
  // because input lengths are validated by inquirer
  // inline with the question
  it("Should format a 3-character length string with hex value to include a '#' in front of it", () => {
    let color = generateSVG.formatHexadecimal("000");
    expect(color).toEqual("#000");
  });

  it("Should format a 6-character length string with hex value to include a '#' in front of it", () => {
    let color = generateSVG.formatHexadecimal("000000");
    expect(color).toEqual("#000000");
  });

  it("Should format a 8-character length string with hex value to include a '#' in front of it", () => {
    let color = generateSVG.formatHexadecimal("00000000");
    expect(color).toEqual("#00000000");
  });

  it("Should identify a pre-formatted hex value and return equivalent value", () => {
    let color = generateSVG.formatHexadecimal("#00000000");
    expect(color).toEqual("#00000000");
  });

  it("Should identify an HTML-safe color keyword of 3-character length, and return the original value in lowercase", () => {
    let color = generateSVG.formatHexadecimal("Red");
    expect(color).toEqual("red");
  });

  it("Should identify an HTML-safe color keyword of 6-character length, and return the original value in lowercase", () => {
    let color = generateSVG.formatHexadecimal("Violet");
    expect(color).toEqual("violet");
  });

  it("Should identify an HTML-safe color keyword of 8-character length, and return the original value in lowercase", () => {
    let color = generateSVG.formatHexadecimal("Lavender");
    expect(color).toEqual("lavender");
  });

  it("Should identify an HTML-safe color keyword of arbitrary length, and return the original value in lowercase", () => {
    let color = generateSVG.formatHexadecimal("Black");
    expect(color).toEqual("black");
  });
});

describe("generateSVG", () => {
  it("Should return an SVG circle with user parameters when a circle object is passed into function", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Circle",
      colorShape: "#FFF",
    };

    let result = generateSVG.generateSVG(data);

    expect(result).toEqual(
      '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="150" cy="100" r="100" fill="#fff" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#000">RDE</text></svg>'
    );
  });

  it("Should return an SVG square with user parameters when a circle object is passed into function", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Square",
      colorShape: "#FFF",
    };

    let result = generateSVG.generateSVG(data);

    expect(result).toEqual(
      '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="200" height="200" x="50" fill="#fff" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#000">RDE</text></svg>'
    );
  });

  it("Should return an SVG triangle with user parameters when a circle object is passed into function", () => {
    // Hex values are manually formatted for test
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Triangle",
      colorShape: "#FFF",
    };

    let result = generateSVG.generateSVG(data);

    expect(result).toEqual(
      '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="50,200 150,0 250,200" style="fill:#fff" /><text x="150" y="150" font-size="40" text-anchor="middle" fill="#000">RDE</text></svg>'
    );
  });

  it("Should throw an error if data.shape is an invalid shape name", () => {
    const data = {
      text: "RDE",
      colorText: "#000",
      shape: "Invalid",
      colorShape: "#FFF",
    };

    expect(() => {
      generateSVG.generateSVG(data);
    }).toThrowError(">> ERROR PARSING data.shape");
  });
});
