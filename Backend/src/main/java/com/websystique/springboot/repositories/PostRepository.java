package com.websystique.springboot.repositories;

import com.websystique.springboot.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
//	List<Post> getUserPosts(Long userId);
}
