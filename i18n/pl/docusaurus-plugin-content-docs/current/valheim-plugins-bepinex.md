---
id: valheim-plugins-bepinex
title: "Valheim: Instalacja pluginów na serwerze (BepInEx)"
description: "Dowiedz się, jak wzbogacić rozgrywkę w Valheim dzięki pluginom BepInEx i odblokuj nowe możliwości modowania → Sprawdź teraz"
sidebar_label: Instalacja pluginów (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Wprowadzenie
BepInEx to bardzo popularny, open-source’owy framework do pluginów i modów, który pozwala graczom dodawać mody do wielu gier, które tradycyjnie nie wspierają oficjalnego modowania. W tym poradniku pokażemy, jak zainstalować pluginy przez BepInEx na serwerze Valheim.

<InlineVoucher />

## Wersja gry BepInEx

Aby korzystać z pluginów kompatybilnych z **BepInEx** w Valheim, najpierw musisz zainstalować na swoim serwerze wersję gry **Valheim Plus**. Mamy też osobną wersję gry **Valheim BepInEx**, ale polecamy instalować Valheim Plus, bo jest tam wszystko w pakiecie. Możesz to łatwo zrobić korzystając z funkcji zmiany gry na naszym serwerze – więcej o tym przeczytasz w naszym [poradniku zmiany gry](gameserver-gameswitch.md).

:::info
Valheim Plus musi być też zainstalowany lokalnie na Twoim PC. Pobierz go tutaj: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::

## Wgrywanie pluginów

Najpierw znajdź mody kompatybilne z BepInEx, które chcesz dodać na swój serwer. Informacje o kompatybilności pluginu znajdziesz zwykle na stronie pobierania.

:::important
Pluginy muszą być kompatybilne z **BepInEx**, inaczej nie będą działać!
:::

Gdy masz już mod, połącz się ze swoim serwerem gier przez FTP. Jak to zrobić, dowiesz się z naszego [poradnika dostępu przez FTP](gameserver-ftpaccess.md).

W kliencie FTP przejdź do katalogu:
```
../valheim-linux-plus/BepInEx/plugins
```

Do tego folderu wrzuć pobrane mody. Zazwyczaj będą to pliki z rozszerzeniem `.dll`.

:::note
Serwer musi być zatrzymany przed dodaniem lub edycją modów, inaczej zmiany mogą się nie zapisać.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Uruchamianie serwera

Po wgraniu pluginów, które chcesz mieć, po prostu uruchom serwer ponownie.

:::info
Niektóre pluginy mogą wymagać instalacji także po stronie klienta na Twoim PC. Sprawdź informacje na stronie pluginu, czy jest to konieczne.
:::

Gratulacje! Pomyślnie zainstalowałeś nowe pluginy BepInEx na swoim serwerze gier Valheim!

## Popularne pluginy

Szukasz dalej idealnych pluginów na swój serwer?

Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych pluginów, które wzbogacą Twoją rozgrywkę i dodadzą serwerowi tego czegoś. Zainspiruj się i znajdź dokładnie te dodatki, które pasują do Twojego projektu.

<SearchableItemList items={items} />

<InlineVoucher />