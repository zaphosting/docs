---
id: 7d2d-mods
title: "7 Days to Die: Instalacja modów"
description: "Dowiedz się, jak spersonalizować swój serwer popularnymi modami i wzbogacić rozgrywkę o unikalne doświadczenia → Sprawdź teraz"
sidebar_label: Instalacja modów
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Dzięki modom masz możliwość jeszcze większej personalizacji swojego serwera. Poniżej wyjaśnimy, gdzie znaleźć najpopularniejsze mody na serwer oraz jak je zainstalować. Wraz z wprowadzeniem Alpha 17 Experimental pojawiła się koncepcja modletów. Modlety to mniejsze mody, które nie nadpisują oryginalnych plików XML, lecz są ładowane z folderu mods.

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## Przygotowanie

Pierwszą rzeczą, którą musisz zrobić, jest pobranie modów, które chcesz zainstalować na swoim serwerze. Duży wybór modów znajdziesz na [7daystodiemods.com](https://7daystodiemods.com/). Znajdziesz tam ponad 1000 modów, a regularnie dodawane są kolejne. Po pobraniu moda powinien on zawierać następującą strukturę plików:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## Instalacja

Gdy już pobierzesz wybrane mody, możesz przystąpić do ich instalacji. Instalacja modów odbywa się przez FTP. Potrzebujesz klienta FTP, aby przesłać pliki na swój serwer. Jeśli nie wiesz, czym jest FTP i jak działa, zerknij na nasz poradnik: [Dostęp przez FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

W katalogu ``/gXXXXX4/7dtd-linux-exp/`` musisz utworzyć folder o nazwie **Mods**. Kliknij prawym przyciskiem myszy i wybierz **Utwórz katalog**.

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

Następnie pliki moda należy przesłać do katalogu mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

To już kończy instalację moda. Przy następnym uruchomieniu serwera mody powinny zostać automatycznie załadowane.

<InlineVoucher />