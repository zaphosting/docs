---
id: ddos-protection-pletx
title: Ochrona DDoS PletX w ZAP Hosting
description: "Dowiedz się, jak ZAP Hosting chroni Twoje serwery dzięki proaktywnej, działającej w czasie rzeczywistym obronie DDoS dopasowanej do każdego uruchamianego serwisu → Sprawdź teraz"
sidebar_label: PletX
---

## Wprowadzenie

Ataki DDoS (Distributed Denial of Service) to złośliwe próby zakłócenia normalnego ruchu na wybranym serwerze, usłudze lub sieci przez zalanie ich nadmiernym ruchem przychodzącym. Aby zapewnić stabilną i nieprzerwaną pracę dla naszych klientów, ZAP Hosting korzysta z dedykowanych systemów ochrony DDoS dopasowanych do każdej lokalizacji centrum danych.

Jedną z kluczowych technologii stosowanych w naszej infrastrukturze jest PletX — wysoce adaptacyjna platforma ochronna, która filtruje i łagodzi ataki w czasie rzeczywistym. Ten dokument wyjaśnia, jak działa PletX, które usługi z niej korzystają i dlaczego daje to znaczącą przewagę w środowiskach hostingowych wymagających wysokiej wydajności.



## Gdzie stosujemy ochronę

PletX jest już w pełni wdrożony w naszej lokalizacji FFM/Eygelshoven, gdzie chroni wszystkie oferowane produkty, w tym serwery gier, VPS, serwery dedykowane, serwery głosowe TeamSpeak, boty TS3 i Discord oraz usługi hostingowe. Dzięki temu zapewniamy kompleksową i spójną ochronę na całym portfolio produktów w tym miejscu.

Obecnie przygotowujemy wdrożenie w naszych lokalizacjach w USA: Ashburn, Dallas i Los Angeles, gdzie PletX będzie dostępny już wkrótce.

## Jak działa ochrona DDoS

Ochrona PletX w naszych lokalizacjach jest zawsze aktywna i w pełni zsynchronizowana z naszą siecią. Cały ruch przychodzący jest kierowany przez system filtrowania PletX zanim dotrze do naszej infrastruktury. Dzięki temu złośliwy ruch jest eliminowany jak najwcześniej i nigdy nie trafia na Twój serwer.

### Automatyczne wykrywanie protokołów

PletX nieustannie analizuje ruch przychodzący i rozpoznaje charakterystyczne sygnatury protokołów, gdy tylko pojawi się rzeczywisty ruch na danym porcie. Na przykład, gdy gracze łączą się z serwerem FiveM na porcie gry, np. 30120,

system wykrywa charakterystyczną strukturę pakietów i automatycznie stosuje odpowiednią regułę dla FiveM. To samo dotyczy innych usług; jeśli serwer Minecraft otrzymuje ruch na porcie 25565, system rozpoznaje handshake Minecrafta i tworzy odpowiednią regułę.

Gdy użytkownik łączy się z VPS lub serwerem dedykowanym przez SSH na porcie 22, PletX rozpoznaje handshake SSH i aktywuje regułę SSH. Dla systemów Windows wykrywa ruch RDP na porcie 3389 i tworzy regułę specyficzną dla RDP.

Jeśli na niestandardowym porcie używany jest WireGuard lub OpenVPN, PletX identyfikuje pierwszą poprawną wymianę i stosuje właściwą regułę VPN.

We wszystkich przypadkach, gdy PletX rozpozna protokół, przepuszcza tylko legalny ruch dla tego protokołu, a ruch niezwiązany jest filtrowany zanim dotrze do serwera.

### Obsługiwane profile ochrony

PletX obsługuje szeroką gamę popularnych protokołów usług i gier. Obejmuje to popularne gry takie jak FiveM, Minecraft, tytuły korzystające z silnika Steam Source Engine, usługi oparte na Metin 2, gry oparte na RakNet, SAMP, Growtopia oraz rozszerzenia takie jak PlasmoVoice. Aplikacje głosowe, takie jak TeamSpeak, są również automatycznie rozpoznawane.

Poza ruchem związanym z grami, PletX identyfikuje protokoły zdalnego dostępu, takie jak SSH i RDP, a także bezpieczne protokoły sieciowe, w tym WireGuard i OpenVPN.

<details>
  <summary>Serwery gier</summary>
- FiveM
- Minecraft
- Różne gry korzystające z silnika Steam Source Engine
- Metin 2 Auth & Channel
- Novalife
- Gry oparte na RakNet
- SAMP
- Growtopia
- PlasmoVoice
- i więcej..
</details>

<details>
  <summary>Serwery głosowe</summary>

- TeamSpeak
- PlasmoVoice
</details>

<details>
  <summary>Zdalny dostęp</summary>
- SSH
- RDP
</details>

<details>
  <summary>VPN i bezpieczne sieci</summary>

- WireGuard
- OpenVPN
</details>

Każdy protokół nierozpoznany przez PletX traktowany jest jako nieznany, co może czasem powodować fałszywe alarmy lub nieoczekiwane zachowania.

## Ruch webowy i usługi nieobsługiwane

PletX obecnie nie filtruje ruchu HTTP ani HTTPS. Aplikacje webowe lub protokoły nieobsługiwane mogą więc czasem doświadczać fałszywych alarmów. Jeśli Cię to dotyczy, postępuj tak:

1. Otwórz zgłoszenie w support ZAP-Hosting
2. Analizujemy ruch
3. PletX może wdrożyć niestandardowe poprawki i dostosowania na życzenie

To rozwiązanie jest szczególnie przeznaczone dla rzadkich lub specjalistycznych usług. Dla projektów webowych rekomendujemy dalsze korzystanie z Cloudflare. Najlepiej z Cloudflare Proxy lub CDN dla stron www oraz Cloudflare Tunnel dla FiveM/RedM TxAdmin lub innych paneli webowych.

## Tymczasowe wyłączenie ochrony

Wkrótce pojawi się opcja tymczasowego wyłączenia ochrony. Ta nadchodząca funkcja pozwoli klientom całkowicie wyłączyć ochronę DDoS dla wybranych serwerów, gdy zajdzie taka potrzeba. Jest to szczególnie przydatne w środowiskach bez realnego ryzyka DDoS, systemach o dużym wolumenie ruchu, takich jak platformy telemetryczne czy monitoringowe, oraz aplikacjach generujących nietypowe wzorce ruchu, które mogą wywoływać fałszywe alarmy.

Funkcja da zaawansowanym użytkownikom pełną kontrolę nad zachowaniem sieci, podczas gdy klienci hostujący gry i aplikacje nadal będą korzystać z automatycznej i niezawodnej ochrony.