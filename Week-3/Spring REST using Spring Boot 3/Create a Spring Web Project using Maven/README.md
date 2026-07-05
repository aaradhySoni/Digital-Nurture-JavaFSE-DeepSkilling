# Create a Spring Web Project using Maven

This independent project uses:

- Group: `com.cognizant`
- Artifact: `spring-learn`
- Java: 17
- Spring Boot: 3.5.16
- Dependencies: Spring Web, Spring Boot DevTools, Spring Boot Test

## Run

```bash
mvn clean package
mvn spring-boot:run
```

`src/main/java` contains application code, `src/main/resources` contains
configuration, and `src/test/java` contains tests. `@SpringBootApplication`
combines configuration, component scanning, and auto-configuration.
