<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
https://api.telegram.org/bot1022559271:AAF0gnWbxzfESDiGBjZ9KgpEj4O8ZLJ25NE/sendMessage?chat_id=510302288&text=PING
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['fio'];
$phone = $_POST['tel'];
$email = $_POST['service'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1022559271:AAF0gnWbxzfESDiGBjZ9KgpEj4O8ZLJ25NE";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "510302288";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Услуга' => $email
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$txt}","r");

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>