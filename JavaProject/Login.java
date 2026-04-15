import javax.swing.*;
import java.awt.*;
import java.sql.*;

public class Login extends JFrame {

    JTextField userField;
    JPasswordField passField;

    public Login() {
        setTitle("Quiz Application - Login");
        setSize(1000, 600); 
        setLocationRelativeTo(null); // center screen
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Main panel
        JPanel panel = new JPanel();
        panel.setLayout(new GridBagLayout());
        panel.setBackground(new Color(240, 248, 255)); // light blue

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10); // spacing

        JLabel title = new JLabel("Login");
        title.setFont(new Font("Arial", Font.BOLD, 20));

        JLabel userLabel = new JLabel("Username:");
        JLabel passLabel = new JLabel("Password:");

        userField = new JTextField(15);
        passField = new JPasswordField(15);

        JButton loginBtn = new JButton("Login");
        JButton signupBtn = new JButton("Signup");

        // Row 1 - Title
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        panel.add(title, gbc);

        // Row 2 - Username
        gbc.gridwidth = 1;
        gbc.gridx = 0;
        gbc.gridy = 1;
        panel.add(userLabel, gbc);

        gbc.gridx = 1;
        panel.add(userField, gbc);

        // Row 3 - Password
        gbc.gridx = 0;
        gbc.gridy = 2;
        panel.add(passLabel, gbc);

        gbc.gridx = 1;
        panel.add(passField, gbc);

        // Row 4 - Buttons
        gbc.gridx = 0;
        gbc.gridy = 3;
        panel.add(loginBtn, gbc);

        gbc.gridx = 1;
        panel.add(signupBtn, gbc);

        add(panel);

        // Actions
        loginBtn.addActionListener(e -> login());
        signupBtn.addActionListener(e -> {
            new Signup();
            dispose();
        });

        setVisible(true);
    }

    void login() {
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM users WHERE username=? AND password=?"
            );
            ps.setString(1, userField.getText());
            ps.setString(2, new String(passField.getPassword()));

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                JOptionPane.showMessageDialog(this, "Login Successful");
                new QuizFrame();
                dispose();
            } else {
                JOptionPane.showMessageDialog(this, "Invalid Login");
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}