package com.cognizant.springlearn;

import org.junit.jupiter.api.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import static org.assertj.core.api.Assertions.assertThat;

class SpringLearnApplicationTests {

    @Test
    void loadsCountryFromXml() {
        try (ClassPathXmlApplicationContext context =
                     new ClassPathXmlApplicationContext("country.xml")) {
            Country country = context.getBean("country", Country.class);
            assertThat(country.getCode()).isEqualTo("IN");
            assertThat(country.getName()).isEqualTo("India");
        }
    }
}
