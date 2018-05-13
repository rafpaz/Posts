package com.websystique.springboot.repositories;

import com.websystique.springboot.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findByUserId(Integer userId);
}
