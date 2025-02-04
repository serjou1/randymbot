export function loc(text: string, language: string) {
  return localizations[text][language] || localizations[text].en
}

export const localizations: { [index: string]: { [index: string]: string } } = {
  public_help_start: {
    ru:
      'Привет! Это Рандом Бот.\n🤖🎯\nЯ умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Принять участие".\n\nИзменить язык можно командой /language. Изменить количество победителей (стандартно - 1) командой /number.\n\n1. Отправьте команду /randoom и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nХотите настроить собственные сообщения о розыгрыше и поздравления победителей ? Используйте /raffleMessage и /winnerMessage\n\nХотите устроить розыгрыш, но не хотите отправлять конфигурационные сообщения в чат или на канал? Вы можете сделать это в личных сообщениях со мной. Сначала перешлите любое сообщение с канала или чата, где вы являетесь администратором.\n\nЗатем просто отправьте мне в личные сообщения описанные выше команды конфигурации, чтобы настроить розыгрыш в выбранном чате или канале.\n\nОстались вопросы - пишите: @buddybig 😇',
    en:
      "Hello, this is Randoom Bot.\n🤖🎯\nI am able to randomly select a chat or channel participant from those who have clicked on the \"Participate\" button.\n\nYou can change the language with the /language command. Change the number of winners (standard - 1) with the /number command.\n\n1. Send the /randoom command and the drawing will start.\n2. Reply to the drawing notification with any message and the drawing will end and the winner will be selected from the participants.\n\nWant to customize your own raffle messages and congratulations to the winners? Use /raffleMessage and /winnerMessage\n\nWant to organize a raffle, but don't want to send configuration messages in the chat or channel? You can do it in private messages with me. First, send any message from a channel or chat where you are an administrator.\n\nThen simply send me the above configuration commands in private messages to set up the draw in the selected chat or channel.\n\nAny questions? - Write: @buddybig 😇",
    pt:
      "Olá! Eu sou Randoom. Eu posso selecionar aleatoriamente um participante de sorteio (quem clica no botão \"Participar\") em um grupo ou canal. Você também pode alterar o idioma em /language e o número de ganhadores em cada sorteio (o padrão é 1) com o comando /number.\n\n1. Me adicione a um canal ou a um grupo, envie o comando /randoom e o sorteio começa.\n2. Responda com qualquer mensagem à minha mensagem de sorteio para terminá-lo e um vencedor será escolhido aleatoriamente será escolhido dentre os participantes.\n\nIf you want to check whether a user is subscribed to a particular channel you can set up the bot with the following format `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`. If you want to turn it off, use /nosubscribe. Want to set custom raffle message? Use /raffleMessage. Want to use default raffle message? Use /noRaffleMessage. /winnerMessage and /noWinnerMessage work similarly. Use /nodelete if you don't want to delete the original message.\n\nWant to set up a raffle but don't want to send config messages to the chat or the channel? You can do so in private messages with me. First, forward any message from a channel or a chat where you are an admin (or add a chat with the command `/addChat 123456789` or `/addChat @borodutcher`). Then, select the chat or the channel you want to configure with the command /configRaffle. Then just send me the config commands described above to the private messages with me to set up the raffle in the selected chat or channel.\n\nAinda tem perguntas? Visite nosso canal de suporte — @buddybig 🦄",
    tr:
      "Merhaba! Ben Randoom. Bir grupta veya kanalda rastgele bir çekiliş katılımcısını (\"Katıl\" düğmesine basan) seçebilirim. Ayrıca /language ile botun dilini ve /number ile çekilişi kazanacak kişi sayısını da değiştirebilirsiniz (varsayılan 1).\n\n1. Beni bir kanala veya gruba ekle, /randoom komutunu gönder ve çekiliş başlasın!\n2. Çekilişi bitirmek için çekiliş iletime herhangi bir mesajla yanıt verin ve katılımcılardan rastgele bir kazanan seçilecektir.\n\nBir kullanıcının belirlediğiniz bir kanala abone olup olmadığını kontrol etmek istiyorsanız, botu şu formatta ayarlayabilirsiniz: `/subscribe @kameraonu`, `/subscribe @kanal_adi, @baska_kanal, @ve_baskabir_kanal`. Kapatmak istiyorsanız, /nosubscribe komutunu kullanın. Özel bir çekiliş mesajı belirlemek ister misiniz? /raffleMessage komutunu kullanın. Varsayılan çekiliş mesajına tekrar dönmek ister misiniz? /noRaffleMessage komutunu kullanın. /winnerMessage ve /noWinnerMessage komutları yine benzer şekilde kazanan kişi için yazılacak yazıyı belirleyen komutlardır. Use /nodelete if you don't want to delete the original message.\n\nWant to set up a raffle but don't want to send config messages to the chat or the channel? You can do so in private messages with me. First, forward any message from a channel or a chat where you are an admin (or add a chat with the command `/addChat 123456789` or `/addChat @borodutcher`). Then, select the chat or the channel you want to configure with the command /configRaffle. Then just send me the config commands described above to the private messages with me to set up the raffle in the selected chat or channel.\n\nBaşka soruların mı var? Destek kanalımıza gel — @buddybig 🦄",
    uk:
      "Привіт! Це Рандом Бот.\n🤖🎯\nЯ вмію випадковим чином вибирати учасника чату або каналу з тих, що натиснули на кнопку \"Взяти участь\". \n\nЗмінити мову можна командою /language. Змінити кількість переможців (стандартно — 1) командою /number.\n\n1. Надішліть команду /randoom і почнеться розіграш.\n2. Дайте відповідь на повідомлення про розіграш будь-яким повідомленням, і розіграш завершиться, а переможець буде обраний з учасників.\n\nХочете налаштувати власні повідомлення про розіграш та привітання переможців ? Використовуйте /raffleMessage та /winnerMessage\n\nХочете влаштувати розіграш, але не хочете надсилати конфігураційні повідомлення в чат або на канал? Ви можете зробити це в приватних повідомленнях зі мною. Спочатку перешліть будь-яке повідомлення з каналу або чату, де ви є адміністратором.\n\nПотім просто надішліть мені в приватні повідомлення описані вище команди конфігурації, щоб налаштувати розіграш в обраному чаті або каналі.\n\nЗалишилися питання? — Пишіть: @buddybig 😇",
    ar:
      "مرحبًا بكم! (أنا (راندي مارش يمكنني اختيار مشارك السحب عشوائياً (الذي ضغط زر \"المشاركة\") في مجموعة أو قناة. رمز مصدري هو [هنا]. يمكنك أيضًا تغيير اللغة /language وعدد الفائزين لكل سحب /number (الافتراضي هو 1، يمكنك استخدام تنسيق /number 100).\n\n1. إضافة لي إلى قناة أو مجموعة ، وإرسال الأمر /ramdoom والسحب سيبدأ.\n2. الرد مع أي رسالة إلى رسالة السحب الخاصة بي لإنهاء السحب، وسيتم اختيار الفائز العشوائي من المشاركين.\n\nIf you want to check whether a user is subscribed to a particular channel you can set up the bot with the following format `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`. If you want to turn it off, use /nosubscribe. Want to set custom raffle message? Use /raffleMessage. Want to use default raffle message? Use /noRaffleMessage. /winnerMessage and /noWinnerMessage work similarly. Use /nodelete if you don't want to delete the original message.\n\nWant to set up a raffle but don't want to send config messages to the chat or the channel? You can do so in private messages with me. First, forward any message from a channel or a chat where you are an admin (or add a chat with the command `/addChat 123456789` or `/addChat @borodutcher`). Then, select the chat or the channel you want to configure with the command /configRaffle. Then just send me the config commands described above to the private messages with me to set up the raffle in the selected chat or channel.\n\nأمازلت تملك أسئلة؟ انتقل إلى قناة الدعم الخاصة بنا — @buddybig 🦄",
    es:
      '"¡Hola! Soy Randoom. Puedo selecionar aleatoriamente el participante de un sorteo (que toque el botón \\"Participar\\") en un grupo o canal. Usted também puede cambiar el idioma en /language y el número de ganadores en cada sorteo (por defecto es 1, puede usar el formato /number 100).\\n\\n1. Añádame a un canal o grupo, envíe el comando /randoom y el sorteo comenzará.\\n2. Responda con cualquier mensaje a mi mensaje de sorteo para terminarlo, y se eligirá alteatoriamente un ganador entre los particpantes.\\n\\nSi desea saber si un usuario está suscrito a un canal en particular, puede configurar el bot con el siguiente formato `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`. Si desea apagarlo, use /nosubscribe. ¿Desea establecer un mensaje de sorteo personalizado? Use /raffleMessage. ¿Desea usar el mensaje de sorteo predeterminado? Use /noRaffleMessage. /winnerMessage y /noWinnerMessage funcionan de manera similar para el mensaje de los ganadores. Use /nodelete si no desea eliminar el mensaje original.\\n\\n¿Aun tiene perguntas? Visite nuestro canal de soporte — @buddybig 🦄\\n\\nWant to set up a raffle but don\'t want to send config messages to the chat or the channel? You can do so in private messages with me. First, forward any message from a channel or a chat where you are an admin (or add a chat with the command `/addChat 123456789` or `/addChat @borodutcher`). Then, select the chat or the channel you want to configure with the command /configRaffle. Then just send me the config commands described above to the private messages with me to set up the raffle in the selected chat or channel."',
  },
  no_work_private: {
    ru: 'Простите, но эта команда не работает в личке с ботом.',
    en: 'Sorry, but this command is not available in private messages.',
    pt: 'Desculpe, mas este comando não está disponível em conversas privadas.',
    tr: 'Üzgünüm, bu komut özel mesajlarda kullanılamaz.',
    uk: 'Вибачте, але ця команда не працює в діалозі з ботом.',
    ar: 'عذراً، ولكن هذا الأمر غير متوفر في الرسائل الخاصة.',
    es:
      'Lo sentimos, pero este comando no está disponible en mensajes privados.',
  },
  select_language: {
    ru: 'Пожалуйста, выберите язык',
    en: 'Please, select the language',
    pt: 'Por favor, escolha o idioma',
    tr: 'Lütfen dilinizi seçiniz',
    uk: 'Будь ласка, оберіть мову',
    ar: 'الرجاء تحديد اللغة',
    es: 'Selecciones el lenguaje',
  },
  language_selected_randy: {
    ru: 'Спасибо, теперь я говорю по-русски!',
    en: 'Thank you! Now I speak English',
    pt: 'Obrigado! Agora eu falarei português',
    tr: 'Teşekkürler! Artık Türkçe konuşuyorum',
    uk: 'Дякую, тепер я говорю українською!',
    ar: 'شكرا! الآن أنا أتكلم العربية',
    es: 'Gracias! Ahora hablo Español',
  },
  raffle_text: {
    ru:
      'Розыгрыш начался! Нажмите на кнопку ниже, чтобы принять участие. Победитель будет выбран случайным образом из участников, когда администраторы ответят на это сообщение. Желаю удачи!',
    en:
      'Raffle has begun! Press the button below to participate. The winner will be randomly selected from the participants when an admin replies to this message. Good luck!',
    pt:
      'O sorteio começou! Toque no botão abaixo para participar. O vencedor será selecionado aleatoriamente dentre participantes quando um administrador responder a essa mensagem. Boa sorte!',
    tr:
      'Çekilis basladı! Katılmak için aşağıdaki butona basın. Bir yönetici bu mesaja cevap verdiğinde kazanan kişi, katılımcılar arasından rastgele olarak seçilecektir. İyi şanslar!',
    uk:
      'Розіграш розпочався! Натисніть на кнопку нижче, щоб взяти участь. Переможець буде обраний випадковим чином з учасників, коли адміністратори дадуть відповідь на це повідомлення. Бажаю удачі!',
    ar:
      'لقد بدأ السحب! اضغط على الزر أدناه للمشاركة. سيتم اختيار الفائز بشكل عشوائي من بين المشاركين عند رد المشرف على هذه الرسالة. حظ سعيد!',
    es:
      '¡La rifa ha comenzado! Presione el botón de abajo para participar. El ganador será seleccionado al azar de los participantes cuando un administrador responda a este mensaje. ¡Buena suerte!',
  },
  raffle_text_multiple: {
    ru:
      'Розыгрыш начался! Нажмите на кнопку ниже, чтобы принять участие. Победители будут выбраны случайным образом из участников, когда администраторы ответят на это сообщение. Желаю удачи!',
    en:
      'Raffle has begun! Press the button below to participate. The winners will be randomly selected from the participants when an admin replies to this message. Good luck!',
    pt:
      'O sorteio começou! Toque no botão abaixo para participar. Os vencedores serão selecionados aleatoriamente dentre os participantes quando um administrador responder a esta mensagem. Boa sorte!',
    tr:
      'Çekilis basladı! Katılmak için aşağıdaki butona basın. Bir yönetici bu mesaja cevap verdiğinde kazanan kişi, katılımcılar arasından rastgele olarak seçilecektir. İyi şanslar!',
    uk:
      'Розіграш розпочався! Натисніть на кнопку нижче, щоб взяти участь. Переможці будуть обрані випадковим чином з учасників, коли адміністратори дадуть відповідь на це повідомлення. Бажаю удачі!',
    ar:
      'لقد بدأ السحب! اضغط على الزر أدناه للمشاركة. سيتم اختيار الفائزين بشكل عشوائي من بين المشاركين عند رد المشرف على هذه الرسالة. حظ سعيد!',
    es:
      '¡La rifa ha comenzado! Presione el botón de abajo para participar. Los ganadores serán seleccionados al azar de los participantes cuando un administrador responda a este mensaje. ¡Buena suerte!',
  },
  please_retry: {
    ru: 'Пожалуйста, попробуйте через пару минут',
    en: 'Please, try in a couple of minutes',
    pt: 'Por favor, tente novamente daqui a alguns instantes',
    tr: 'Lütfen, birkaç dakika içerisinde tekrar deneyiniz',
    uk: 'Будь ласка, спробуйте за декілька хвилин',
    ar: 'من فضلك، حاول في بضع دقائق',
    es: 'Por favor, reintente en un par de minutos',
  },
  already_participating: {
    ru: 'Вы уже принимаете участие, отлично!',
    en: 'You are already participating, wonderful!',
    pt: 'Você já está participando. Muito bem!',
    tr: 'Zaten çekilişe katıldınız, geriye kazanmak kaldı!',
    uk: 'Ви вже берете участь, чудово!',
    ar: 'كنت تشارك بالفعل، رائع!',
    es: 'Ya estas participando, ¡maravilloso!',
  },
  participated: {
    ru: 'Отлично, вы отметились, как участник!',
    en: 'Great, you are now participating in this raffle!',
    pt: 'Muito bem, vocês agora está participando do sorteio!',
    tr: 'Harika, cekilişe katıldınız!',
    uk: 'Відмінно, ви відзначилися, як учасник!',
    ar: 'عظيم، أنت الآن تشارك في هذا السحب!',
    es: '¡Genial, ahora estás participando en este sorteo!',
  },
  participants_number: {
    ru: 'Количество участников',
    en: 'Number of participants',
    pt: 'Número de participantes',
    tr: 'Katılımcı sayısı',
    uk: 'Кількість учасників',
    ar: 'عدد المشاركين',
    es: 'Cantidad de participantes',
  },
  participate_button: {
    ru: 'Участвовать!',
    en: 'Participate!',
    pt: 'Participar!',
    tr: 'Katıl!',
    uk: 'Взяти участь!',
    ar: 'المشاركة!',
    es: '¡Participar!',
  },
  no_participants: {
    ru: 'В этот раз участников розыгрыша не было 😅',
    en: 'No participants this time 😅',
    pt: 'Sem participantes dessa vez 😅',
    tr: 'Katılımcı yok 😅',
    uk: 'Цього разу учасників розіграшу не було 😅',
    ar: 'لا يوجد مشاركون هذه المرة 😅',
    es: 'No hay suficientes participantes esta vez 😅',
  },
  winner: {
    ru: 'В этот раз победитель',
    en: 'The winner is',
    pt: 'O vencedor é',
    tr: 'Ve Kazanan kişi',
    uk: 'Цього разу переможець',
    ar: 'الفائز هو',
    es: 'El ganador es',
  },
  winners: {
    ru: 'В этот раз победители',
    en: 'The winners are',
    pt: 'Os ganhadores são',
    tr: 'Ve Kazanan kişiler',
    uk: 'Цього разу переможці',
    ar: 'الفائزون هم',
    es: 'Los ganadores son',
  },
  congratulations: {
    ru: 'Поздравляем',
    en: 'Congratulations',
    pt: 'Parabéns',
    tr: 'Tebrikler',
    uk: 'Вітаємо',
    ar: 'تهانينا',
    es: 'Felicidades',
  },
  raffle_over: {
    ru: 'Простите, но розыгрыш уже закончен',
    en: 'Sorry, the raffle is over now',
    pt: 'Pedimos desculpas, mas o sorteio terminou',
    tr: 'Üzgünüm, çekiliş şimdi bitti',
    uk: 'Вибачте, але розіграш вже завершено',
    ar: 'آسف، السحب إنتهى الآن',
    es: 'Lo siento, el sorteo ya terminó',
  },
  select_number: {
    ru: 'Пожалуйста, выберите, сколько победителей должно быть в розыгрыше',
    en: 'Please, select number of winners for a raffle',
    pt: 'Por favor selecione o número de ganhadores do sorteio',
    tr: 'Lütfen çekiliş için kazanacak kişi sayısını seçiniz',
    uk: 'Будь ласка, виберіть, скільки переможців має бути в розіграші',
    ar: 'من فضلك، اختر عدد الفائزين للسحب',
    es: 'Por favor, seleccione el número de ganadores para el sorteo',
  },
  number_selected: {
    ru: 'Отлично, вы выбрали количество победителей!',
    en: "Great! You've selected the number of winners!",
    pt: 'Ótimo! Você selecionou o número de ganhadores!',
    tr: 'Harika! Kazanacak kişi sayısını belirledin!',
    uk: 'Чудово, ви вибрали кількість переможців!',
    ar: 'رائع ! لقد اخترت عدد الفائزين!',
    es: '¡Excelente! ¡Has seleccionado el número de ganadores!',
  },
  not_enough_participants: {
    ru: 'В этот раз участников розыгрыша было недостаточно 😅',
    en: 'Not enough participants this time 😅',
    pt: 'Sem participantes suficientes 😅',
    tr: 'Çekiliş için yeteri kadar katılımcı yok 😅',
    uk: 'Цього разу учасників розіграшу було недостатньо 😅',
    ar: 'لا يكفي المشاركين هذه المرة 😅',
    es: 'No hay suficientes participantes esta vez 😅',
  },
  subscribe_format: {
    ru:
      'Пожалуйста, укажите хендл канала, на который надо проверять подписку, в формате `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    uk:
      "Будь ласка, вкажіть ім'я каналу (хендл канала), на яке потрібно перевіряти підписку, у форматі /subscribe @channel_handle, /subscribe @channel_handle, @another_channel, @and_another_one.",
    en:
      'Please, set the channel to check subscription to with the format `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
    tr:
      'Lütfen, aboneliğini kontrol ettirmek istediğiniz kanalı/kanalları şu formatta belirleyiniz: `/subscribe @kameraonu`, `/subscribe @kanal_adi, @baska_kanal, @ve_baskabir_kanal`.',
    es:
      'Por favor, configure el canal para verificar la suscripción con el formato `/subscribe @channel_handle`, `/subscribe @channel_handle, @another_channel, @and_another_one`.',
  },
  nosubscribe_success: {
    ru: 'Рандом не будет проверять подписку на какой-либо канал.',
    uk: "Рандом не буде перевіряти підписку на будь-який канал.",
    en: 'Randoom will not check subscription.',
    tr: 'Randoom, artık aboneliği kontrol etmeyecek.',
    es: 'Randoom no verificará la suscripción.',
  },
  bot_not_admin: {
    ru: `Пожалуйста, сделайте @${process.env.USERNAME} админом в этом чате.`,
    uk: `Будь ласка, зробіть користувача @${process.env.USERNAME} адміном у цьому чаті.`,
    en: `Please make @${process.env.USERNAME} an admin in this chat.`,
    tr: `Lütfen, @${process.env.USERNAME} u yönetici yapın`,
    es: `Por favor, haga de @${process.env.USERNAME} un administrador en este grupo.`,
  },
  bot_not_admin_chat: {
    en: `Please make @${process.env.USERNAME} an admin in the chat `,
    tr: `Lütfen, @${process.env.USERNAME} u yönetici yapın`,
    es: `Por favor, haga de @${process.env.USERNAME} un administrador en este chat.`,
    ru: `Пожалуйста, сделайте @${process.env.USERNAME} админом в этом чате`,
    uk: `Будь ласка, зробіть користувача @${process.env.USERNAME} адміном у цьому чаті.`,
  },
  subscribe_success: {
    ru:
      'Отлично, теперь бот будет проверять подписку пользователя на следующий канал перед разрешением участвовать в конкурсе: ',
    uk:
      "Чудово, тепер бот буде перевіряти підписку користувача на наступний канал перед наданням можливості брати участь у конкурсі: ",
    en:
      'Great, now bot will check if the participant is subscribed to the following channel before allowing to participate: ',
    tr:
      'Harika! şimdi bot, katılımcının çekilişe katılmasına izin vermeden önce aşağıdaki kanala abone olup olmadığını kontrol edecek:',
    es:
      'Genial, ahora el bot verificará si el participante está suscrito al siguiente canal antes de permitir participar:',
  },
  check_subscription: {
    ru: 'Вы должны быть подписаны на ',
    uk: "Ви повинні бути підписані на ",
    en: 'You should be subscribed to ',
    tr: 'Abone olmalısınız ',
    es: 'Deberías estar suscrito',
  },
  raffle_message: {
    en:
      'Reply to this message to setup a custom raffle message. Make sure to reply to this message (we hope everyone knows what the word "reply" means by now). Make sure to include "$numberOfParticipants" without quotation marks in your message — it won\'t work without it. Cheers! 💪 The current raffle message (if set) is below.',
    tr:
      'Özel bir çekiliş mesajı ayarlamak için bu iletiyi yanıtlayın. Bu iletiyi yanıtladığınızdan emin olun (umarız herkes "yanıt" kelimesinin ne anlama geldiğini biliyordur). İletinizde tırnak işaretleri olmadan "$numberOfParticipants" mesajının geçtiğinden emin olun — onsuz çalışmaz. Kapiş! 💪 Geçerli çekiliş mesajı (ayarlanmışsa) aşağıdadır:',
    es:
      'Responda a este mensaje para configurar un mensaje de rifa personalizado. Asegúrese de responder a este mensaje (esperamos que todos sepan lo que significa la palabra "responder" en este momento). Asegúrese de incluir "$ numberOfParticipants" sin comillas en su mensaje; no funcionará sin él. ¡Saludos! 💪 El mensaje de la rifa actual (si está configurado) está debajo.',
    ru:
      'Ответьте на это сообщение, чтобы установить новое сообщение розыгрыша. Именно ответьте (надеемся, что все понимают разницу между обычным сообщением и ответом). Обязательно используйте "$numberOfParticipants" без кавычек в сообщении — иначе установка не сработает. Удачи! 💪 Текущее сообщение (если оно установленно), приведено ниже.',
    uk:
      'Відповідайте на це повідомлення, щоб встановити нове повідомлення для розіграшу. Будь ласка, відповідайте (сподіваємося, що всі розрізняють звичайне повідомлення від відповіді). Обов`язково використовуйте "$numberOfParticipants" без лапок у повідомленні - інакше встановлення не спрацює. Удачі! 💪 Поточне повідомлення (якщо воно встановлене), подане нижче.'
  },
  raffle_message_off: {
    ru: 'Теперь Рандом будет использовать стандартное сообщение о розыгрыше.',
    uk: "Тепер Рандом буде використовувати стандартне повідомлення для розіграшу.",
    en: 'Randoom will use standard raffle message now.',
    tr: 'Randoom, artık varsayılan çekiliş mesajını kullanacak.',
    es: 'Randoom usará el mensaje estándar de la rifa ahora.',
  },
  winner_message: {
    en:
      'Reply to this message to setup a custom winner message. Make sure to reply to this message (we hope everyone knows what the word "reply" means by now). Make sure to include "$numberOfParticipants" and "$winner" without quotation marks in your message — it won\'t work without it. Cheers! 🎉 The current winner message (if set) is below.',
    tr:
      'Özel bir kazanan mesajı ayarlamak için bu iletiyi yanıtlayın. Bu iletiyi yanıtladığınızdan emin olun (umarız herkes "yanıt" kelimesinin ne anlama geldiğini biliyordur). İletinizde tırnak işaretleri olmadan  "$numberOfParticipants" ve "$winner" mesajının geçtiğinden emin olun —  onlarsız çalışmaz. Kapiş! 🎉 Geçerli kazanan mesajı (ayarlanmışsa) aşağıdadır:',
    es:
      'Responda a este mensaje para configurar un mensaje de ganador personalizado. Asegúrese de responder a este mensaje (esperamos que todos sepan lo que significa la palabra "responder" en este momento). Asegúrese de incluir "$ numberOfParticipants" y "$ ganador" sin comillas en su mensaje; no funcionará sin él. ¡Saludos! 🎉 El mensaje del ganador actual (si está configurado) está debajo.',
    ru:
      'Ответьте на это сообщение, чтобы установить новое сообщение о победе. Именно ответьте (надеемся, что все понимают разницу между обычным сообщением и ответом). Обязательно используйте "$numberOfParticipants" и "$winner" без кавычек в сообщении — иначе установка не сработает. Удачи! 🎉 Текущее сообщение (если оно установленно), приведено ниже.',
    uk:
      'Відповідайте на це повідомлення, щоб встановити нове повідомлення про перемогу. Будь ласка, відповідайте (сподіваємося, що всі розрізняють звичайне повідомлення від відповіді). Обов`язково використовуйте "$numberOfParticipants" і "$winner" без лапок у повідомленні - інакше встановлення не спрацює. Удачі! 🎉 Поточне повідомлення (якщо воно встановлене), подане нижче.'
  },
  winner_message_off: {
    ru: 'Теперь Рандом будет использовать стандартное сообщение о победе.',
    uk: "Тепер Рандом буде використовувати стандартне повідомлення про перемогу.",
    en: 'Randoom will use standard winner message now.',
    tr: 'Randoom, artık varsayılan kazanan mesajını kullanacak.',
    es: 'Randoom usará el mensaje estándar del ganador ahora.',
  },
  success: {
    ru: 'Успех!',
    uk: "Успіх!",
    en: 'Success!',
    tr: 'Başarılı!',
    es: '¡Logrado!',
  },
  nodelete_true: {
    ru: 'Теперь Рандом не будет редактировать (удалять) оригинальное сообщение.',
    uk: "Тепер Рандом не буде редагувати (видаляти) оригінальне повідомлення.",
    en: 'Now Randoom will not edit (delete) original message.',
    es: 'Ahora Randoom no editará (eliminará) el mensaje original.',
    tr: 'Randoom artık orijinal mesajı düzenlemeyecek (silmeyecek).',
  },
  nodelete_false: {
    ru: 'Теперь Рандом будет редактировать (удалять) оригинальное сообщение.',
    uk: "Тепер Рандом буде редагувати (видаляти) оригінальне повідомлення.",
    en: 'Now Randoom will edit (delete) original message.',
    es: 'Ahora Randoom editará (eliminará) el mensaje original.',
    tr: 'Randoom artık orijinal mesajı düzenleyecek (silecek).',
  },
  mustBeAnAdmin: {
    en: 'You have to be an admin in the chat',
    ru: 'Вы должны быть админом в чате',
    uk: "Ви повинні бути адміном в чаті."
  },
  config_raffle_instructions: {
    en:
      'Success! Now select the chat or the channel you want to configure with /configRaffle',
    ru:
      'Успех! Теперь выберите канал или чат, который хотите настроить, при помощи команды /configRaffle',
    uk:
      "Успіх! Тепер оберіть канал чи чат, який ви хочете налаштувати за допомогою команди /configRaffle."
  },
  config_raffle_no_chats: {
    en:
      'First, forward me a message from a channel or a chat you want to configure',
    ru:
      'Сначала перешлите мне форвард сообщения из чата или канала, который хотите настроить',
    uk:
      "Спочатку перешліть мені переслане повідомлення з чату чи каналу, який ви хочете налаштувати."
  },
  select_chat: {
    en: 'Select a chat or a channel to configure',
    ru: 'Выберите чат или канал, который хотите настроить',
    uk: "Оберіть чат чи канал, який ви хочете налаштувати."
  },
  private_messages: {
    en: 'Private messages',
    ru: 'Приватные сообщения',
    uk: "Приватні повідомлення"
  },
  now_editing_this_chat: {
    en: 'Great! Now you are editting the config of this chat',
    ru: 'Отлично! Теперь вы редактируете настройки этого чата',
    uk: "Відмінно! Тепер ви редагуєте налаштування цього чату."
  },
}
