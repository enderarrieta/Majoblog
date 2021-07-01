import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/cards/Cards";
import Sidebar from "../../components/sidebar/Sidebar";
import "./portfolio.css";
import axios from "axios"

export default function Homepage() {
    const { search } = useLocation();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
            console.log(res)
        }
        fetchPosts()
    }, [search])
    return (
        <>
            <div className="homepage">
                <div className="outside">
                    <div className="home">
                        <Cards posts={posts} />
                    </div>
                </div>
            </div>
        </>
    );
}