---
id: dedicated-windows-2022
title: "Serwer dedykowany: Instalacja Windows Server 2022"
description: "Dowiedz się, jak zainstalować i skonfigurować Windows Server na swoim serwerze dedykowanym, aby uzyskać optymalną wydajność i bezpieczeństwo → Sprawdź teraz"
sidebar_label: Windows Server 2022
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Poniżej znajdziesz krok po kroku instrukcję, jak zainstalować i skonfigurować system operacyjny Windows Server na swoim serwerze dedykowanym. Postępuj zgodnie z tymi wskazówkami, aby poprawnie zainstalować system i wykorzystać go w pełni.

:::info Windows Server 2022
Kroki instalacji i demonstracja w tym poradniku bazują na systemie Windows Server 2022 (wygląd z 2019 - ten sam design). Starsze wersje systemu mogą różnić się strukturą i wyglądem, ale procedura jest podobna.
:::

:::warning Dostępna nowsza wersja / Szczegóły EOL

Najnowszą wersją Windows Server od Microsoft jest wersja [2025](dedicated-windows.md). Zalecamy korzystanie z najnowszej wersji do długoterminowych projektów.

Wsparcie dla starszych wersji Windows Server zostanie w końcu zakończone. Oto terminy dla wersji 2022:

- Wsparcie aktywne: 13.06.2026
- Wsparcie bezpieczeństwa: 14.10.2031

:::

<InlineVoucher />

## Przygotowanie
Do instalacji i konfiguracji systemu operacyjnego najpierw musisz zamontować odpowiedni plik ISO systemu. Można to zrobić na kilka sposobów:

1. Montowanie podczas początkowej konfiguracji
2. Montowanie przez iLO (Virtual Media)
3. Montowanie przez iLO (Remote Console)

Jeśli nie masz jeszcze doświadczenia z montowaniem plików ISO, najlepiej zajrzyj do naszego [poradnika początkowej konfiguracji](dedicated-setup.md) lub [poradnika własnego ISO](dedicated-iso.md).

## Instalacja
Aby zainstalować Windows Server, potrzebujesz pliku ISO wybranej wersji. W naszym panelu głównym możesz wybrać wersję Windows, którą chcesz zainstalować. Alternatywnie możesz użyć własnego pliku ISO — mamy do tego poradnik [Własne ISO](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Jeśli na konsoli zdalnej pojawi się ten ekran, oznacza to, że ISO zostało poprawnie załadowane i możemy rozpocząć instalację.
Wybierz preferowany język i kliknij „Dalej”, aby kontynuować.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Kliknij „Zainstaluj teraz”, aby rozpocząć proces instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

Windows poprosi teraz o klucz produktu. Wpisz go, jeśli go posiadasz.

:::note
Nie sprzedajemy licencji Windows — klucz musisz kupić samodzielnie.
:::

Klucze produktu Windows możesz kupić w różnych sklepach online. Upewnij się, że kupujesz ważny klucz dla swojej wersji Windows, bo jest ich kilka.
Na przykład w Windows Server 2022 są dwie edycje: standardowa i datacenter.
Jeśli nie jesteś pewien, czego dokładnie potrzebujesz, kliknij „Nie mam klucza produktu” — klucz możesz dodać później.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Teraz wybierz wersję, którą chcesz zainstalować.
Upewnij się, że wybierasz właściwą wersję, bo później nie da się tego zmienić.
Pamiętaj też, by wybrać wersję z „(Desktop Experience)”, inaczej Windows będzie działał w trybie konsolowym.
Po wyborze zaznacz wersję i kliknij „Dalej”.

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Zaakceptuj warunki i kliknij „Dalej”.

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Wybierz „Niestandardowa”, jeśli chcesz wykonać czystą instalację Windows. Opcja „Aktualizacja” jest dostępna np. przy przejściu z 2016 na 2022.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

W kolejnym kroku musisz utworzyć partycje na serwerze dedykowanym. Zazwyczaj nie powinno być jeszcze żadnych partycji. Jeśli są, zaznacz je i kliknij „Usuń”.

Możesz utworzyć kilka mniejszych partycji lub jedną dużą. Jeśli tworzysz mniejsze, zalecamy, by główna partycja Windows miała co najmniej 50 GB.
Kliknij „Nowy”, aby utworzyć partycję.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Jeśli chcesz jedną dużą partycję, po prostu kliknij „Zastosuj”. Instalator automatycznie wybierze największy możliwy rozmiar.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

Windows wymaga małej partycji systemowej — zaakceptuj to klikając „OK”.

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Jeśli wszystko jest OK, wybierz partycję, na której chcesz zainstalować Windows i kliknij „Dalej”.
Instalator Windows wykona resztę sam — to może potrwać kilka minut.
Nie musisz nic robić, aż instalacja się zakończy.

## Konfiguracja

Po zakończeniu instalacji Windows poprosi o ustawienie hasła.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Ustaw tam swoje hasło.

:::info
Zalecamy wybrać silne hasło ze znakami specjalnymi.

Jeśli zapomnisz hasła, nie ma możliwości jego odzyskania, więc koniecznie je zapisz.
:::

Po ustawieniu hasła trafisz na ekran blokady Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Aby się zalogować, naciśnij kombinację klawiszy `CTRL + ALT + DELETE`. Możesz to zrobić łatwo przez konsolę zdalną.
(Znajdziesz tę opcję w konsoli Java w „Klawiatura”)
Zaloguj się teraz swoim hasłem.

W kolejnym kroku musisz włączyć Pulpit zdalny, aby łatwo łączyć się z serwerem.
Otwórz Eksplorator Windows i kliknij prawym przyciskiem na „Ten komputer”.

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Wybierz „Właściwości”.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Otwórz „Ustawienia zdalne”.

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Zaakceptuj informacje o zaporze sieciowej klikając „OK” i naciśnij „Zastosuj”.

Teraz otwórz Pulpit zdalny na swoim komputerze i wpisz adres IP z panelu ZAP.
Nazwa użytkownika to zawsze Administrator, a hasło to to, które ustawiłeś wcześniej.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Możesz zignorować ostrzeżenie o certyfikacie, zaznacz „Nie pytaj ponownie przy połączeniach z tym komputerem”.
Potwierdź wszystko klikając „Tak”.

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

Pulpit zdalny połączy się teraz z Twoim serwerem dedykowanym i możesz go używać.
Konfiguracja sieci jest automatycznie ustawiana przez DHCP, więc nie musisz nic więcej zmieniać.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Masz pytania lub problemy? Nasze wsparcie chętnie Ci pomoże!
:::

## Podsumowanie
Gratulacje, pomyślnie zainstalowałeś system Windows Server 2022 na swoim serwerze dedykowanym. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />