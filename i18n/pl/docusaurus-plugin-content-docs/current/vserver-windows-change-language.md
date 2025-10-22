---
id: vserver-windows-change-language
title: "VPS: Zarządzanie językami na Windows Server"
description: "Dowiedz się, jak dostosować ustawienia językowe swojego serwera Windows, aby uzyskać lokalne doświadczenie i poprawić wygodę użytkowania → Sprawdź teraz"
sidebar_label: Dodaj i zarządzaj językami
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System Windows jest dostępny w wielu wersjach językowych, co pozwala Ci łatwo korzystać z serwera w swoim ojczystym języku. W tym poradniku pokażemy, jak zmienić język na Twoim serwerze Windows.

:::info
Podczas początkowej konfiguracji serwera możesz wybrać wersję serwera w języku angielskim lub niemieckim, oznaczone odpowiednio tagami **(EN)** i **(DE)** podczas wyboru wersji systemu operacyjnego.
:::

<InlineVoucher />

## Dodawanie pakietów językowych

Pakiety językowe to przydatna funkcja wbudowana w Windows, która pozwala łatwo zarządzać lokalizowanymi pakietami językowymi na Twoim serwerze.

Zacznij od połączenia się z serwerem Windows przez RDP. Jeśli potrzebujesz pomocy, zajrzyj do naszego [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

Po połączeniu wyszukaj **Język** w pasku wyszukiwania Windows lub naciśnij klawisz Windows/ikonę i użyj wyszukiwarki w menu start.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

Na tej stronie znajdź sekcję językową i kliknij przycisk **Dodaj język**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

W menu wyszukaj język, który chcesz zainstalować i wybierz go, klikając **Dalej**. Na kolejnej stronie upewnij się, że wszystkie opcje są zaznaczone, w tym **Ustaw jako język wyświetlania Windows**, jeśli chcesz od razu go aktywować.

:::important
Aby zmienić język całego systemu Windows, upewnij się, że wybrany język obsługuje funkcję **Język wyświetlania**.
:::

:::tip
Jeśli nie widzisz żadnych języków z polem **Język wyświetlania**, zainstaluj wszystkie oczekujące aktualizacje Windows przez **Aktualizacje i zabezpieczenia** w Ustawieniach — rozwiązuje to ten [błąd](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows zacznie pobierać wybrany pakiet językowy. Prosimy o cierpliwość, może to chwilę potrwać.

Po zakończeniu pobierania, jeśli nie zaznaczyłeś wcześniej opcji **Ustaw jako język wyświetlania Windows**, wróć na stronę języków i wybierz ją z menu rozwijanego.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Na koniec zrestartuj serwer — nowy język zostanie aktywowany. Udało Ci się zarządzać pakietami językowymi na Twoim serwerze Windows.

## Ponowna instalacja systemu serwera

Jeśli masz problemy ze zmianą pakietów językowych lub Twój serwer jest nowy, możesz po prostu ponownie zainstalować Windows w wersji angielskiej lub niemieckiej, wybierając odpowiednią wersję systemu.

:::warning
Ponowna instalacja systemu to proces destrukcyjny i **usunie** wszystkie dane z serwera. Upewnij się, że wykonałeś kopię zapasową ważnych danych przed kontynuacją.
:::

Zrobisz to, logując się do panelu webowego serwera i przechodząc do sekcji **Ustawienia**.

Na tej stronie możesz wybrać między **Windows (EN)** a **Windows (DE)** dla odpowiedniego języka i rozpocząć reinstalację serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Po rozpoczęciu reinstalacji bądź cierpliwy — cały proces może potrwać do 30 minut.

<InlineVoucher />