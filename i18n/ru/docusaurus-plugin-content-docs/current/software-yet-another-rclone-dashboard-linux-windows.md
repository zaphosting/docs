---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Узнайте, как настроить Yet Another Rclone Dashboard — современный графический интерфейс и браузер для rclone на Linux и Windows. -> Узнайте больше сейчас"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard — это современная веб-панель для `rclone rcd`, которая предоставляет графический интерфейс для просмотра файлов, управления удалёнными хранилищами и настройки Rclone. В этом руководстве вы узнаете, как развернуть её на Linux или Windows и безопасно подключить к вашему существующему демону Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Перед началом убедитесь, что ваша система соответствует базовым требованиям и Rclone уже установлен.

### Requirements

| Требование | Детали |
|---|---|
| Операционная система | Linux или Windows |
| Версия Rclone | Рекомендуется `v1.72.0` или новее |
| Метод доступа | Локальная консоль, SSH или RDP |
| Сеть | Доступ к URL панели из браузера |
| Порт по умолчанию | `5572/tcp` |

### What you need to know first

Yet Another Rclone Dashboard — это не отдельный сервис хранения. Это фронтенд для `rclone rcd` — режима удалённого управления Rclone. Это значит, что вы должны запускать `rclone rcd` с правильными веб-опциями, чтобы панель могла загрузиться и взаимодействовать с бэкендом.

