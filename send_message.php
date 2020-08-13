<?php

include_once "config/mailer.php";

function generateRandomString($length = 6) {
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

if(isset($_POST['email'])){
    $myEmail = 'kylixmedusa001@gmail.com';

    $name = $_POST['name'];
    $email = $_POST['email'];
    // $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    if(isset($_POST['message']))
        $message = $_POST['message'];
    else
        $message = 'NA';

    $ticket_id = generateRandomString();


    $body2 = "<p>A new contact form was recieved at your site. Here are the details -</p>";

    $content = '<br /><table style="width: 100%;">
    <tr>
        <td>Name </td>
        <td>'. $name .'</td>
    </tr>
    <tr>
        <td>Email </td>
        <td>'. $email .'</td>
    </tr>
    <tr>
        <td>Subject </td>
        <td>' . $subject . '</td>
    </tr>
    <tr>
        <td>Message </td>
        <td>'. $message .'</td>
    </tr>
    </table>';

    // $body1 .= "<br/>Here is your submitted request for your ready reference." . $content;
    $body2 .= $content;

    // sendMail($email, "New Ticket #" . $ticket_id . " Generated", $body1);
    sendMail($myEmail, $name . " sent a Contact Form", $body2, $name);

    ?>
    <script>
        alert("Your message was successfully sent.");
        // window.history.go(-1);
    </script>
    <?php
    header("location: index");
} else {
    echo "GET / METHOD NOT PERMITTED";
}


?>