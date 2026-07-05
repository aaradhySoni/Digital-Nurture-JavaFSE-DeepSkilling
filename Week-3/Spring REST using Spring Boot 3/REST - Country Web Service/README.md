# REST - Country Web Service

Run `mvn spring-boot:run`, then request:

```text
GET http://localhost:8083/country
```

Spring MVC uses the configured Jackson message converter to serialize the
returned `Country` object as JSON.
