package com.example.sdk.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.example.sdk.model.User;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class TestUserRepository {
    @Autowired
    private UserRepository userRepository;

    @Test
    public void fetchUserByEmail() {
        String email = "test@demo.com";
        User foundUser = userRepository.findUserByEmail(email);
        
        assertThat(foundUser).isNotNull();
        assertThat(foundUser.getName()).isEqualTo("Yonghyun Kim");
        assertThat(foundUser.getEmail()).isEqualTo(email);
        assertThat(foundUser.getPhone_num()).isEqualTo("01011111111");
    }
}
