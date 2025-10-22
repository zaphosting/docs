---
id: fivem-editlocalfiles
title: "FiveM: Pliki lokalizacji (Zmienne językowe)"
description: "Dowiedz się, jak dostosować i dodać języki do swojego resource, aby uzyskać spersonalizowane doświadczenie → Sprawdź teraz"
sidebar_label: Pliki lokalizacji (Język)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Chcesz zmienić zmienne językowe resource lub dodać kolejne języki, które jeszcze nie istnieją? Pliki lokalizacji pozwalają Ci dostosować zmienne językowe wybranego resource. 

<InlineVoucher />



## Znajdź pliki lokalizacji

Pliki lokalizacji muszą być edytowane za pomocą klienta FTP. Jeśli dopiero zaczynasz z FTP, polecamy najpierw przeczytać [poradnik o dostępie FTP](gameserver-ftpaccess.md). Po połączeniu przejdź do katalogu resource ESX, który chcesz edytować. Otwórz katalog locales w katalogu resource. 

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

W katalogu locales znajdziesz wszystkie pliki językowe dostępne dla tego resource. Stąd możesz edytować istniejący plik lub skopiować go pod nową nazwą, tworząc nowy język, który następnie możesz edytować. 

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## Edytuj plik lokalizacji

Teraz możesz dostosować zawartość poszczególnych zmiennych językowych w otwartym pliku lokalizacji. Zawartość zmiennych językowych znajduje się po znaku równości, w cudzysłowach. Dostosuj treść według własnych upodobań i na końcu zapisz zmiany. 

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## Ustaw lokalizację (język)

Używany język można zdefiniować w pliku konfiguracyjnym `config.lua` w katalogu resource. W tym celu zmodyfikuj wartość `Config.Locale = GetConvar('esx:locale', 'en')`. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## Podsumowanie

Gratulacje! Jeśli wykonałeś wszystkie kroki, pomyślnie edytowałeś plik lokalizacji swojego resource. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />