import React, { useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../store/postSlice";

function AllPosts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);

    useEffect(() => {
        appwriteService.getPosts([]).then((response) => {
            if (response) {
                dispatch(setPosts(response.documents));
            }
        });
    }, [dispatch]);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
