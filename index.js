const TelegramApi = require('node-telegram-bot-api')

const token = '5439826649:AAF-GXCst04Ew6FjpxrSVI8dFQHxOpkENQk'

const bot = new TelegramApi(token, {
  polling: true
})

const chats = {}

const chatMenu = {
  reply_markup: JSON.stringify({
    keyboard: [
      [
        'Условия работы'
      ],
      [
        'Гарантии'
      ],
      [
        'Оставить заявку'
      ],
      [
        'Контакты'
      ],
    ]
  })
}

const start = () => {

  bot.setMyCommands([{
    command: '/start',
    description: 'Начальное приветствие'
  }])

  bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    const UraChatId = '701786918'
    const welcomeText = 'Привет! Мы Арбитражная команда GlobalNS которая развивает новое для нас направление по отливу трафика за % от спенда. Источник трафика ФБ/ИНСТ. Отливаем на любую тематику телеграмм канала. \nЕсли тебе нужен трафик на твой телеграмм канал, то оставляй заявку и мы обязательно с тобой свяжемся!'

    if (text === '/start') {
      return await bot.sendMessage(chatId, welcomeText, chatMenu)
    } else if (text === 'Условия работы') {
      return await bot.sendMessage(chatId, 'Работаем полностью по вашему ТЗ: \n- гео отлива \n- возраст ЦА \n- М/Ж \n- плейсменты \n- примеры креативов (крео делаем сами/либо отливаем на те, которые вы предоставите) \n\nНа старте проливаем не много трафика, вы смотрите качество, вносим корректировки, проливаем еще чуть, и так до тех пор пока вас не устроит качество. После этого увеличиваем объем и отливаем на нонстопе. \n\nНам 80% от спенда на руки. \nЕжедневно предоставляем видео-отчеты из ФБТула где четко показываем креатив, ссылка на ваш телеграмм канал, спенд в $, количество кликов и остальные метрики после отлива.')
    } else if (text === 'Гарантии') {
      return await bot.sendMessage(chatId, 'Готовы работать над качеством трафика и выводить его на тот уровень, который вас устроит. \nРаботаем через гаранта/предоплате. Ссылка на гаранта https://t.me/cpamix')
    } else if (text === 'Контакты') {
      return await bot.sendMessage(chatId, 'Телеграм: @skorecskyyy \nИмя: Юрий')
    } else if (text === 'Оставить заявку') {
      return await bot.sendMessage(chatId, 'Опишите ваш заказ (минимум 50 символов), и мы свяжемся с вами в ближайшее время.')
    } else if (text.length < 50) {
      return await bot.sendMessage(chatId, 'Минимальная длина сообщения - 50 символов')
    } else {
      await bot.sendMessage(chatId, 'Спасибо, что оставили заявку на заказ. Мы свяжемся с вами в ближайшее время!')
      return await bot.sendMessage(UraChatId, 'Новый заказ: @' + msg.chat.username + '\nТекст:\n' + text)
    }


  })



}

start()