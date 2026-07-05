# REST - Get country based on country code

Run `mvn spring-boot:run`, then use the required endpoint:

```text
GET http://localhost:8083/countries/in
```

The assignment's singular sample URL is also supported:

```text
GET http://localhost:8083/country/in
```

Matching is case-insensitive. Unknown country codes return HTTP 404.
