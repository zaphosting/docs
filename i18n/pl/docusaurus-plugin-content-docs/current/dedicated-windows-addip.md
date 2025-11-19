---
id: dedicated-windows-addip
title: "Serwer dedykowany: Konfiguracja dodatkowych adresów IP na Windows"
description: "Dowiedz się, jak zoptymalizować wydajność i bezpieczeństwo serwera, skutecznie korzystając z wielu adresów IP → Sprawdź teraz"
sidebar_label: Dodatkowe adresy IP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Posiadanie wielu adresów IP na serwerze może być korzystne z różnych powodów, zwłaszcza w złożonych środowiskach sieciowych lub aby spełnić konkretne wymagania dotyczące wydajności, bezpieczeństwa i zarządzania siecią. Przypisanie różnych adresów IP do różnych usług lub aplikacji na tym samym serwerze pozwala na lepszą izolację.




## Przygotowanie

Korzystanie z wielu adresów IP zakłada, że Twój pakiet serwera je zawiera. Jeśli nie zamówiłeś dodatkowych adresów IP domyślnie, musisz najpierw dodać je poprzez upgrade. Następnie połącz się z serwerem przez [RDP](dedicated-windows-userdp).




## Konfiguracja



### Zbieranie informacji

Najpierw potrzebujesz informacji o dostępnych adresach IP. Dodatkowe adresy IP możesz zobaczyć w panelu zarządzania serwerem w sekcji adresy IP.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Dostęp do konfiguracji sieci

Istnieje kilka sposobów, aby dostać się do konfiguracji sieci na Windows Server. Na przykład możesz otworzyć konfigurację sieci przez Panel sterowania w sekcji **Centrum sieci i udostępniania**.

Otwórz **Panel sterowania**, kliknij **Sieć i Internet**, a następnie **Centrum sieci i udostępniania**. Następnie przejdź do „Zmień ustawienia karty sieciowej” i kliknij dwukrotnie na kartę sieciową (Ethernet 2). Otworzy się okno karty sieciowej, gdzie musisz wejść w właściwości.

Teraz w **Właściwościach** karty sieciowej wybierz opcję **Protokół internetowy w wersji 4 (TCP/IPv4)**. Tam zobaczysz informacje o głównym adresie IP, masce podsieci, bramie domyślnej oraz serwerach DNS. Kliknij przycisk **Zaawansowane**, aby dodać dodatkowe adresy IP.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Dodawanie adresu IP

Teraz dodatkowy adres IP dodajesz przez **Zaawansowane ustawienia TCP/IP**. Kliknij przycisk **Dodaj** pod adresami IP i wypełnij pola **Adres IP** oraz **Maska podsieci**. W polu adresu IP wpisz dodatkowy adres IP. Używana maska podsieci to 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Podsumowanie

Adres IP został pomyślnie skonfigurowany i dodany. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