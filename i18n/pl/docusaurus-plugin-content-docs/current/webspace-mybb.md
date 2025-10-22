---
id: webspace-mybb
title: "Hosting: Instalacja oprogramowania forum MyBB"
description: "Dowiedz się, jak skonfigurować i uruchomić własne forum MyBB, aby zbudować angażującą społeczność online → Sprawdź teraz"
sidebar_label: Instalacja MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

MyBB, wcześniej MyBulletinBoard, to darmowe i open source oprogramowanie forum stworzone przez MyBB Group. W tym poradniku wyjaśniamy, jak zainstalować to oprogramowanie forum na naszym hostingu. 

<InlineVoucher />

## Przygotowanie

Zanim przystąpisz do instalacji MyBB, musisz wykonać kilka przygotowań. Obejmuje to pobranie oprogramowania forum, utworzenie bazy danych oraz konfigurację serwera pocztowego (adres e-mail).

**Oprogramowanie**

Oprogramowanie forum możesz pobrać z oficjalnej strony MyBB. Link do pobrania znajdziesz tutaj: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

Pobrany plik jest spakowany i musisz go rozpakować na swoim komputerze. W środku znajdziesz folder o nazwie **Upload**. Jego zawartość jest potrzebna i musi zostać przesłana na hosting za pomocą **FTP lub Menedżera plików**. W panelu **Strony internetowe i domeny** w sekcji **Dostęp FTP** możesz utworzyć użytkownika FTP.

Po otwarciu menedżera plików w panelu Plesk przejdź do katalogu **httpdocs** i wgraj pliki oprogramowania forum.


![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)


**Baza danych**

Następnie musisz utworzyć bazę danych, która będzie przechowywać wszystkie informacje forum. W tym celu kliknij ponownie na **Strony internetowe i domeny**, a potem na **Bazy danych**. Kliknij na Dodaj bazę danych i utwórz nową bazę:  

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Kliknij **OK**, a baza danych zostanie utworzona.



**Serwer pocztowy (adres e-mail)**

Do rejestracji konta na forum potrzebny jest serwer pocztowy z adresem e-mail, aby wysyłać maile rejestracyjne do użytkowników. Instrukcje konfiguracji takiego adresu znajdziesz tutaj: [Wysyłanie maili](webspace-plesk-sendmail.md)



## Instalacja

Jeśli wszystkie kroki przygotowawcze zostały wykonane, możesz rozpocząć właściwą instalację MyBB. W tym celu otwórz stronę internetową w przeglądarce. Powinno to wyglądać tak: 

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)


Na tym etapie musisz skonfigurować 9 kategorii podczas instalacji. Konfiguracja sprawdzi, czy spełnione są wszystkie wymagania, ustawi bazę danych i oprogramowanie forum itd. Na początek zdecyduj, czy anonimowe statystyki mają być przesyłane do MyBB, czy nie. Następnie zaakceptuj warunki licencji.

Pojawi się podsumowanie wymagań systemowych, takich jak wersja PHP, pamięć itp. Hosting powinien być domyślnie skonfigurowany tak, aby spełniać te wymagania.


![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)


Jeśli jakieś wymagania nie są spełnione, skontaktuj się z supportem. W przeciwnym razie kliknij **Dalej** i kontynuuj instalację. Teraz musisz skonfigurować bazę danych, którą wcześniej utworzyłeś. Wprowadź dane bazy danych:

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)



Baza danych zostanie skonfigurowana. Może to chwilę potrwać. Następnie nastąpi instalacja domyślnych danych i motywów. Wystarczy kliknąć **Dalej**.


Kolejnym krokiem jest konfiguracja ogólna. Tutaj możesz ustawić nazwę strony, forum, URL i inne:


![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)


Na koniec musisz utworzyć konto administratora, zanim instalacja zostanie zakończona. 


![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)


Jeśli wszystko zostało poprawnie skonfigurowane, zobaczysz następujący komunikat i będziesz mógł wejść na swoje forum:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />