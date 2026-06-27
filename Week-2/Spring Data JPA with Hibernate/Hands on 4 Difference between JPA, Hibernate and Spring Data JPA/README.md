# Hands on 4: Difference between JPA, Hibernate and Spring Data JPA

## JPA

Java Persistence API is a specification for persisting, reading, and managing Java objects as database records. It defines annotations and interfaces, but it does not provide the actual implementation.

Examples: `@Entity`, `@Table`, `@Id`, and `@Column`.

## Hibernate

Hibernate is an ORM framework and one of the most widely used implementations of the JPA specification. It provides the runtime behavior that maps Java objects to database tables and executes SQL.

## Spring Data JPA

Spring Data JPA is an abstraction over JPA providers such as Hibernate. It reduces boilerplate code by generating repository implementations automatically and helps manage transactions.

## Code comparison

### Hibernate

```java
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeId = null;

    try {
        tx = session.beginTransaction();
        employeeId = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) {
            tx.rollback();
        }
        e.printStackTrace();
    } finally {
        session.close();
    }

    return employeeId;
}
```

### Spring Data JPA

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
```

```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
```

## Summary

- JPA defines the standard.
- Hibernate implements the standard.
- Spring Data JPA simplifies repository and transaction code on top of JPA and Hibernate.
