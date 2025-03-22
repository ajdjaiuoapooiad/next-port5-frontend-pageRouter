import { createContext, useState, useContext } from 'react';
import { Post } from '@/utils/types';

type PostsContextType = {
  posts: Post[];
  addPost: (post: Post) => void;
};

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  const value = { posts, addPost };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};