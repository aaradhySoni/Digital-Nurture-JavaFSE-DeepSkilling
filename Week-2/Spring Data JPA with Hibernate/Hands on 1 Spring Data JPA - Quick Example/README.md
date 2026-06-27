# Hands on 1: Spring Data JPA - Quick Example

Open the `orm-learn` folder as a Maven project in IntelliJ.

## Database setup

Run `database.sql` in MySQL Workbench or MySQL CLI to create the `ormlearn` schema and the `country` table.

Default connection details in `src/main/resources/application.properties`:

- URL: `jdbc:mysql://localhost:3306/ormlearn`
- Username: `root`
- Password: `root`

Update the username or password if your local MySQL configuration is different.

## Run

From the `orm-learn` folder:

```bash
mvn spring-boot:run
```

The application loads `CountryService`, calls `getAllCountries()`, and logs the records from the database.
