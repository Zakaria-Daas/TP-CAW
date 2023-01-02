import MyPosts from "./myPosts";
import './blog.css';

const PostList = () => {
    const posts = MyPosts.map((item, index) => <tr key={index}><td>{item[0]}</td><td>{item[1]}</td><td>{item[2]}</td></tr>)
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {posts}
            </tbody>
        </table>
    )
}

export default PostList;