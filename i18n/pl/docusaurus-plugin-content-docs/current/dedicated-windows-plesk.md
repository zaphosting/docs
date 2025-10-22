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

Plesk to kompleksowa platforma do zarządzania hostingiem i serwerami, która pozwala użytkownikom na łatwe zarządzanie stronami internetowymi, serwerami, kontami e-mail i wieloma innymi funkcjami przez przyjazny interfejs. To wszechstronne rozwiązanie, które sprawdzi się zarówno dla początkujących, jak i doświadczonych webdeveloperów oraz administratorów systemów.

<InlineVoucher />

## Nawiąż połączenie z serwerem

Aby zainstalować Plesk na serwerze, najpierw musisz się z nim połączyć. Szczegółowy opis tego procesu znajdziesz w naszym osobnym poradniku: [Pierwszy dostęp (RDP)](vserver-windows-userdp.md)

## Instalator Plesk

Następnie potrzebujesz Instalatora Plesk, który jest niezbędny do instalacji Plesk. Możesz go pobrać klikając na [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Instalator ten zapisz w wybranym folderze, w naszym przykładzie używamy folderu "Plesk" utworzonego na pulpicie. Ścieżka do tego pliku będzie ważna w kolejnych krokach.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Otwórz Wiersz Poleceń

Teraz musisz otworzyć konsolę CMD, aby przeprowadzić instalację.  
Zrobisz to przez kombinację klawiszy [Windows] + [R] lub wpisując "command" w wyszukiwarce Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Instalacja Plesk

W konsoli CMD przejdź do katalogu, w którym zapisałeś instalator Plesk. W naszym przykładzie to folder "Plesk" na "Pulpicie".

Do zmiany katalogu w CMD użyj polecenia "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Będąc w odpowiednim katalogu, ostatnim krokiem jest uruchomienie instalatora. Wpisz polecenie, które uruchomi plik plesk-installer.exe i automatycznie zainstaluje najnowszą wersję Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Polecenie: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Proces instalacji może potrwać od 30 do 60 minut. Po jego zakończeniu Plesk będzie gotowy do użycia.
:::

## Podsumowanie

Gratulacje, właśnie zainstalowałeś Plesk! Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest do Twojej dyspozycji codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />