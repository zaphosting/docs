---
id: minecraft-whitelist
title: "Minecraft: Aktywacja i edycja whitelisty serwera"
description: "Dowiedz się, jak zabezpieczyć swój serwer Minecraft, zarządzając dostępem graczy za pomocą whitelisty i chroń swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
**Whitelist w Minecraft** to opcja zabezpieczenia serwera, która pozwala na połączenie się tylko wybranym graczom znajdującym się na liście. Domyślnie Minecraft nie oferuje opcji hasła do serwera, jak to jest w innych grach.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Jak włączyć WHITELIST na swoim serwerze Minecraft" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko wyjaśnia. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Aktywacja whitelisty



### Aktywacja (Konfiguracja)

Aby aktywować whitelistę, wartość polecenia w pliku **server.properties** musi być ustawiona na **true**. Konieczny jest restart serwera, aby zmiana zaczęła działać. 

```
white-list=true
```



### Aktywacja (Chat)

Alternatywnie whitelistę można włączyć w grze lub przez konsolę na żywo:

```
/whitelist on			(Włącz whitelistę)
/whitelist off			(Wyłącz whitelistę)
```



Aby włączyć whitelistę przez grę, potrzebne są uprawnienia operatora! W przeciwnym razie można to zrobić przez konsolę na żywo (interfejs). Pamiętaj, że w konsoli polecenia wykonuje się bez symbolu **/**.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Zarządzanie whitelistą



### Dodawanie / usuwanie graczy



**Chat**

Możesz dodawać lub usuwać graczy z whitelisty za pomocą następujących komend:

```
/whitelist add NazwaGracza
/whitelist remove NazwaGracza
```



**white-list.json**

Jeśli znasz UUID gracza, możesz go też dodać ręcznie w pliku **white-list.json**. Plik ten można edytować przez FTP. Instrukcje jak połączyć się przez FTP znajdziesz tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Gracz1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Gracz2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Gracz3"
  }
]
```



### Aktualizacja listy

Jeśli dodasz graczy ręcznie, musisz przeładować whitelistę w grze. Można to zrobić komendą, aby uniknąć restartu serwera:

```
 /whitelist reload
```



### Wyświetlanie listy

Jeśli nie chcesz za każdym razem otwierać pliku whitelisty przez FTP, możesz wyświetlić wszystkich graczy na liście za pomocą komendy: 

```
/whitelist list
```


<InlineVoucher />