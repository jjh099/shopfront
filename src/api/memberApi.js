import axios from "axios";
const host = `${process.env.REACT_APP_API_SERVER_HOST}/api/member/login`;

export const loginPost = async (loginParam) => {
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
  const form = new FormData();
  form.append("username", loginParam.email);
  form.append("password", loginParam.pw);

  const res = await axios.post(host, form, header);

  return res.data;
};
