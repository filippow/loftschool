<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$building = $_POST['building'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];


$disturb = $_POST['dont-disturb']; // 1 или null
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$pay = $_POST['radio-test'];
$comment = $_POST['comment'];


$mail = new PHPMailer(true);
//Server settings
$mail->isSMTP(); // устанавливаете соединение с SMTP
$mail->Host = 'smtp.mail.ru';  // сервер с которого будет отправляться письмо (смотрится на сайте почты)
$mail->SMTPAuth = true;   // нужна аутентификация
$mail->Username = 'filippow.ewgen94@mail.ru'; // почта, с которой шлем письмо
$mail->Password = 'ghbdtn1994';  // пароль от почты
$mail->SMTPSecure = 'ssl';  // тип шифрования
$mail->Port = 465;  // TCP порт (смотрится на сайте почты)

//Recipients
$mail->setFrom('filippow.ewgen94@mail.ru', 'Компания вкусных бургеров!'); // почта, с которой шлем письмо. !Обязательно совпадает с почтой выше
$mail->addAddress('filippow.ewgen@yandex.ru');     // почта получателя (должна брвться из формы)
$mail->CharSet = 'Utf-8'; // кодировка на всякий случай

//Attachments
//$mail->addAttachment('dog.jpg');         // прикрепляемые файлы

//Content
$mail->isHTML(true);                                  // email в формате html
$mail->Subject = "Ваш заказ бургера";
$mail->Body    = "<p>Привет, $name! Вы заказали <b>самый</b> вкусный бургер.<br> Ваш номер телефона: $phone 
	<br> Заказ будет доставлен по адресу: Улица $street, дома $house, <br> корпус $building, строение $apartment, этаж $floor
	<br>
		Нужно ли перезванивать: $disturb
	<br> Способ оплаты $pay
	<br> Ваш комментарий: $comment.</p>";
$mail->AltBody = "Вы заказали самый вкусный бургер, но вы его не получите"; //альтернативное письмо без html

$data = [];
if ($mail->send()) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}
echo json_encode($data);


