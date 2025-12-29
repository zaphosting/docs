---
id: dedicated-linux-troubleshooting-restore-access
title: "Serwer dedykowany: Przywracanie dostępu"
description: "Dowiedz się, jak odzyskać dostęp do swojego Linux serwera dedykowanego po zablokowaniu hasła i zminimalizować przestoje → Sprawdź teraz"
sidebar_label: Przywracanie dostępu
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

To może zdarzyć się szybko. Próbujesz zalogować się na swój Linux serwer, ale hasło nie jest już akceptowane lub zostało zapomniane. W efekcie dostęp do systemu oraz krytycznych danych lub usług jest niemożliwy. Taka sytuacja potrafi być frustrująca, zwłaszcza gdy serwer jest potrzebny do bieżącej pracy. W większości dystrybucji Linux dostęp można przywrócić korzystając z trybu recovery bez konieczności reinstalacji systemu operacyjnego. Postępując według poniższych kroków, odzyskasz dostęp do serwera i będziesz mógł kontynuować pracę z minimalnymi przerwami.



## Przywracanie dostępu

Aby zresetować hasło korzystając z trybu recovery, system musi zostać uruchomiony z dostępem do menu startowego GRUB. Podczas uruchamiania systemu otwórz menu GRUB i wybierz **Advanced options for Ubuntu**.

![img](https://screensaver01.zap-hosting.com/index.php/s/j6DKWdM95fFWWZi/preview)

Na kolejnym ekranie wybierz wpis uruchamiający system w **trybie recovery**. Spowoduje to załadowanie środowiska recovery zamiast normalnego systemu operacyjnego.

Gdy pojawi się menu recovery, wybierz **root – Drop to root shell prompt** i potwierdź wybór. Naciśnij Enter ponownie, aby uzyskać dostęp do powłoki root.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFjTj3FxKQwHemD/preview)

W trybie recovery system plików root jest domyślnie zamontowany jako tylko do odczytu. Aby umożliwić zmianę hasła, trzeba go ponownie zamontować z uprawnieniami do zapisu. Wykonaj następujące polecenie:

```bash
mount -o remount,rw /
```

Jeśli nie znasz nazwy użytkownika, możesz wyświetlić wszystkie dostępne konta, sprawdzając katalogi domowe:

```
ls /home
```

Aby zresetować hasło, użyj polecenia `passwd` wraz z nazwą użytkownika:

```
passwd username
```

Zamień `username` na właściwą nazwę konta. Wprowadź nowe hasło i potwierdź je, gdy zostaniesz o to poproszony. Podczas wpisywania hasła nie będzie ono widoczne na ekranie. Po pomyślnej aktualizacji hasła, zrestartuj system poleceniem `reboot`.



## Podsumowanie

Po wykonaniu tych kroków powinieneś mieć ustawione nowe hasło dla wybranego użytkownika. Teraz możesz ponownie zalogować się przez zdalne połączenie. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