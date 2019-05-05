import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <p>Hello People</p>
        <Link to="/about">About Me!</Link>

        <h2>Read My Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
