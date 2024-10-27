<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your email address
    $to = "your-email@example.com";
    
    // Collect and sanitize form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    
    // Validate the data
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        // Set a 400 (bad request) response code and exit
        http_response_code(400);
        echo "Please complete the form correctly.";
        exit;
    }
    
    // Set the email subject
    $subject = "New Support Message from $name";
    
    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Build the email headers
    $email_headers = "From: $name <$email>";
    
    // Send the email
    if (mail($to, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code
        http_response_code(200);
        echo "Thank you! Your message has been sent successfully.";
    } else {
        // Set a 500 (internal server error) response code
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
    
} else {
    // Not a POST request, set a 403 (forbidden) response code
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
