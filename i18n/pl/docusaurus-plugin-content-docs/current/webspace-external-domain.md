---
id: webspace-external-domain
title: "Hosting: Podłączenie zewnętrznej domeny"
description: "Dowiedz się, jak podłączyć swoją zewnętrzną domenę do hostingu ZAP-Hosting, aby Twoja strona i e-maile działały bez zarzutu → Sprawdź teraz"
sidebar_label: Podłącz zewnętrzną domenę
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Masz już domenę zarejestrowaną u innego dostawcy i chcesz podłączyć ją do swojego hostingu ZAP-Hosting? Żaden problem! Wystarczy, że zmienisz ustawienia DNS u swojego dostawcy domeny. W tym poradniku pokażemy Ci dokładnie, jakie rekordy DNS musisz utworzyć, aby Twoja domena poprawnie wskazywała na hosting.

:::info Przenieś swoją domenę
Przenieś domenę do ZAP-Hosting i zyskaj łatwiejsze zarządzanie. Podłącz domenę do hostingu kilkoma kliknięciami i korzystaj z wielu dodatkowych funkcji. Dowiedz się, jak przenieść domenę w naszym [poradniku Przenoszenie domeny](domain-transfer.md).
:::

<InlineVoucher />



## Podłącz domenę w Plesk

Zanim podłączysz zewnętrzną domenę do hostingu, musisz najpierw dodać ją w **Plesk**. Zrób to, dodając domenę w sekcji **Ustawienia hostingu**. Jeśli nie wiesz, jak to zrobić, szczegółowe instrukcje znajdziesz w naszym [poradniku Dodawanie domeny](https://zap-hosting.com/guides/docs/webspace-adddomain).

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## Konfiguracja ustawień DNS

Aby podłączyć zewnętrzną domenę do hostingu ZAP-Hosting, musisz najpierw zmienić ustawienia DNS u dostawcy, u którego masz zarejestrowaną domenę. Aby Twoja strona i e-maile działały poprawnie, domena musi wiedzieć, na jaki serwer kierować odwiedzających i ruch mailowy. Robi się to przez utworzenie odpowiednich rekordów DNS.

Do ustawienia rekordów A potrzebujesz adresu IP swojej instancji hostingu. Znajdziesz go bezpośrednio w panelu głównym swojego hostingu ZAP.

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

Mając adres IP, możesz dodać niezbędne rekordy DNS u swojego dostawcy domeny. Należą do nich rekordy A, które wskazują domenę na hosting, oraz rekordy MX i TXT, które odpowiadają za obsługę poczty i weryfikację domeny.

Jeśli chcesz dowiedzieć się więcej o tym, jak działają różne typy rekordów DNS i do czego służą, polecamy zajrzeć do naszego [poradnika Rekordy domeny](domain-records.md).

Poniżej znajdziesz tabelę ze wszystkimi wymaganymi rekordami DNS do Twojej konfiguracji:

| Nazwa                          | Typ  | Wartość                         | TTL  | Priorytet |
| ------------------------------ | ---- | ------------------------------- | ---- | --------- |
| *                              | A    | adres IP instancji hostingu     | 3600 | 0         |
| mail                           | A    | adres IP instancji hostingu     | 3600 | 0         |
| www                            | A    | adres IP instancji hostingu     | 3600 | 0         |
| domain.tld.                    | A    | adres IP instancji hostingu     | 3600 | 0         |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......   | 3600 | 10        |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.          | 3600 | 0         |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                | 3600 | 0         |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                | 3600 | 0         |

:::warning Zmiany DNS mogą potrwać

Zmiany w ustawieniach DNS mogą się rozpropagować nawet do 24 godzin na całym świecie. W tym czasie Twoja domena może nie wskazywać od razu na nowy hosting lub usługi e-mail, więc prosimy o cierpliwość.
:::




## Podsumowanie
Wykonując powyższe kroki, skonfigurujesz i podłączysz swoją domenę do hostingu. Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />