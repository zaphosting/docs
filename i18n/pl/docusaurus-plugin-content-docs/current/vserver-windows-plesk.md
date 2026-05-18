---
id: vserver-windows-plesk
title: "Konfiguracja Plesk na serwerze Windows – Zarządzaj stronami z potężnym panelem administracyjnym"
description: "Dowiedz się, jak efektywnie zarządzać stronami i serwerami dzięki wszechstronnej platformie Plesk – idealnej dla początkujących i ekspertów → Sprawdź teraz"
sidebar_label: Instalacja Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plesk to kompleksowa platforma do hostingu i zarządzania serwerami, która pozwala użytkownikom zarządzać stronami internetowymi, serwerami, kontami e-mail i wieloma innymi funkcjami przez intuicyjny interfejs. To wszechstronne rozwiązanie, które sprawdzi się zarówno dla początkujących, jak i doświadczonych webdeveloperów oraz administratorów systemów.  
<InlineVoucher />


## Nawiąż połączenie z serwerem

Aby zainstalować Plesk na serwerze, najpierw musisz się z nim połączyć. Szczegółowo wyjaśniamy to w naszym osobnym poradniku: [Pierwszy dostęp (RDP)](vserver-windows-userdp.md)

## Instalator Plesk

Następnie potrzebujesz Instalatora Plesk, który jest niezbędny do instalacji Plesk. Możesz go pobrać klikając na [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Instalator ten zapisz w folderze – w naszym przykładzie używamy folderu „Plesk” utworzonego na pulpicie. Ścieżka do tego pliku będzie ważna w kolejnych krokach.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Otwórz Wiersz Poleceń

Teraz musisz otworzyć konsolę CMD, aby przeprowadzić instalację.  
Zrobisz to przez kombinację klawiszy [Windows] + [R] lub wpisując „command” w wyszukiwarce Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Instalacja Plesk

W konsoli CMD przejdź do katalogu, do którego zapisałeś instalator Plesk. W naszym przykładzie to folder „Plesk” na „Pulpicie”.

Do zmiany katalogu w CMD użyj polecenia "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Będąc w odpowiednim katalogu, ostatnim krokiem jest uruchomienie instalatora. Wpisz polecenie, które uruchomi plik plesk-installer.exe i automatycznie zainstaluje najnowszą wersję Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Polecenie: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Proces instalacji może potrwać od 30 do 60 minut. Po jego zakończeniu Plesk będzie gotowy do użycia.
:::


## Podsumowanie

Gratulacje, właśnie pomyślnie zainstalowałeś i skonfigurowałeś Plesk na swoim VPS/serwerze dedykowanym! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />