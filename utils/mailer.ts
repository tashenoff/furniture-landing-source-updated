import nodemailer from 'nodemailer';

// Проверяем наличие необходимых переменных окружения
if (!process.env.EMAIL_USER || !process.env.APP_PASS) {
  console.error('Отсутствуют необходимые переменные окружения EMAIL_USER или APP_PASS');
  throw new Error('Missing required environment variables');
}

// Создаем транспорт для отправки писем
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASS // Используем пароль приложения
  }
});

// Интерфейс для данных формы
export interface FormData {
  name: string;
  phone: string;
  message?: string;
}

// Функция для отправки письма
export async function sendEmail(data: FormData) {
  const { name, phone, message } = data;

  const mailOptions = {
    from: `"Мебель Home" <${process.env.EMAIL_USER}>`, // Добавляем имя отправителя
    to: process.env.EMAIL_USER,
    subject: 'Новая заявка с сайта Мебель Home',
    html: `
      <h2>Новая заявка с сайта</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      ${message ? `<p><strong>Сообщение:</strong> ${message}</p>` : ''}
      <p><em>Дата отправки: ${new Date().toLocaleString('ru-RU')}</em></p>
    `,
  };

  try {
    console.log('Отправка письма...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Письмо успешно отправлено');
    return { success: true };
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    return { success: false, error: 'Failed to send email' };
  }
} 