import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchInput, setBlogData } from "../../reduxFt/userSlice";
import "./blogs.css";

function checkAndPostBlogs(blogs) {
  if (blogs && blogs.articles) {
    return (
      <>
        {blogs.articles.map((blog, index) => (
          <div className="blog" key={index}>
            <a target="_blank" href={blog.url}>
              <img className="blogImg" src={blog.image} alt="Blog Image" />
              <div>
                <h3 className="blogSource">
                  <span>{blog.source.name}</span>
                  <span>{dateFormater(blog.publishedAt)}</span>
                </h3>
                <h2>{blog.title}</h2>
                <hr></hr>
                <p>{blog.description}</p>
              </div>
            </a>
          </div>
        ))}
      </>
    );
  } else {
    return <h1>empty search</h1>;
  }
}

function Blogs() {
  const searchInput = useSelector(selectSearchInput);
  const blogURL = `https://gnews.io/api/v4/search?q=${searchInput}&token=852fa02c3cc479bc710f5e87c7b3d7b9`;

  const dispatch = useDispatch();

  const [blogs, setBlogs] = useState("apple");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(blogURL)
      .then((response) => {
        setloading(false);
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="blogContainer">
      {loading ? <h1>Loading...</h1> : " "}
      {blogs.articles && checkAndPostBlogs(blogs)}
      {blogs.totalArticles == 0 && (
        <div className="noResultFound">
          <h1>Hmmm.....</h1>
          <h2>We couldn't find any matches for "{searchInput}"</h2>
          <p>
            Please double check your search for any typos or spelling errors or
            use more generic search terms
          </p>
        </div>
      )}
    </div>
  );
}

function dateFormater(publishedAt) {
  let date = new Date(publishedAt);
  return date.toLocaleDateString();
}

export default Blogs;
