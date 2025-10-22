---
id: conan-configuration
title: "Conan Exiles: Skonfiguruj swój własny serwer"
description: "Dowiedz się, jak dostosować ustawienia serwera Conan Exiles dla optymalnej rozgrywki i bezpieczeństwa → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Konfiguracja Serwera

Serwery Conan Exiles można konfigurować bardzo szczegółowo. Konfiguracja serwera odbywa się za pomocą plików konfiguracyjnych. Znajdziesz je w panelu administracyjnym serwera gier w zakładce Configs. Otwórz plik konfiguracyjny **ServerSettings.ini**.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



Poniżej znajdziesz pogrupowany przegląd wszystkich istotnych komend, które możesz wykorzystać do dowolnej konfiguracji swojego serwera zgodnie z własnymi preferencjami. Niektóre komendy mogą nie być domyślnie obecne w pliku Config. Takie komendy można po prostu dodać później.

<InlineVoucher />

## Ogólne

W ustawieniach ogólnych znajdziesz wszystkie istotne komendy do personalizacji nazwy serwera, haseł, antycheata.

| Opcja                             | Opis                                                        | Komenda w konfiguracji         |
| -------------------------------- | ----------------------------------------------------------- | ------------------------------ |
| Nazwa serwera                    | Nazwa Twojego serwera.                                      | ServerName="..."               |
| Maksymalna liczba graczy         | Maksymalna liczba graczy                                    | Zależne od pakietu             |
| Wiadomość dnia                   | Wiadomość dnia                                              |                                |
| Hasło serwera                   | Tutaj możesz zmienić hasło do serwera                       | ServerMessageOfTheDay="..."    |
| Hasło administratora            | Dostęp do zostania adminem. Więcej w poradniku Zostań adminem | AdminPassword="..."            |
| Włączony BattlEye               | Włącza ochronę antycheat BattlEye                           | IsBattlEyeEnabled=             |
| Włączone PVP                   | Włącza lub wyłącza PVP. 1 = włączone, 0 = wyłączone         | PVPEnabled=                    |
| Ograniczenie czasowe PvP       | Po włączeniu tej opcji walka między graczami możliwa jest tylko w określonych godzinach | RestrictPVPTime=               |
| Włączony PvP Blitz             | Włącza lub wyłącza PVP Blitz. 1 = włączone, 0 = wyłączone (domyślnie) | PVPBlitzServer=                |
| Ograniczenie czasowe uszkodzeń budynków PvP | Po włączeniu tej opcji gracze mogą atakować i niszczyć budowle innych graczy tylko w określonych godzinach | RestrictPVPBuildingDamageTime= |
| Społeczność                    | Definiuje styl społeczności: 0=Brak, 1=Purysta, 2=Luźny, 3=Hard Core, 4=Role Playing, 5=Eksperymentalny | ServerCommunity=               |
| Region serwera                 | Wybór regionu serwera wpływa na filtrowanie serwera na liście. Wybierz swój region, aby gracze z tego samego regionu mogli łatwiej znaleźć serwer. 0 = Europa, 1 = Ameryka Północna, 2 = Azja, 3 = Australia, 4 = Ameryka Południowa, 5 = Japonia | serverRegion=                  |
| Brak własności                | Po włączeniu tej opcji na serwerze nie obowiązują zasady własności. Oznacza to, że wszyscy gracze mogą przeszukiwać wszystkie skrzynie, korzystać ze wszystkich maszyn, kopać wszystkie budynki itd. 1 = włączone, 0 = wyłączone (domyślnie) | NoOwnership=                   |
| Kontenery ignorują własność   | Po włączeniu tej opcji wszystkie kontenery są otwarte dla innych graczy. 1 = włączone, 0 = wyłączone | ContainersIgnoreOwnership=     |
| Możliwość uszkadzania budowli innych graczy | Po włączeniu tej opcji gracze mogą atakować i niszczyć budowle innych. 1 = włączone, 0 = wyłączone | CanDamagePlayerOwnedStructures= |
| Możliwość zadawania obrażeń graczom | Po włączeniu tej opcji gracze mogą być ranieni przez innych graczy. 1 = włączone, 0 = wyłączone | bCanBeDamaged=                 |
| Włącz burzę piaskową          | Włączenie tej opcji pozwala na okresowe przechodzenie burz piaskowych po Exiled Lands. | EnableSandStorm=               |
| Maksymalna wielkość klanu     | Ustawia maksymalną wielkość klanów na serwerze. Po osiągnięciu limitu nie można dołączyć nowych członków. | clanMaxSize=                   |
| Maksymalny poziom nagości     | Ustawia maksymalny poziom nagości na serwerze. Nadpisuje ustawienia klienta. Jeśli serwer ma "Brak nagości", nawet jeśli gracz ustawi klienta na "Pełna nagość", nie zobaczy nagości na serwerze. Jeśli serwer pozwala na pełną nagość, a klient jest ustawiony na częściową, klient wyświetli tylko częściową nagość. 0 = brak, 1 = częściowa, 2 = pełna | MaxNudity=                     |
| Głosowy czat na serwerze      | Określa, czy czat głosowy ma być włączony w grze. 1 = włączony, 0 = wyłączony | serverVoiceChat=               |



