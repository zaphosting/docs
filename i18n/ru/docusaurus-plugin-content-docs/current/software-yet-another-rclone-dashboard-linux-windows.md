---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to set up Yet Another Rclone Dashboard, a modern rclone gui and rclone browser for Linux and Windows, using rclone rcd and release files from rclone GitHub -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard — это современная веб-панель для `rclone rcd`, которая предоставляет графический интерфейс для просмотра файлов, управления удалёнными хранилищами и передачами. В этом руководстве вы узнаете, что делает это ПО, какие у него требования и как запустить его на Linux или Windows с помощью поддерживаемых способов развертывания.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Перед началом убедитесь, что у вас установлен [Rclone](https://rclone.org/), так как Yet Another Rclone Dashboard — это только фронтенд для демона удалённого управления Rclone.

### Requirements

Требования основаны на доступной информации о проекте и черновом плане установки.

| Требование | Детали |
| --- | --- |
| Операционная система | Linux или Windows |
| Необходимое ПО | `rclone` |
| Рекомендуемая версия Rclone | `v1.72.0` или новее |
| Дополнительное ПО | `Docker`, `Nginx` или `Caddy` в зависимости от способа развертывания |
| Порт по умолчанию | `5572/tcp` |
| Доступ в интернет | Требуется для загрузки релизов или использования метода web fetch |

### От чего зависит панель

Yet Another Rclone Dashboard не заменяет Rclone. Вместо этого она подключается к `rclone rcd` — режиму *демона удалённого управления* Rclone.

| Компонент | Назначение |
| --- | --- |
| Yet Another Rclone Dashboard | Веб-фронтенд |
| `rclone rcd` | Бэкенд API и операции с файлами |
| Rclone remotes | Ваши настроенные облачные хранилища, например Google Drive |

:::info Требуется Rclone
Вы не сможете использовать эту панель отдельно. Необходимо установить `rclone` и запустить его в режиме демона с включённым интерфейсом удалённого управления.
:::

### Используемые в руководстве плейсхолдеры

В некоторых командах используются плейсхолдеры. Замените их на свои значения перед выполнением.

| Плейсхолдер | Значение |
| --- | --- |
| `[your_user]` | Имя пользователя для аутентификации удалённого управления Rclone |
| `[your_password]` | Пароль для аутентификации удалённого управления Rclone |
| `[your_server_ip]` | Публичный или приватный IP-адрес вашего сервера |
| `[your_domain]` | Домен для доступа через обратный прокси |
| `[your_build_path]` | Путь к распакованным файлам панели |

## Available deployment methods

Вы можете запустить Yet Another Rclone Dashboard разными способами в зависимости от того, как хотите к ней обращаться.

| Метод | Лучшее применение | Примечания |
| --- | --- | --- |
| `--rc-files` | Ручное развертывание | Использует распакованные статические файлы сборки |
| `--rc-web-gui` с `--rc-web-fetch-url` | Быстрая настройка | Позволяет Rclone автоматически загрузить последнюю версию панели |
| Веб-сервер, например Nginx или Caddy | Кастомный хостинг | Отдельная подача статического фронтенда |
| Обратный прокси с внешней аутентификацией | Продвинутые настройки | Полезно для централизованной аутентификации |

## Download the dashboard release

Если вы хотите использовать ручной метод `--rc-files` или подавать фронтенд через свой веб-сервер, сначала скачайте последний архив релиза с GitHub проекта.

Официальный источник: [Yet Another Rclone Dashboard на GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

На момент указанного релиза последняя версия — `v0.3.8`, в архиве `yet-another-rclone-dashboard-v0.3.8.zip`.

### Пример загрузки для Linux

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Пример загрузки для Windows

На Windows скачайте `.zip` с GitHub и распакуйте в папку, например:

```text
C:\yet-another-rclone-dashboard
```

:::note Информация о версии релиза
Версия релиза может меняться со временем. Если доступна более новая версия, используйте актуальный файл с GitHub проекта вместо приведённого примера.
:::

## Run the dashboard with Rclone rc-files

Это самый простой способ, если вы уже скачали и распаковали файлы фронтенда.

### Пример для Linux

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Пример для Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Пример локального запуска на рабочем столе

Если хотите использовать панель только локально на том же устройстве, можно привязать её к `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Не открывайте Rclone без аутентификации
Используйте `--rc-no-auth` только для локального тестирования на `127.0.0.1`. Если привязываете Rclone к `0.0.0.0`, обязательно защитите его аутентификацией или правильно настроенным обратным прокси.
:::

## Run the dashboard with Rclone web fetch

Rclone может автоматически загружать веб-интерфейс, что упрощает развертывание, если ваша конфигурация это поддерживает.

### Пример для Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Пример для Windows

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Объяснение важных флагов

| Флаг | Назначение |
| --- | --- |
| `--rc-web-gui` | Включает поддержку веб-интерфейса в Rclone |
| `--rc-web-fetch-url` | Указывает Rclone ссылку на метаданные последнего релиза |
| `--rc-user` | Задает имя пользователя для входа |
| `--rc-pass` | Задает пароль для входа |
| `--rc-addr` | Определяет IP и порт для прослушивания |
| `--rc-allow-origin` | Разрешает запросы из указанного URL в браузере |
| `--rc-web-gui-no-open-browser` | Отключает автоматический запуск браузера |

:::tip Точно указывайте Origin
Устанавливайте `--rc-allow-origin` в точный URL, который используете в браузере, включая протокол `http://` или `https://`. Особенно важно при использовании обратного прокси.
:::

## Serve the dashboard with a web server

Поскольку Yet Another Rclone Dashboard — это статическое веб-приложение, его можно хостить на стандартном веб-сервере, например Nginx или Caddy.

Это удобно, если хотите подавать фронтенд на одном порту или домене, а Rclone запускать отдельно в фоне.

### Пример конфигурации Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Пример конфигурации Caddy

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Что важно помнить

Если фронтенд подаётся отдельно, Rclone должен работать с совместимыми настройками `rc` в фоне. Также нужно разрешить браузеру делать запросы с URL фронтенда.

| Настройка | Пример |
| --- | --- |
| URL фронтенда | `https://[your_domain]` |
| Адрес привязки Rclone | `127.0.0.1:5572` или `0.0.0.0:5572` |
| Разрешённый origin | `https://[your_domain]` |

## Advanced setup with reverse proxy authentication

Для продвинутых сценариев можно разместить панель за обратным прокси и использовать внешний шлюз аутентификации. В примере используется опция Rclone `--rc-user-from-header`.

### Пример Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Пример Caddy

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

:::info Продвинутая настройка аутентификации
Этот метод зависит от вашего обратного прокси и стека аутентификации. Точная конфигурация для таких инструментов, как `caddy-security`, выходит за рамки этого руководства, но пример показывает, как панели передавать заголовок с авторизованным пользователем.
:::

## Configure access and security

Перед началом работы с панелью проверьте основные настройки доступа.

### Рекомендуемые значения конфигурации

| Опция | Рекомендация |
| --- | --- |
| `--rc-user` | Используйте отдельное имя, например `zaphosting` |
| `--rc-pass` | Придумайте надежный пароль |
| `--rc-addr` | По возможности используйте `127.0.0.1:5572` за обратным прокси |
| `--rc-allow-origin` | Точно совпадайте с URL в браузере |
| Брандмауэр | Открывайте `5572/tcp` только при необходимости прямого доступа |

### Лучшие практики безопасности

- Используйте аутентификацию при открытии сервиса в сети
- Предпочитайте обратный прокси с HTTPS для публичного доступа
- Ограничивайте прямой доступ к `5572/tcp` по максимуму
- Обновляйте Rclone, если используете его для доступа к облачным хранилищам, например `rclone google drive`

:::danger Риск публичного доступа
Доступ к удалённому управлению Rclone даёт мощные возможности по управлению файлами и удалёнными хранилищами. Не открывайте его публично без аутентификации и правильных сетевых ограничений.
:::

## Start and verify the dashboard

Когда настройка готова, запустите `rclone rcd` и откройте панель в браузере.

### Примеры доступа

| Сценарий | URL |
| --- | --- |
| Локальный доступ | `http://127.0.0.1:5572` |
| Прямой доступ к серверу | `http://[your_server_ip]:5572` |
| Доступ через обратный прокси | `https://[your_domain]` |

### Что вы должны увидеть

Если всё настроено правильно, интерфейс Yet Another Rclone Dashboard загрузится и позволит:

- подключиться к демону Rclone
- просмотреть настроенные удалённые хранилища
- просматривать файлы
- следить за передачами
- просматривать настройки и системную информацию

Если страница не загружается, проверьте следующее:

| Проверка | Почему важно |
| --- | --- |
| Процесс Rclone запущен | Панель требует работающий бэкенд |
| Порт `5572` доступен | Необходим для прямого доступа |
| `--rc-allow-origin` указан верно | Предотвращает проблемы с доступом из браузера |
| Имя пользователя и пароль корректны | Требуется для аутентификации |
| Заголовки обратного прокси корректны | Важно для продвинутой аутентификации |

## Troubleshooting

### Браузер не может подключиться

Если браузер не открывает панель, проверьте, слушает ли Rclone нужный адрес и порт.

В Linux можно проверить порты командой:

```bash
ss -tulpn | grep 5572
```

В Windows используйте:

```powershell
netstat -ano | findstr 5572
```

### Ошибка аутентификации

Если вход не проходит:

- проверьте значения `--rc-user` и `--rc-pass`
- убедитесь, что обратный прокси не удаляет нужные заголовки
- не используйте `--rc-no-auth` на удалённых или публичных интерфейсах

### Фронтенд загружается, но действия не работают

Чаще всего это проблема с origin или связью с бэкендом.

Внимательно проверьте:

- `--rc-allow-origin`
- `--rc-addr`
- адрес назначения обратного прокси
- URL в браузере для доступа к панели

:::tip Используйте логи для быстрой диагностики
Если панель ведёт себя не так, как ожидалось, сначала посмотрите вывод консоли Rclone. Там часто сразу видно проблемы с аутентификацией, привязкой и origin.
:::

## Software reference

### Project details

| Пункт | Значение |
| --- | --- |
| Название | Yet Another Rclone Dashboard |
| Категория | Фронтенд |
| Исходники | [GitHub репозиторий](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Используемый релиз | `v0.3.8` |
| Файл релиза | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Рекомендуемый бэкенд | `rclone v1.72.0` или новее |

### Известный функционал с страницы проекта

Согласно информации из репозитория, панель поддерживает:

- несколько профилей подключения
- системную информацию и статус Rclone
- просмотр удалённых хранилищ
- импорт и экспорт конфигурации Rclone
- просмотр и фильтрацию файлов
- отображение информации о передачах

:::note Доступность функций
Функционал может меняться между релизами. Для точных деталей по новой версии смотрите changelog и заметки к релизам на GitHub.
:::

## Conclusion

Поздравляем, вы успешно настроили Yet Another Rclone Dashboard на Linux или Windows. Если у вас возникнут вопросы или потребуется помощь, не стесняйтесь обращаться в нашу службу поддержки — мы доступны ежедневно и всегда готовы помочь! 🙂