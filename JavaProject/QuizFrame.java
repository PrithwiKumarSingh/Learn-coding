import javax.swing.*;
import java.awt.*;
import java.sql.*;

public class QuizFrame extends JFrame {

    JLabel questionLabel;
    JRadioButton o1, o2, o3, o4;
    ButtonGroup group;
    JButton next;

    int qid = 1;
    int score = 0;
    int total = 0;

    public QuizFrame() {
        setTitle("Quiz Application");
        setSize(1000, 600);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // 🔹 Main Container
        JPanel mainPanel = new JPanel(new BorderLayout());
        mainPanel.setBackground(new Color(230, 240, 250));

        // 🔹 Card Panel
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(Color.WHITE);
        card.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(new Color(200, 200, 200)),
                BorderFactory.createEmptyBorder(30, 50, 30, 50)
        ));
        card.setPreferredSize(new Dimension(600, 400)); // 🔥 ADD THIS LINE HERE

        // 🔹 Question
        questionLabel = new JLabel();
        questionLabel.setText("<html><div style='width:500px'>Question here</div></html>");
        questionLabel.setFont(new Font("Segoe UI", Font.BOLD, 22));
        questionLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        card.add(questionLabel);
        card.add(Box.createRigidArea(new Dimension(0, 30)));

        // 🔥 Options Panel (Modern)
        JPanel optionsPanel = new JPanel(new GridLayout(4, 1, 15, 15));
        optionsPanel.setBackground(Color.WHITE);

        o1 = createOption("");
        o2 = createOption("");
        o3 = createOption("");
        o4 = createOption("");

        group = new ButtonGroup();
        group.add(o1);
        group.add(o2);
        group.add(o3);
        group.add(o4);

        optionsPanel.add(o1);
        optionsPanel.add(o2);
        optionsPanel.add(o3);
        optionsPanel.add(o4);

        card.add(optionsPanel);
        card.add(Box.createRigidArea(new Dimension(0, 30)));

        // 🔹 Next Button
        next = new JButton("Next");
        next.setFont(new Font("Segoe UI", Font.BOLD, 16));
        next.setBackground(new Color(52, 152, 219));
        next.setForeground(Color.WHITE);
        next.setFocusPainted(false);
        next.setCursor(new Cursor(Cursor.HAND_CURSOR));
        next.setAlignmentX(Component.CENTER_ALIGNMENT);

        card.add(next);

        // 🔹 Center Wrapper
        JPanel wrapper = new JPanel(new GridBagLayout());
        wrapper.setBackground(new Color(230, 240, 250));
        wrapper.add(card);

        mainPanel.add(wrapper, BorderLayout.CENTER);

        add(mainPanel);

        loadQuestion();

        next.addActionListener(e -> checkAnswer());

        setVisible(true);
    }

    // 🔥 Custom Option UI
    private JRadioButton createOption(String text) {
        JRadioButton btn = new JRadioButton(text);

        btn.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        btn.setBackground(new Color(245, 247, 250));
        btn.setFocusPainted(false);
        btn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        btn.setOpaque(true);

        btn.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(new Color(200,200,200)),
                BorderFactory.createEmptyBorder(10, 15, 10, 15)
        ));

        // Hover effect
        btn.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                if (!btn.isSelected())
                    btn.setBackground(new Color(220, 230, 240));
            }

            public void mouseExited(java.awt.event.MouseEvent evt) {
                if (!btn.isSelected())
                    btn.setBackground(new Color(245, 247, 250));
            }
        });

        // Selection effect
        btn.addActionListener(e -> {
            resetOptions();
            btn.setBackground(new Color(52, 152, 219));
            btn.setForeground(Color.WHITE);
        });

        return btn;
    }

    // 🔥 Reset option styles
    private void resetOptions() {
        JRadioButton[] options = {o1, o2, o3, o4};
        for (JRadioButton btn : options) {
            btn.setBackground(new Color(245, 247, 250));
            btn.setForeground(Color.BLACK);
        }
    }

    // 🔽 SAME LOGIC (UNCHANGED)
    void loadQuestion() {
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM questions WHERE id=?"
            );
            ps.setInt(1, qid);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                questionLabel.setText(
                        "<html><div style='width:500px'>" +
                        rs.getString("question") +
                        "</div></html>"
                    );
                o1.setText(rs.getString("option1"));
                o2.setText(rs.getString("option2"));
                o3.setText(rs.getString("option3"));
                o4.setText(rs.getString("option4"));

                resetOptions(); // important
                total++;
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    void checkAnswer() {
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(
                "SELECT correct FROM questions WHERE id=?"
            );
            ps.setInt(1, qid);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                int correct = rs.getInt("correct");
                int selected = 0;

                if (o1.isSelected()) selected = 1;
                if (o2.isSelected()) selected = 2;
                if (o3.isSelected()) selected = 3;
                if (o4.isSelected()) selected = 4;

                if (selected == correct) score++;
            }

            qid++;
            group.clearSelection();

            Connection con2 = DBConnection.getConnection();
            PreparedStatement ps2 = con2.prepareStatement("SELECT COUNT(*) FROM questions");
            ResultSet rs2 = ps2.executeQuery();

            if (rs2.next() && qid <= rs2.getInt(1)) {
                loadQuestion();
            } else {
                new ResultFrame(score, total);
                dispose();
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}