## Postęp

W ustawieniach postępu znajdziesz wszystkie istotne komendy do dostosowania doświadczenia XP, które gracze mogą zdobywać.

| Opcja                       | Opis                                                        | Komenda w konfiguracji      |
| --------------------------- | ----------------------------------------------------------- | --------------------------- |
| Mnożnik XP gracza           | Mnoży wszystkie typy XP, które gracze otrzymują. Pozwala dostosować postęp gracza dla wszystkich aktywności. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=     |
| Mnożnik XP za czas          | Conan Exiles daje graczom XP pasywnie za przetrwanie. Ta komenda mnoży szybkość zdobywania tego XP. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=     |
| Mnożnik XP za zabójstwa     | Mnoży ilość XP za zabijanie potworów i graczy. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=     |
| Mnożnik XP za zbieranie     | Mnoży ilość XP za zbieranie surowców. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier=  |
| Mnożnik XP za rzemiosło     | Mnoży ilość XP za tworzenie przedmiotów. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=    |



## Czas

W ustawieniach czasu znajdziesz wszystkie istotne komendy do regulacji czasu. Pozwala to na dowolne wydłużanie lub skracanie dni i nocy.

| Opcja                    | Opis                                                        | Komenda w konfiguracji   |
| ------------------------ | ----------------------------------------------------------- | ------------------------ |
| Prędkość cyklu dnia      | Mnoży prędkość całego 24-godzinnego cyklu dnia. Poszczególne części dnia można dostosować poniżej. Mnożnik jest stosowany dodatkowo do zmian poniżej. | DayCycleSpeedScale=      |
| Prędkość dnia            | Godziny dzienne w Conan Exiles to 7:00-16:59 czasu gry. Zmiana mnożnika wydłuża czas trwania tych godzin. | DayTimeSpeedScale=       |
| Prędkość nocy            | Godziny nocne to 19:00-4:59 czasu gry. Zmiana mnożnika wydłuża czas trwania nocy. | NightTimeSpeedScale=     |
| Prędkość świtu/zachodu  | Świt to 5:00-6:59, zachód słońca 17:00-18:59. Zmiana mnożnika wydłuża czas trwania tych okresów. | DawnDuskSpeedScale=      |
| Użyj mechanizmu doganiania czasu | Włącza lub wyłącza mechanikę doganiania czasu na serwerze. true = włączone, false = wyłączone. | UseClientCatchUpTime=    |
| Czas doganiania          | Aby nowi gracze mieli płynny start, Conan Exiles może wymusić na kliencie rozpoczęcie gry o określonej godzinie, niezależnie od czasu serwera. Nowe postacie zaczynają wtedy o tej godzinie i grają do momentu, aż serwer "dogoni" ich czas. Zalecamy nie ustawiać na godziny nocne. | ClientCatchUpTime=       |



## Przetrwanie

W ustawieniach przetrwania znajdziesz wszystkie istotne komendy do dostosowania parametrów przetrwania, np. ile życia ma gracz, jak szybko się regeneruje i wiele więcej.

