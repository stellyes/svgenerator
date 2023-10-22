class Shape {
  renderHeader() {
    return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;
  }

  renderClosingTag() {
    return `</svg>`;
  }
}

class Circle extends Shape {
  setColor(color) {
    this.color = color;
  }

  renderShape() {
    try {
      return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    } catch {
      console.error(">> ERROR: Color attribute has not been set");
    }
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  renderText() {
    try {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } catch {
      if (!this.text) {
        console.error(">> ERROR: Text attribute has not been set");
      } else if (!this.textColor) {
        console.error(">> ERROR: Text color attribute has not been set");
      } else {
        console.error(
          ">> ERROR: Unknown error occured trying to render text for Circle"
        );
      }
    }
  }
}

class Square extends Shape {
  setColor(color) {
    this.color = color;
  }

  renderShape() {
    try {
      return `<rect width="200" height="200" x="50" fill="${this.color}" />`;
    } catch {
      console.error(">> ERROR: Color attribute has not been set");
    }
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  renderText() {
    try {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } catch {
      if (!this.text) {
        console.error(">> ERROR: Text attribute has not been set");
      } else if (!this.textColor) {
        console.error(">> ERROR: Text color attribute has not been set");
      } else {
        console.error(
          ">> ERROR: Unknown error occured trying to render text for Square"
        );
      }
    }
  }
}

class Triangle extends Shape {
  setColor(color) {
    this.color = color;
  }

  renderShape() {
    try {
      return `<polygon points="50,200 150,0 250,200" style="fill:${this.color}" />`;
    } catch {
      console.error(">> ERROR: Color attribute has not been set");
    }
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  renderText() {
    try {
      return `<text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } catch {
      if (!this.text) {
        console.error(">> ERROR: Text attribute has not been set");
      } else if (!this.textColor) {
        console.error(">> ERROR: Text color attribute has not been set");
      } else {
        console.error(
          ">> ERROR: Unknown error occured trying to render text for Triangle"
        );
      }
    }
  }
}

// Formats hexadecmial input from user if value
// is improperly formatted
function formatHexadecimal(color) {
  // Convert color string to lowercase for simple comparison
  color = color.toLowerCase();

  // Convert shape color to proper hex value by adding # at beginning of color string

  // Length of 3 checks if color is hex value
  // and not HTML color of string length 3.
  // Conditional also checks if string is already formatted with "#" prefix
  if (
    color.length === 3 &&
    color !== "red" &&
    color !== "tan" &&
    color[0] !== "#"
  ) {
    return `#${color}`;
  }
  // Length of 6 checks if color is hex value
  // and not HTML color of string length 6
  // Conditional also checks if string is already formatted with "#" prefix
  else if (
    color.length === 6 &&
    color !== "bisque" &&
    color !== "indigo" &&
    color !== "maroon" &&
    color !== "orange" &&
    color !== "orchid" &&
    color !== "purple" &&
    color !== "salmon" &&
    color !== "sienna" &&
    color !== "silver" &&
    color !== "tomato" &&
    color !== "violet" &&
    color !== "yellow" &&
    color[0] !== "#"
  ) {
    return `#${color}`;
  }
  // Length of 8 checks if color is hex value
  // and not HTML color of string length 8
  // Conditional also checks if string is already formatted with "#" prefix
  else if (
    color.length === 8 &&
    color !== "cornsilk" &&
    color !== "darkblue" &&
    color !== "darkcyan" &&
    color !== "darkgray" &&
    color !== "darkgrey" &&
    color !== "deeppink" &&
    color !== "honeydew" &&
    color !== "lavender" &&
    color !== "moccasin" &&
    color !== "seagreen" &&
    color !== "seashell" &&
    color[0] !== "#"
  ) {
    return `#${color}`;
  } else {
    return color;
  }
}

function generateSVG(data) {
  // Convert text and shape color to proper hex value by
  // adding # at beginning of color string
  data.colorShape = formatHexadecimal(data.colorShape);
  data.colorText = formatHexadecimal(data.colorText);

  switch (data.shape) {
    case "Circle":
      let svgCircle = "";
      let circle = new Circle();
      circle.setColor(data.colorShape);
      circle.setText(data.text);
      circle.setTextColor(data.colorText);
      svgCircle += circle.renderHeader();
      svgCircle += circle.renderShape();
      svgCircle += circle.renderText();
      svgCircle += circle.renderClosingTag();
      return svgCircle;

    case "Square":
      let svgSquare = "";
      let square = new Circle();
      square.setColor(data.colorShape);
      square.setText(data.text);
      square.setTextColor(data.colorText);
      svgSquare += square.renderHeader();
      svgSquare += square.renderShape();
      svgSquare += square.renderText();
      svgSquare += square.renderClosingTag();
      return svgSquare;

    case "Triangle":
      let svgTriangle = "";
      let triangle = new Triangle();
      triangle.setColor(data.colorShape);
      triangle.setText(data.text);
      triangle.setTextColor(data.colorText);
      svgTriangle += triangle.renderHeader();
      svgTriangle += triangle.renderShape();
      svgTriangle += triangle.renderText();
      svgTriangle += triangle.renderClosingTag();
      return svgTriangle;
    default:
      console.error(">> ERROR PARSING data.shape");
      return "";
  }
}

module.exports = generateSVG;
