public class ECommercePlatformSearch {

    public static void main(String[] args) {

        System.out.println("E-Commerce Platform Search");
        System.out.println("==========================\n");

        Product[] products = {
                new Product(101, "Camera", "Electronics"),
                new Product(102, "Headphones", "Electronics"),
                new Product(103, "Laptop", "Electronics"),
                new Product(104, "Mouse", "Accessories"),
                new Product(105, "Phone", "Electronics")
        };

          System.out.println("Linear Search:");

        Product linearResult =  SearchAlgorithms.linearSearch(products, "Laptop");

        if (linearResult != null) {
            System.out.println("Product Found");
            System.out.println(linearResult);
         }
        System.out.println("\nBinary Search:");

        Product binaryResult =  SearchAlgorithms.binarySearch(products, "Laptop");

        if (binaryResult != null) {
            System.out.println("Product Found");
            System.out.println(binaryResult);
        }
    }
}