| Opcja                                | Opis                                                        | Komenda w konfiguracji          |
| ----------------------------------- | ----------------------------------------------------------- | ------------------------------- |
| Mnożnik zdrowia gracza              | Mnoży bezpośrednio wartość zdrowia gracza. 0.5 = 50 HP, 1.0 = 100 HP (standard), 1.5 = 150 HP | PlayerHealthMultiplier=         |
| Prędkość regeneracji zdrowia        | Mnoży prędkość pasywnej regeneracji zdrowia. 0.5 = 2.5 HP/s, 1.0 = 5.0 HP/s (domyślnie), 1.5 = 7.5 HP/s | PlayerHealthRegenSpeedScale=    |
| Mnożnik wytrzymałości gracza        | Mnoży ilość wytrzymałości gracza. 0.5 = 50, 1.0 = 100 (domyślnie), 1.5 = 150 | PlayerStaminaMultiplier=        |
| Prędkość sprintu gracza             | Definiuje prędkość sprintu. 0.5 = 1 m/s, 1.0 = 2 m/s (domyślnie), 1.5 = 3 m/s | PlayerSprintSpeedScale=         |
| Mnożnik kosztu wytrzymałości        | Zwiększa lub zmniejsza zużycie wytrzymałości na aktywności | PlayerStaminaCostMultiplier=    |
| Mnożnik kosztu sprintu              | Zwiększa lub zmniejsza zużycie wytrzymałości podczas sprintu | PlayerStaminaCostSprintMultiplier= |
| Prędkość regeneracji wytrzymałości  | Mnoży prędkość pasywnej regeneracji wytrzymałości. 0 = brak utraty, 0.5 = 1.0 utraty na sekundę, 1.0 = 2.0 (domyślnie), 1.5 = 3.0 | PlayerStaminaRegenSpeedScale=   |
| Mnożnik aktywnego pragnienia gracza | Skaluje tempo aktywnego przyjmowania lub tracenia wody. 0 = brak utraty, 0.5 = 1.0/s, 1.0 = 2.0/s (domyślnie), 1.5 = 3.0/s | PlayerActiveThirstMultiplier=   |
| Mnożnik biernego pragnienia gracza  | Skaluje tempo biernego przyjmowania lub tracenia wody. 0 = brak utraty, 0.5 = 1.0/s, 1.0 = 2.0/s (domyślnie), 1.5 = 3.0/s | PlayerIdleThirstMultiplier=     |
| Mnożnik pragnienia offline          | Skaluje tempo przyjmowania lub tracenia wody podczas bycia offline. 0 = brak utraty, 0.5 = 1.0/s, 1.0 = 2.0/s (domyślnie), 1.5 = 3.0/s | PlayerOfflineThirstMultiplier=  |
| Mnożnik aktywnego głodu             | Skaluje tempo aktywnego przyjmowania lub tracenia jedzenia. 0 = brak utraty, 0.5 = 1.0/s, 1.0 = 2.0/s (domyślnie), 1.5 = 3.0/s | PlayerActiveHungerMultiplier=   |
| Mnożnik biernego głodu              | Skaluje tempo biernego przyjmowania lub tracenia jedzenia. 0 = brak utraty, 0.5 = 1.0/s, 1.0 = 2.0/s (domyślnie), 1.5 = 3.0/s | PlayerIdleHungerMultiplier=     |
| Mnożnik głodu offline               | Skaluje tempo przyjmowania lub tracenia jedzenia podczas bycia offline. 0 = brak utraty, 0.5 = 1.0/s, 1.0 = 2.0/s (domyślnie), 1.5 = 3.0/s | PlayerOfflineHungerMultiplier=  |
| Wylogowane postacie pozostają w świecie | Jeśli ustawione na True, ciała graczy pozostają w świecie w stanie nieświadomości, jeśli False, ciała są usuwane po wylogowaniu. (Domyślnie: True) | LogoutCharactersRemainInTheWorld= |
| Upuszczanie ekwipunku po śmierci  | Jeśli True, gracze tracą wyposażenie po śmierci. Jeśli False, gracze respawnują z całym ekwipunkiem. (Domyślnie: True) | DropEquipmentOnDeath=           |
| Upuszczanie przedmiotów z paska skrótów po śmierci | Jeśli True, gracze tracą przedmioty z paska skrótów po śmierci. Jeśli False, zachowują je po respawnie. (Domyślnie: True) | DropShortcutbarOnDeath=         |
| Upuszczanie plecaka po śmierci    | Jeśli True, gracze tracą zawartość plecaka po śmierci. Jeśli False, zachowują zawartość po respawnie. (Domyślnie: True) | DropBackpackOnDeath=            |
| Każdy może przeszukać ciało       | Jeśli True, każdy może przeszukać ciało martwego gracza. Jeśli False, tylko właściciel może to zrobić. (Domyślnie: True) | EverybodyCanLootCorpse=         |
| Mnożnik usuwania korupcji przez thralle | Zwiększenie przyspiesza usuwanie korupcji przez thralle. Obniżenie spowalnia ten proces. | ThrallCorruptionRemovalMultiplier= |
| Mnożnik zdobywania korupcji przez gracza | Mnoży ilość korupcji zdobywanej przez graczy.               | PlayerCorruptionGainMultiplier= |



