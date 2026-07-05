package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START - getCountry({})", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("END - getCountry({})", code);
        return country;
    }

    // Compatibility for the singular URL shown in the assignment's sample request.
    @GetMapping("/country/{code}")
    public Country getCountryBySampleUrl(@PathVariable String code) {
        return getCountry(code);
    }
}
