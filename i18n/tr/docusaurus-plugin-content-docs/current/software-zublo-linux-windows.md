---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Zublo'yu g眉venli abonelik veri y枚netimi, tekrarlayan 枚deme takibi ve kendi kendine bar谋nd谋r谋lan veri analizleri i莽in Docker ile nas谋l kuraca臒谋n谋z谋 枚臒renin -> Hemen ke艧fedin"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Giri艧

Zublo, tekrarlayan 枚demeleri ve ilgili verileri tek bir yerde y枚netmenize yard谋mc谋 olmak i莽in tasarlanm谋艧 a莽谋k kaynakl谋, kendi kendine bar谋nd谋r谋lan bir abonelik takip莽isidir. Bu rehberde, Zublo'yu Linux veya Windows sunucusunda Docker kullanarak nas谋l kuraca臒谋n谋z谋 ve web aray眉z眉n眉n do臒ru 莽al谋艧t谋臒谋n谋 nas谋l do臒rulayaca臒谋n谋z谋 枚臒reneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Haz谋rl谋k

Ba艧lamadan 枚nce, sunucunuzun temel gereksinimleri kar艧谋lad谋臒谋ndan ve Docker'谋n kurulu oldu臒undan emin olun.

### Gereksinimler

| Bile艧en | 脰nerilen minimum |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Depolama | 1 GB bo艧 disk alan谋 |
| 陌艧letim Sistemi | Docker destekli Linux veya Windows |
| A臒 | `9597` portuna eri艧im |

### Gerekli yaz谋l谋mlar

A艧a臒谋daki yaz谋l谋mlar谋n kurulu olmas谋 gerekir:

