import Api from "./Api";
import CSRF from "./CSRF";

async function Call(request) {
  try {
    await CSRF.getCookie();
    const send_request = Api(request);

    const res = await send_request;

    return res.data;
  } catch (err) {
    const error_message = ErrorMessage(err);
    throw error_message;
  }
}
function ErrorMessage(error) {
  let msg = "Something wrong!";
  if (error.response) {
    // Request made and server responded
    if (error.response.data !== undefined)
      if (error.response.data.message !== undefined)
        msg = error.response.data.message;
      else if (error.response.data.msg !== undefined)
        msg = error.response.data.msg;

    if (error.response.data !== undefined)
      if (error.response.data.errors !== undefined)
        if (error.response.data.errors.err !== undefined)
          msg = error.response.data.errors.err;
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    msg = "Error " + error.message;
  }

  return msg;
}
export { Call, ErrorMessage };
