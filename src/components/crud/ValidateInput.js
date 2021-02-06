/* eslint-disable eqeqeq */
export function ValidateInput(data, values) {
  if (
    data.type == "checkboxarr" &&
    (values[data.name] == null || JSON.parse(values[data.name]).length == 0)
  ) {
    return true;
  } else if (
    data.type == "date" &&
    (values[data.name] === null ||
      values[data.name] === undefined ||
      values[data.name] == "")
  ) {
    return true;
  } else if (data.type == "select" && values[data.name] == -1) {
    return true;
  } else if (data.type == "custom" && values[data.name].length == 0) {
    return true;
  } else if (data.type == "file") {
    if (values[data.name].name != undefined) return false;
    else if (values[data.name].length > 0) return false;
    else return true;
  } else if (values[data.name] != undefined && values[data.name].length == 0) {
    return true;
  } else {
    return false;
  }
}
