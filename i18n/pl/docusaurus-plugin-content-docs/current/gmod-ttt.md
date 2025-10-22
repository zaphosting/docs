---
id: gmod-ttt
title: "Garry's Mod: Konfiguracja"
description: "Dowiedz się, jak zoptymalizować ustawienia serwera TTT dla lepszej rozgrywki i zarządzania rundami → Sprawdź teraz"
sidebar_label: Konfiguracja Garry's Mod TTT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Konfiguracja Twojego serwera TTT

**Ważne: Wyłącz serwer przed wprowadzeniem jakichkolwiek zmian.**

Podstawową konfigurację możesz łatwo zrobić w naszym panelu administracyjnym, np. nazwa serwera, hasło Rcon i hasło serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Gdy skonfigurujesz serwer według swoich potrzeb, możemy przejść do ustawień specyficznych dla trybu gry TTT. Możesz to zrobić przez nasz panel administracyjny lub zmieniając plik przez FTP.

Edytor konfiguracji znajdziesz w naszym panelu administracyjnym w zakładce "Configs", tam otwórz plik server.cfg.
W naszym panelu administracyjnym znajdziesz tę funkcję pod "Configs", gdzie otwierasz server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Znajdziesz tam wartości do modyfikacji rozgrywki na Twoim serwerze TTT, ważne zmienne wyjaśnione krótko:

<InlineVoucher />

## Rundy i zmiana mapy

ttt_round_limit  
:::info  
Maksymalna liczba rund przed zmianą mapy. (Domyślnie: 6)  
:::

ttt_time_limit_minutes  
:::info  
Maksymalna liczba minut przed zmianą mapy lub rozpoczęciem głosowania (Domyślnie: 75)  
:::

ttt_postround_dm  
:::info  
Włącza możliwość zadawania obrażeń po zakończeniu rundy. Zabójstwa nie są liczone do punktacji, więc jest to wolna walka dla wszystkich. (Domyślnie: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Pozwala niewinnym graczom przypinać ciała. (Domyślnie: 1)  
:::

## Rozgrywka

ttt_traitor_pct  
:::info  
Procent wszystkich graczy, którzy będą zdrajcami. Liczba graczy jest mnożona przez tę wartość i zaokrąglana w dół. Jeśli wynik jest mniejszy niż 1 lub większy niż liczba graczy, jest ograniczany do tych wartości. (Domyślnie: 0.25)  
:::

ttt_traitor_max  
:::info  
Maksymalna liczba zdrajców. (Domyślnie: 32)  
:::

ttt_detective_pct  
:::info  
Procent wszystkich graczy, którzy będą detektywami. (Domyślnie: 0.13)  
:::

ttt_detective_max  
:::info  
Maksymalna liczba detektywów. Można użyć do ograniczenia lub wyłączenia detektywów. (Domyślnie: 32)  
:::

ttt_detective_min_players  
:::info  
Minimalna liczba graczy, zanim detektywi pojawią się w grze. (Domyślnie: 5)  
:::

ttt_detective_karma_min  
:::info  
Jeśli karma gracza spadnie poniżej tej wartości, jego szanse na wybranie na detektywa maleją. (Domyślnie: 600)  
:::

ttt_minimum_players  
:::info  
Liczba graczy, która musi być obecna, zanim runda się rozpocznie. Sprawdzane przed fazą przygotowawczą i przed rozpoczęciem rundy. (Domyślnie: 2)  
:::

## DNA

ttt_killer_dna_range  
:::info  
Maksymalny zasięg, w którym próbka DNA zabójcy zostaje umieszczona na ciele ofiary. (Domyślnie: 300)  
:::

## Karma

ttt_karma  
:::info  
Włącza system karmy. Gracze zaczynają z określoną ilością karmy i tracą ją, gdy ranią/zabijają "współgraczy" (np. niewinnych jeśli są niewinni, zdrajców jeśli są zdrajcami). Ilość tracona zależy od karmy osoby, którą zraniłeś lub zabiłeś. (Domyślnie: 1)  
:::

ttt_karma_strict  
:::info  
Jeśli włączone, kara za zadawane obrażenia rośnie szybciej wraz ze spadkiem karmy. Gdy wyłączone, kara za obrażenia jest niska, jeśli karma jest powyżej 800. (Domyślnie: 1)  
:::

ttt_karma_starting  
:::info  
Karma, z którą zaczynają gracze. Jeśli chcesz, aby gracze mogli "zarabiać" bonus do obrażeń, ustaw to na około 850. Czysta gra pozwoli im dojść do 1000 i zadawać kilka procent więcej obrażeń niż nowy gracz. (Domyślnie: 1000)  
:::

ttt_karma_max  
:::info  
Maksymalna karma, jaką może mieć gracz. Zwiększenie powyżej 1000 nie daje bonusu do obrażeń dla karmy 1100, ale daje "bufor" przed karą za obrażenia. (Domyślnie: 1000)  
:::

ttt_karma_ratio  
:::info  
Współczynnik obrażeń używany do obliczenia, ile karmy ofiary jest odejmowane od napastnika. (Domyślnie: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Wszystkie kary karmy bazują na zadanych obrażeniach. Kara za zabójstwo to dodatkowa "ilość obrażeń" zadanych przy zabiciu kogoś. Jeśli jest ustawiona na 100, a trafisz kogoś w głowę z karabinu, kara będzie jak za 200 obrażeń. (Domyślnie: 15)  
:::

ttt_karma_round_increment  
:::info  
Podstawowa ilość karmy, którą wszyscy "leczą" na koniec każdej rundy. (Domyślnie: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Jeśli gracz nie zranił ani nie zabił współgracza w tej rundzie, dostaje dodatkowe 30 karmy. (Domyślnie: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Jak ttt_karma_ratio, ale dla nagrody karmy za zadanie obrażeń zdrajcy. Domyślnie zadanie obrażeń zdrajcy jest nagradzane około 1/4 kary, którą dostałbyś za zranienie niewinnego z pełną karmą. (Domyślnie: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bonus karmy za zabicie zdrajcy. (Domyślnie: 40)  
:::

ttt_karma_low_autokick  
:::info  
Automatyczne wyrzucanie graczy z niską karmą na koniec rundy. (Domyślnie: 1)  
:::

ttt_karma_low_amount  
:::info  
Poziom karmy, przy którym gracze są wyrzucani na koniec rundy. (Domyślnie: 300)  
:::

ttt_karma_low_ban  
:::info  
Jeśli włączone, oprócz wyrzucenia, gracze są też banowani. Nie działa, jeśli autokick jest wyłączony. (Domyślnie: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Czas bana w minutach. (Domyślnie: 60)  
:::

ttt_karma_persist  
:::info  
Przechowuje karmę gracza w pamięci trwałej na koniec rundy lub przy rozłączeniu. Po ponownym połączeniu karma jest wczytywana, więc utrzymuje się nawet po zmianie mapy. (Domyślnie: 1)  
:::

ttt_karma_clean_half  
:::info  
Gdy karma gracza jest powyżej poziomu startowego (czyli karma max jest ustawiona wyżej), wszystkie wzrosty karmy są zmniejszane proporcjonalnie do tego, jak bardzo karma przekracza poziom startowy. Im wyższa karma, tym wolniej rośnie. (Domyślnie: 0.25)  
:::

Gdy zmienisz wszystkie zmienne według swoich potrzeb, kolejnym krokiem jest zapisanie zmian.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Po tym możesz uruchomić swój serwer!

<InlineVoucher />