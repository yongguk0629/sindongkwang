package com.example.sdk.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //기본 키 생성을 데이터베이스에 맡깁니다. 
                                                        // 일반적으로 MySQL의 AUTO_INCREMENT 열이나 PostgreSQL의 SERIAL 열과 같이, 
                                                        // 데이터베이스가 자동으로 증가하는 값을 할당합니다.
    String name;
    String email;
    String password;
    String phone_num;

    public User() {}

    public User(String name, String email, String password, String phone_num) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone_num = phone_num;
    }
}
