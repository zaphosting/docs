---
id: terraria-tmodloader-installmod
title: "Terraria: Instalacja modów (tModLoader)"
description: "Dowiedz się, jak łatwo zainstalować i aktywować mody tModLoader do Terrarii, aby wzbogacić swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Instalacja modów (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Instalacja modów przez tModLoader

tModLoader do Terrarii to ważna modyfikacja, która pozwala na ładowanie modów na Twój serwer gier Terraria. Instalacja odbywa się przez przeciągnij & upuść oraz jedną prostą zmianę na Twoim serwerze, więc całość jest bardzo łatwa i zajmuje tylko kilka minut.


## Instalacja tModLoader na Twoim PC

Jeśli jeszcze nie masz zainstalowanego tModLoader, możesz pobrać go bezpłatnie bezpośrednio ze Steam. Wystarczy wyszukać tModLoader w sklepie Steam lub skorzystać z tego linku: [tModLoader w sklepie Steam](https://store.steampowered.com/app/1281930/tModLoader/)

Po pobraniu i instalacji możesz uruchomić tModLoader bezpośrednio ze Steam.

## Dodawanie modów na Twoim PC

Po wejściu do menu głównego otwórz folder z modami, klikając na **Mods**, potem **Manage Mods**, a następnie **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

W otwartym folderze, który domyślnie znajduje się pod ścieżką **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**, możesz teraz wrzucić wybrane mody.
W tym przykładzie instalujemy Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Mod musi zawsze mieć rozszerzenie **.tmod**, inaczej nie zostanie załadowany na serwerze!
:::

Następnie możesz zamknąć folder, kliknąć w grze **Back**, a potem **Mods**: 

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Tam zobaczysz dodany mod, który możesz aktywować klikając na **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Aby mod był aktywny, kliknij **Reload Mods**, potem możesz zamknąć grę i przejść do instalacji moda na serwerze.


## Instalacja modów na Twoim serwerze

Aby zainstalować mod na serwerze, połącz się z nim przez FTP. Jak to zrobić, dowiesz się tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md)

Nawiguj do katalogu: /g******/terraria/mods/ i tam wgraj wcześniej używany plik **.tmod**:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Jeśli nie ma pliku **enabled.json**, musisz najpierw uruchomić serwer, wtedy plik powinien się pojawić. Alternatywnie możesz stworzyć go samodzielnie.
:::

Otwórz plik **enabled.json** przez **Prawy klik > Edytuj** i dodaj tam nazwę swojego moda, tak to powinno wyglądać:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Jeśli chcesz dodać kilka modów, zrób to tak: 

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Pamiętaj, że po każdej nazwie moda musi być przecinek, oprócz ostatniego!
:::

Teraz możesz zamknąć połączenie FTP, uruchomić serwer i połączyć się z nim przez tModLoader pobrany ze Steam.

Po naciśnięciu **ESC**, kliknięciu **Settings** i potem **Mod Configuration** zobaczysz swoje mody załadowane na serwerze:

<InlineVoucher />