## Walka

W ustawieniach walki znajdziesz wszystkie istotne komendy do regulacji obrażeń. Dotyczy to m.in. ile obrażeń zadaje gracz, ile może zablokować i wiele więcej.

| Opcja                          | Opis                                                        | Komenda w konfiguracji       |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------- |
| Mnożnik obrażeń gracza         | Mnoży ilość obrażeń zadawanych przez gracza. 0 = brak obrażeń, 0.5 = 10 obrażeń, 1.0 = 20 (domyślnie), 1.5 = 30 | PlayerDamageMultiplier=      |
| Mnożnik otrzymywanych obrażeń  | Mnoży ilość obrażeń otrzymywanych przez gracza. 0 = brak obrażeń, 0.5 = 10, 1.0 = 20 (domyślnie), 1.5 = 30 | PlayerDamageTakenMultiplier= |
| Mnożnik obrażeń minionów       | Mnoży obrażenia zadawane przez thralle i zwierzęta. 0 = brak, 0.5 = 10, 1.0 = 20 (domyślnie), 1.5 = 30 | MinionDamageMultiplier=      |
| Mnożnik otrzymywanych obrażeń minionów | Mnoży obrażenia otrzymywane przez thralle i zwierzęta. 0 = brak, 0.5 = 10, 1.0 = 20 (domyślnie), 1.5 = 30 | MinionDamageTakenMultiplier= |
| Mnożnik obrażeń NPC            | Mnoży obrażenia zadawane przez NPC i potwory. 0 = brak, 0.5 = 10, 1.0 = 20 (domyślnie), 1.5 = 30 | NPCDamageMultiplier=         |
| Mnożnik otrzymywanych obrażeń NPC | Mnoży obrażenia otrzymywane przez NPC i potwory.             | NPCDamageTakenMultiplier=    |
| Mnożnik zdrowia NPC            | Zwiększa zdrowie wszystkich NPC.                            | NPCHealthMultiplier=         |
| Mnożnik respawnu NPC           | Mnoży szybkość respawnu NPC po śmierci. Uwaga: wiele NPC *NIE* respektuje tę wartość. 0 = brak respawnu (nietestowane), 0.5 = 15 sekund, 1.0 = 30 sekund (domyślnie), 1.5 = 45 sekund | NPCRespawnMultiplier=        |
| Mnożnik trwałości              | Modyfikuje ilość utraty trwałości przedmiotów przy użyciu lub uszkodzeniu. Wpływa na trwałość broni, narzędzi i pancerza. 0 = niezniszczalne, 0.5 = 5 utraty na uderzenie, 1.0 = 10 (domyślnie), 1.5 = 15 | DurabilityMultiplier=        |
| Mnożnik trwałości tarczy       | Zmienia ilość utraty trwałości tarczy podczas blokowania. 0 = niezniszczalne, 0.5 = 5 utraty na uderzenie, 1.0 = 10 (domyślnie), 1.5 = 15 | ShieldDurabilityMultiplier=  |
| Czas wybudzenia thralla        | Określa czas, przez jaki thrall pozostaje nieprzytomny. 0 = natychmiast (nietestowane), 300 = 5 minut, 600 = 10 minut (domyślnie), 900 = 15 minut | UnconsciousTimeSeconds=      |
| Obrażenia thralla podczas nieprzytomności | Mnoży obrażenia otrzymywane przez thralla podczas nieprzytomności. | ConciousnessDamageMultiplier= |
| Czas życia awatara             | Określa, jak długo awatar może pozostać żywy w świecie.    | AvatarLifetime=              |
| Wyłącz awatary                | True: awatary nie mogą być przywoływane na serwerze, False: mogą być przywoływane | AvatarsDisabled=             |
| Czas przywołania awatara       | Czas potrzebny na przywołanie awatara.                      | AvatarSummonTime=            |
| Mnożnik czasu trwania kopuły awatara | Określa, jak długo trwają kopuły awatarów.                   | AvatarDomeDurationMultiplier= |
| Wyłącz powiadomienia o roszczeniach ziemi | Wyłącza powiadomienia o roszczeniach ziemi. True: wyłącza, False: włącza | DisableLandclaimNotifications= |



