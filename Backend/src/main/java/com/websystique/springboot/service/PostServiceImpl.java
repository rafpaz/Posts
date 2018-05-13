package com.websystique.springboot.service;

import com.websystique.springboot.model.Post;
import com.websystique.springboot.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("postService")
@Transactional
public class PostServiceImpl implements PostService {

	@Autowired
	private PostRepository postRepository;

	@Override
	public List<Post> getAllPosts() {
		return postRepository.findAll();
	}

	@Override
	public List<Post> getUserPosts(Long userId) {
		Post post = new Post();
		post.setId(userId);
		Example<Post> example = Example.of(post);
		return postRepository.findAll(example);
	}

	@Override
	public void addPost(Post post) {
		postRepository.save(post);
	}
}
