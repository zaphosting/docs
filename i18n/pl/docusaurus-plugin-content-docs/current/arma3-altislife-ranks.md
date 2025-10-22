---
id: arma3-altislife-ranks
title: "Arma 3: Dodawanie rang na serwerze Altis Life"
description: "Dowiedz się, jak przypisywać i zarządzać rangami graczy takimi jak Policjant, Medyk czy Admin w Arma 3, aby wzbogacić rozgrywkę i role na serwerze → Sprawdź teraz"
sidebar_label: Rangi Altis Life
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W Arma 3 istnieją różne rangi, które można przypisać graczowi. Należą do nich Policjant, Medyk oraz różne rangi Administratora.  
W zależności od serwera mogą pojawić się inne rangi, np. jeśli dodana zostanie nowa frakcja lub profesja.  
Poniżej dowiesz się, jak przypisać rangi dla Policjantów, Medyków i Administratorów w grze, korzystając zawsze z bazy danych w tabeli **players**.

:::info
WAŻNE: Aby znaleźć nazwę gracza w bazie danych, musisz połączyć się z serwerem przynajmniej raz!
:::

<InlineVoucher />

## Otwieranie bazy danych

Najpierw przejdź do swojej bazy danych, do której dostaniesz się przez menu po lewej stronie pod **Narzędzia** > **Bazy danych**:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

Logowanie do bazy danych odbywa się przez ten niebieski przycisk, po lewej stronie znajdziesz też dane do logowania (nazwę użytkownika i hasło) do swojej bazy:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Po kliknięciu tego przycisku znajdziesz się w phpMyAdmin, czyli panelu administracyjnym Twojej bazy danych.  
Po lewej stronie wybierz nazwę swojej bazy danych:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Następnie wybierz tabelę **players** klikając na nią lewym przyciskiem, tam możesz przypisać rangi:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Wyszukaj tam nazwę gracza, któremu chcesz przypisać rangę i kliknij **Edytuj**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Przypisywanie rang dla Policjantów i Medyków

Pola dla poziomu Policjanta oraz Medyka znajdziesz na samej górze listy:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Możesz teraz łatwo wybrać poziom rangi z rozwijanego menu, dostępne są poziomy od 1 do 7 dla Policjantów oraz od 1 do 5 dla Medyków.  
Im wyższy poziom, tym więcej uprawnień ma Policjant lub Medyk w grze, co wpływa m.in. na dostępne bronie i pojazdy.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Przypisywanie rang dla administratorów (poziom admina)

Poziom administratora ustawiasz tak samo jak powyżej, tylko pole znajduje się niżej na liście:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Możesz wybrać spośród 5 różnych poziomów z rozwijanego menu. Im wyższy poziom, tym więcej praw ma administrator w grze.

Aby zapisać zmiany, kliknij po prostu przycisk **GO** w prawym dolnym rogu:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

Rangi zostały teraz zapisane i aktywują się dla gracza po ponownym połączeniu się z serwerem, restart serwera nie jest potrzebny.

<InlineVoucher />