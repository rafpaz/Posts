package com.postsapp.springboot.service;

import com.postsapp.springboot.model.Post;

import java.util.List;

public interface PostService {
	List<Post> getAllPosts();

	List<Post> getUserPosts(Integer userId);

	void addPost(Post post);
}
