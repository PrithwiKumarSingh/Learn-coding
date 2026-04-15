import java.sql.*;

public class Main {
    public static void main(String[] args) {

        try {
            Connection con = DBConnection.getConnection();
            Statement st = con.createStatement();

            // Create tables
            st.execute("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");
            st.execute("CREATE TABLE IF NOT EXISTS questions (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, option1 TEXT, option2 TEXT, option3 TEXT, option4 TEXT, correct INTEGER)");

            // Insert sample questions (only once)
            st.execute("INSERT INTO questions (question, option1, option2, option3, option4, correct) " +
                    "SELECT 'Java is?', 'Language', 'OS', 'Browser', 'IDE', 1 " +
                    "WHERE NOT EXISTS (SELECT 1 FROM questions)");

        } catch (Exception e) {
            System.out.println(e);
        }

        new Login();
    }
}