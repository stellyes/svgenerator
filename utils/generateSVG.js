function generateSVG(data) {
  switch (data.shape) {
    case "Circle":
      return `<svg width="300" height="200">

    <circle cx="150" cy="100" r="100" fill="${data.colorShape}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colorText}">${data.text}</text>

</svg>`;

    case "Square":
      return `<svg width="300" height="200">

    <rect width="200" height="200" fill="${data.colorShape}" />
      
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colorText}">${data.text}</text>
      
</svg>`;

    case "Triangle":
      return `<svg width="300" height="200">

    <polygon points="50,0 150,200 250,0 " style="fill:${data.colorShape}" />        
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colorText}">${data.text}</text>
        
</svg>`;
    default:
      console.error(">> ERROR PARSING data.shape");
      return "";
  }
}

module.exports = generateSVG;
