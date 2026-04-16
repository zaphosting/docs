---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Узнайте, как использовать Yet Another Rclone Dashboard как современный GUI для rclone на Linux и Windows, включая доступ к rclone browser и настройку демона с rclone rcd. -> Узнайте больше сейчас"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard — это современная веб-панель для управления `rclone rcd` через браузерный интерфейс. В этом руководстве вы узнаете, что делает программа, какие у неё требования и как её настроить на Linux или Windows с помощью поддерживаемых методов развертывания.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Перед началом убедитесь, что ваша система соответствует базовым требованиям и что `rclone` уже установлен.

### Requirements

Согласно репозиторию проекта, Yet Another Rclone Dashboard предназначен для работы с `rclone rcd` и рекомендует использовать **Rclone версии `v1.72.0` или новее**.

| Требование | Детали |
|---|---|
| Операционная система | Linux или Windows |
| Основная зависимость | `rclone` |
| Рекомендуемая версия Rclone | `v1.72.0` или новее |
| Метод доступа | Веб-браузер |
| Порт RC по умолчанию | `5572/tcp` |
| Дополнительное ПО | `Docker`, `Nginx` или `Caddy` в зависимости от вашей конфигурации |

### What the dashboard provides

Исходный проект описывает Yet Another Rclone Dashboard как фронтенд для `rclone rcd`. На основе доступной информации, он включает следующие возможности:

| Функция | Описание |
|---|---|
| Несколько профилей подключения | Подключение к разным инстансам `rclone rcd` |
| Информация о системе | Просмотр системной и статусной информации Rclone |
| Управление удалёнными хранилищами | Просмотр удалённых хранилищ и импорт/экспорт конфигурации Rclone |
| Файловый браузер | Просмотр каталогов и управление файлами через панель |

:::info Требование к Rclone
Это ПО не является самостоятельным сервером хранения. Вам нужна рабочая установка `rclone` и запуск `rclone` в режиме демона с `rcd`.
:::

### Download source

Официальный исходный код доступен на GitHub:

