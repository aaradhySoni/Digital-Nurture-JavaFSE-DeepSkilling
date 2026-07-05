package com.cognizant.springlearn.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.web.servlet.MockMvc;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import static org.hamcrest.Matchers.matchesPattern;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AuthenticationControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void returnsJwtForValidBasicCredentials() throws Exception {
        mockMvc.perform(get("/authenticate")
                        .header(HttpHeaders.AUTHORIZATION, basic("user", "pwd")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token",
                        matchesPattern("[^.]+\\.[^.]+\\.[^.]+")));
    }

    @Test
    void rejectsInvalidCredentials() throws Exception {
        mockMvc.perform(get("/authenticate")
                        .header(HttpHeaders.AUTHORIZATION, basic("user", "wrong")))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void requiresAuthorizationHeader() throws Exception {
        mockMvc.perform(get("/authenticate"))
                .andExpect(status().isUnauthorized());
    }

    private String basic(String username, String password) {
        String credentials = username + ":" + password;
        return "Basic " + Base64.getEncoder().encodeToString(
                credentials.getBytes(StandardCharsets.UTF_8));
    }
}
