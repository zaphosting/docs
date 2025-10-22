---
id: contribution-guides
title: Proces tworzenia poradników
description: "Dowiedz się, jak tworzyć wartościowe, oryginalne poradniki do ZAP-Docs i pomagać użytkownikom dzięki jasnym, praktycznym treściom → Sprawdź teraz"
sidebar_label: Proces tworzenia poradników
---

![Baner poradników](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Na tej stronie poznasz proces tworzenia poradników do naszych ZAP-Docs. Proces jest opisany chronologicznie, więc polecamy zacząć właśnie tutaj.

## Krok 1: Propozycja treści

Pierwszy etap to stworzenie zgłoszenia propozycji przez nasze repozytorium na GitHub. Musisz podać szczegóły dotyczące zmian i ulepszeń, które planujesz wprowadzić.

Upewnij się, że Twój pomysł nie jest duplikatem istniejącego poradnika lub propozycji i że naprawdę uważasz, że będzie przydatny dla początkujących lub bardziej zaawansowanych użytkowników. Istniejące propozycje możesz zobaczyć na [stronie Issues](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
Zalecamy zapoznanie się z naszymi [Wytycznymi](contribution-guides-guidelines.md), aby zrozumieć styl i sposób tworzenia dokumentacji, do którego dążymy.
:::

### Jakie tematy nas interesują?

W naszych poradnikach szukamy szerokiego wachlarza praktycznych i wysokiej jakości poradników dotyczących produktów, usług oraz oprogramowania open-source dostępnego przez ZAP-Hosting lub powiązanego z naszymi usługami. Jeśli potrzebujesz pomysłów lub inspiracji, sprawdź nasze strony w ZAP-Docs, aby poczuć nasz styl pisania i rodzaj publikowanych treści.

Jak wspomniano we wstępie, wszystkie tworzone treści muszą być oryginalne, aby spełniać przepisy prawa autorskiego. Zabronione jest nieautoryzowane użycie narzędzi AI/generatywnych i/lub innych elementów własności intelektualnej. Nasze poradniki mają dostarczać wysokiej jakości informacje w formie krok po kroku, tak aby czytelnik rozumiał, co robi i jak to zrobić, z celem edukacyjnym i dostarczeniem rozwiązania.

#### Lista poszukiwanych poradników

Poniżej znajdziesz przydatną listę świetnych propozycji nowych poradników, które możesz chcieć napisać. Niektóre tematy mogą mieć dodatkową premię za nagrodę. [Dostęp do listy ręcznie tutaj](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Pamiętaj, że to tylko pomysły, nie musisz się ich kurczowo trzymać – Twoje propozycje mogą być kreatywne, jak wspomniano wcześniej.
:::

### Składanie propozycji

Jeśli jesteś pewny, że Twoja propozycja pasuje do naszej dokumentacji, przejdź do naszego [repozytorium ZAP Docs na GitHub](https://github.com/zaphosting/docs) i otwórz zgłoszenie (issue) korzystając z szablonu **Contribution Suggestion**. Wypełnij wszystkie wymagane pola i potwierdź akceptację naszych Warunków Programu Współpracy, które znajdziesz w [Contribution Terms](contribution-terms.md).

:::caution
Upewnij się, że podałeś poprawnie swój ZAP ID, aby nagroda trafiła na właściwe konto!
:::

Po wysłaniu propozycji, staramy się odpowiedzieć w ciągu 3-5 dni bezpośrednio w Twoim zgłoszeniu na GitHub.

:::tip
**Masz problem?** Dołącz do naszego [Discorda ZAP-Hosting](https://zap-hosting.com/discord), gdzie my i społeczność ZAP chętnie Ci pomożemy. Możesz też napisać do nas przez [ticket na stronie](https://zap-hosting.com/en/customer/support/) i w treści podać "Contribution Program - Guides", aby trafić do zespołu ds. współpracy.
:::

W odpowiedzi podamy Ci dodatkowe uwagi lub szczegóły do poprawy. Jeśli pojawią się problemy, skontaktujemy się z Tobą bezpośrednio w zgłoszeniu.

## Krok 2: Pisanie poradnika

Podczas dodawania lub edytowania dokumentacji, pamiętaj o ścisłym przestrzeganiu naszych [Wytycznych](contribution-guides-guidelines.md), aby zachować spójność i wysoką jakość. W tej sekcji omówimy najlepsze praktyki i optymalny workflow tworzenia nowych treści oraz modyfikacji istniejących. Jeśli jesteś nowy na GitHub, skorzystaj z poniższych krótkich tutoriali, które pokażą Ci najprostszy sposób na edycję lub tworzenie treści w ZAP-Docs.

:::note
Upewnij się, że wcześniej stworzyłeś propozycję w naszym [repozytorium GitHub](https://github.com/zaphosting/docs) i została ona zatwierdzona przez członka zespołu ZAP Contribution, zanim zaczniesz pracę nad poradnikiem lub zmianami. Bez tego nie możemy zagwarantować nagrody.
:::

**Wymagania:**
- [Konto GitHub](https://github.com/)

Pierwszym krokiem jest stworzenie własnego forka repozytorium ZAP-Docs na GitHub. Zrób to, przechodząc do [repozytorium ZAP Docs](https://github.com/zaphosting/docs) i klikając przycisk **Fork** u góry strony.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Nazwij repozytorium zgodnie z zaakceptowaną propozycją i zaznacz opcję `Copy the master branch only`. Następnie kliknij utwórz i poczekaj kilka sekund na zakończenie forka.

Mając własny fork, możesz przejść do kolejnej sekcji, aby dokończyć swój wkład. Są dwie główne metody tworzenia treści: bezpośrednio przez stronę GitHub lub lokalnie przez klonowanie repozytorium. Pierwsza jest bardziej przyjazna dla użytkownika, druga pozwala testować Docusaurus lokalnie i widzieć zmiany na żywo.

:::tip
Dla początkujących lub osób bez doświadczenia z Git polecamy **Metodę 1** – pisanie przez stronę GitHub, bo jest prostsze, szybsze i nie wymaga lokalnej konfiguracji.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Metody tworzenia poradników

<Tabs>
<TabItem value="direct" label="Metoda 1: Bezpośrednio przez stronę GitHub" default>

Najłatwiejszym i polecanym sposobem tworzenia treści jest edycja przez stronę GitHub. Pokażemy Ci, jak stworzyć nowy poradnik i edytować istniejący przez stronę GitHub.

Wejdź do swojego forka ZAP Docs. Wszystkie poradniki znajdziesz w folderze **docs**.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

Pliki dokumentacji mają prostą konwencję nazewnictwa: pierwsze słowo to typ poradnika (zwykle gra, produkt lub sekcja), kolejne słowa to konkretna część. Polecamy zerknąć na naszą aktualną stronę [ZAP-Docs](https://zap-hosting.com/guides), by znaleźć odpowiednią kategorię. Na przykład `dedicated-windows.md` to sekcja serwera dedykowanego, system Windows.

Teraz musisz albo otworzyć istniejący plik poradnika, albo stworzyć nowy, w zależności od tego, czy aktualizujesz poradnik, czy tworzysz nowy. Skorzystaj z odpowiedniej zakładki poniżej, bo nowy poradnik wymaga dodatkowych przygotowań pliku.

<Tabs>
<TabItem value="direct_new" label="Stwórz nowy plik poradnika" default>

W tym przykładzie chcemy stworzyć poradnik o grze Rust, dotyczący komend dostępnych w grze. Sprawdzając stronę ZAP-Docs lub repozytorium, widzimy, że sekcja **Rust** już istnieje w kategorii serwerów gier. Na podstawie konwencji nazewnictwa i istniejących poradników, nowy plik powinien mieć nazwę `rust-commands.md`.

Aby stworzyć nowy plik, przejdź do [repozytorium GitHub](https://github.com/zaphosting/docs), otwórz folder **docs** i po prawej stronie kliknij **Add File**. W menu wybierz **Create new file**, co otworzy nową kartę.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

Na górze strony, w ścieżce pliku, wpisz nazwę pliku, w naszym przykładzie `rust-commands.md`.

:::info
Pamiętaj, aby dodać rozszerzenie `.md`, bo wszystkie poradniki są w formacie Markdown.
:::

Następnie dodaj kluczowe metadane na początku pliku. Najprościej skopiować je z innego pliku, np. `rust-plugins.md`, i dostosować wartości do nowego poradnika. Najważniejsze jest pole `id`, które **musi** odpowiadać nazwie pliku (bez `.md`).

W naszym przykładzie plik powinien wyglądać tak:
```
---
id: rust-commands
title: "Rust: Komendy admina"
description: "Informacje o komendach admina dla Rust od ZAP-Hosting"
sidebar_label: Komendy admina
services:
  - gameserver
---
```

:::note
Podczas przeglądu sprawdzamy metadane, więc jeśli masz z tym problem, nie przejmuj się i kontynuuj.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Edytuj istniejący plik poradnika" default>

W tym przypadku otwórz plik, który chcesz edytować. Na przykład `dedicated-linux-satisfactory.md` w folderze `/docs`. Po otwarciu zobaczysz podgląd w Markdown.

Kliknij ikonę edycji (ołówek) w prawym górnym rogu pliku, co otworzy nową kartę do edycji.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Kontynuuj: Tworzenie treści

Po przygotowaniu i otwarciu pliku możesz zacząć pisać treść zgodnie z zaakceptowaną propozycją. Zalecamy regularne zapisywanie lub commitowanie, aby nie stracić pracy.

:::tip Zabezpiecz swoją pracę
Podczas pisania regularnie commituj lub rób kopie, bo edytor GitHub nie ma autozapisów – zamknięcie karty lub awaria może spowodować utratę postępów.

Polecamy używać narzędzia Markdown **[StackEdit](https://stackedit.io/app#)**, które pozwala zapisywać postępy lokalnie i synchronizować z dyskiem lub kontami. Po skończeniu wystarczy skopiować i wkleić treść do pliku na GitHub i zatwierdzić.
:::

Możesz użyć przycisku **Preview** u góry okna edycji, aby przełączyć się na podgląd i z powrotem na edycję przez **Edit**.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Elementy Docusaurus
Pamiętaj, że niektóre elementy specyficzne dla Docusaurus, jak admonicje (`:::note`, `:::tip` itd.) czy zakładki, mogą nie wyświetlać się poprawnie w podglądzie na GitHub, bo nie są standardowym Markdownem. Będą jednak działać poprawnie podczas lokalnych testów i produkcji.
:::

:::info Przestrzegaj naszych Wytycznych
Zapoznaj się z [Wytycznymi](contribution-guides-guidelines.md) dotyczącymi Markdown, struktury, terminologii i innych zasad.
:::

Po wprowadzeniu zmian kliknij **Commit changes...**, co wywoła okno dialogowe.

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

Wpisz sensowny komunikat commit opisujący zmiany i, jeśli trzeba, rozszerzony opis. Potwierdź commit. Zmiany zostaną zapisane w Twoim forku. Teraz możesz przejść do sekcji **Submitting Content**, aby utworzyć Pull Request i przesłać treść do głównego repozytorium ZAP-Docs.

</TabItem>

<TabItem value="local" label="Metoda 2: Lokalnie przez IDE (klonowanie git)">

Możesz wolisz pisać lokalnie przez IDE lub edytor, np. Visual Studio Code. Pokażemy, jak stworzyć nowy poradnik i edytować istniejący lokalnie.

**Wymagania:**
- IDE, np. [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) lub inne narzędzie z Git

Najpierw sklonuj swoje repozytorium fork. Najprościej przez GitHub Desktop: wybierz **Add**, potem **Clone repository** i wybierz swój fork. Możesz też zrobić to bezpośrednio w IDE, jeśli ma Git.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Otwórz folder repozytorium w Visual Studio Code. W zakładce **Explorer** po lewej zobaczysz wszystkie foldery repozytorium.

Pliki dokumentacji mają prostą konwencję nazewnictwa: pierwsze słowo to typ poradnika (zwykle gra, produkt lub sekcja), kolejne słowa to konkretna część. Polecamy zerknąć na naszą aktualną stronę [ZAP-Docs](https://zap-hosting.com/guides), by znaleźć odpowiednią kategorię. Na przykład `dedicated-windows.md` to sekcja serwera dedykowanego, system Windows.

Teraz musisz albo otworzyć istniejący plik poradnika, albo stworzyć nowy, w zależności od tego, czy aktualizujesz poradnik, czy tworzysz nowy. Skorzystaj z odpowiedniej zakładki poniżej, bo nowy poradnik wymaga dodatkowych przygotowań pliku.

<Tabs>
<TabItem value="local_new" label="Stwórz nowy plik poradnika" default>

W tym przykładzie chcemy stworzyć poradnik o grze Rust, dotyczący komend dostępnych w grze. Sprawdzając stronę ZAP-Docs lub repozytorium, widzimy, że sekcja **Rust** już istnieje w kategorii serwerów gier. Na podstawie konwencji nazewnictwa i istniejących poradników, nowy plik powinien mieć nazwę `rust-commands.md`.

Otwórz folder `/docs` w IDE i stwórz nowy plik o odpowiedniej nazwie.

:::info
Pamiętaj, aby dodać rozszerzenie `.md`, bo wszystkie poradniki są w formacie Markdown.
:::

Następnie dodaj kluczowe metadane na początku pliku. Najprościej skopiować je z innego pliku, np. `rust-plugins.md`, i dostosować wartości do nowego poradnika. Najważniejsze jest pole `id`, które **musi** odpowiadać nazwie pliku (bez `.md`).

W naszym przykładzie plik powinien wyglądać tak:
```
---
id: rust-commands
title: "Rust: Komendy admina"
description: "Informacje o komendach admina dla Rust od ZAP-Hosting"
sidebar_label: Komendy admina
services:
  - gameserver
---
```

:::note
Podczas przeglądu sprawdzamy metadane, więc jeśli masz z tym problem, nie przejmuj się i kontynuuj.
:::

Ostatnim krokiem, aby nowa strona pojawiła się w sidebarze Docusaurus, jest dodanie jej do pliku `sidebar.js` w odpowiedniej sekcji. Ponieważ sekcja **Rust** już istnieje, znajdź ją przez `CTRL+F` i wpisz rust.

Pod ostatnim elementem dodaj nową linię z nazwą pliku, w naszym przykładzie `rust-commands`. Jeśli odpowiednia sekcja nie istnieje, możesz dodać ją według wzoru innych sekcji.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Pamiętaj, aby dodać przecinek (`,`) na linii przed nową linią, aby składnia była poprawna.
:::

</TabItem>

<TabItem value="local_existing" label="Edytuj istniejący plik poradnika" default>

Edycja istniejącego pliku jest bardzo prosta, nie musisz ustawiać całej struktury pliku.

Po prostu otwórz plik poradnika, który chcesz edytować w folderze `/docs` i możesz wprowadzać zmiany, które wcześniej zaproponowałeś i które zostały zaakceptowane.

</TabItem>
</Tabs>

#### Kontynuuj: Tworzenie treści

Po przygotowaniu pliku możesz pisać treść zgodnie z zaakceptowaną propozycją. Zalecamy regularne zapisywanie lub commitowanie, aby nie stracić pracy.

Możesz użyć skrótu `CTRL+SHIFT+V` lub kliknąć ikonę podglądu w prawym górnym rogu edytora, aby zobaczyć zmiany Markdown na żywo.

:::note Elementy Docusaurus
Pamiętaj, że niektóre elementy specyficzne dla Docusaurus, jak admonicje (`:::note`, `:::tip` itd.) czy zakładki, mogą nie wyświetlać się poprawnie w podglądzie na GitHub, bo nie są standardowym Markdownem. Będą jednak działać poprawnie podczas lokalnych testów i produkcji.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Przestrzegaj naszych Wytycznych
Zapoznaj się z [Wytycznymi](contribution-guides-guidelines.md) dotyczącymi Markdown, struktury, terminologii i innych zasad.
:::

Po zakończeniu zmian wypchnij commit do swojego forka i utwórz Pull Request. Możesz to zrobić przez GitHub Desktop (lub inne narzędzie Git), dodając tytuł i opis, a następnie klikając push.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Teraz możesz przejść do sekcji **Submitting Content**, aby utworzyć Pull Request i przesłać treść do głównego repozytorium ZAP-Docs.

:::tip
Polecamy też przeczytać opcjonalną sekcję **Testowanie lokalnej wersji**, którą możesz połączyć z lokalnym testowaniem, tworząc optymalny workflow z podglądem zmian na żywo. Nie jest to jednak konieczne.
:::

</TabItem>
</Tabs>

### Opcjonalnie: Testowanie lokalnej wersji

Przed utworzeniem ostatecznego Pull Requesta warto lokalnie zbudować i przetestować zmiany, aby upewnić się, że wszystko działa poprawnie. Zalecamy testowanie lokalne, aby przyspieszyć proces akceptacji Pull Requesta, ale nie jest to obowiązkowe.

:::tip
To **NIE** jest wymagane, bo automatycznie uruchamiamy build przy wysłaniu Pull Requesta. Jednak może Ci się przydać do debugowania i testów na żywo lokalnie.
:::

:::note
Jeśli korzystałeś z tutoriala do lokalnej edycji, możesz pominąć pierwszy krok klonowania repozytorium, bo już je masz.
:::

**Wymagania:**
- [Node.js v16.14 lub nowszy](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) lub [Git](https://git-scm.com/)

Najpierw sklonuj swoje repozytorium fork. Najprościej przez GitHub Desktop: wybierz **Add**, potem **Clone repository** i wybierz swój fork.

Możesz też użyć Git. Stwórz nowy folder, np. `Docs Test`. Wejdź do folderu i otwórz Git Bash (prawy klik i Git Bash na Windows). Skopiuj URL swojego forka z GitHub i wpisz:
```
git clone [your_url]
```

Teraz masz repozytorium lokalnie. Następnie pobierz wszystkie potrzebne moduły. Wejdź do folderu repozytorium, kliknij prawym i otwórz terminal (lub użyj terminala Git). Wpisz:
```
npm install
```

To może chwilę potrwać. Po zakończeniu pojawi się folder `node_modules`. Jeśli pojawią się błędy, prawdopodobnie nie masz zainstalowanego Node.js.

Na koniec uruchom lokalną wersję dokumentacji:
```
npm start
```

Po chwili lokalna wersja strony otworzy się automatycznie w domyślnej przeglądarce na porcie `3000`. To dokładnie tak, jak będzie wyglądać dokumentacja w produkcji, więc możesz testować wszystko, co chcesz!

Gdy będziesz zadowolony ze zmian, przejdź do kolejnej sekcji, aby utworzyć Pull Request i przesłać treść do głównego repozytorium.

## Krok 3: Przesyłanie treści

Gdy ukończysz swój wkład, który według Ciebie spełnia nasze wytyczne i jest najwyższej jakości, możesz utworzyć Pull Request. Zrób to, przechodząc do swojego forka repozytorium ZAP Docs, klikając tekst **Contribute** pod głównymi przyciskami i wybierając opcję utworzenia pull requesta.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Otworzy się nowa strona, gdzie zobaczysz swoje zmiany. Domyślnie opis zawiera małą listę kontrolną, by upewnić się, że wszystko zrobiłeś poprawnie. Możesz ją usunąć po zapoznaniu się, bo nie jest wymagana.

Następnie wpisz odpowiedni tytuł opisujący zmiany. W opisie koniecznie podaj/linkuj swoją propozycję, używając `#000` z numerem ID propozycji. Jeśli nie możesz jej znaleźć w menu, szybko przejdź do głównego [repozytorium ZAP Docs na GitHub](https://github.com/zaphosting/docs), wejdź w sekcję issues i znajdź swoją propozycję z numerem ID.

Po uzupełnieniu tytułu, opisu i sprawdzeniu zmian, kliknij przycisk, aby utworzyć pull request i przesłać go do naszego repozytorium.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Nasz system sprawdzi składnię i jakość zmian. Jeśli oba testy przejdą pomyślnie, Twój Pull Request zostanie przejrzany przez zespół ZAP-Docs w ciągu kilku dni.

Podczas przeglądu możemy poprosić Cię o poprawki lub sami wprowadzimy zmiany, jeśli uznamy to za stosowne. Po zatwierdzeniu zmian, Twój wkład będzie gotowy do publikacji.

## Krok 4: Publikacja zmian i wypłata nagrody

Po zaakceptowaniu Twojego Pull Requesta i wprowadzeniu ewentualnych poprawek, odpowiemy w Pull Request, podając kluczowe informacje o publikacji Twoich zmian oraz wypłacie nagrody za udany wkład.

:::info
Wysokość nagrody zależy od kilku czynników, przede wszystkim jakości i zakresu napisanej treści oraz innych kryteriów ocenianych przez Zespół ds. Współpracy ZAP. Więcej o kryteriach przeczytasz w [Rewards](contribution-rewards.md).
:::

Gratulacje za wkład w poradniki ZAP-Hosting! Doceniamy wszystkie Twoje zaangażowanie! 💚