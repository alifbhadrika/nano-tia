import { apiUrl } from "../middleware/api";
import { get } from "./service";

const newsEndpoint = `${apiUrl}/posts`;

export function getAllNews() {
  return get(newsEndpoint);
}

export function getNewsBySlug(slug) {
  return get(`${newsEndpoint}/${slug}`);
}
