---
id: contribution-blogs-guidelines
title: Wytyczne dotyczące bloga
description: "Dowiedz się, jak tworzyć wysokiej jakości, spójne wpisy na bloga, które angażują czytelników i rozwijają Twoje umiejętności pisarskie → Sprawdź teraz"
sidebar_label: Wytyczne
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

Aby zapewnić, że wszystkie wpisy na blogu ZAP-Hosting są spójne pod względem jakości i stylu, przygotowaliśmy zestaw wytycznych, których powinieneś przestrzegać tworząc treści w ramach naszego Programu Współtworzenia Bloga. Musisz ściśle stosować się do naszych wytycznych, aby Twoje propozycje i kolejne wersje były przetwarzane szybko. Co ważniejsze, zapewni to naszym czytelnikom lepsze i bardziej spójne doświadczenie wysokiej jakości podczas czytania naszych blogów.

Nasze wytyczne dotyczące współtworzenia bloga można podzielić na kilka głównych sekcji, które to:

- Struktura
- Styl
- Formatowanie
- Terminologia

## Struktura

Nasze wpisy na blogu w ramach programu współtworzenia powinny mieć stosunkowo spójną strukturę, która wzbudza zainteresowanie czytelnika oraz dostarcza informacji i nowości. Zespół ZAP Contribution będzie współpracować z Tobą, aby upewnić się, że Twoja struktura jest odpowiednia podczas tworzenia propozycji wpisu.

- **Tytuł strony** (H1)
- **Wprowadzenie** (H2) 
- **Przygotowanie** (H2)
- **Główny temat** (H2)
- Opcjonalnie: **Podtemat 1** (H3)
- Opcjonalnie: **Podtemat 2** (H3)
- ...
- Opcjonalnie: **Inny temat** (H2)
- **Podsumowanie** (H2)

:::info Użycie podtytułów (H3 & H4)
Zachęcamy do używania nagłówków H3, aby tworzyć podsekcje w ramach głównych sekcji H2, co pozwala lepiej zorganizować większe partie treści. Przykład można zobaczyć w sekcji **Główny temat** powyżej.

Jeśli używasz podtytułów, zwykle sens ma mieć co najmniej dwa lub więcej podtytułów w obrębie nadrzędnego nagłówka, w przeciwnym razie zazwyczaj nie ma sensu mieć tylko jeden podtytuł w ramach głównego nagłówka.
:::

:::info
Pamiętaj, że powyższe to ogólne wytyczne. Główna część Twojego wpisu może mieć inne nagłówki, w zależności od tego, co jest odpowiednie dla Twojej treści, ale wszystkie wpisy powinny konsekwentnie mieć tytuł, wprowadzenie i podsumowanie otaczające główną treść.
:::

### Tytuły

Tytuł Twojego wpisu na blogu powinien być krótki, jasny i chwytliwy, aby przyciągnąć uwagę czytelnika. Powinien dokładnie określać, o czym jest wpis, np. czy to nowości, czy porady i wskazówki? Przykładem dobrego tytułu może być: **Top 10 FiveM Police Scripts**.

### Wprowadzenie

Wprowadzenia do wpisów na blogu powinny być stosunkowo krótkie i na temat, zwykle obejmujące 1-2 zdania. W treści powinieneś krótko opisać omawiany temat i co najważniejsze wyjaśnić, co wpis przedstawi czytelnikowi, informując go o końcowym celu.

Przykład idealnego wprowadzenia do wpisu dotyczącego SteamCMD:

- **1. zdanie**: SteamCMD to niezbędne narzędzie potrzebne do instalacji serwerów dedykowanych dla wielu gier, w tym Palworld, Enshrouded i innych.
- **2. zdanie**: W tym wpisie na blogu przeanalizujemy proces pierwszej konfiguracji instalacji SteamCMD na Twoim serwerze Linux. W przykładach użyjemy Ubuntu, ale proces powinien być bardzo podobny dla innych dystrybucji.

Jak widać w przykładzie, krótko podsumowuje on istotne tematy wpisu i przedstawia ogólny cel dla czytelnika.

### Przygotowanie

Sekcja przygotowania jest przydatna do wyjaśnienia wszelkich niezbędnych wymagań, które czytelnik musi spełnić, aby móc podążać za wpisem. Mogą to być wymagania sprzętowe lub programowe, instrukcje dotyczące przygotowania oprogramowania, np. zapory sieciowej, lub po prostu wskazówki, jak zalogować się na serwer przez SSH lub RDP.

