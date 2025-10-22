---
id: dedicated-setup
title: "Serwer dedykowany: Pierwsza konfiguracja"
description: "Dowiedz się, jak łatwo skonfigurować swój ZAP Serwer dedykowany i uzyskać dostęp do różnych systemów operacyjnych → Sprawdź teraz"
sidebar_label: Pierwsza konfiguracja
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Jesteś nowy w temacie i boisz się, że nie dasz rady skonfigurować takiego serwisu lub napotkasz problemy? Spokojnie! Ten poradnik i nasz asystent konfiguracji przeprowadzą Cię przez wszystkie kroki pierwszej konfiguracji Twojego ZAP Serwera dedykowanego.

<InlineVoucher />

## Przygotowanie

### Aktywacja iLO
Do pierwszej konfiguracji musisz najpierw aktywować interfejs administracyjny iLO. Ten proces może chwilę potrwać. Więcej informacji oraz dalsze wykorzystanie interfejsu iLO znajdziesz w naszym [poradniku iLO](dedicated-ilo.md).

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Gdy iLO zostanie aktywowane, status iLO powinien pokazywać się jako **Aktywny**. Sesja iLO jest domyślnie aktywna przez trzy godziny i po tym czasie trzeba ją ponownie aktywować, jeśli chcesz dalej z niej korzystać. Teraz możesz przejść do wyboru ISO.

### Wybór ISO

Kolejnym krokiem jest wybór ISO, które zostanie zamontowane do pierwszej konfiguracji. Kliknij na rozwijane menu, wybierz plik ISO i kliknij przycisk **Wstaw**.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

Domyślnie oferujemy szeroki wybór plików ISO dla najpopularniejszych systemów operacyjnych, takich jak Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux i Proxmox. W poniższej tabeli znajdziesz przegląd dostępnych systemów i ich wersji.

| ISO (System operacyjny) | Wersje                                                |
| ----------------------- | ----------------------------------------------------- |
| Debian                  | 12, 11, 10.9, 9.13                                    |
| Ubuntu                  | 22.04.3, 22.04, 22.02, 18.04                          |
| FreeBSD                 | 13.0, 12.2, 11.4                                      |
| Windows                 | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS                  | 7.9, 8.3                                              |
| ArchLinux               | 2023                                                  |
| Proxmox                 | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1              |

Możesz też dodać i zamontować własne, indywidualne ISO. Więcej informacji o tym, jak zamontować własny plik ISO, znajdziesz w **[poradniku Własne ISO](dedicated-iso.md)**.

## Instalacja

### Montowanie i bootowanie ISO

Po wybraniu i wstawieniu pliku ISO, system musi się raz zrestartować, aby zaakceptować zmianę i uruchomić proces bootowania z ISO. Wystarczy kliknąć przycisk **Restartuj**. Restart może chwilę potrwać.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Instalacja systemu operacyjnego przez iLO

Teraz masz wszystko, by zainstalować wybrany system operacyjny. System zamontował ISO i rozpoczął konfigurację. Otwórz **interfejs administracyjny iLO** swojego serwera i kliknij bezpośrednio na "Integrated Remote Console: **HTML 5**", aby uzyskać dostęp do ekranu serwera. Więcej o zarządzaniu konsolą w iLO znajdziesz w naszym [poradniku iLO](dedicated-ilo.md).

Instalacja systemu odbywa się teraz w konsoli HTML. Mamy też poradniki dla najpopularniejszych systemów operacyjnych. Po więcej informacji o kolejnych krokach zajrzyj do odpowiednich poradników:

- [Instalacja Windows](dedicated-windows.md)
- [Instalacja Debian](dedicated-linux-debian.md)
- [Instalacja Ubuntu](dedicated-linux-ubuntu.md)
- [Instalacja FreeBSD](dedicated-freebsd.md)
- [Instalacja CentOS](dedicated-centos.md)
- [Instalacja Proxmox](dedicated-proxmox.md)

<InlineVoucher />