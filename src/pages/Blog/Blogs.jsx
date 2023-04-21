import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";

function BlogPage() {
  let blogData = [
    {
      id: 1,
      title: "10 Tips for Staying Motivated on Your Fitness Journey",
      image:
        "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies mauris. Quisque vitae interdum sapien. Sed nec eleifend mi. Nullam posuere neque non augue dictum, non aliquam urna interdum. Etiam id eros sit amet nulla tincidunt tempus. Proin vel varius urna. In posuere justo eget arcu posuere, et pharetra sapien consequat. Pellentesque at odio elementum, venenatis mi vitae, cursus velit. Cras sagittis commodo commodo. Nulla facilisi.",
    },
    {
      id: 2,
      title: "Why You Should Add Resistance Training to Your Routine",
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies mauris. Quisque vitae interdum sapien. Sed nec eleifend mi. Nullam posuere neque non augue dictum, non aliquam urna interdum. Etiam id eros sit amet nulla tincidunt tempus. Proin vel varius urna. In posuere justo eget arcu posuere, et pharetra sapien consequat. Pellentesque at odio elementum, venenatis mi vitae, cursus velit. Cras sagittis commodo commodo. Nulla facilisi.",
    },
    {
      id: 3,
      title: "The Importance of Proper Form in Exercise",
      image:
        "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies mauris. Quisque vitae interdum sapien. Sed nec eleifend mi. Nullam posuere neque non augue dictum, non aliquam urna interdum. Etiam id eros sit amet nulla tincidunt tempus. Proin vel varius urna. In posuere justo eget arcu posuere, et pharetra sapien consequat. Pellentesque at odio elementum, venenatis mi vitae, cursus velit. Cras sagittis commodo commodo. Nulla facilisi.",
    },
  ];
  return (
    <div className={styles.container}>
      {/* <h1>Blog</h1> */}
      <h1 className={styles.title}>Fitness Blog</h1>
      <div className={styles.posts}>
        {blogData.map((post) => (
          <div key={post.id} className={styles.post}>
            <Link>
              <img src={post.image} alt={post.title} className={styles.image} />
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
            <p className={styles.summary}>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
