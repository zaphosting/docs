---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Instalacja Modów / Modpacków"
description: "Dowiedz się, jak pobierać i instalować mody oraz modpacki do Minecrafta, aby wzbogacić rozgrywkę na swoim serwerze → Sprawdź teraz"
sidebar_label: Instalacja Modów / Modpacków
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Wprowadzenie

Nauczysz się, jak pobrać i zainstalować mod / modpack na swoim serwerze Minecraft.

<InlineVoucher />

## Przygotowanie

- Serwer gier ([możesz go zamówić tutaj](https://zap-hosting.com/en/gameserver-hosting/))
- Klient FTP (np. WinSCP, FileZilla)
- Połącz się z serwerem przez FTP: ([Dostęp przez FTP](gameserver-ftpaccess.md))



## Znajdowanie i pobieranie modów lub modpacków

W sieci jest mnóstwo miejsc, gdzie można znaleźć mody / modpacki. Największą platformą dla modów i modpacków jest CurseForge. Prawie 99% wszystkich modów / modpacków do Minecrafta znajdziesz tam i pobierzesz kilkoma kliknięciami. Ten poradnik skupia się na korzystaniu z CurseForge. Możesz wyszukiwać mody [tutaj](https://www.curseforge.com/minecraft/mc-mods) oraz modpacki [tutaj](https://curseforge.com/minecraft/modpacks).

:::note
Mody działają tylko z konkretną wersją modloadera. Musisz sprawdzić na stronie moda, jakiej wersji potrzebujesz. Jeśli instalujesz kilka modów, upewnij się, że wszystkie korzystają z tej samej wersji. Dodatkowo, mody Forge nie są kompatybilne z modami Fabric i odwrotnie.
:::

Przejdź na stronę wybranego moda / modpacka i kliknij zakładkę "Files".

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


Znajdź wersję, którą chcesz i kliknij ją, aby przejść do sekcji "File Details".

:::tip
Możesz filtrować według wersji i modloadera, korzystając z rozwijanego menu na górze zakładki "Files".

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Dla Modów" default>
W sekcji "File Details" kliknij przycisk "Download". Zapisz ten plik gdzieś, będzie Ci potrzebny później.

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="Dla Modpacków">
W sekcji "File Details" przewiń w dół do "Additional Files", kliknij trzy kropki i wybierz "Download file". Zapisz ten plik gdzieś, będzie Ci potrzebny później.

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## Krok 2 - Rozpakowywanie plików z pobranych archiwów (tylko dla modpacków)

Znajdź pobrany plik na swoim komputerze, kliknij go prawym przyciskiem i wybierz "Extract All...". Wybierz folder, do którego chcesz wypakować pliki. Zapamiętaj tę lokalizację!

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Wypakowany folder powinien zawierać foldery mods, config i defaultconfig. Mogą też być inne foldery niż te pokazane tutaj.

:::note
Niektóre modpacki wymagają dodatkowych kroków, np. AllOfFabric6. W przypadku AllOfFabric6 musisz uruchomić "startserver.bat" (Windows) lub "startserver.sh" (Linux / MacOS), aby pobrać wymienione foldery. Skrypt pobierze je za Ciebie. W większości przypadków foldery będą już dostępne bez dodatkowych działań. Jeśli w wypakowanym folderze nie ma skryptu, szybko poszukaj w sieci, jak zdobyć pliki serwera dla swojego modpacka.
:::


## Krok 3 - Instalacja odpowiedniej wersji serwera

W panelu głównym Zap-Hosting wybierz swój serwer gier i przejdź do "Games" w ustawieniach.

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

Rozwiń sekcję "Available Games" i wyszukaj swojego modloadera (Forge dla modów / modpacków Forge, Fabric dla modów / modpacków Fabric). Kliknij zielony przycisk pobierania.

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


Kliknij menu rozwijane pod "Game version" i wybierz wersję Minecrafta, która odpowiada wersji Twojego mod/modpacka. Dla Forge masz opcję wyboru najnowszej lub rekomendowanej wersji. Najpierw spróbuj najnowszej, a jeśli serwer nie działa poprawnie, wróć i wybierz wersję rekomendowaną. Kliknij "Accept and Install".

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
Jeśli nie wiesz, jakiej wersji Minecrafta potrzebujesz, wróć do strony "File Details" na CurseForge. Obok ikony gamecontrollera zobaczysz wersję.

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

Po zakończeniu instalacji gry zobaczysz niebieski przycisk obok nazwy gry (np. Forge, Fabric). Kliknij go, aby aktywować grę.

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Krok 4 - Łączenie się i przesyłanie modów / modpacka przez FTP

Połącz się z serwerem za pomocą wybranego klienta FTP. Upewnij się, że serwer jest zatrzymany.

### Wgrywanie moda

Po połączeniu przejdź do folderu gry (np. minecraft-forge, minecraft-fabric). Otwórz folder mods i po prostu przeciągnij tam pobrane pliki modów.
![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

Po zakończeniu przesyłania możesz uruchomić serwer.

### Wgrywanie modpacka

Po połączeniu przejdź do folderu gry (np. minecraft-forge, minecraft-fabric). Usuń foldery world, mods, config i defaultconfig na serwerze. Teraz wgraj wszystkie foldery z wcześniej wypakowanego folderu, z wyjątkiem folderów jre i libraries. Po prostu zaznacz wszystkie foldery i przeciągnij je do katalogu serwera.

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

Po zakończeniu przesyłania możesz uruchomić serwer.



## Popularne Mody

Wciąż szukasz idealnych modów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych modów, które wzbogacą Twoją rozgrywkę i dodadzą Twojemu serwerowi ten wyjątkowy charakter. Zainspiruj się i znajdź dokładnie to, czego potrzebujesz.

<SearchableItemList items={mods} />

## Popularne Modpacki

Wciąż szukasz idealnych modów na swój serwer? Przejrzyj naszą starannie wyselekcjonowaną listę najpopularniejszych i polecanych modów, które wzbogacą Twoją rozgrywkę i dodadzą Twojemu serwerowi ten wyjątkowy charakter. Zainspiruj się i znajdź dokładnie to, czego potrzebujesz.

<SearchableItemList items={modpacks} />

<InlineVoucher />