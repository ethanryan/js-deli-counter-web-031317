// function takeANumber(katzDeliLine, name) {
//   var newArray = [];
//   for (var i = 0; i < katzDeliLine.length; i++) {
//     newArray.push(`Welcome, ${name}. You are number ${katzDeliLine[i+1]} in line.`);
//   }
//   return newArray;
// }


function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`; //shift removes the first item of an array, and returns that item
  }
}

// Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"],
// currentLine(katzDeliLine) would return "The line is currently: 1. Ada 2. Grace".
// If there is nobody in line, it should return "The line is currently empty."

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var string = `The line is currently: `
    for (var i = 1; i < line.length; i++) {
    string += `${[i]}. ${line[i-1]}, `;
  }
   string += `${[i]}. ${line[i-1]}`
}
return string
}