## Zbieranie

W ustawieniach zbierania znajdziesz wszystkie istotne komendy do dostosowania zbiorów. Dotyczy to m.in. szybkości farmienia, częstotliwości odradzania zasobów itd.

| Opcja                            | Opis                                                        | Komenda w konfiguracji       |
| -------------------------------- | ----------------------------------------------------------- | ---------------------------- |
| Współczynnik psucia się przedmiotów | Wpływa na czas, przez jaki jedzenie pozostaje świeże (mniejsze wartości = dłuższy czas). 0 = nigdy się nie psuje, 0.5 = 4 minuty, 1.0 = 2 minuty (domyślnie), 1.5 = 1 minuta | ItemSpoilRateScale=          |
| Mnożnik ilości zbieranych surowców | Mnoży ilość surowców zdobywanych podczas zbierania. 1.0 = 1 surowiec (domyślnie), 2.0 = 2 surowce | HarvestAmountMultiplier=     |
| Mnożnik szybkości odradzania zasobów | Mnoży szybkość odradzania zasobów po zebraniu. 0.5 = 7,5 minuty, 1.0 = 15 minut (domyślnie), 1.5 = 30 minut | ResourceRespawnSpeedMultiplier= |
| Mnożnik promienia roszczenia ziemi | Zwiększa lub zmniejsza promień roszczenia ziemi. Wpływa na odradzanie zasobów, NPC oraz możliwość roszczenia ziemi przez innych graczy. 0.5 = 10 m, 1.0 = 20 m (standard), 1.5 = 30 m | LandClaimRadiusMultiplier=   |



## Rzemiosło

W ustawieniach rzemiosła znajdziesz wszystkie istotne komendy do dostosowania tworzenia przedmiotów. Dotyczy to m.in. szybkości craftingu.

