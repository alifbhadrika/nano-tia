import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllNews } from "../../store/reducers/news";

function useNewsList() {
  const { posts } = useSelector((state) => state.news);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchAllNews(page));
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts]);

  return {
    page,
    posts,
  };
}

export default useNewsList;
