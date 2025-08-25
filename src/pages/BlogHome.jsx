const dummyData = [
  {
    id: 1,
    title: "Understanding React Hooks"
  },
  {
    id: 2,
    title: "A Guide to JavaScript Promises"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox"
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js"
  },
  {
    id: 5,
    title: "Introduction to TypeScript"
  }
];

import React from 'react';
import { Link, useSearchParams } from 'react-router';
const BlogHome = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    const filterData = query ? 
        dummyData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())) : 
        dummyData;
    return(
        <div>
            <h2>Blog Home</h2>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setSearchParams({ query: e.target.value })} 
                placeholder="Search blogs..."
            />
            <ul>
                {filterData.map((item) => (
                    <li key={item.id}>
                        <Link to={`/blog/${item.id}`}>{item.title}</Link>
                    </li>
                    ))}
            </ul>
        </div>
    )
}
export default BlogHome;