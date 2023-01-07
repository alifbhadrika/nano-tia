import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsBySlug, incrViewTimes } from "../../store/reducers/news";

function useNewsDetail() {
  const { slug } = useParams();
  const { currentPost, viewedTimes } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsBySlug(slug));
    dispatch(incrViewTimes());
  }, []);

  return {
    currentPost,
    viewedTimes,
  };
}

export default useNewsDetail;
