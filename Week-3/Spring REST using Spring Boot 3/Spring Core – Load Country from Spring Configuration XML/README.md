# Spring Core – Load Country from Spring Configuration XML

`country.xml` defines the `country` bean. `displayCountry()` opens a
`ClassPathXmlApplicationContext`, gets the bean by id and type, and logs it.
Debug logging shows constructor, setter, and getter calls.

```bash
mvn clean test
mvn spring-boot:run
```
