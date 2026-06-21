public class FinancialForecasting {

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue = FinancialForecast.calculateFutureValue(currentValue, growthRate, years);

        System.out.println("Financial Forecasting");
        System.out.println("=====================");

        System.out.println("Current Value : " + currentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);

        System.out.printf("\nPredicted Future Value : %.2f", futureValue);
    }
}