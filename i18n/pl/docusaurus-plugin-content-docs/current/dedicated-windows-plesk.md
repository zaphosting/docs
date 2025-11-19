---
id: dedicated-windows-plesk
title: "Serwer dedykowany: Instalacja Plesk"
description: "Dowiedz się, jak efektywnie zarządzać stronami i serwerami z Plesk – dla początkujących i ekspertów → Sprawdź teraz"
sidebar_label: Instalacja Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plesk to kompleksowa platforma do zarządzania hostingiem i serwerami, która pozwala użytkownikom na zarządzanie stronami internetowymi, serwerami, kontami e-mail i wieloma innymi funkcjami przez przyjazny interfejs. To wszechstronne rozwiązanie, które sprawdzi się zarówno dla początkujących, jak i doświadczonych web developerów oraz administratorów systemów.

## Nawiąż połączenie z serwerem

Aby zainstalować Plesk na serwerze, najpierw musisz się z nim połączyć. Jak to zrobić, wyjaśniamy szczegółowo w naszym osobnym poradniku: [Pierwszy dostęp (RDP)](vserver-windows-userdp.md)

## Instalator Plesk

Następnie potrzebujesz Instalatora Plesk, który jest niezbędny do instalacji Plesk. Możesz go pobrać klikając na [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Ten instalator zapisz w folderze – w naszym przykładzie używamy folderu "Plesk" utworzonego na Pulpicie. Ścieżka do tego pliku będzie ważna w kolejnych krokach.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Otwórz Wiersz Poleceń

Teraz musisz otworzyć konsolę CMD, aby przeprowadzić instalację.  
Zrobisz to przez kombinację klawiszy [Windows] + [R] lub wpisując "command" w wyszukiwarce Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Instalacja Plesk

W konsoli CMD przejdź do katalogu, do którego zapisałeś instalator Plesk. W naszym przykładzie to folder "Plesk" na "Pulpicie".

Do zmiany katalogu w CMD użyj polecenia "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Będąc w odpowiednim katalogu, ostatnim krokiem jest uruchomienie instalatora. Wpisz polecenie, które uruchomi plik plesk-installer.exe i automatycznie zainstaluje najnowszą wersję Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Polecenie: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Proces instalacji może potrwać od 30 do 60 minut. Po jego zakończeniu Plesk będzie gotowy do użycia.
:::

## Podsumowanie

Gratulacje, właśnie zainstalowałeś Plesk! Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