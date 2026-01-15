---
id: hytale-death-penalty
title: "Hytale: Zmiana kary za śmierć"
description: "Dowiedz się, jak działa kara za śmierć na Twoim serwerze Hytale → Sprawdź teraz"
sidebar_label: Zmiana kary za śmierć
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Na serwerze Hytale **kara za śmierć** określa, jak gracze są dotknięci po zgonie. To ustawienie kontroluje, w jakim stopniu postęp gracza, przedmioty, wytrzymałość lub inne konsekwencje rozgrywki są stosowane po śmierci.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest wciąż w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się dalej zmieniać.

:::

<InlineVoucher />


## Dostępne ustawienia kary za śmierć
Ustawienia kary za śmierć kontrolują, jak śmierć gracza wpływa na zawartość ekwipunku i wytrzymałość przedmiotów. Te opcje pozwalają określić, czy przedmioty są zachowywane, częściowo tracone, czy całkowicie upuszczane, a także jak bardzo przedmioty tracą wytrzymałość po śmierci.

Dostępne opcje konfiguracyjne to:

**ItemsLossMode**  
To ustawienie definiuje ogólne zachowanie utraty przedmiotów po śmierci gracza.  
Obsługuje następujące wartości:

- `None` – Gracze zachowują cały ekwipunek po śmierci  
- `All` – Wszystkie przedmioty są upuszczane po śmierci  
- `Configured` – Utrata przedmiotów jest określana przez ustawienia procentowe  

**ItemsAmountLossPercentage**  
Ta wartość jest stosowana tylko, gdy `ItemsLossMode` jest ustawione na `Configured`.  
Określa, jaki procent każdego stosu przedmiotów jest usuwany po śmierci.  
Na przykład wartość `50.0` oznacza, że połowa każdego stosu zostaje utracona.

**ItemsDurabilityLossPercentage**  
To ustawienie kontroluje, ile wytrzymałości tracą przedmioty po śmierci gracza.  
Wartość jest wyrażona jako procent aktualnej wytrzymałości przedmiotu i pozwala na konsekwencje śmierci bez całkowitego usuwania przedmiotów.

Razem te ustawienia dają precyzyjną kontrolę nad tym, jak surowa lub łagodna ma być kara za śmierć na serwerze.  
Dobrze dobrane wartości zapewniają zbalansowane doświadczenie, dopasowane do zamierzonego poziomu trudności i stylu gry na serwerze.



## Konfiguracja kary za śmierć

Ustawienia kary za śmierć znajdują się w głównym pliku `config.json` Twojego serwera. Wartości te są odczytywane podczas uruchamiania serwera i obowiązują globalnie dla wszystkich graczy.

W pliku konfiguracyjnym ustawienia związane ze śmiercią są częścią konfiguracji rozgrywki. Aby dodać lub zmodyfikować karę za śmierć, znajdź następującą linię w `config.json`:

```
"GameplayConfig": "Default",
```

Ten wpis definiuje aktywny profil konfiguracji rozgrywki. Konfiguracja kary za śmierć jest umieszczona bezpośrednio pod tą linią jako nowy blok. Po znalezieniu dodaj blok konfiguracji śmierci, aby określić, jak obsługiwane są respawny i utrata przedmiotów:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

Poniższy przykład pokazuje typową konfigurację, gdzie utrata przedmiotów i wytrzymałości jest częściowo stosowana po śmierci:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

W tej konfiguracji serwer używa trybu utraty `Configured`, co oznacza, że utrata przedmiotów jest kontrolowana procentowo.  
Po śmierci gracza połowa każdego stosu przedmiotów zostaje usunięta, a przedmioty tracą 25% swojej aktualnej wytrzymałości.

Jeśli nie chcesz, aby w ogóle następowała utrata przedmiotów, tryb utraty można ustawić na `None`, wtedy wartości procentowe są ignorowane:

```
{
  "ItemsLossMode": "None"
}
```

Dla bardziej surowego doświadczenia, gdzie wszystkie przedmioty są upuszczane po śmierci, konfigurację można ustawić tak:

```
{
  "ItemsLossMode": "All"
}
```

Po zmianie `config.json` serwer musi zostać zrestartowany, aby zmiany zaczęły działać.  
Zalecamy sprawdzenie działania w grze po restarcie, aby upewnić się, że kara za śmierć odpowiada zamierzonemu poziomowi trudności.



## Podsumowanie

Po skonfigurowaniu kary za śmierć masz teraz jasny obraz, jak śmierć gracza jest obsługiwana na Twoim serwerze Hytale. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />