import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]); //HOOKS: [currentStateValue, setCurrentState()] = useState(<INITIAL STATE>)
  // Empty array in beginning because no data fetched yet

  const { search } = useLocation(); // Get Search field for query in URL

  // console.log(location);
  useEffect(() => {
    //fetch data
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      // console.log(res);
    };
    fetchPosts();
  }, [search]); // empty array as 2nd parameter means to fire this useEffect at the beginning
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
