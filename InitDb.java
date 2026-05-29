import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.nio.file.Files;
import java.nio.file.Paths;

public class InitDb {
    public static void main(String[] args) throws Exception {
        String url = "jdbc:mariadb://localhost:3306/?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC";
        String user = "root";
        String pass = "srijita";
        try (Connection c = DriverManager.getConnection(url, user, pass);
                Statement s = c.createStatement()) {

            s.execute("DROP DATABASE IF EXISTS book_exchange_db");

            String schema = new String(Files.readAllBytes(Paths.get("database/schema.sql")));
            String[] stmts = schema.split(";");
            for (String stmt : stmts) {
                if (stmt.trim().length() > 0) {
                    System.out.println("Executing: " + stmt.substring(0, Math.min(20, stmt.length())));
                    s.execute(stmt);
                }
            }
            System.out.println("Done!");
        }
    }
}
