/* eslint-disable eqeqeq */
export function ValidateInput(data, values) {
  if (
    data.type == "checkboxarr" &&
    (values[data.name] == null || JSON.parse(values[data.name]).length == 0)
  )
    return true;
  else if (
    data.type == "date" &&
    (values[data.name] === null || values[data.name] == "")
  )
    return true;
  else if (data.type == "select" && values[data.name] == -1) return true;
  else if (values[data.name].length == 0) return true;
  else {
    console.log("nothing matched!");
    return false;
  }
}
