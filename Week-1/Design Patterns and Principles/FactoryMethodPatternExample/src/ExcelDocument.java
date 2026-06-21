public class ExcelDocument implements Document {

    @Override
    public void open() {
        System.out.println("Excel document opened");
    }

    @Override
    public void save() {
        System.out.println("Excel document saved");
    }

    @Override
    public void close() {
        System.out.println("Excel document closed");
    }
}