| Opcja                                | Opis                                                        | Komenda w konfiguracji          |
| ----------------------------------- | ----------------------------------------------------------- | ------------------------------- |
| Mnożnik czasu tworzenia             | Zwiększenie wydłuża czas tworzenia przedmiotów. Obniżenie skraca czas. | CraftingTimeMultiplier=         |
| Mnożnik czasu trenowania thralla    | Zwiększenie wydłuża czas trenowania thralla. Obniżenie skraca czas. | ThrallCraftingTimeMultiplier=   |
| Mnożnik czasu spalania paliwa       | Zwiększenie wydłuża czas spalania paliwa. Obniżenie skraca czas. | FuelBurnTimeMultiplier=         |
| Mnożnik szybkości tworzenia         | Mnoży szybkość tworzenia przedmiotów. Użycie Koła Bólu do konwersji thralli jest traktowane jako crafting. 0 lub mniej = natychmiast, 0.5 = 10 sekund, 1.0 = 20 sekund (domyślnie), 1.5 = 30 sekund | ItemConvertionMultiplier=       |
| Mnożnik obrażeń struktur            | Mnoży obrażenia zadawane przez struktury obronne (np. palisady). 0 = brak obrażeń (nietestowane), 0.5 = 10, 1.0 = 20 (domyślnie), 1.5 = 30 | StructureDamageMultiplier=      |
| Mnożnik otrzymywanych obrażeń struktur | Mnoży obrażenia otrzymywane przez struktury (ściany, stacje rzemieślnicze itd.). 0 = brak obrażeń (nietestowane), 0.5 = 10, 1.0 = 20 (domyślnie), 1.5 = 30 | StructureDamageTakenMultiplier= |
| Mnożnik zdrowia struktur            | Mnoży ilość zdrowia struktur. 0.5 = 500 HP, 1.0 = 1000 HP (domyślnie), 1.5 = 1500 HP | StructureHealthMultiplier=      |
| Mnożnik obciążenia gracza           | Mnoży ilość obciążenia dodawanego przez przedmioty. (Ustawienie na 0 nie wyłącza obciążenia) 0.5 = 2.5 wagi, 1.0 = 5.0 (domyślnie), 1.5 = 7.5 | PlayerEncumbranceMultiplier=    |
| Mnożnik kary za obciążenie          | Mnoży kary za obciążenie gracza. (Ustawienie na 0 nie wyłącza kar) 0.5 = 35% spowolnienia przy 99%, 1.0 = 70% (domyślnie), 1.5 = 125% | PlayerEncumbrancePenaltyMultiplier= |



## Porzucanie

W ustawieniach porzucania znajdziesz wszystkie istotne komendy do regulacji porzucania budynków.

| Opcja                         | Opis                                                        | Komenda w konfiguracji    |
| ----------------------------- | ----------------------------------------------------------- | ------------------------- |
| Wyłącz porzucanie budynków    | Jeśli włączone, wyłącza rozkład budynków w czasie.          | DisableBuildingAbandonment= |
| Mnożnik czasu rozkładu budynków | Zwiększenie wydłuża czas rozkładu budynków. Obniżenie skraca czas. | BuildingDecayTimeMultiplier= |



## Czatu

W ustawieniach czatu znajdziesz wszystkie istotne komendy do personalizacji czatu. Dotyczy to m.in. aktywacji czatu, promienia czatu lokalnego i maksymalnej długości wiadomości.

| Opcja             | Opis                                                        | Komenda w konfiguracji   |
| ------------------ | ----------------------------------------------------------- | ------------------------ |
| Promień czatu lokalnego | Ustawia promień, w jakim lokalny czat jest słyszalny wokół gracza (w centymetrach) | ChatLocalRadius=         |
| Maksymalna długość wiadomości | Ustawia maksymalną liczbę znaków w wiadomości na czacie.    | ChatMaxMessageLength=    |
| Czat globalny      | Pozwala włączyć lub wyłączyć globalny czat. W grze jest globalny kanał, w którym wszyscy mogą rozmawiać. | ChatHasGlobal=           |



## Oczyszczenie (Purge)

W ustawieniach oczyszczenia znajdziesz wszystkie istotne komendy do regulacji oczyszczenia, jego etapów itd.

