<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

date_default_timezone_set("Asia/Kolkata");

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

function sendMail($email, $subject, $body, $reply_to = null)
{
    $mail = new PHPMailer();

    $myEmail = "contact@mindwebs.org";
    $myName = "MW Ventures";

    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'mindwebs.org';                         // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'notification@mindwebs.org';            // SMTP username
    $mail->Password   = 'MI?W0X6(Qz={';                         // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('notification@mindwebs.org', 'MW Ventures');
    $mail->addAddress($email);     // Add a recipient
    if(!$reply_to)
        $mail->addReplyTo($myEmail, 'MinD Webs Team');
    else
        $mail->addReplyTo($email, $reply_to);

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;

    $email_body = '<html>';
    //Put the styles here, if needed
    $email_body .= '<head>
                    <style>

                    </style>
				</head>';
    $email_body .= '<body>';
    
    $email_body .= '<center><img src="http://mwv.net.in/img/logo.png" width="50%" alt="MinD Webs Ventures"></center>';
    $email_body .= $body;
    $email_body .= '<p>Best, <br /> Team <strong>MWV</strong>.</p>';
    $email_body .= '<hr><p style="font-size:11px;">This mail was sent to you by <a href="https://mindwebs.org">MinD Webs Systems</a> | ' . date("jS \of F Y h:i:s A") . '</p>
                    <p style="font-size:10px;">All Rights Reserved | '. $myName .'</p>';
    $email_body .= '<p style="font-size: 10px;">For any queries, discrepancies or request, please mail to '. $myEmail .', as this sender doesn\'t support replies.</p>';
    $email_body .= '</body></html>';
    
    
    $mail->Body    = $email_body;

    if (!$mail->Send()) {
        $message = "Mail not Sent";
        echo "Message could not be sent. <p>";
        echo "Mailer Error: " . $mail->ErrorInfo;
        return 0;
    } else {
        $message = "Mail Sent";
        return 1;
    }
    return 0;
}

?>