---
id: fivem-esx-disablehud
title: "FiveM: Wyłącz/włącz HUD"
description: "Dowiedz się, jak zaktualizować konfigurację serwera ESX, aby lepiej zarządzać HUD i poprawić wydajność serwera → Sprawdź teraz"
sidebar_label: Wyłącz HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, są niepoprawne lub przestarzałe. Został zarchiwizowany z następujących powodów:

**Powód**: Metoda realizacji dotyczy przestarzałej wersji ESX. To podejście nie działa w obecnej wersji ESX, ponieważ struktura uległa zmianie. 
::::



<InlineVoucher />

## 📑 Znajdź i edytuj Config

Gdy to zrobimy, otwieramy stronę Config i szukamy es_extended.  
Wciśnij CTRL + F i wpisz es_extended.  
Powinno się szybko znaleźć.  
Będziemy nad tym pracować.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Teraz spójrzmy na: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Ustawiamy to na false i zapisujemy plik.

Następnie przechodzimy do Server.cfg.  
Ten plik też znajdziesz na stronie Config.  
Znów szukamy za pomocą CTRL + F frazy es_  
Szukamy linii es_ui i usuwamy ją całkowicie.  
Zapisujemy zmiany.

Po tym wystarczy zrestartować serwer i gotowe.

<InlineVoucher />