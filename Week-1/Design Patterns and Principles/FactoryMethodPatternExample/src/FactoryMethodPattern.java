public class FactoryMethodPattern {

    public static void main(String[] args) {

        System.out.println("Testing Factory Method Pattern");
        System.out.println("==============================");

        System.out.println("\nCreating Word Document:");

        DocumentFactory wordFactory = new WordDocumentFactory();
        Document wordDoc = wordFactory.createDocument();

        wordDoc.open();
        wordDoc.save();
        wordDoc.close();

        System.out.println("\nCreating PDF Document:");

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();

        pdfDoc.open();
        pdfDoc.save();
        pdfDoc.close();

        System.out.println("\nCreating Excel Document:");

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();

        excelDoc.open();
        excelDoc.save();
        excelDoc.close();

        System.out.println("\nFactory Method Pattern working successfully!");
    }
}