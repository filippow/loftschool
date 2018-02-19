<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['name'];
$comment = $_POST['comment'];


$mail = new PHPMailer(true);
//Server settings
$mail->isSMTP(); // устанавливаете соединение с SMTP
$mail->Host = 'smtp.mail.ru';  // сервер с которого будет отправляться письмо (смотрится на сайте почты)
$mail->SMTPAuth = true;   // нужна аутентификация
$mail->Username = 'filippow.ewg@mail.ru'; // почта, с которой шлем письмо
$mail->Password = 'qwe123qwe123';  // пароль от почты
$mail->SMTPSecure = 'ssl';  // тип шифрования
$mail->Port = 465;  // TCP порт (смотрится на сайте почты)

//Recipients
$mail->setFrom('lsphp@mail.ru', 'Компания вкусных бургеров!'); // почта, с которой шлем письмо. !Обязательно совпадает с почтой выше
$mail->addAddress('pitasam@yandex.ru');     // почта получателя (должна брвться из формы)
$mail->CharSet = 'Utf-8'; // кодировка на всякий случай

//Attachments
$mail->addAttachment('dog.jpg');         // прикрепляемые файлы

//Content
$mail->isHTML(true);                                  // email в формате html
$mail->Subject = "Ваш заказ бургера";
$mail->Body    = "<p>Привет, $name! Вы заказали <b>самый</b> вкусный бургер. Ваш комментарий: $comment.</p>";
$mail->AltBody = "Вы заказали самый вкусный бургер"; //альтернативное письмо без html

$data = [];
if ($mail->send()) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}
echo json_encode($data);