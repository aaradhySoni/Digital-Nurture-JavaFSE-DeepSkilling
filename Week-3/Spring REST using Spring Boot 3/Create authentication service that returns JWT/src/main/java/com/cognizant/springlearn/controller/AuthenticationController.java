package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.service.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthenticationController(UserDetailsService userDetailsService,
                                    PasswordEncoder passwordEncoder,
                                    JwtService jwtService) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false)
            String authorizationHeader) {
        LOGGER.info("START - authenticate()");
        Credentials credentials = decodeBasicCredentials(authorizationHeader);

        try {
            UserDetails user = userDetailsService.loadUserByUsername(credentials.username());
            if (!passwordEncoder.matches(credentials.password(), user.getPassword())) {
                throw unauthorized();
            }
            String token = jwtService.generateToken(user.getUsername());
            LOGGER.info("END - authenticate()");
            return Map.of("token", token);
        } catch (UsernameNotFoundException exception) {
            throw unauthorized();
        }
    }

    private Credentials decodeBasicCredentials(String authorizationHeader) {
        if (authorizationHeader == null || !authorizationHeader.startsWith("Basic ")) {
            throw unauthorized();
        }

        try {
            String encodedCredentials = authorizationHeader.substring(6);
            String decodedCredentials = new String(
                    Base64.getDecoder().decode(encodedCredentials), StandardCharsets.UTF_8);
            int separator = decodedCredentials.indexOf(':');
            if (separator < 0) {
                throw unauthorized();
            }
            return new Credentials(
                    decodedCredentials.substring(0, separator),
                    decodedCredentials.substring(separator + 1));
        } catch (IllegalArgumentException exception) {
            throw unauthorized();
        }
    }

    private ResponseStatusException unauthorized() {
        return new ResponseStatusException(
                HttpStatus.UNAUTHORIZED, "Invalid username or password");
    }

    private record Credentials(String username, String password) {
    }
}
