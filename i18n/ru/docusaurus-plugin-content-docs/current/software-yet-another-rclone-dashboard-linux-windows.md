---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as an rclone gui for Linux and Windows, including rclone download and browser-based dashboard access -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard — это современная веб-панель для управления `rclone rcd` через браузерный интерфейс. В этом руководстве вы узнаете, что делает это ПО, какие у него требования и как настроить его на Linux или Windows вместе с Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Перед началом убедитесь, что у вас установлен и работает [Rclone](https://rclone.org/), так как эта панель предназначена для подключения к `rclone rcd`, а не для работы как отдельный бекенд.

### Requirements

Ниже перечислены требования, основанные на доступной информации о проекте и предоставленном черновике установки.

| Требование | Детали |
| --- | --- |
| Операционная система | Linux или Windows |
| Необходимое ПО | `rclone` |
| Рекомендуемая версия Rclone | `v1.72.0` или новее |
| Дополнительное ПО | `Nginx`, `Caddy` или другой веб-сервер, если хотите отдельно отдавать статические файлы |
| Дополнительная зависимость для сборки | `Node.js`, если планируете собирать проект из исходников |
| Порт по умолчанию для RC | `5572/tcp` |

:::info Требуется Rclone
Yet Another Rclone Dashboard — это фронтенд для `rclone rcd`. Без запущенного экземпляра удаленного управления Rclone использовать панель нельзя.
:::

### Доступ и сетевые настройки

Также убедитесь, что система, на которой запущен Rclone, позволяет доступ к настроенному порту, если вы хотите открыть панель удаленно.

| Сценарий | Рекомендуемый адрес привязки | Пример URL |
| --- | --- | --- |
| Только локальный доступ | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Удаленный доступ в сети | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Настройка обратного прокси | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Безопасный доступ к панели
Если привязать Rclone к `0.0.0.0`, сервис станет доступен с других систем. Используйте аутентификацию и, по возможности, обратный прокси с HTTPS.
:::

## About Yet Another Rclone Dashboard

Yet Another Rclone Dashboard — это веб-фронтенд для режима демона Rclone. Согласно репозиторию проекта, он поддерживает подключение к `rclone rcd`, несколько профилей подключения, просмотр удаленных хранилищ, импорт и экспорт конфигураций, просмотр файлов и управление передачами.

Это значит, что вы можете использовать его как `rclone gui` или `rclone browser` для типичных задач, которые обычно требуют работы через командную строку.

### Project details

| Параметр | Значение |
| --- | --- |
| Название | Yet Another Rclone Dashboard |
| Категория | Фронтенд |
| Исходники | [GitHub репозиторий](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Последний релиз | `v0.3.8` |
| Релизный архив | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Рекомендуемый бекенд | `rclone rcd` |

### Supported usage model

Информация из проекта подтверждает, что панель предназначена для работы с режимом удаленного управления Rclone. Точные особенности упаковки под разные ОС не полностью документированы, поэтому в этом руководстве описаны проверенные методы развертывания из черновика репозитория.

## Installation methods

Вы можете развернуть Yet Another Rclone Dashboard несколькими способами в зависимости от того, как хотите к нему обращаться. Самый простой — позволить Rclone самому отдавать файлы панели.

### Method 1: Serve the dashboard with `--rc-files`

Этот способ использует распакованные файлы панели и указывает `rclone rcd` отдавать их напрямую.

#### Download the release files

Скачайте последний архив релиза с GitHub страницы проекта:

- [Релизы Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

На момент ссылки последний релиз:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Распакуйте архив в папку на сервере или локальной машине.

:::note Замените пути-заполнители
В следующих командах замените `[your_dashboard_path]` на путь к папке с распакованными файлами панели.
:::

#### Linux пример

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows пример

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Пример для удаленного сервера с аутентификацией

Для headless-сервера используйте аутентификацию и привязывайтесь к внешнему адресу только при необходимости.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Method 2: Use Rclone's web GUI fetcher

В черновике установки также упоминается встроенный загрузчик веб-GUI Rclone. Он может автоматически скачать и отдать панель без ручной распаковки.

#### Linux пример

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows пример

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Пример для удаленного сервера

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Используйте загрузчик для удобных обновлений
Если хотите упростить процесс скачивания файлов панели, метод с загрузчиком удобнее, чем ручное скачивание архивов.
:::

### Method 3: Serve the static files with a web server

Поскольку Yet Another Rclone Dashboard — это статическое веб-приложение, вы можете отдельно отдавать фронтенд через стандартный веб-сервер, например, [Nginx](https://nginx.org/) или [Caddy](https://caddyserver.com/).

В такой схеме Rclone продолжает работать как бекенд через `rclone rcd`, а веб-сервер отдает фронтенд-файлы.

#### Пример Nginx

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

#### Пример Caddy

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Отдельный фронтенд и бекенд
Если используете отдельный веб-сервер, убедитесь, что фронтенд может достучаться до RC-эндпоинта Rclone. В этом случае параметр `--rc-allow-origin` особенно важен.
:::

## Important Rclone options

Ниже перечислены самые важные опции для настройки Yet Another Rclone Dashboard.

| Опция | Назначение |
| --- | --- |
| `--rc-files` | Отдавать статические файлы панели из локальной папки |
| `--rc-web-gui` | Включить механизм веб-GUI Rclone |
| `--rc-web-fetch-url` | URL источника релиза для загрузки панели |
| `--rc-serve` | Отдавать RC-интерфейс по HTTP |
| `--rc-addr` | IP-адрес и порт для прослушивания |
| `--rc-no-auth` | Отключить аутентификацию |
| `--rc-user` | Имя пользователя для RC |
| `--rc-pass` | Пароль для RC |
| `--rc-allow-origin` | Разрешить доступ из указанного источника в браузере |
| `--rc-web-gui-no-open-browser` | Не открывать браузер автоматически |
| `--rc-user-from-header` | Принимать пользователя из заголовка доверенного обратного прокси |

### Выбор правильного `--rc-allow-origin`

Значение `--rc-allow-origin` должно точно совпадать с URL, который вы используете в браузере.

| Способ доступа | Пример значения |
| --- | --- |
| Локальный доступ | `http://127.0.0.1:5572` |
| Прямой доступ по IP | `http://[your_server_ip]:5572` |
| Обратный прокси с HTTPS | `https://[your_domain]` |

:::caution Несовпадение Origin ломает панель
Если `--rc-allow-origin` не совпадает с URL в браузере, панель может не подключиться к Rclone из-за ограничений безопасности браузера.
:::

## Advanced reverse proxy setup

Если хотите разместить панель за шлюзом аутентификации, в черновике есть пример с обратным прокси и `--rc-user-from-header`.

### Пример Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
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

:::danger Доверяйте заголовкам только от вашего прокси
Используйте `--rc-user-from-header` только если Rclone привязан к доверенному локальному интерфейсу, например `127.0.0.1`, и доступен только через обратный прокси. Иначе клиент может подделать заголовки.
:::

## First start and verification

После выбора способа развертывания проверьте, что панель работает корректно.

### Запуск сервиса

Запустите `rclone rcd` с выбранной командой и держите процесс активным.

### Открытие панели

Откройте соответствующий URL в браузере:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Подтверждение успешного доступа

Если всё настроено правильно, вы увидите интерфейс Yet Another Rclone Dashboard и сможете подключиться к бекенду Rclone.

Далее можно использовать панель для просмотра удаленных хранилищ, файлов и управления передачами в зависимости от вашей конфигурации Rclone.

## Troubleshooting

Если панель не загружается или не подключается, проверьте следующие моменты.

### Частые проблемы

| Проблема | Возможная причина | Рекомендуемое действие |
| --- | --- | --- |
| Браузер не открывает страницу | Rclone не запущен | Запустите `rclone rcd` и проверьте вывод в терминале |
| Панель загружается, но не подключается | Неправильный `--rc-allow-origin` | Установите точное значение URL браузера |
| Не удается подключиться удаленно | Порт `5572` заблокирован | Откройте порт в фаерволе или используйте обратный прокси |
| Ошибка аутентификации | Неверные `--rc-user` или `--rc-pass` | Проверьте учетные данные |
| Ошибка настройки обратного прокси | Несовпадение заголовков или origin | Проверьте заголовки прокси и `--rc-allow-origin` |

### Просмотр логов

Всегда сначала смотрите вывод консоли Rclone. В исходниках нет отдельного пути к логам для Yet Another Rclone Dashboard, поэтому самый надежный способ — проверить активный вывод процесса Rclone.

:::tip Используйте HTTPS для удаленного доступа
Если хотите открывать панель через интернет, лучше разместить её за обратным прокси с TLS, а не открывать HTTP напрямую.
:::

## Additional notes

В черновике упоминаются опциональные сценарии с Docker и сборкой из исходников, но в доступных материалах нет проверенных инструкций по Docker. Поэтому в этом руководстве не приводится команда Docker, чтобы не документировать непроверенное поведение.

Также точное имя внутренней папки сборки может отличаться в зависимости от структуры архива, поэтому перед установкой `[your_dashboard_path]` проверьте содержимое распакованной папки.

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard with Rclone on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