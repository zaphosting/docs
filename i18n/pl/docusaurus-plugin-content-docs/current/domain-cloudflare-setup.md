---
id: domain-cloudflare-setup
title: "Domena: Konfiguracja domeny z Cloudflare"
description: "Dowiedz się, jak zwiększyć bezpieczeństwo i wydajność swojej strony dzięki Cloudflare i domenom ZAP-Hosting → Sprawdź teraz"
sidebar_label: Konfiguracja Cloudflare
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Cloudflare to bardzo popularny dostawca CDN (Content Delivery Network), który wzmacnia Twoje strony internetowe poprzez lepszą ochronę bezpieczeństwa, łagodzenie ataków DDoS oraz oferuje łatwe zarządzanie przez swój panel główny. Ten poradnik pokaże Ci, jak skonfigurować domenę ZAP-Hosting, aby działała z Cloudflare, korzystając z ExpertDNS i zmieniając serwery nazw.

## Przygotowanie
Aby skorzystać z tego poradnika, potrzebujesz:
- Domeny na swoim koncie ZAP-Hosting
- Konta w Cloudflare

## Krok 1: Włączenie opcji ExpertDNS

Zacznij od przejścia do panelu administracyjnego swojej domeny na koncie ZAP-Hosting. Znajdź opcję **ExpertDNS** i włącz ją, zaznaczając checkbox, a następnie kliknij zapisz.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Krok 2: Konfiguracja domeny w Cloudflare

Kolejne kroki wykonasz w Cloudflare, więc zaloguj się na swoje konto Cloudflare. Po zalogowaniu dodaj swoją stronę do panelu głównego, postępując zgodnie z instrukcjami podanymi przez Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Gdy dojdziesz do kroku 4, otrzymasz serwery nazw, które musisz ustawić.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Przejdź do panelu administracyjnego swojej domeny i otwórz sekcję **ExpertDNS**. Usuń domyślne serwery nazw ZAP-Hosting i wstaw te, które podał Ci Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Pamiętaj, aby zapisać zmiany po ich wprowadzeniu.

## Krok 3: Finalizacja konfiguracji w Cloudflare

Wróć do panelu głównego Cloudflare. Na stronie konfiguracji domeny powinieneś zobaczyć przycisk, który wymusi ponowne sprawdzenie serwerów nazw przez Cloudflare.

:::info
Zmiany serwerów nazw mogą zostać rozpoznane nawet do 24 godzin, ale zwykle dzieje się to dużo szybciej.
:::

Gdy Cloudflare potwierdzi zmiany, otrzymasz maila z informacją, że konfiguracja jest gotowa. Możesz też sprawdzić to w panelu Cloudflare – poprawna konfiguracja pokaże status **Active** przy Twojej domenie.

Gratulacje! Pomyślnie zintegrowałeś swoją domenę z Cloudflare, zyskując lepszą wydajność, bezpieczeństwo i łatwiejsze zarządzanie swoją stroną.

<InlineVoucher />