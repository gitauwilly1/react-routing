import React from 'react'
import { useState, useEffect } from 'react'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function createPost(e) {
        e.preventDefault();
        setLoading(true);
        // setError(null); 
        setMessage(null);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, body })
            });
            if (!response.ok) {
                throw new Error("Failed to create a post");
            }
            const data = await response.json();
            setPosts(prev => [data, ...prev]);
            setMessage('Post created successfully!');
            setTitle('');
            setBody('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error(`Something went wrong: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
                //
                

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1 className="text-2xl font-bold">Posts</h1>
            <ul className="mt-4 space-y-4">
                {posts.map(post => (
                    <li key={post.id} className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="mt-2 text-gray-600">{post.body}</p>
                    </li>
                ))}
            </ul>
            <div>
                <h1 className="text-2xl font-bold">Create a New Post</h1>
                <form onSubmit={createPost} className="mt-4 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Body</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                    >
                        {loading ? 'Creating...' : 'Create Post'}
                    </button>
                </form>
                {message && <p className="mt-4 text-green-600">{message}</p>}
                {error && <p className="mt-4 text-red-600">{error}</p>}

            </div>
        </div>

    )
}

export default Posts