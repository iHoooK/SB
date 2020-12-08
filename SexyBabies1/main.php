 <?php
$to = "MAIL"; // емайл получателя данных из формы
$tema = "Форма обратной связи"; // тема полученного емайла
$message = "Сообщение: ".$_POST['text']."<br>"; //полученное из формы name=message
  $message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>