---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Настройте Yet Another Rclone Dashboard — современный rclone gui и rclone browser для Linux и Windows, чтобы безопасно управлять вашим rclone daemon -> Узнайте больше сейчас"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard — это современная веб-панель для `rclone rcd`, которая предоставляет графический интерфейс для управления удалёнными хранилищами, просмотра файлов и контроля передач. В этом руководстве вы узнаете, как развернуть её на Linux или Windows и подключить к вашей существующей настройке Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Перед началом убедитесь, что ваша система соответствует базовым требованиям и что Rclone уже установлен.

### Requirements

| Компонент | Требование |
| --- | --- |
| Операционная система | Linux или Windows |
| Версия Rclone | Рекомендуется `v1.72.0` или новее |
| Способ доступа | Локальная оболочка, SSH или RDP |
| Порт по умолчанию | `5572/tcp` |
| Опционально | Обратный прокси, например Nginx или Caddy |

### Что нужно перед установкой

Вам потребуется:

- Рабочая установка [Rclone](https://rclone.org/)
- Как минимум один настроенный удалённый Rclone, если вы хотите получить доступ к облачному хранилищу, например *rclone Google Drive*
- Открытый или проброшенный порт `5572`, если планируете подключаться удалённо
- Браузер для доступа к панели

:::info Требование к Rclone
Yet Another Rclone Dashboard — это только фронтенд для `rclone rcd`. Он не заменяет сам Rclone, поэтому сначала нужно установить и настроить Rclone.
:::

### Важные плейсхолдеры, используемые в этом руководстве

В командах ниже используются плейсхолдеры, которые нужно заменить на ваши значения.

| Плейсхолдер | Значение |
| --- | --- |
| `[your_dashboard_path]` | Путь, где хранятся файлы панели |
| `[your_server_ip]` | Публичный или приватный IP вашего сервера |
| `[your_domain]` | Домен для доступа через обратный прокси |
| `[your_rc_user]` | Имя пользователя для аутентификации Rclone RC |
| `[your_rc_password]` | Пароль для аутентификации Rclone RC |

## About Yet Another Rclone Dashboard

Yet Another Rclone Dashboard — это статический веб-фронтенд, опубликованный на [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Согласно README проекта, он предназначен для `rclone rcd` и поддерживает такие функции, как:

- подключение к Rclone в режиме демона
- управление несколькими профилями подключения
- просмотр системной информации и статуса
- навигация по каталогам
- работа с удалёнными хранилищами и конфигурацией

Поскольку это фронтенд, все операции с файлами выполняет сам Rclone. Значит, для работы панели нужен запущенный экземпляр `rclone rcd`.

## Installation Methods

Вы можете развернуть панель разными способами в зависимости от того, как хотите к ней подключаться. Самые популярные методы — использовать Rclone напрямую с локальными файлами или позволить Rclone автоматически загружать веб-интерфейс.

### Installation overview

| Метод | Лучшее применение | Примечания |
| --- | --- | --- |
| `--rc-files` | Ручное развертывание | Вы скачиваете и распаковываете панель самостоятельно |
| `--rc-web-gui` с `--rc-web-fetch-url` | Быстрая настройка | Rclone автоматически скачивает последнюю версию панели |
| Внешний веб-сервер | Кастомный хостинг | Полезно с Nginx или Caddy |
| Обратный прокси с авторизацией | Продвинутые настройки | Лучший вариант для защищённого удалённого доступа |

## Download the Dashboard Manually

Если хотите полный контроль над версией, скачайте последнюю сборку вручную с релизов GitHub проекта.

### Linux

Создайте папку для панели, скачайте архив с последним релизом и распакуйте его.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

На Windows скачайте архив с официальной страницы релизов GitHub и распакуйте его в папку, например:

```text
C:\rclone-dashboard
```

:::note Версия релиза
На момент написания последняя проверенная версия — `v0.3.8`. Если доступна более новая, можете использовать её.
:::

## Start the Dashboard with Rclone

Когда файлы готовы, запустите `rclone rcd` и обслуживайте панель через сам Rclone.

### Локальный доступ на Linux

Используйте этот способ, если хотите работать с панелью только на локальной машине.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Удалённый доступ на Linux

Этот способ подходит для доступа к панели с другого устройства по сети.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Локальный доступ на Windows

Откройте Командную строку или PowerShell и выполните:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Удалённый доступ на Windows

Для удалённого доступа выполните:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Не открывайте незащищённый Rclone GUI
Если вы привязываете Rclone к `0.0.0.0`, не используйте `--rc-no-auth`. Всегда защищайте удалённый доступ аутентификацией или обратным прокси.
:::

## Use Rclone WebGUI Fetcher

Rclone может автоматически загружать панель с GitHub. Это удобно, если не хотите скачивать и распаковывать файлы вручную.

### Локальный режим

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Удалённый режим

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Автоматические обновления
Этот способ удобен, если хотите, чтобы Rclone автоматически загружал последнюю версию панели. Обычно это самый быстрый вариант для тестирования нового rclone gui.
:::

## Serve the Dashboard with a Web Server

Поскольку Yet Another Rclone Dashboard — статический фронтенд, вы можете хостить его на обычном веб-сервере и запускать `rclone rcd` отдельно в фоне.

### Пример для Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Пример для Caddy

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Этот способ полезен, если вы уже используете обратный прокси или хотите более чистый доступ к панели по домену.

## Advanced Reverse Proxy Setup

Если хотите защитить доступ через внешний слой аутентификации, можно поставить обратный прокси перед Rclone и передавать аутентифицированного пользователя через заголовок.

### Команда Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Пример Caddy с передачей заголовка пользователя

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Продвинутая аутентификация
Конкретная реализация шлюза аутентификации зависит от вашей среды. Пример выше показывает только интеграцию Rclone с обратным прокси. Если вы используете дополнительное ПО, например identity provider или плагин Caddy, настройте его согласно официальной документации.
:::

## Configuration Reference

Ниже перечислены основные опции Rclone RC, используемые с этой панелью.

| Опция | Назначение |
| --- | --- |
| `--rc-files` | Обслуживает распакованные файлы панели |
| `--rc-web-gui` | Включает поддержку Rclone WebGUI |
| `--rc-web-fetch-url` | Загружает метаданные релиза панели с GitHub |
| `--rc-no-auth` | Отключает аутентификацию, подходит только для локального использования |
| `--rc-user` | Задает имя пользователя для Rclone RC |
| `--rc-pass` | Задает пароль для Rclone RC |
| `--rc-addr` | Определяет адрес и порт для прослушивания |
| `--rc-allow-origin` | Разрешает доступ из браузера с указанного URL |
| `--rc-web-gui-no-open-browser` | Запрещает автоматический запуск браузера |
| `--rc-user-from-header` | Принимает аутентифицированного пользователя из заголовка прокси |

### Выбор правильного `--rc-allow-origin`

Установите `--rc-allow-origin` в точное значение URL, который используете в браузере.

| Тип доступа | Пример значения |
| --- | --- |
| Локальный доступ | `http://127.0.0.1:5572` |
| Удалённый по IP | `http://[your_server_ip]:5572` |
| Обратный прокси с HTTPS | `https://[your_domain]` |

:::caution Origin должен совпадать
Если `--rc-allow-origin` не совпадает с URL в браузере, панель может не загрузиться из-за ограничений безопасности браузера.
:::

## Access and Verify the Dashboard

Когда `rclone rcd` запущен, откройте панель в браузере.

### Часто используемые URL

| Сценарий | URL |
| --- | --- |
| Локальная машина | `http://127.0.0.1:5572` |
| Удалённо по IP | `http://[your_server_ip]:5572` |
| Обратный прокси | `https://[your_domain]` |

### Что проверить после запуска

После открытия страницы убедитесь, что:

- интерфейс Yet Another Rclone Dashboard загрузился
- видны ваши настроенные удалённые хранилища
- работает просмотр файлов в браузере Rclone
- панели передачи и системной информации корректно реагируют

Если страница не загружается, сначала проверьте вывод консоли Rclone. Ошибки аутентификации, несоответствие origin и проблемы с портом — самые частые причины.

## Security Recommendations

Запуск панели для облачного хранилища требует внимательной настройки безопасности, особенно если вы открываете доступ через интернет.

### Рекомендуемые меры безопасности

| Рекомендация | Причина |
| --- | --- |
| Используйте `--rc-user` и `--rc-pass` для удалённого доступа | Предотвращает неавторизованный доступ |
| Предпочитайте HTTPS через обратный прокси | Защищает учётные данные при передаче |
| Привязывайтесь к `127.0.0.1`, если возможно | Снижает зону риска |
| Ограничьте доступ в файрволе к `5572/tcp` | Уменьшает поверхность атаки |
| Не используйте `--rc-no-auth` в публичных сетях | Предотвращает открытый доступ к вашему Rclone |

:::danger Риск публичного доступа
Открытый и незащищённый экземпляр `rclone rcd` может дать доступ к вашим удалённым хранилищам и файлам. Если вы задаётесь вопросом «безопасен ли rclone», ответ сильно зависит от того, насколько надёжно вы настроили защиту и аутентификацию.
:::

## Troubleshooting

Если панель работает не так, как ожидалось, проверьте следующие моменты.

### Страница панели не открывается

Возможные причины:

- `rclone rcd` не запущен
- порт `5572` заблокирован файрволом
- сервис привязан к `127.0.0.1`, а вы пытаетесь подключиться удалённо

### Интерфейс загрузился, но действия не работают

Возможные причины:

- неверные `--rc-user` или `--rc-pass`
- неправильный `--rc-allow-origin`
- отсутствует или повреждена конфигурация удалённого хранилища Rclone

### Панель не загружается через обратный прокси

Возможные причины:

- прокси направлен на неправильный бэкенд
- HTTPS URL не совпадает с `--rc-allow-origin`
- необходимые заголовки не передаются корректно

### Полезные проверки

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Проверка локальной точки доступа:

```bash
curl http://127.0.0.1:5572
```

:::tip Сначала проверьте логи Rclone
Большинство проблем с запуском и подключением видно прямо в терминале или логах сервиса, где запущен `rclone rcd`. Всегда проверяйте их перед изменением настроек.
:::

## Additional Notes

Yet Another Rclone Dashboard был представлен в Self-Host Weekly 10 апреля 2026 года и размещён публично на GitHub. На момент написания проект — это решение, ориентированное на фронтенд, чтобы улучшить опыт управления Rclone через браузер.

Некоторые способы развертывания, например Docker, могут быть возможны в кастомных средах, но проверенных инструкций по Docker не было в исходных материалах. Поэтому это руководство охватывает только методы, официально поддерживаемые проектом.

## Conclusion

Congratulations, you have successfully installed and configured Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