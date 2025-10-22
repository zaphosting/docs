---
id: rust-commands
title: "Rust: Komendy Admina"
description: "Odkryj najważniejsze komendy Rust do zarządzania serwerem i kontrolowania graczy, aby zoptymalizować rozgrywkę i administrację → Sprawdź teraz"
sidebar_label: Komendy Admina
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Rust oferuje mnóstwo różnych komend dostępnych dla właścicieli serwerów i graczy. Na tej stronie podsumowujemy najprzydatniejsze i najpopularniejsze, które służą do ustawień serwera, zarządzania graczami oraz kontroli nad nimi.

:::info
Niektóre komendy wymagają użycia Steam64 ID gracza. Skorzystaj z krótkiego poradnika poniżej, aby dowiedzieć się, jak zdobyć Steam ID gracza.
:::

<InlineVoucher />

## Jak zdobyć Steam ID
Najpierw użyj narzędzia takiego jak [Steam ID Finder](https://steamidfinder.com/), aby uzyskać Steam64 ID.

Wpisz tutaj swój Steam URL:

![](https://screensaver01.zap-hosting.com/index.php/s/wscaNkzWSjzAktf/preview)

Następnie kliknij `Find Steam ID`. Powinieneś zobaczyć swój profil Steam, skopiuj tam "Steam64ID (Dec)".

I to wszystko, masz teraz Steam64 ID, które możesz używać w komendach wymagających Steam64 ID poniżej.

## Kategorie Komend

Użyj zakładek poniżej, aby przełączać się między kategoriami. Tabele zawierają samą komendę, akceptowane wartości (jeśli dotyczy) oraz opis, który ułatwi zrozumienie.

:::info
Wszystkie komendy wymienione na tej stronie dotyczą vanilla Rust.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ServerSettings" label="Ustawienia Serwera" default>

| Składnia Komendy                  | Akceptowane Wartości | Opis | 
| ----------------------- | ---------- | --------- | 
| server.globalchat      | true/false          | Jeśli true, każda wiadomość na czacie będzie widoczna dla wszystkich graczy         | 
| server.stop      | -          | Zatrzymuje serwer         | 
| server.save      | -          | Zapisuje stan serwera         | 
| server.saveinterval "value"      | Liczba całkowita (domyślnie 60)          | Ustawia interwał autozapisu serwera (w sekundach)         | 
| server.secure      | true/false          | Jeśli true, Easy Anti Cheat (EAC) odrzuca połączenia od niezarejestrowanych lub zbanowanych graczy przed połączeniem         | 
| server.seed "value"     | Liczba całkowita (np. 123456)          | Ustawia seed świata serwera         | 
| server.stability      | true/false          | Jeśli true, włączona jest stabilność konstrukcji budynków         | 
| server.tickrate "rate"      | Liczba całkowita (domyślnie 30)          | Ustawia tickrate serwera         | 
| server.writecfg      | -          | Zapisuje zmiany konfiguracji ustawione wcześniej przez inne komendy serwera         | 
| chat.serverlog      | true/false          | Jeśli true, czat jest zawsze logowany w konsoli serwera         | 
| commands.echo "text"      | Tekst (np. "Hello World!")          | Wyświetla podaną wiadomość w konsoli serwera         | 
| global.say "message"      | Tekst (np. "Welcome!")          | Wysyła wiadomość do wszystkich graczy na serwerze         | 
| env.time      | Liczba całkowita (np. 16)          | Ustawia czas w świecie gry na podaną wartość (w godzinach)         | 
| server.events      | -          | Jeśli true, włącza eventy serwera takie jak zrzuty airdropów         | 
| commands.find "command"      | Tekst (np. "quit")          | Wyszukuje komendę lub wpisanie "." wyświetli listę wszystkich dostępnych komend         | 
| global.quit      | -          | Zapisuje serwer i go zatrzymuje         | 
| global.init      | -          | Ładuje pliki konfiguracyjne         | 

</TabItem>
<TabItem value="PlayerAdmin" label="Administrowanie Graczami">

| Składnia Komendy                  | Akceptowane Wartości | Opis | 
| ----------------------- | ---------- | --------- | 
| global.ban "playername" "reason"      | Tekst (np. "Jacob"), Tekst (np. "Był niegrzeczny!")          | Banuje użytkownika na serwerze (z opcjonalnym powodem)         | 
| global.banid "steam64"      | Liczba całkowita          | Banuje użytkownika po jego Steam64 ID         | 
| global.banlistex      | -          | Zwraca listę zbanowanych użytkowników wraz z nazwą i powodem bana         | 
| global.banlist      | -          | Pokazuje listę zbanowanych graczy na czacie         | 
| global.unban "steam64"      | Liczba całkowita          | Odbanowuje użytkownika po Steam64 ID         | 
| global.kickall      | -          | Wyrzuca wszystkich graczy z serwera         | 
| global.kick "steam64 / playername" "reason"      | Liczba całkowita/Tekst (np. "Jacob"), Tekst (np. "Był niegrzeczny!")         | Wyrzuca użytkownika z serwera po Steam64 ID lub nazwie gracza (z opcjonalnym powodem)         | 
| global.ownerid "steam64 / playername"      | Liczba całkowita/Tekst (np. "Jacob")          | Ustawia wskazanego gracza jako admina serwera po Steam64 ID lub nazwie (poziom uprawnień 2)         | 
| global.removeowner "steam64"      | Liczba całkowita         | Usuwa uprawnienia admina od użytkownika po podanym Steam64 ID         | 
| global.moderatorid "steam64 / playername"      | Liczba całkowita/Tekst (np. "Jacob")          | Ustawia wskazanego gracza jako moderatora serwera po Steam64 ID lub nazwie (poziom uprawnień 1)         | 
| global.removemoderator "steam64"      | Liczba całkowita          | Usuwa uprawnienia moderatora od użytkownika po podanym Steam64 ID         | 
| global.listid      | -          | Zwraca listę użytkowników zbanowanych po Steam64 ID          | 

</TabItem>
<TabItem value="Player Controls" label="Kontrola Gracza">

| Składnia Komendy                  | Akceptowane Wartości | Opis | 
| ----------------------- | ---------- | --------- | 
| kill      | -          | Zabija własnego gracza         | 
| global.quit      | -          | Zapisuje i wychodzi z gry         | 
| global.god      | true/false          | Włącza/wyłącza tryb Boga, dzięki któremu gracz nie otrzymuje obrażeń (tylko dla adminów)          | 
| global.noclip      | true/false          | Włącza/wyłącza tryb Noclip, pozwalający na swobodne latanie (tylko dla adminów)          | 
| global.debugcamera      | true/false          | Włącza/wyłącza tryb kamery debug, pozwalający na swobodną kamerę (tylko dla adminów)          | 
| player.sleep      | -          | Wymusza uśpienie własnego gracza         | 
| commands.find "command"      | Tekst (np. "quit")          | Wyszukuje dostępne komendy dla gracza
| chat.say "text"     | Tekst (np. "Hello World!")          | Wysyła wiadomość do wszystkich graczy na serwerze         | 
| inventory.give "itemID" "amount"     | Liczba całkowita (itemID), Liczba całkowita (np. 5)          | Dodaje przedmiot do swojego ekwipunku         | 
| inventory.giveto "playername" "itemID" "amount"      | Tekst (np. "Jacob"), Liczba całkowita (itemID), Liczba całkowita (np. 5)          | Dodaje przedmiot do ekwipunku wskazanego gracza         | 

</TabItem>
</Tabs>

<InlineVoucher />