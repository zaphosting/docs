---
id: vserver-linux-ftp
title: "VPS: Usługa FTP niedostępna (Interfejs GS/TS3)"
description: "Dowiedz się, jak rozwiązać problemy i przywrócić dostęp FTP na swoim VPS, gdy serwery gier lub Teamspeak są niedostępne → Sprawdź teraz"
sidebar_label: Usługa FTP niedostępna
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery gier i Teamspeak 3 tworzone przez interfejs GS/TS3 to w pełni zarządzane usługi. Dostęp FTP jest udostępniany przez interfejs oraz infrastrukturę zaplecza. Jeśli dostęp FTP jest niemożliwy, przyczyna zazwyczaj leży po stronie stanu usługi, konfiguracji wewnętrznej lub problemów infrastrukturalnych, a nie w ustawieniach lokalnego klienta FTP.



:::warning Usługa FTP dostarczana przez interfejs GS/TS3
Ten poradnik dotyczy wyłącznie usługi FTP, która jest automatycznie instalowana i zarządzana przy użyciu funkcji interfejsu GS/TS3. Jeśli interfejs GS/TS3 nie jest zainstalowany, na systemie domyślnie nie jest uruchamiany żaden serwer FTP. W takim przypadku dostęp FTP nie jest dostępny, chyba że usługa FTP zostanie zainstalowana ręcznie.
:::

<InlineVoucher />



## Sprawdź status ProFTPD przez SSH

Połącz się z serwerem przez SSH lub konsolę i sprawdź aktualny status usługi FTP za pomocą poniższego polecenia:

```
service proftpd status
```

Wynik pokaże, czy usługa ProFTPD jest aktualnie uruchomiona. Jeśli usługa jest aktywna lub działa, sama usługa FTP jest dostępna i powinna akceptować połączenia przychodzące. W takim przypadku problem zwykle nie leży po stronie demona FTP, lecz może dotyczyć danych dostępowych, reguł zapory sieciowej lub konfiguracji klienta.

Jeśli status jest nieaktywny, zatrzymany lub wyłączony, usługa FTP nie działa. W takim stanie nie można nawiązać żadnych połączeń FTP.

## Restart usługi FTP

Jeśli usługa ProFTPD nie działa, można ją uruchomić ręcznie. W tym celu wykonaj polecenie:

```
service proftpd restart
```

Po uruchomieniu lub restarcie usługi zawsze sprawdź ponownie status, aby potwierdzić, że ProFTPD działa poprawnie. Jeśli po restarcie usługa jest aktywna, dostęp FTP powinien być ponownie dostępny.



## Najczęstsze przyczyny problemów z FTP

Problemy z dostępem FTP często wynikają z nieuruchomionej lub zatrzymanej usługi FTP podczas restartu systemu lub aktualizacji. Błędy konfiguracji mogą również uniemożliwiać poprawne uruchomienie ProFTPD. W niektórych przypadkach inna usługa może już korzystać z portu 21, co blokuje przypisanie portu przez usługę FTP. Tymczasowe problemy systemowe lub na poziomie usługi mogą także powodować nieoczekiwane zatrzymanie usługi FTP.

Jeśli ProFTPD nie może zostać uruchomiony lub zaraz po starcie się zatrzymuje, konieczne jest dalsze dochodzenie. W takich sytuacjach zalecane jest przejrzenie logów systemowych lub kontakt z supportem.



## Podsumowanie



Dostęp FTP dla serwerów gier GS/TS3 jest zarządzany wyłącznie przez interfejs GS/TS3. Jeśli standardowe kontrole nie rozwiążą problemu, konieczne jest zgłoszenie do supportu. Podanie pełnych i dokładnych informacji przyspiesza rozwiązanie problemu. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />