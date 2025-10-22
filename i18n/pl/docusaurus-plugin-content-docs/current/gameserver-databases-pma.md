---
id: gameserver-databases-pma
title: 'Serwer gier: dostęp do PHPMyAdmin'
description: "Dowiedz się, jak efektywnie zarządzać bazami danych MySQL za pomocą phpMyAdmin na serwerach gier ZAP-Hosting, aby mieć pełną kontrolę nad bazą → Sprawdź teraz"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Dzięki phpMyAdmin bazy danych MySQL można zarządzać szybko i łatwo przez interfejs webowy. ZAP-Hosting oferuje bazy danych MySQL w pakiecie z serwerami gier. Można nimi zarządzać zarówno przez phpMyAdmin, jak i zewnętrzne programy do administrowania MySQL, takie jak Navicat czy HeidiSQL. Mamy też poradnik na ten temat, który znajdziesz pod [Zewnętrzny dostęp do bazy danych](gameserver-database-external-access.md).

<InlineVoucher />

## Logowanie do phpMyAdmin

Najpierw przechodzimy do listy baz danych utworzonych dla serwera gier. W tym celu otwieramy w menu po lewej stronie serwera zakładkę „Bazy danych” w sekcji „Narzędzia”.

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

Na tej stronie wyświetlone są wszystkie bazy danych dla tego serwera. Logowanie do phpMyAdmin jest bardzo proste, bo odbywa się automatycznie przez nasz system. Wystarczy kliknąć niebieski przycisk „Zarządzaj”.

:::info
Jeśli logowanie nie zadziała automatycznie, trzeba zalogować się ręcznie, używając odpowiednich danych użytkownika. Informacje te znajdziesz w czerwonym polu na przykładzie.
:::


## Narzędzia tabel

Na początku wyświetla się tylko strona startowa phpMyAdmin. Aby zobaczyć i edytować tabele w danej bazie, trzeba ją otworzyć:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Teraz wyświetlone są wszystkie tabele bazy oraz narzędzia, które pozwalają wykonać różne akcje, np. usunąć tabelę klikając czerwony przycisk „Usuń”.

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Aby zaoszczędzić czas, można wykonać akcje na kilku tabelach jednocześnie. W tym celu kliknij raz w pole wyboru po lewej stronie i powtarzaj, aż zaznaczysz wszystkie potrzebne tabele. Jeśli chcesz zaznaczyć wszystkie tabele w bazie, możesz użyć przycisku „Zaznacz wszystko”, który automatycznie wybierze każdą tabelę. Następnie z rozwijanego menu wybierz akcję i zatwierdź klikając „OK”.

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Modyfikacja zawartości tabeli

Wartości w tabeli można szybko i łatwo edytować, klikając dwukrotnie w wybrane pole. Trzeba jednak upewnić się, że tabela jest skonfigurowana tak, by edycja była możliwa. Poznasz to po trzech przyciskach akcji, które są widoczne w tym przypadku.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Wykonywanie poleceń SQL

W phpMyAdmin można też wykonywać zwykłe polecenia SQL. Najpierw wybierz bazę danych, a potem w górnym menu kliknij „SQL”.

Po wejściu w pole do wpisywania poleceń możesz wpisać dowolne komendy SQL, które zostaną wykonane po kliknięciu „OK”.

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />