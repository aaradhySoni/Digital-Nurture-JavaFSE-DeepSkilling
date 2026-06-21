public class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("Word document opened");
    }

    @Override
    public void save() {
        System.out.println("Word document saved");
    }

    @Override
    public void close() {
        System.out.println("Word document closed");
    }
}