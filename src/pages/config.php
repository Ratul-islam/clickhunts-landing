<?php
// Allow requests from all origins
header("Access-Control-Allow-Origin: *"); // Allows any domain
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    // Handle preflight request for CORS
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim(htmlspecialchars($_POST["name"]));
    $email = trim(filter_var($_POST["email"], FILTER_SANITIZE_EMAIL));
    $subject = trim(htmlspecialchars($_POST["subject"]));
    $gender = trim(htmlspecialchars($_POST["gender"]));
    $message = trim(htmlspecialchars($_POST["message"]));

    // Debugging: Log received email
    echo "Received Email: " . $email . "<br>";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $to = "hasanrafiul32@gmail.com";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_subject = "New Contact Form Submission: " . $subject;
    $email_body = "Name: $name\nEmail: $email\nGender: $gender\nMessage:\n$message\n";

    // Check if email is sent
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "success"; // Response for successful mail
    } else {
        echo "error"; // Response if mail fails
    }
} else {
    echo "Invalid request";
}
?>