:::info Требуется Rclone
Для использования этой панели у вас должен быть установлен и настроен [Rclone](https://rclone.org/). Если Rclone ещё не установлен, сначала выполните его установку и настройку.
:::

### Recommended preparation checklist

| Задача | Почему это важно |
|---|---|
| Установить Rclone | Нужно для запуска `rclone rcd` |
| Настроить хотя бы один remote | Нужно для просмотра облачных хранилищ, например `rclone google drive` |
| Открыть или пробросить нужный порт | Нужно для удалённого доступа через браузер |
| Определиться с локальным или удалённым доступом | Определяет необходимость аутентификации |

## Understanding how the dashboard works

Yet Another Rclone Dashboard — это статическое веб-приложение, которое подключается к API удалённого управления Rclone. Вы можете либо обслуживать файлы панели напрямую через Rclone, либо хостить фронтенд отдельно на веб-сервере, например Nginx или Caddy.

### Main features

Согласно опубликованной информации, панель поддерживает следующие функции:

| Функция | Описание |
|---|---|
| Несколько профилей подключения | Подключение к разным инстансам `rclone rcd` |
| Системная информация | Просмотр статуса Rclone и данных окружения |
| Просмотр удалённых хранилищ | Обзор доступных remote и их конфигурации |
| Файловый браузер | Просмотр каталогов и управление файлами |
| Предпросмотр медиа | Просмотр поддерживаемого контента |
| Мониторинг передач | Отслеживание активности передачи данных |
| Интерфейс настроек | Регулировка параметров панели |

### When to use this dashboard

Этот проект полезен, если вы хотите лёгкий `rclone gui` или `rclone browser` вместо работы только в терминале. Особенно удобно при управлении облачными remote с VPS, выделенного сервера или локальной Windows-машины.

## Installation methods

Yet Another Rclone Dashboard можно развернуть разными способами. Выбор зависит от того, хотите ли вы максимально простой запуск, ручную установку или обратный прокси перед сервисом.

### Method 1: Serve the dashboard with local files

Этот способ использует распакованную сборку панели с опцией `--rc-files` Rclone.

#### Download the release

Скачайте последний архив с релизом на странице GitHub проекта:

- GitHub проект: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Последний проверенный релиз из исходного материала: `v0.3.8`
- Архив релиза: `yet-another-rclone-dashboard-v0.3.8.zip`

Распакуйте архив в удобное для вас место.

Примеры путей:

| Платформа | Пример пути |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Start Rclone on Linux

Если вы запускаете панель локально на той же машине и хотите доступ только из локального браузера, привяжите её к `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Если хотите доступ с другого устройства, используйте аутентификацию и слушайте на всех интерфейсах.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Start Rclone on Windows

Откройте `Command Prompt` или `PowerShell` и выполните:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

Замените плейсхолдеры на свои значения:

| Плейсхолдер | Значение |
|---|---|
| `[your_rc_username]` | Имя пользователя для входа в API Rclone |
| `[your_rc_password]` | Пароль для защиты API Rclone |
| `[your_server_ip]` | Публичный или приватный IP для доступа к панели |

:::caution Не оставляйте Rclone API без аутентификации
Не используйте `--rc-no-auth` вместе с `0.0.0.0:5572` на сервере с доступом из интернета. Это откроет интерфейс управления Rclone без защиты.
:::

### Method 2: Use Rclone's WebGUI fetcher

Этот способ позволяет Rclone автоматически загружать панель вместо ручного скачивания файлов. Упрощает развертывание для быстрого старта.

#### Local access example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote access example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::note Автоматическая загрузка
Точный путь хранения загруженных файлов веб-интерфейса зависит от вашей среды Rclone. Если нужен полный контроль над файлами и обновлениями, обычно проще использовать ручной метод с `--rc-files`.
:::

### Method 3: Serve the frontend with a web server

Поскольку проект — статическое веб-приложение, вы можете хостить фронтенд отдельно на веб-сервере и запускать `rclone rcd` в фоне.

#### Nginx example

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Caddy example

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

Этот способ удобен, если у вас уже есть обратный прокси и вы хотите обслуживать панель с собственного домена.

:::tip Лучшие практики обратного прокси
Если используете домен или обратный прокси, установите `--rc-allow-origin` в точный URL, который открываете в браузере, например `https://[your_domain]`.
:::

### Method 4: Advanced reverse proxy with external authentication

Продвинутая настройка может использовать внешний шлюз аутентификации и передавать авторизованного пользователя в Rclone через заголовок. Предназначено для опытных пользователей.

#### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Caddy example

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Продвинутая аутентификация
Аутентификация через заголовки должна использоваться только за доверенным обратным прокси. При неправильной настройке это может привести к несанкционированному доступу к вашему Rclone.
:::

## Important Rclone options

Ниже перечислены самые важные опции для развертывания Yet Another Rclone Dashboard.

| Опция | Назначение |
|---|---|
| `--rc-files` | Обслуживает распакованные файлы панели через Rclone |
| `--rc-web-gui` | Включает поддержку веб-интерфейса через Rclone |
| `--rc-web-fetch-url` | Загружает метаданные релиза GUI из удалённого источника |
| `--rc-user` | Устанавливает имя пользователя API |
| `--rc-pass` | Устанавливает пароль API |
| `--rc-no-auth` | Отключает аутентификацию |
| `--rc-addr` | Определяет адрес и порт для прослушивания |
| `--rc-allow-origin` | Разрешает доступ из указанного источника в браузере |
| `--rc-web-gui-no-open-browser` | Запрещает автоматический запуск браузера |
| `--rc-user-from-header` | Принимает авторизованного пользователя из заголовка обратного прокси |

## Configuration guidance

После выбора способа установки проверьте основные параметры конфигурации перед первым запуском.

### Authentication settings

Если панель используется только локально на вашей машине, можно разрешить неаутентифицированный локальный доступ. Для любого удалённого или публичного доступа всегда используйте аутентификацию.

| Тип доступа | Рекомендуемые настройки |
|---|---|
| Только локальный | `127.0.0.1` с опциональным `--rc-no-auth` |
| Доступ в LAN или интернет | `0.0.0.0` с `--rc-user` и `--rc-pass` |
| Обратный прокси с доменом | `127.0.0.1` или приватный биндинг + аутентификация прокси |

### Allowed origin

Значение `--rc-allow-origin` должно совпадать с URL, с которого браузер загружает панель.

Примеры:

| URL доступа | Соответствующее `--rc-allow-origin` |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

Если значение не совпадает, браузер может блокировать запросы, и панель не загрузится корректно.

## Starting and verifying the dashboard

Когда команда запущена, откройте настроенный адрес в браузере.

### What to expect

Если всё настроено правильно, вы увидите интерфейс Yet Another Rclone Dashboard и сможете подключиться к вашему демону Rclone.

Типичные примеры:

| Сценарий | URL |
|---|---|
| Локальный доступ Linux или Windows | `http://127.0.0.1:5572` |
| Удалённый доступ по IP | `http://[your_server_ip]:5572` |
| Доступ через обратный прокси | `https://[your_domain]` |

### Basic verification steps

1. Запустите `rclone rcd` выбранным способом.
2. Откройте URL панели в браузере.
3. Войдите, если включена аутентификация.
4. Убедитесь, что видны remote, функции браузера файлов или статус.
5. Проверьте простое чтение, например, откройте каталог.

## Troubleshooting

Если панель не загружается или не подключается, проверьте распространённые причины.

### Connection refused

Если ошибка отказа в соединении:

- убедитесь, что `rclone rcd` запущен
- проверьте, что используется правильный порт `5572`
- проверьте, что сервис слушает нужный интерфейс
- убедитесь, что файрвол разрешает входящие подключения при необходимости

### Browser origin or login issues

Если страница загружается, но API-запросы не проходят:

- проверьте `--rc-allow-origin`
- убедитесь, что URL в браузере точно совпадает с разрешённым origin
- проверьте `--rc-user` и `--rc-pass`
- убедитесь, что обратный прокси корректно проксирует запросы

### File path issues

Если используете `--rc-files` и интерфейс не отображается:

- проверьте, что распакованные файлы панели находятся в правильной папке
- проверьте синтаксис пути для Linux или Windows
- убедитесь, что архив был распакован, а не просто скачан

:::tip Проверьте вывод консоли Rclone
Rclone обычно выводит полезную информацию о запуске и ошибках прямо в терминал. Сначала изучите этот вывод, если панель, `rclone download` или функции браузера remote не работают как надо.
:::

## Security recommendations

Панель управления Rclone имеет доступ к remote и операциям с файлами, поэтому безопасность важна.

| Рекомендация | Причина |
|---|---|
| Используйте аутентификацию для удалённого доступа | Защищает API Rclone |
| Привязывайтесь к `127.0.0.1`, если возможно | Снижает экспозицию |
| Используйте HTTPS за обратным прокси | Защищает учётные данные при передаче |
| Ограничьте доступ файрволом | Снижает поверхность атаки |
| Используйте сильные пароли | Предотвращает несанкционированный доступ |

:::caution Чувствительные remote
Если в вашей конфигурации Rclone есть облачные хранилища, например Google Drive, небезопасный доступ к панели может раскрыть и доступ к этим remote и данным.
:::

## Additional project information

Проект опубликован на GitHub и был представлен в Self-Host Weekly 10 апреля 2026 года.

| Пункт | Значение |
|---|---|
| Название проекта | Yet Another Rclone Dashboard |
| Категория | Фронтенд |
| Исходники | [GitHub репозиторий](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Публикация в Weekly | [Self-Host Weekly (10 апреля 2026)](https://selfh.st/weekly/2026-04-10/) |
| Проверенный релиз из исходного материала | `v0.3.8` |

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