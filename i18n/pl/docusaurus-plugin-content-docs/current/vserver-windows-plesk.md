---
id: vserver-windows-plesk
title: "VPS: Instalacja Plesk"
description: "Dowiedz się, jak efektywnie zarządzać stronami i serwerami dzięki wszechstronnej platformie Plesk, idealnej dla początkujących i ekspertów → Sprawdź teraz"
sidebar_label: Instalacja Plesk
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plesk to kompleksowa platforma do zarządzania hostingiem i serwerami, która pozwala użytkownikom na zarządzanie stronami internetowymi, serwerami, kontami e-mail i wieloma innymi funkcjami za pomocą przyjaznego interfejsu. To wszechstronne rozwiązanie, które sprawdzi się zarówno dla początkujących, jak i doświadczonych developerów oraz administratorów systemów.  
<InlineVoucher />


## Nawiąż połączenie z serwerem

Aby zainstalować Plesk na serwerze, najpierw musisz się z nim połączyć. Szczegółowy opis tego procesu znajdziesz w naszym osobnym poradniku: [Pierwszy dostęp (RDP)](vserver-windows-userdp.md)

## Instalator Plesk

Następnie potrzebujesz Instalatora Plesk, który jest niezbędny do instalacji Plesk. Możesz go pobrać klikając na [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Instalator ten zapiszemy w folderze, w naszym przykładzie używamy folderu "Plesk" utworzonego na pulpicie. Ścieżka do tego pliku będzie ważna w kolejnych krokach.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Otwórz Wiersz Poleceń

Teraz musisz otworzyć konsolę CMD, aby przeprowadzić instalację.  
Możesz to zrobić za pomocą skrótu klawiszowego [Windows] + [R] lub wpisując "command" w wyszukiwarce Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Instalacja Plesk

W konsoli CMD przejdź do katalogu, w którym znajduje się instalator Plesk. W naszym przykładzie to folder "Plesk" na "Pulpicie".

Do zmiany katalogu w CMD używamy polecenia "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Będąc w odpowiednim katalogu, ostatnim krokiem jest uruchomienie instalatora.  
Wpisz polecenie, które uruchomi plik plesk-installer.exe i automatycznie zainstaluje najnowszą wersję Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Polecenie: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Proces instalacji może potrwać od 30 do 60 minut, po czym Plesk będzie gotowy do użycia.
:::


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Plesk na swoim VPS! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />