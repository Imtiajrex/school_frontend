import Api from "./Api";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCookie() {
    return Api.get("/csrf-cookie");
  },
};
