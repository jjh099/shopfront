import axios from "axios";
import jwtAxios from "../util/jwUtil";

const host = `${process.env.REACT_APP_API_SERVER_HOST}/api/products`;

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${host}/list`, { page: page, size: size });
  //   const res = await axios.get(`${host}/list`, { page: page, size: size });
  return res.data;
};

export default { getList };