- [Yet Another Rclone Dashboard на GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

На момент подготовки материала последняя версия — `v0.3.8`, включая архив `yet-another-rclone-dashboard-v0.3.8.zip`.

## Understand how the dashboard works

Yet Another Rclone Dashboard — это статический веб-фронтенд, который подключается к *Rclone remote control API*, предоставляемому `rclone rcd`. Это значит, что сама панель не заменяет `rclone`, а даёт удобный интерфейс в стиле `rclone gui` прямо в браузере.

На практике у вас есть несколько способов использования:

| Метод | Сценарий использования | Примечания |
|---|---|---|
| `--rc-files` | Ручное локальное или серверное развертывание | Обслуживание распакованных файлов панели напрямую через `rclone rcd` |
| `--rc-web-gui` с URL загрузки | Автоматическая загрузка через Rclone | Позволяет Rclone автоматически скачать последнюю версию панели |
| Обратный прокси | Доступ по домену | Полезно для публикации панели через `Nginx` или `Caddy` |
| Внешний веб-сервер | Хостинг статичных файлов | Отдельный фронтенд, подключённый к `rclone rcd` |

:::note Доступ через браузер
Поскольку это веб-панель, вы будете заходить в неё через браузер после запуска и правильной настройки `rclone rcd`.
:::

## Download the dashboard files

Если вы хотите использовать ручной метод развертывания, сначала скачайте последний архив с релизом с GitHub и распакуйте его на сервере или локальной машине.

### Linux example

Скачайте текущий архив с помощью `wget`:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Затем распакуйте:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_dashboard_directory]
```

Замените `[your_dashboard_directory]` на папку, куда хотите сохранить файлы, например `/opt/yet-another-rclone-dashboard`.

### Windows example

На Windows скачайте `.zip` архив с GitHub и распакуйте его в папку, например:

```text
C:\yet-another-rclone-dashboard
```

:::tip Храните файлы в постоянном месте
Не распаковывайте панель в временную папку. `rclone rcd` должен иметь постоянный доступ к файлам при использовании метода `--rc-files`.
:::

## Start Rclone with the dashboard

Когда файлы готовы, можно запустить `rclone rcd` и открыть панель.

### Method 1: Manual setup with `--rc-files`

Этот метод использует распакованные файлы панели напрямую.

#### Linux local example

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Linux server example

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Windows example

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Method 2: Automatic setup with `--rc-web-gui`

Этот метод позволяет Rclone автоматически скачать панель с GitHub через API релизов.

#### Local example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote server example

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

:::caution Не открывайте RC интерфейс без защиты
Если вы привяжете `rclone rcd` к `0.0.0.0`, сервис может быть доступен с других систем. Используйте `--rc-user` и `--rc-pass` или настройте обратный прокси с защитой.
:::

## Important Rclone options

Ниже перечислены самые важные опции для настройки этой панели.

| Опция | Назначение |
|---|---|
| `--rc-files` | Обслуживает статичные файлы панели из локальной папки |
| `--rc-web-gui` | Включает механизм загрузки веб-GUI Rclone |
| `--rc-web-fetch-url` | Указывает API релизов для загрузки панели |
| `--rc-no-auth` | Отключает аутентификацию, подходит только для доверенного локального использования |
| `--rc-user` | Задает имя пользователя для RC |
| `--rc-pass` | Задает пароль для RC |
| `--rc-addr` | Определяет адрес и порт для прослушивания |
| `--rc-allow-origin` | Разрешает доступ из браузера с указанного источника |
| `--rc-web-gui-no-open-browser` | Запрещает автоматический запуск браузера на безголовых системах |
| `--rc-user-from-header` | Принимает имя пользователя из заголовка обратного прокси |

### Placeholder values explained

Используйте следующие плейсхолдеры в примерах:

| Плейсхолдер | Значение |
|---|---|
| `[your_dashboard_directory]` | Папка с распакованными файлами панели |
| `[your_rc_username]` | Имя пользователя для аутентификации `rclone rcd` |
| `[your_rc_password]` | Пароль для аутентификации `rclone rcd` |
| `[your_server_ip]` | Публичный или приватный IP вашего сервера |

## Configure browser access

После запуска `rclone rcd` откройте URL панели в браузере.

### Local access

Если сервис запущен локально на той же машине, откройте:

```text
http://127.0.0.1:5572
```

### Remote access

Если сервис запущен на удалённом Linux или Windows сервере с разрешённым внешним доступом, откройте:

```text
http://[your_server_ip]:5572
```

Если вы используете домен и обратный прокси, откройте настроенный URL, например:

```text
https://[your_domain]
```

:::info Значение Allowed Origin должно совпадать
Значение, указанное в `--rc-allow-origin`, должно совпадать с адресом, который вы используете в браузере. Если оно не совпадает, панель может не подключиться корректно.
:::

## Use a reverse proxy

Обратный прокси полезен для более чистых URL, HTTPS или дополнительного контроля доступа.

### Nginx example

Пример настройки Nginx для обслуживания распакованных статичных файлов панели:

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

### Caddy example

Пример настройки Caddy для обслуживания статичных файлов панели:

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Хостинг статичного фронтенда
Эти примеры обслуживают только фронтенд. Вам всё равно нужен работающий бэкенд `rclone rcd`, к которому панель будет подключаться.
:::

## Advanced authentication with a reverse proxy

Проект также описывает продвинутую настройку, где аутентификация обрабатывается внешним шлюзом и передаётся в Rclone через `--rc-user-from-header`.

### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy reverse proxy example

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

:::caution Продвинутая аутентификация требует тщательного тестирования
Эта схема зависит от того, что ваш обратный прокси и шлюз аутентификации корректно передают нужные заголовки. Если заголовок отсутствует или настроен неправильно, доступ может не работать или вести себя непредсказуемо.
:::

## Verify the installation

Когда всё запущено, проверьте, что панель загружается корректно.

### Basic checks

Проверьте следующее:

| Проверка | Ожидаемый результат |
|---|---|
| Процесс `rclone rcd` запущен | Нет ошибок при старте в консоли или логах |
| Порт `5572` слушается | Сервис доступен локально или удалённо |
| В браузере открывается нужный URL | Загружается интерфейс Yet Another Rclone Dashboard |
| Аутентификация работает | Можно войти, если включена авторизация RC |

### Common issues

| Проблема | Возможная причина | Рекомендуемое действие |
|---|---|---|
| Панель не загружается | Неправильный URL или сервис не запущен | Проверьте значение `--rc-addr` и статус процесса |
| Ошибки подключения в браузере | Порт заблокирован файрволом | Разрешите входящий трафик на `5572/tcp` при необходимости |
| Не удаётся войти | Неправильные `--rc-user` или `--rc-pass` | Перезапустите `rclone rcd` с правильными данными |
| Фронтенд открывается, но API не отвечает | Несовпадение `--rc-allow-origin` | Установите origin точно в URL браузера |
| Нет удалённого доступа | Сервис привязан только к `127.0.0.1` | Используйте `0.0.0.0:5572` для удалённого доступа |

:::danger Публичный доступ без защиты опасен
Не выставляйте панель напрямую в интернет без аутентификации или защищённого обратного прокси. Если планируете использовать её как удалённый `rclone browser` или для управления `rclone google drive` по сети, обязательно защитите точку доступа.
:::

## Additional notes for Linux and Windows

### Linux

Linux обычно самый удобный вариант для долгосрочного запуска `rclone rcd`. Вы можете запускать команду вручную, через мультиплексор терминала или как системный сервис — в зависимости от архитектуры вашей системы.

### Windows

На Windows убедитесь, что путь в `--rc-files` указывает на распакованную папку панели, а файрвол разрешает нужный порт, если нужен удалённый доступ.

### Docker note

В исходном материале упоминается Docker как опциональная зависимость, но проверенной инструкции по развертыванию в контейнере для этого проекта нет. Если хотите использовать `rclone docker` workflow, изучите репозиторий проекта перед настройкой, не предполагая готовый контейнер.

## Conclusion

Поздравляем, вы успешно настроили Yet Another Rclone Dashboard на Linux или Windows. Если у вас возникнут вопросы или потребуется помощь, не стесняйтесь обращаться в нашу службу поддержки — мы доступны ежедневно и всегда готовы помочь! 🙂