| Yaz谋l谋m | Ama莽 |
| --- | --- |
| [Docker](https://www.docker.com/) | Zublo konteynerini 莽al谋艧t谋r谋r |
| Docker Compose | Konteyner y谋臒谋n谋 ba艧lat谋r ve y枚netir |

:::info Docker Gereksinimi
Bu rehber, proje deposunda referans verilen Docker da臒谋t谋m y枚ntemine dayanmaktad谋r. E臒er Docker hen眉z kurulu de臒ilse, devam etmeden 枚nce kurulumunu tamamlaman谋z gerekir.
:::

:::caution Port Eri艧imi
Zublo varsay谋lan olarak `9597` portunu kullan谋r. Bu portun ba艧ka bir servis taraf谋ndan kullan谋lmad谋臒谋ndan ve uzaktan web aray眉z眉ne eri艧mek istiyorsan谋z g眉venlik duvar谋n谋zda izinli oldu臒undan emin olun.
:::

## Zublo Hakk谋nda

Zublo, abonelikleri, tekrarlayan 枚demeleri ve harcama ile ilgili verileri kendi kendine bar谋nd谋r谋lan bir web uygulamas谋 眉zerinden takip etmek i莽in tasarlanm谋艧t谋r. Proje deposuna g枚re, Docker 枚ncelikli olup kendi verileri 眉zerinde kontrol sahibi olmak isteyen kendi kendine bar谋nd谋ranlar i莽in geli艧tirilmi艧tir.

### Uygulaman谋n sunduklar谋

Mevcut proje bilgilerine dayanarak, Zublo a艧a臒谋daki alanlara odaklan谋r:

| 脰zellik alan谋 | A莽谋klama |
| --- | --- |
| Abonelik takibi | Tekrarlayan hizmetleri ve 枚demeleri y枚netin |
| Kendi kendine bar谋nd谋rma | Abonelik verilerinizi kendi sunucunuzda tutun |
| Web aray眉z眉 | Uygulamaya taray谋c谋 眉zerinden eri艧im |
| API eri艧imi | Dahili API u莽 noktas谋n谋 kullanma |
| Y枚netici paneli | PocketBase y枚netici aray眉z眉ne eri艧im |

:::note 脰zellik Kullan谋labilirli臒i
脺莽眉nc眉 taraf 枚zetlerde bahsedilen AI destekli analiz gibi baz谋 geli艧mi艧 fonksiyonlar mevcut proje s眉r眉m眉ne ba臒l谋 olabilir. Kurulumunuzda bir 枚zellik g枚r眉nm眉yorsa, s眉r眉me 枚zel detaylar i莽in resmi depoyu kontrol edin: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Zublo proje dizinini olu艧turun

脰ncelikle, yap谋land谋rman谋z谋n ve kal谋c谋 verilerinizin d眉zenli kalmas谋 i莽in Zublo da臒谋t谋m谋n谋z i莽in 枚zel bir dizin olu艧turun.

### Linux

Terminalinizde a艧a臒谋daki komutlar谋 莽al谋艧t谋r谋n:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

PowerShell kullan谋yorsan谋z, 艧unu 莽al谋艧t谋r谋n:

```powershell
mkdir zublo-data
cd zublo-data
```

Bu klas枚r, `docker-compose.yml` dosyan谋z谋 ve kal谋c谋 uygulama veri dizinini i莽erecek.

## Docker Compose yap谋land谋rmas谋n谋 olu艧turun

Sonraki ad谋mda, proje dizininizin i莽ine bir `docker-compose.yml` dosyas谋 olu艧turun.

### 脰rnek yap谋land谋rma

A艧a臒谋daki yap谋land谋rmay谋 kullan谋n:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Yap谋land谋rma genel bak谋艧

| Anahtar | 脰rnek de臒er | Ama莽 |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | En g眉ncel Zublo konteyner imaj谋n谋 莽eker |
| `container_name` | `zublo` | Okunabilir konteyner ad谋 belirler |
| `restart` | `unless-stopped` | Yeniden ba艧latmalar veya hatalarda konteyneri otomatik ba艧lat谋r |
| `ports` | `9597:9597` | Web uygulamas谋n谋 `9597` portunda a莽ar |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Hassas verileri korur |
| `volumes` | `./zublo-data:/pb/pb_data` | Uygulama verilerini sunucunuzda kal谋c谋 yapar |

:::danger G眉莽l眉 Bir 艦ifreleme Anahtar谋 Kullan谋n
艦ifreleme anahtar谋n谋 zay谋f veya varsay谋lan bir de臒er olarak b谋rakmay谋n. 脺retim ortam谋nda konteyneri ba艧latmadan 枚nce `[your_secure_encryption_key]` yerine uzun, rastgele bir gizli anahtar koyun.
:::

### Dosyay谋 kaydedin

Dosyay谋 mevcut dizininizde `docker-compose.yml` olarak kaydedin. Kaydettikten sonra servisi ba艧latmaya haz谋rs谋n谋z.

## Zublo'yu ba艧lat谋n

Compose dosyas谋n谋 olu艧turduktan sonra konteyner y谋臒谋n谋n谋 ba艧lat谋n.

```bash
docker compose up -d
```

Ortam谋n谋z eski Docker Compose s枚zdizimini kullan谋yorsa, 艧u komutu kullanman谋z gerekebilir:

```bash
docker-compose up -d
```

### Konteynerin 莽al谋艧t谋臒谋n谋 do臒rulay谋n

Konteyner durumunu 艧u komutla kontrol edebilirsiniz:

```bash
docker ps
```

Listede `zublo` adl谋 bir konteyner g枚rmelisiniz.

### Gerekirse loglar谋 g枚r眉nt眉leyin

Servis do臒ru ba艧lamazsa loglar谋 inceleyin:

```bash
docker logs zublo
```

Bu, ge莽ersiz yap谋land谋rma, port 莽ak谋艧malar谋 veya kal谋c谋 veri izin sorunlar谋 gibi problemleri tespit etmenize yard谋mc谋 olur.

## Web aray眉z眉ne eri艧in

Konteyner 莽al谋艧maya ba艧lad谋ktan sonra Zublo'yu taray谋c谋n谋zda a莽abilirsiniz.

### Uygulama URL'leri

`[your_server_ip]` yerine sunucunuzun genel IP adresini veya yerel a臒 IP'sini yaz谋n.

| Aray眉z | URL |
| --- | --- |
| Ana uygulama | `http://[your_server_ip]:9597` |
| PocketBase y枚netici aray眉z眉 | `http://[your_server_ip]:9597/_/` |
| API u莽 noktas谋 | `http://[your_server_ip]:9597/api/` |

:::info Localhost ve Uzaktan Eri艧im
Zublo'nun kurulu oldu臒u ayn谋 makinede 莽al谋艧谋yorsan谋z `http://localhost:9597` adresini de kullanabilirsiniz. Uzaktan eri艧im i莽in ger莽ek sunucu IP'nizi veya yap谋land谋r谋lm谋艧 bir alan ad谋n谋 kullan谋n.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## G眉venli eri艧imi yap谋land谋r谋n

Zublo'nun eri艧ilebilir oldu臒unu do臒rulad谋ktan sonra, internet 眉zerinden nas谋l eri艧ildi臒ini g枚zden ge莽irin.

### G眉venlik duvar谋 dikkate al谋nmas谋 gerekenler

Ba艧ka bir cihazdan uygulamaya eri艧emiyorsan谋z, g眉venlik duvar谋 ayarlar谋n谋zda `9597` portunun a莽谋k oldu臒undan emin olun.

| Port | Protokol | Ama莽 |
| --- | --- | --- |
| `9597` | TCP | Zublo web aray眉z眉, y枚netici paneli ve API |

### Reverse proxy kullan谋m谋

`[your_domain]` gibi bir alan ad谋 kullanmak istiyorsan谋z, Zublo'yu Nginx veya desteklenen ba艧ka bir proxy 莽枚z眉m眉n眉n arkas谋na koyabilirsiniz. Bu durumda proxy, istekleri `http://127.0.0.1:9597` veya Docker i莽 a臒谋 adresine y枚nlendirir.

:::tip 陌nternet Eri艧imi 陌莽in HTTPS Kullan谋n
Zublo'yu genel eri艧ime a莽may谋 planl谋yorsan谋z, abonelik verilerinizin transfer s谋ras谋nda 艧ifrelenmesi i莽in SSL destekli bir reverse proxy kullanman谋z 枚nerilir.
:::

## Kal谋c谋 verileri y枚netin

Zublo, kal谋c谋 uygulama verilerini Compose dosyas谋nda tan谋mlanan ba臒lanan dizinde saklar.

### Veri konumu

Bu rehberde kullan谋lan volume e艧lemesi:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Bu, uygulama verilerinizin proje dizininizdeki yerel `zublo-data` klas枚r眉nde sakland谋臒谋 anlam谋na gelir.

### Kal谋c谋l谋臒谋n 枚nemi

Kal谋c谋 depolama, uygulama verilerinizin a艧a臒谋daki durumlarda korunmas谋n谋 sa臒lar:

- konteyner yeniden ba艧latmalar谋
- sunucu yeniden ba艧latmalar谋
- imaj g眉ncellemeleri
- bak谋m i艧lemleri

:::caution Yedekleme 脰nerisi
Zublo 枚nemli ki艧isel abonelik verileri saklad谋臒谋ndan, b眉y眉k de臒i艧iklikler veya g眉ncellemeler yapmadan 枚nce `zublo-data` dizinini d眉zenli olarak yedeklemeniz 枚nerilir.
:::

## Temel bak谋m

Zublo 莽al谋艧t谋ktan sonra ara s谋ra g眉ncelleme veya yeniden ba艧latma gerekebilir.

### Konteyneri yeniden ba艧lat谋n

```bash
docker restart zublo
```

### Da臒谋t谋m谋 durdurun

```bash
docker compose down
```

### En son imaja g眉ncelleyin

En son imaj谋 莽ekip konteyneri yeniden olu艧turun:

```bash
docker compose pull
docker compose up -d
```

### Faydal谋 komut referans谋

| Komut | Ama莽 |
| --- | --- |
| `docker compose up -d` | Zublo'yu arka planda ba艧lat谋r |
| `docker ps` | 脟al谋艧an konteynerleri kontrol eder |
| `docker logs zublo` | Konteyner loglar谋n谋 g枚r眉nt眉ler |
| `docker restart zublo` | Konteyneri yeniden ba艧lat谋r |
| `docker compose down` | Konteyneri durdurur ve kald谋r谋r |
| `docker compose pull` | En son imaj谋 indirir |

## Sorun Giderme

Zublo bekledi臒iniz gibi 莽al谋艧m谋yorsa, a艧a臒谋daki yayg谋n nedenleri kontrol edin.

### `9597` portu zaten kullan谋l谋yor

Docker port ba臒lama hatas谋 veriyorsa, ba艧ka bir servis `9597` portunu kullan谋yor demektir. 脟ak谋艧an servisi durdurman谋z veya host taraf谋 port e艧lemesini de臒i艧tirmeniz gerekir.

Farkl谋 bir d谋艧 port 枚rne臒i:

```yaml
ports:
  - "9600:9597"
```

Bu durumda uygulamaya `http://[your_server_ip]:9600` adresinden eri艧irsiniz.

### Konteyner ba艧l谋yor ama sayfa y眉klenmiyor

艦unlar谋 kontrol edin:

- Konteynerin 莽al谋艧t谋臒谋n谋 `docker ps` ile do臒rulay谋n
- Loglar谋 `docker logs zublo` ile inceleyin
- G眉venlik duvar谋n谋z谋n se莽ilen portu izin verdi臒inden emin olun
- Do臒ru IP adresi veya hostname kulland谋臒谋n谋z谋 kontrol edin

### 艦ifreleme anahtar谋 sorunlar谋

陌lk kurulumdan sonra `PB_ENCRYPTION_KEY` de臒erini de臒i艧tirirseniz, mevcut 艧ifreli veriler art谋k okunamayabilir. Bu anahtar谋 de臒i艧tirmek zorundaysan谋z, proje dok眉mantasyonunu 枚ncelikle inceleyin 莽眉nk眉 tam ge莽i艧 davran谋艧谋 sa臒lanan kaynakta belgelenmemi艧tir.

:::note Eksik Davran谋艧 Detaylar谋
Sa臒lanan kaynak materyal, ilk kurulumdaki y枚netici ad谋mlar谋, hesap olu艧turma davran谋艧谋 veya geli艧mi艧 yap谋land谋rma se莽eneklerini tam olarak belgelememektedir. Bu detaylara ihtiyac谋n谋z varsa, upstream proje dok眉mantasyonunu inceleyin: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Sonu莽

Tebrikler, Docker kullanarak Linux veya Windows 眉zerinde Zublo'yu ba艧ar谋yla kurup yap谋land谋rd谋n谋z. Daha fazla soru veya destek i莽in, g眉nl眉k olarak hizmet veren destek ekibimizle ileti艧ime ge莽mekten 莽ekinmeyin! 馃檪