<?php
	

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$building = $_POST['building'];
$apartment = $_POST['apartment'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];

$disturb = $_POST['dont-disturb'];
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = '

<html>
<head>
	<title>Сообщение</title>
</head>
<body>
	<h2>Заказ</h2>
	<ul>
		<li>Имя :'. $name . '</li>
		<li>Телефон: '. $phone . '</li>
		<li>Улица :'. $street . '</li>
		<li>Дом :'. $house . '</li>
		<li>Корпус :'. $building. '</li>
		<li>Нужно ли перезванивать :'. $disturb. '</li>
	</ul>
</body>
</html>  ';

 /*$headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('filippow.ewgen@yandex.ru', 'Заказ', $mail_message, $headers);

if ($mail) {
	echo 'done';
}
else {
	echo 'error';
}
*/

print_r($_POST);

?>
