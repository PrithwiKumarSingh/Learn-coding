import javax.swing.*;
import java.awt.*;

public class ResultFrame extends JFrame {

    public ResultFrame(int score, int total) {

        setTitle("Result");
        setSize(1000, 600);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // 🔹 Main background
        JPanel mainPanel = new JPanel(new BorderLayout());
        mainPanel.setBackground(new Color(230, 240, 250));

        // 🔹 Card panel
        JPanel card = new JPanel();
        card.setLayout(new BoxLayout(card, BoxLayout.Y_AXIS));
        card.setBackground(Color.WHITE);
        card.setPreferredSize(new Dimension(400, 300));

        card.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(new Color(200, 200, 200)),
                BorderFactory.createEmptyBorder(30, 40, 30, 40)
        ));

        // 🔹 Title
        JLabel title = new JLabel("Quiz Completed 🎉");
        title.setFont(new Font("Segoe UI", Font.BOLD, 22));
        title.setAlignmentX(Component.CENTER_ALIGNMENT);

        // 🔹 Score
        JLabel scoreLabel = new JLabel(score + " / " + total);
        scoreLabel.setFont(new Font("Segoe UI", Font.BOLD, 40));
        scoreLabel.setForeground(new Color(52, 152, 219));
        scoreLabel.setAlignmentX(Component.CENTER_ALIGNMENT);

        // 🔹 Message
        JLabel message = new JLabel(getMessage(score, total));
        message.setFont(new Font("Segoe UI", Font.PLAIN, 16));
        message.setAlignmentX(Component.CENTER_ALIGNMENT);

        // 🔹 Button
        JButton exitBtn = new JButton("Exit");
        exitBtn.setFont(new Font("Segoe UI", Font.BOLD, 14));
        exitBtn.setBackground(new Color(231, 76, 60));
        exitBtn.setForeground(Color.WHITE);
        exitBtn.setFocusPainted(false);
        exitBtn.setCursor(new Cursor(Cursor.HAND_CURSOR));
        exitBtn.setAlignmentX(Component.CENTER_ALIGNMENT);

        exitBtn.addActionListener(e -> System.exit(0));

        // 🔹 Add components
        card.add(title);
        card.add(Box.createRigidArea(new Dimension(0, 20)));

        card.add(scoreLabel);
        card.add(Box.createRigidArea(new Dimension(0, 15)));

        card.add(message);
        card.add(Box.createRigidArea(new Dimension(0, 30)));

        card.add(exitBtn);

        // 🔹 Center wrapper
        JPanel wrapper = new JPanel(new GridBagLayout());
        wrapper.setBackground(new Color(230, 240, 250));
        wrapper.add(card);

        mainPanel.add(wrapper, BorderLayout.CENTER);

        add(mainPanel);

        setVisible(true);
    }

    // 🔥 Dynamic message
    private String getMessage(int score, int total) {
        double percent = (score * 100.0) / total;

        if (percent == 100)
            return "Perfect Score! 🔥";
        else if (percent >= 75)
            return "Great Job! 💪";
        else if (percent >= 50)
            return "Good Effort 👍";
        else
            return "Keep Practicing 📚";
    }
}