<?php
// Получение данных из формы
$name = $_POST['name'];
$time = $_POST['time'];
$date = $_POST['date'];
$number = $_POST['number'];

// Формирование заголовка письма
$to = 'adreno1188@gmail.com';
$subject = 'Новая форма от сайта';

// Формирование тела письма
$body = "Имя: $name\n";
$body .= "Time: $time\n";
$body .= "date:$date\n";
$number .= "date:$number\n";

// Отправка письма
$headers = 'From: webmaster@example.com' . "\r\n" .
           'Reply-To: webmaster@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $body, $headers);

?>