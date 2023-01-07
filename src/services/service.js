import api from "../middleware/api";

export async function get(route, configs) {
  try {
    const data = await api.get(route, configs);
    return [data, null];
  } catch (e) {
    let error = `Error occured, cause: ${JSON.stringify(e)}`;
    return [null, error];
  }
}
