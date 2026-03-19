import React from 'react'
import { useState, useEffect } from 'react'

export const DeleteForm = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 10)))
            .catch(err => setError(err.message));
    }, []);

    async function deletePost(e) {
        e.preventDefault();
        if (!postId) {
            setError('Please select a post');
            return;
        }
        
        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error("Failed to delete post");
            
            setMessage(`Post #${postId} deleted!`);
            setPosts(posts.filter(post => post.id !== parseInt(postId)));
            setPostId('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Delete a Post</h1>
            <form onSubmit={deletePost} className="mt-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Post to Delete</label>
                    <select
                        value={postId}
                        onChange={(e) => setPostId(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    >
                        <option value="">Choose a post...</option>
                        {posts.map(post => (
                            <option key={post.id} value={post.id}>
                                #{post.id} - {post.title.substring(0, 30)}...
                            </option>
                        ))}
                    </select>
                </div>
                {postId && (
                    <p className="text-sm text-red-600">
                        Are you sure you want to delete this post?
                    </p>
                )}
                <button
                    type="submit"
                    disabled={loading || !postId}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {loading ? 'Deleting...' : 'Delete Post'}
                </button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    )
}