import javax.swing.*;
import java.awt.*;
import java.sql.*;

public class Signup extends JFrame {

    JTextField userField;
    JPasswordField passField;

    public Signup() {
        setTitle("Quiz Application - Signup");
        setSize(1000, 600);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Main panel
        JPanel panel = new JPanel();
        panel.setLayout(new GridBagLayout());
        panel.setBackground(new Color(240, 248, 255)); // same as login

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);

        // Title
        JLabel title = new JLabel("Signup");
        title.setFont(new Font("Arial", Font.BOLD, 20));

        JLabel userLabel = new JLabel("Username:");
        JLabel passLabel = new JLabel("Password:");

        userField = new JTextField(15);
        passField = new JPasswordField(15);

        JButton signupBtn = new JButton("Register");
        JButton backBtn = new JButton("Back");

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
        panel.add(signupBtn, gbc);

        gbc.gridx = 1;
        panel.add(backBtn, gbc);

        add(panel);

        // Actions
        signupBtn.addActionListener(e -> register());

        backBtn.addActionListener(e -> {
            new Login();
            dispose();
        });

        setVisible(true);
    }

    void register() {
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO users VALUES (?, ?)"
            );
            ps.setString(1, userField.getText());
            ps.setString(2, new String(passField.getPassword()));

            ps.executeUpdate();

            JOptionPane.showMessageDialog(this, "User Registered Successfully!");
            new Login();
            dispose();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}