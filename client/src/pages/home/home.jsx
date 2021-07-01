import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Models from "../../components/models/Models";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios"

export default function Home() {
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
                    <Header />
                    <div className="home2">
                        <h1 className="recent">Recent work</h1>
                        <Models posts={posts} />
                    </div>
                </div>
            </div>
        </>
    );
}
