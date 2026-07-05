# Create authentication service that returns JWT

This project uses the Spring Security 6 `SecurityFilterChain` API and JJWT
0.12.7. The endpoint decodes the HTTP Basic header, validates the configured
in-memory user, and returns a signed JWT that expires after 20 minutes.

```bash
mvn spring-boot:run
curl -s -u user:pwd http://localhost:8090/authenticate
```

Expected response shape:

```json
{"token":"header.payload.signature"}
```

For real deployments, keep the signing secret and user credentials outside
source control.
