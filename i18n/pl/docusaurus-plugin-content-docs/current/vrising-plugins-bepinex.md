---
id: vrising-plugins-bepinex
title: "V Rising: Instalacja pluginów na serwerze (BepInEx)"
description: "Dowiedz się, jak wzbogacić rozgrywkę w V Rising dzięki modom BepInEx i poprawić personalizację serwera → Sprawdź teraz"
sidebar_label: Instalacja pluginów (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, poprawne lub istotne. Został zarchiwizowany z następujących powodów:

**Powód**: Produkt V Rising z BepInEx przestał działać i został usunięty z oferty sklepu. 
::::

## Wprowadzenie
BepInEx to bardzo popularny, open-source’owy framework do pluginów i modów, który pozwala graczom dodawać mody do wielu gier, które tradycyjnie nie wspierają oficjalnego modowania. W tym poradniku pokażemy, jak zainstalować pluginy przez BepInEx na serwerze V Rising.
<InlineVoucher />

## Wersja gry BepInEx

Aby korzystać z pluginów kompatybilnych z **BepInEx** w V Rising, najpierw musisz zainstalować na swoim serwerze wersję gry **V Rising BepInEx**. Możesz to łatwo zrobić, korzystając z funkcji zmiany gry na naszym serwerze gier — dowiedz się więcej z naszego [poradnika zmiany gry](gameserver-gameswitch.md).

## Wgrywanie pluginów

Zacznij od znalezienia modów kompatybilnych z BepInEx, które chcesz dodać na swój serwer. Informacje o kompatybilności pluginu znajdziesz zwykle na stronie pobierania.

:::important
Pluginy muszą być kompatybilne z **BepInEx**, inaczej nie będą działać!
:::

Gdy masz już mod, połącz się ze swoim serwerem gier przez FTP. Sprawdź nasz [poradnik dostępu przez FTP](gameserver-ftpaccess.md), jeśli nie wiesz jak to zrobić.

Po połączeniu się przez klienta FTP, przejdź do katalogu:
```
../vrising/BepInEx/plugins
```

Do tego folderu wrzuć pobrane mody. Zazwyczaj będą to pliki z rozszerzeniem `.dll`. W tym przykładzie wgrywamy framework mod, który jest przydatny do tworzenia komend.

:::note
Serwer musi być zatrzymany przed dodaniem lub edycją modów, inaczej zmiany mogą zostać cofnięte.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Uruchamianie serwera

Po wgraniu wybranych pluginów, po prostu uruchom serwer ponownie.

:::info
Niektóre pluginy mogą wymagać instalacji po stronie klienta na Twoim PC. Sprawdź informacje na stronie pluginu, czy jest to konieczne.
:::

Gratulacje! Pomyślnie zainstalowałeś nowe pluginy BepInEx na swoim serwerze gier V Rising!

<InlineVoucher />