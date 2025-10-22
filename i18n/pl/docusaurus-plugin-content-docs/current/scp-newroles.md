---
id: scp-newroles
title: "SCP Secret Laboratory: Dodawanie nowych ról na serwerze"
description: "Dowiedz się, jak tworzyć i dostosowywać role na serwerze z określonymi uprawnieniami, aby skutecznie zarządzać zdalną administracją → Sprawdź teraz"
sidebar_label: Dodaj nowe role
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Sprawdź konfigurację
Nowe role wpisujemy w pliku "config_remoteadmin.txt".  
Ten plik konfiguracyjny znajdziesz, klikając w panelu swojego serwera na "Konfiguracje".

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

Następnie możesz wyszukać powyższą konfigurację i kliknąć po prawej stronie ikonę „oka”, aby ją otworzyć.

## Kopiowanie istniejących ról
Gdy masz otwartą konfigurację, możesz w niej wyszukać takie wpisy:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

To przykładowe role, które już zostały dodane.  
Wstawimy nowy wpis poniżej.  
W tym celu kopiujemy blok z jednej z powyższych ról i wklejamy go pod ostatnią rolą.  
W naszym przykładzie skopiowaliśmy rolę „Moderator” i wkleiliśmy ją poniżej:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## Dodaj własną rolę
Teraz możemy edytować właśnie wstawiony blok skopiowany z istniejącej roli i wpisać tam własne, wymarzone wartości.  
W naszym przykładzie użyliśmy nazwy „ZAP”:

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

Gdy to zrobimy, musimy jeszcze dodać rolę do listy dostępnych ról.  
To znajduje się trochę niżej w tej samej konfiguracji.

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

Wpisujemy więc naszą rolę pod rolą „moderator”.  
:::info
UWAGA: Zwróć uwagę na spacje przed i po znaku „-”!
:::

## Uprawnienia
Na samym dole pliku konfiguracyjnego "config_remoteadmin.txt" możemy dostosować uprawnienia dla poszczególnych ról.  
Jeśli chcesz przypisać uprawnienie do swojej roli, wpisz nazwę roli w nawiasach.  
Tak jak pokazano na tym przykładzie:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />