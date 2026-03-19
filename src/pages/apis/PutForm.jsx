import React from 'react'
import { useState, useEffect } from 'react'

export const PutForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => setError(err.message));
    }, []);

    async function updatePost(e) {
        e.preventDefault();
        if (!postId) {
            setError('Please select a post');
            return;
        }
        
        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: postId, title, body, userId: 1 })
            });
            if (!response.ok) throw new Error("Failed to update post");
            
            setMessage(`Post #${postId} updated!`);
            setTitle('');
            setBody('');
            setPostId('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Update a Post</h1>
            <form onSubmit={updatePost} className="mt-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Post</label>
                    <select
                        value={postId}
                        onChange={(e) => {
                            setPostId(e.target.value);
                            const post = posts.find(p => p.id === parseInt(e.target.value));
                            if (post) {
                                setTitle(post.title);
                                setBody(post.body);
                            }
                        }}
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    >
                        <option value="">Choose a post...</option>
                        {posts.map(post => (
                            <option key={post.id} value={post.id}>
                                #{post.id} - {post.title.substring(0, 30)}...
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={!postId}
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Body</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        disabled={!postId}
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 disabled:bg-gray-100"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading || !postId}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {loading ? 'Updating...' : 'Update Post'}
                </button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    )
}