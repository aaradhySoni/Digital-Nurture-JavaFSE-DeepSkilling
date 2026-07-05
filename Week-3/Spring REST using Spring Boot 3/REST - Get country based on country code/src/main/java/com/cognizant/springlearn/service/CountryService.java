package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getCountry(String code) {
        LOGGER.info("START - getCountry({})", code);
        try (ClassPathXmlApplicationContext context =
                     new ClassPathXmlApplicationContext("country.xml")) {
            List<?> countries = context.getBean("countryList", List.class);
            Country country = countries.stream()
                    .map(Country.class::cast)
                    .filter(item -> item.getCode().equalsIgnoreCase(code))
                    .findFirst()
                    .orElseThrow(() -> new ResponseStatusException(
                            HttpStatus.NOT_FOUND, "Country not found for code: " + code));
            LOGGER.info("END - getCountry({})", code);
            return country;
        }
    }
}