Zdecydowanie polecamy przeglądanie naszej strony [ZAP-Docs](https://zap-hosting.com/guides), aby znaleźć poradniki, które mogą obejmować lub odnosić się do kroków przygotowawczych, które planujesz uwzględnić. Jeśli istnieje poradnik dotyczący tematu, np. [SSH Initial Access](vserver-linux-ssh.md), powinieneś podlinkować ten poradnik i poinformować czytelnika, aby z niego skorzystał przed kontynuacją.

Typowe wymagania wstępne dla wpisów na blogu to:

- Wymagane oprogramowanie (np. Git, Node.js, Python, Docker)
- Poradniki, które mogą pomóc czytelnikowi zdobyć podstawową wiedzę (np. inna strona ZAP-Docs)
- Konta użytkowników, takie jak API
- Wymagane ustawienia (np. DNS/SSL)

Przykład dla wpisu o Reverse Proxy:

```
Aby skonfigurować reverse proxy, potrzebujesz serwera Linux do hostowania serwera proxy i powinieneś się do niego połączyć. Skorzystaj z naszego poradnika [SSH Initial Access](vserver-linux-ssh.md), jeśli potrzebujesz pomocy z tym krokiem. Będziesz także potrzebować dostępu do domeny, którą posiadasz. Dla każdej subdomeny, którą planujesz użyć, powinieneś utworzyć rekord DNS `A`, wskazujący na adres IP Twojego serwera Linux.
```

### Główny temat

Teraz czas na napisanie głównej części wpisu. Zalecamy podzielenie wpisu na kilka sekcji, aby pomóc czytelnikowi pozostać zaangażowanym w treść. Nie ma ścisłych wymagań co do podziału, ale ogólnie powinieneś starać się dzielić dużą ilość treści na kilka nagłówków. Zespół ZAP Contributions pomoże Ci w tym podczas całego procesu.

Jeśli Twój wpis zawiera instrukcje krok po kroku lub tutoriale, warto uwzględnić numer kroku i krótki opis w nagłówku głównego tematu, np. **Krok 1 - Tworzenie folderu**. Powinieneś krótko opisać, co czytelnik robi w tym kroku, aby nadać mu ogólny cel w pierwszym zdaniu. Między krokami warto tworzyć krótkie wprowadzenia i przejścia, które poinformują czytelnika, co do tej pory zrobił i co będzie dalej. Te przejścia dostarczają ważnego kontekstu. Staraj się unikać powtórzeń i stosuj różnorodne określenia, aby nie powtarzać tych samych fraz.

### Podsumowanie

Na koniec ostatnia sekcja to podsumowanie wpisu. Powinna zamknąć poradnik w 1-3 zdaniach, wyjaśniając, co czytelnik z powodzeniem osiągnął, czego się nauczył lub stanowić konkluzję do informacyjnego poradnika.

Warto też podać odnośniki do dalszej lektury lub innych wpisów na blogu czy poradników, które użytkownik może śledzić, aby poszerzyć swoją wiedzę na dany temat. Powinieneś tutaj podlinkować istniejące poradniki ZAP-Docs lub wpisy na blogu, szczególnie jeśli naturalnie wynikają z Twojego poradnika.

## Styl

Styl pisania dla dokumentacji ZAP-Hosting opiera się na naszym przekonaniu o tworzeniu wysokiej jakości, praktycznych i łatwo dostępnych wpisów na bloga, które wspierają szeroki zakres tematów i czytelników na każdym poziomie doświadczenia.

### Techniczny i poprawny

Nasze wpisy na blogu mają być jak najbardziej technicznie poprawne i aktualne względem najnowszych informacji branżowych. W każdym wpisie oczekujemy dostarczenia czytelnikom dobrze napisanych i wysokiej jakości informacji o nowych tematach i technologiach oraz tutoriali skupiających się na nauce czytelnika. Jeśli Twój wpis zawiera instrukcje krok po kroku lub tutorial, każdy krok powinien mieć jasny cel i wyjaśnienie, oferując dodatkowe opcje i/lub flagi tam, gdzie to stosowne.

Autorzy powinni zawsze dokładnie sprawdzić i przetestować swoje wpisy, aby upewnić się, że wszystko jest technicznie poprawne i działa zgodnie z zamierzeniem przed przesłaniem wersji roboczej. Zespół ZAP Contributions przeczyta i przetestuje Twój wpis tam, gdzie to możliwe, aby zapewnić spójność i poprawność merytoryczną lub zasugerować poprawki, jeśli zauważy błędy.

:::tip
Zawsze polecamy naszym autorom sprawdzenie treści narzędziem do korekty pisowni, aby upewnić się, że ortografia i gramatyka są poprawne przed przesłaniem wersji roboczej. Przydatna strona do tego to: https://languagetool.org/
:::

### Praktyczny i użyteczny

Po przeczytaniu wpisu czytelnik powinien nauczyć się czegoś, zbudować lub skonfigurować coś od początku do końca. Nasze wpisy mają wspierać czytelników na każdym poziomie doświadczenia, dlatego treść powinna w pełni wyczerpywać temat, aby czytelnik zdobył wiedzę i/lub osiągnął cel. Jako autor musisz dokładnie omówić temat, podając wszystkie niezbędne szczegóły, w tym wymagania wstępne, jeśli to stosowne. Powinieneś kierować czytelników do zewnętrznych stron tylko wtedy, gdy nie ma odpowiedniej dokumentacji w ZAP Docs lub jeśli pozwala to czytelnikowi zdobyć dodatkowe informacje, które nie są konieczne do artykułu, ale mogą pomóc w rozwoju wiedzy technicznej. Linki zewnętrzne nie powinny prowadzić do dokumentacji konkurencji.

### Przyjazny, formalny i wyczerpujący

Oczekujemy, że nasza dokumentacja będzie nowoczesna i przyjazna, aby była dostępna dla każdego czytelnika, ale jednocześnie pozostanie formalna. W całym wpisie powinieneś dążyć do tonu akceptowalnego dla wszystkich czytelników, niezależnie od doświadczenia czy bariery językowej.

Ponieważ są to wpisy, które przede wszystkim mają wspierać czytelnika w nauce i osiągnięciu celu, oczekujemy, że autorzy będą pisać w drugiej osobie (np. „Musisz...”) zamiast pierwszej osoby (np. „Myślę, że...”), aby utrzymać zaangażowanie czytelnika i skupić się na nim.

Na koniec wszyscy autorzy muszą przestrzegać naszego kodeksu postępowania, aby wpisy były akceptowalne dla każdego, niezależnie od wieku, pochodzenia etnicznego, tożsamości płciowej, poziomu doświadczenia, narodowości, religii, przynależności politycznej, orientacji seksualnej, statusu społeczno-ekonomicznego czy wyborów technologicznych. Należy unikać potencjalnie obraźliwego języka i wszelkich treści odnoszących się do powyższych tematów.

## Formatowanie

Nasz blog jest formatowany za pomocą języka Markdown, który jest szeroko stosowany. Skorzystaj z poniższych sekcji, aby zrozumieć, jakie elementy wykorzystujemy i jak można ich używać w Twoich wpisach.

Użytkownicy mogą korzystać z dowolnych narzędzi do tworzenia treści, jednak **gorąco** polecamy używanie narzędzia **[StackEdit](https://stackedit.io/app#)** do pisania treści, zachowując wszystkie świetne funkcje Markdown. Możesz potem bezpośrednio wyeksportować plik do Google Drive lub innej aplikacji do udostępniania plików i przesłać nam link.

:::tip
Po więcej przykładów i szczegółowych wyjaśnień funkcji Markdown zajrzyj na [Markdown Guide](https://www.markdownguide.org/cheat-sheet/), gdzie znajdziesz dodatkowe informacje.
:::

### Nagłówki

Nagłówki to jedna z najważniejszych opcji formatowania, używana do logicznego i przejrzystego podziału wpisów. Główny tytuł to nagłówek H1.

W naszych blogach nagłówki H2 służą do podziału wpisu na główne sekcje. Następnie nagłówki H3 dzielą główne sekcje na podsekcje. Przykładem może być podział głównej sekcji na kilka kroków, aby ułatwić śledzenie wpisu. Na koniec jest też tag H4, który jest rzadziej używany, ale służy do dalszego dzielenia podsekcji.

:::info
Jeśli używasz podnagłówków (np. H3 pod nagłówkami H2), upewnij się, że w danej sekcji jest co najmniej dwa nagłówki tego samego poziomu, w przeciwnym razie jest to niepoprawne użycie.
:::

Przykład użycia nagłówków:

```
## Instalacja
H2 - Główna sekcja

### Pobieranie plików serwera gier
H3 - Podsekcja H2

#### Przez SteamCMD
H4 - Podsekcja H3

#### Ręcznie przez GitHub
H4 - Podsekcja H3

### Przygotowanie konfiguracji
H3 - Podsekcja H2

### Uruchomienie serwera
H3 - Podsekcja H2
```

### Formatowanie w linii

Używamy różnych formatów w linii, aby poprawić czytelność wpisów i dopasować się do czytelników o różnym poziomie technicznym. Zapoznaj się z poniższym opisem, aby zrozumieć zastosowanie każdego z nich.

#### Pogrubienie

Pogrubienie służy głównie do podkreślenia informacji. Przykłady zastosowania:

- Zmiana kontekstu między krokami
- Nazwy hostów, dane logowania i nazwy użytkowników
- Kluczowa terminologia

Wystarczy użyć podwójnych gwiazdek po obu stronach tekstu, np. `**cześć**` daje **cześć**.

#### Kursywa

Kursywa służy głównie do wprowadzenia nowych technicznych słów kluczowych w artykule. Na przykład: dziś skonfigurujemy *reverse proxy*.

Aby użyć kursywy, wystarczy umieścić pojedynczą gwiazdkę po obu stronach tekstu, np. `*ZAP-Hosting - Więcej MOCY!*` daje *ZAP-Hosting - Więcej MOCY!*.

#### Kod w linii

Formatowanie kodu w linii służy głównie do wyświetlania bardziej technicznych informacji, takich jak adresy URL. Przykłady:

- Nazwy plików i ścieżki (np. `C:/User/[TwojaNazwa]/AppData....test.png`)
- URL-e (np. `https://zap-hosting.com`)
- Porty (np. `:30120`)
- Komendy (np. `ipconfig`)
- Zapytania SQL (np. `SELECT * FROM servers`)
- Skróty klawiszowe (np. `ENTER` lub `CTRL + C`)

#### Tabele

Markdown pozwala też na tworzenie tabel, co jest przydatne przy prezentacji dużej ilości powtarzalnych informacji, np. komend, opisów i zastosowań w grze. Przykład:

```
| Komenda    | Opis                    | Użycie                |
| ---------- | ----------------------- | --------------------- |
| /help      | Wysyła komendę pomocy   | /help [kategoria]     |
| /stop      | Zatrzymuje serwer       | /stop [true/false]    |
```

#### Bloki kodu

Bardzo przydatne są też bloki kodu, szczególnie w wpisach zawierających komendy, skrypty, wyjścia terminala i inne.

Aby użyć bloku kodu, wystarczy umieścić ``` przed i po bloku tekstu. Możesz też podać język programowania po pierwszych trzech backtickach, aby poprawnie sformatować składnię. Przykład dla JavaScript:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Zrzuty ekranu

Zrzuty ekranu to świetny sposób na wizualne prowadzenie czytelników przez kolejne kroki i zdecydowanie polecamy ich używanie tam, gdzie to możliwe.

Możesz dodać zrzut ekranu za pomocą składni, zastępując `your_url` adresem obrazka:
```
![](your_url)
```

Najlepiej korzystać z serwisów do hostowania obrazów, np. [Imgur](https://imgur.com/), aby przesłać obraz i użyć go w markdown.

## Terminologia

W naszych wpisach pojawia się wiele kluczowych terminów. W całym wpisie oczekujemy używania amerykańskiej odmiany angielskiego (US-English) dla spójności. W tej sekcji standaryzujemy niektóre często używane terminy.

### Produkty ZAP-Hosting

Odwołując się do produktów ZAP-Hosting, zawsze upewnij się, że używasz poprawnej nazwy, pisowni i kapitalizacji. Możesz to sprawdzić na [stronie ZAP-Hosting](https://zap-hosting.com) w odpowiedniej sekcji produktu.

### Atrybuty definiowane przez użytkownika

W niektórych wpisach mogą pojawić się opcje konfiguracyjne, takie jak użytkownicy, nazwy hostów, domeny, adresy IP i URL-e, gdzie czytelnik musi użyć własnych danych zamiast naszych symbolicznych.

Domyślnie zawsze używaj `[your_attribute]`, aby odróżnić elementy statyczne od unikalnych, gdzie `[attribute]` zastępujesz typem atrybutu. Na przykład, mówiąc o adresie IP, napisz `[your_server_ip]`, a mówiąc o URL-u, `http://[your_server_ip]:30120`. To jasno pokazuje, które elementy czytelnik musi zmienić według własnej konfiguracji. Powinieneś też wyjaśnić lub zaznaczyć, jakie atrybuty trzeba zmienić przy pierwszym ich użyciu, aby wszystko było jasne.

Domyślną nazwą hosta, użytkownika lub bazy danych używaj `zaphosting`.

### Oprogramowanie

Wspominając o oprogramowaniu, upewnij się, że stosujesz poprawną pisownię i kapitalizację nazwy. Jeśli strona oprogramowania nie jest spójna w kapitalizacji, stosuj tę samą kapitalizację w całym artykule, aby zachować spójność.

Przy pierwszym wspomnieniu oprogramowania podlinkuj jego oficjalną stronę, jeśli jest dostępna.