| Opcja                           | Opis                                                        | Komenda w konfiguracji           |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------- |
| Włącz oczyszczenie             | Wyłączenie tej opcji całkowicie wyłącza zdarzenia oczyszczenia | EnablePurge=                    |
| Poziom oczyszczenia            | Zwiększenie wartości podnosi poziom trudności oczyszczenia. 0 wyłącza oczyszczenia | PurgeLevel=                     |
| -                             | Zwiększenie wartości podnosi liczbę oczyszczeń w ciągu dnia. Faktyczna liczba zależy też od innych opcji poniżej | PurgePeriodicity=               |
| -                             | Po włączeniu tej opcji oczyszczenia są ograniczone do określonych godzin | RestrictPurgeTime=              |
| -                             | Wartość 0000 oznacza godzinę 00:00 jako koniec dnia roboczego | PurgeTimeWeekdayEnd=            |
| -                             | Wartość 0000 oznacza godzinę 00:00 jako początek dnia roboczego | PurgeTimeWeekdayStart=          |
| -                             | Wartość 0000 oznacza godzinę 00:00 jako koniec weekendu      | PurgeTimeWeekendEnd=            |
| -                             | Wartość 0000 oznacza godzinę 00:00 jako początek weekendu    | PurgeTimeWeekendStart=          |
| -                             | Wartość 0830 oznacza godzinę 08:30 jako koniec dnia roboczego | PurgeRestrictionWeekdayEnd=     |
| -                             | Wartość 2200 oznacza godzinę 22:00 jako koniec weekendu      | PurgeRestrictionWeekdayStart=   |
| -                             | Wartość 1800 oznacza godzinę 18:00 jako początek weekendu    | PurgeRestrictionWeekendStart=   |
| Czas przygotowania oczyszczenia | Zwiększenie wydłuża czas (w minutach) między ostrzeżeniem o oczyszczeniu a jego rozpoczęciem. | PurgePreparationTime=           |
| Czas trwania oczyszczenia      | Zwiększenie wydłuża maksymalny czas trwania oczyszczenia. Jeśli zabijesz wszystkie fale, oczyszczenie może zakończyć się wcześniej | PurgeDuration=                  |
| Minimalna liczba graczy online | Zwiększenie powoduje, że oczyszczenia występują tylko, gdy jest ustawiona liczba graczy online. Jeśli ustawione na zero, oczyszczenie zaatakuje każdy klan powyżej progu (offline purge). | MinPurgeOnlinePlayers=          |
| Pozwól na budowanie podczas oczyszczenia | Jeśli włączone, budowanie jest dozwolone podczas oczyszczenia. | AllowBuilding=                  |
| Wartość wyzwalająca oczyszczenie | Zwiększenie podnosi ilość różnych działań klanów lub graczy potrzebnych do wyzwolenia oczyszczenia. Im wyższa wartość, tym dłużej klan musi być aktywny. | ClanPurgeTrigger=               |
| Interwał aktualizacji licznika oczyszczenia | Okres, w którym sumowane są punkty oczyszczenia klanu. Niższe wartości szybciej podnoszą licznik. | ClanScoreUpateFrenquency=       |
| -                             | Zwiększenie podnosi obrażenia zadawane przez NPC podczas oczyszczenia. Przykłady: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier= |



## Zwierzęta i głód

W ustawieniach zwierząt i głodu znajdziesz wszystkie istotne komendy dotyczące zużycia głodu przez zwierzęta. Dotyczy to m.in. ile i jak szybko go zużywają.

| Opcja                              | Opis                                                        | Komenda w konfiguracji       |
| --------------------------------- | ----------------------------------------------------------- | ---------------------------- |
| Włącz system głodu dla thralli    | Włącza lub wyłącza system głodu dla thralli.                | ToggleHungerSystemThralls=   |
| Włącz system głodu dla zwierząt   | Włącza lub wyłącza system głodu dla zwierząt.               | ToggleHungerSystemPets=      |
| Wartość odżywcza jedzenia         | Ilość odżywienia, jaką towarzysz otrzymuje z jedzenia.      | FoodNutritionValue=          |
| Czas głodu w minutach             | Czas w minutach, w którym wskaźnik głodu spada z 100 do 0. Domyślnie 10080 | StarvationTimeInMinutes=     |
| Maksymalna kara za obrażenia z głodu | Gdy wskaźnik głodu spada do 0, towarzysz zaczyna tracić zdrowie. Ta wartość określa maksymalną utratę zdrowia w procentach (1 = 100%). | StarvationDamagePenaltyCap=  |
| Mnożnik czasu craftingu w zagrodzie | Mnoży szybkość craftingu w zagrodach dla zwierząt.           | AnimalPenCraftingTimeMultiplier= |
| Mnożnik zasięgu pojemnika na jedzenie | Mnoży zasięg, w jakim pojemniki na jedzenie mogą karmić towarzyszy. | FeedBoxRangeMultiplier=      |
| Dieta wyłączna                   | Określa, czy towarzysze jedzą wyłącznie przedmioty z listy diety. Wyłączone oznacza, że jedzą też inne jedzenie poza dietą. | ExclusiveDiet=               |

<InlineVoucher />