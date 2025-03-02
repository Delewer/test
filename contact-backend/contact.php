<?php
header('Content-Type: application/json');

// Разрешаем только POST-запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Use POST.']);
    exit;
}

// Получаем данные из запроса
$data = json_decode(file_get_contents('php://input'), true);

// Очищаем и проверяем поля
$name = isset($data['name']) ? trim($data['name']) : '';
$phone = isset($data['phone']) ? trim($data['phone']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['error' => 'Заполните все обязательные поля.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'Некорректный email.']);
    exit;
}

// Email-настройки
$to = 'andugd67@gmail.com'; // Укажите ваш email
$subject = "Новое сообщение от $name";
$body = "Имя: $name\nТелефон: $phone\nEmail: $email\nСообщение: $message";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

// Отправляем письмо
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['message' => 'Спасибо! Мы свяжемся с вами в ближайшее время.']);
} else {
    echo json_encode(['error' => 'Ошибка отправки. Попробуйте позже.']);
}
?>
