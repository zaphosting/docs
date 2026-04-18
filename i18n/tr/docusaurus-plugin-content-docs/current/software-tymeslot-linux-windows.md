---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Tymeslot'u Linux veya Windows 眉zerinde Docker ile nas谋l kuraca臒谋n谋z谋, Docker konteynerlerini ve Docker kurulum temellerini 枚臒renin. -> Hemen 枚臒renin"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot, Elixir ve Phoenix LiveView ile geli艧tirilmi艧 a莽谋k kaynakl谋 bir toplant谋 ve randevu planlama platformudur. Bu rehberde, Tymeslot'un ne oldu臒unu, 莽al谋艧t谋rmak i莽in neler gerekti臒ini ve Linux veya Windows 眉zerinde Docker kullanarak nas谋l kurulum yapaca臒谋n谋z谋 枚臒reneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Tymeslot'u kurmadan 枚nce sisteminizin temel gereksinimleri kar艧谋lad谋臒谋ndan ve Docker'谋n kurulu oldu臒undan emin olun.

### Requirements

A艧a臒谋daki gereksinimler mevcut proje bilgileri ve sa臒lanan kurulum tasla臒谋na dayanmaktad谋r:

| Gereksinim | 脰neri |
|---|---|
| CPU | En az `1` vCPU |
| RAM | En az `2 GB` |
| Disk alan谋 | En az `10 GB` |
| 陌艧letim sistemi | Linux veya Windows |
| Konteyner 莽al谋艧ma zaman谋 | Docker |
| A臒 | `4000` portuna eri艧im |

### What is verified and what is not

:::info Kaynak Durumu
Tymeslot deposu, projenin Elixir ve Phoenix LiveView ile geli艧tirilmi艧 a莽谋k kaynakl谋 bir toplant谋 planlama platformu oldu臒unu ve `Dockerfile.docker` ile `docker-compose.yml` gibi Docker ile ilgili dosyalar谋n depoda bulundu臒unu do臒rulamaktad谋r.

Ancak, kesin 眉retim da臒谋t谋m ad谋mlar谋, imaj ad谋 ve gerekli t眉m ortam de臒i艧kenleri burada sa臒lanan kaynak materyalden tam olarak do臒rulanamamaktad谋r. Bu nedenle, bu rehber mevcut taslak bilgilerini kullanmakta ve 眉retim 枚ncesi resmi depoya kar艧谋 do臒rulaman谋z gereken de臒erleri a莽谋k莽a i艧aretlemektedir.
:::

### Install Docker

Tymeslot'u bir konteyner i莽inde 莽al谋艧t谋rabilmek i莽in Docker'a ihtiyac谋n谋z var.

- Linux'ta, resmi [Docker dok眉mantasyonu](https://docs.docker.com/engine/install/) 眉zerinden Docker Engine'i kurun
- Windows'ta, [Docker Desktop](https://www.docker.com/products/docker-desktop/) uygulamas谋n谋 kurun

:::tip Windows i莽in Docker
Windows 眉zerinde Docker kullan谋yorsan谋z, devam etmeden 枚nce sanalla艧t谋rman谋n etkin oldu臒undan ve Docker Desktop'谋n 莽al谋艧t谋臒谋ndan emin olun.
:::

## Software Overview

Tymeslot, *Scheduling* (Planlama) kategorisine ait olup, kendi kendinize bar谋nd谋rabilece臒iniz randevu ve toplant谋 y枚netimi i莽in tasarlanm谋艧t谋r.

| 脰zellik | De臒er |
|---|---|
| 陌sim | `Tymeslot` |
| Kategori | `Scheduling` |
| Kaynak | `https://github.com/tymeslot/tymeslot` |
| Teknoloji y谋臒谋n谋 | `Elixir`, `Phoenix LiveView` |
| Da臒谋t谋m 艧ekli | Kendi kendine bar谋nd谋rma, Docker destekli |
| Haftal谋k bahsi | Self-Host Weekly, 10 Nisan 2026 |

### Why use Tymeslot

Tymeslot 艧u durumlarda faydal谋 olabilir:

- Kendi planlama platformunuzu bar谋nd谋rmak istiyorsan谋z
- Rezervasyon verilerini kendi altyap谋n谋zda tutmak istiyorsan谋z
- 脺莽眉nc眉 taraf SaaS platformlar谋na ba臒l谋 kalmadan randevular谋 y枚netmek istiyorsan谋z
- Docker konteynerleri ile modern bir web uygulamas谋 da臒谋tmak istiyorsan谋z

## Deployment Options

Mevcut bilgilere g枚re iki olas谋 y枚ntem vard谋r:

| Y枚ntem | Durum |
|---|---|
| Docker ile da臒谋t谋m | 脰nerilen |
| Yerel Elixir/Phoenix kurulumu | M眉mk眉n, ancak daha ileri d眉zey |

脟o臒u kullan谋c谋 i莽in Docker, kurulum, g眉ncellemeler ve servis y枚netimini kolayla艧t谋rd谋臒谋 i莽in daha iyi bir se莽enektir.

## Install Tymeslot with Docker

Linux ve Windows sistemler i莽in en pratik y枚ntem budur.

### Pull the Docker image

Sa臒lanan taslakta kullan谋lan imaj referans谋:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Docker imaj谋n谋 枚ncelikle do臒rulay谋n
Kesin kamuya a莽谋k imaj ad谋, al谋nan depo i莽eri臒iyle do臒rulanmam谋艧t谋r. Bu komutu 眉retimde kullanmadan 枚nce, resmi Tymeslot deposunda, s眉r眉m notlar谋nda veya varsa Docker Hub sayfas谋nda do臒ru imaj ad谋n谋 kontrol edin.
:::

### Start the container

Tymeslot'u a艧a臒谋daki komutla ba艧latabilirsiniz (taslaktan al谋nm谋艧t谋r):

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Windows PowerShell kullan谋yorsan谋z, `openssl` komutu varsay谋lan olarak olmayabilir. Bu durumda, g眉venli rastgele bir de臒er ayr谋 olarak olu艧turup `SECRET_KEY_BASE` de臒erini manuel de臒i艧tirin.

### Example command reference

| Se莽enek | Ama莽 |
|---|---|
| `--name tymeslot` | Konteyner ismini belirler |
| `-p 4000:4000` | Tymeslot'u `4000` portunda eri艧ilebilir yapar |
| `-e SECRET_KEY_BASE=...` | Uygulama 艧ifreleme ve oturumlar i莽in gizli anahtar |
| `-e PHX_HOST=localhost` | Phoenix taraf谋ndan kullan谋lan hostname'i ayarlar |
| `-v tymeslot_data:/app/data` | Uygulama verilerini kal谋c谋 yapar |
| `-v tymeslot_pg:/var/lib/postgresql/data` | PostgreSQL verilerini kal谋c谋 yapar |
| `youruser/tymeslot:latest` | Taslaktan al谋nan Docker imaj ad谋 |

### Generate a secret key on Linux

`openssl` y眉kl眉yse, gizli anahtar谋 艧u 艧ekilde olu艧turabilirsiniz:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Generate a secret key on Windows PowerShell

PowerShell'de 枚rnek gizli anahtar olu艧turmak i莽in:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Kendi gizli anahtar谋n谋z谋 kullan谋n
脺retimde 枚rnek gizli anahtarlar谋 kullanmay谋n. Her zaman kendi `SECRET_KEY_BASE` de臒eriniz olu艧turun ve g眉venli 艧ekilde saklay谋n.
:::

## Configure Tymeslot

陌lk kullan谋mdan 枚nce en 枚nemli 莽al谋艧ma zaman谋 ayarlar谋n谋 g枚zden ge莽irin.

### Environment variables

Taslakta do臒rulanan ortam de臒i艧kenleri:

| De臒i艧ken | 脰rnek | Ama莽 |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Oturumlar ve 艧ifreleme i莽in g眉venlik sa臒lar |
| `PHX_HOST` | `[your_domain]` veya `[your_server_ip]` | Uygulaman谋n kulland谋臒谋 genel hostname'i belirler |

Yer tutucular谋n anlam谋:

- `[your_secret_key]`: Olu艧turdu臒unuz g眉venli gizli anahtar
- `[your_domain]`: Kulland谋臒谋n谋z genel alan ad谋 (varsa)
- `[your_server_ip]`: Sunucunuzun IP adresi (do臒rudan eri艧im i莽in)

### SMTP configuration

Taslakta, e-posta bildirimleri i莽in `config/prod.exs` i莽inde SMTP yap谋land谋rmas谋 da belirtilmi艧tir:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note SMTP do臒rulamas谋
Uygulama yap谋land谋rmas谋 s眉r眉mler aras谋nda de臒i艧ebilece臒inden, bu mailer yap谋land谋rma format谋n谋 眉retimde kullanmadan 枚nce g眉ncel Tymeslot deposunda do臒rulay谋n.
:::

## Access Tymeslot

Konteyner 莽al谋艧t谋ktan sonra web aray眉z眉n眉 test edebilirsiniz.

### Local access

Yerel test i莽in 艧u adresi a莽谋n:

```text
http://localhost:4000
```

### Remote access

Tymeslot uzak bir sunucuda 莽al谋艧谋yorsa, 艧u adresi a莽谋n:

```text
http://[your_server_ip]:4000
```

Alan ad谋 ve ters proxy yap谋land谋rd谋ysan谋z, 艧u 艧ekilde eri艧ebilirsiniz:

```text
https://[your_domain]
```

## Firewall and Network

Tymeslot, Docker'dan yay谋nlad谋臒谋n谋z port 眉zerinden a臒 eri艧imine ihtiya莽 duyar.

### Required port

| Port | Protokol | Ama莽 |
|---|---|---|
| `4000` | TCP | Tymeslot uygulamas谋na web eri艧imi |

### Firewall considerations

艦unlar谋 sa臒lamal谋s谋n谋z:

- Sunucu g眉venlik duvar谋nda `4000` portu a莽谋k olmal谋 (do臒rudan eri艧im i莽in)
- Bulut veya sa臒lay谋c谋 g眉venlik duvar谋 ayn谋 portu izin vermeli
- Alan ad谋 kullan谋yorsan谋z ters proxy trafi臒i do臒ru y枚nlendirmeli

:::caution Genel eri艧im riski
`4000` portunu do臒rudan internete a莽arsan谋z, g眉venlik risklerini iyi anlay谋n. 脺retim i莽in HTTPS destekli ters proxy kullanmak genellikle daha g眉venlidir.
:::

## Optional Native Installation

Docker kullanmak istemiyorsan谋z, yerel kurulum m眉mk眉n olabilir. Bu y枚ntem daha ileri d眉zeydir ve Elixir ile Phoenix uyumlu bir ortam gerektirir.

### Basic native steps

Sa臒lanan tasla臒a g枚re s眉re莽:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Native deployment notes

Yerel kurulum i莽in ayr谋ca 艧unlar gerekir:

- Elixir
- Erlang/OTP
- Phoenix ba臒谋ml谋l谋klar谋
- Desteklenen bir veritaban谋 kurulumu
- 脺retim yap谋land谋rmas谋n谋n g枚zden ge莽irilmesi

:::info Yerel kurulum karma艧谋kl谋臒谋
Al谋nan kaynak materyal, Linux veya Windows 眉zerinde tam ve g眉venli bir yerel 眉retim kurulumu i莽in yeterli do臒rulanm谋艧 detay sa臒lamamaktad谋r. Bu y枚ntemi kullanmak isterseniz, da臒谋t谋mdan 枚nce resmi depo dok眉mantasyonunu dikkatle inceleyin.
:::

## Maintenance and Troubleshooting

Kurulumdan sonra servisin eri艧ilebilir kald谋臒谋n谋 ve verilerinizin kal谋c谋 oldu臒unu do臒rulamal谋s谋n谋z.

### Check container status

```bash
docker ps
```

### View logs

```bash
docker logs tymeslot
```

### Restart the container

```bash
docker restart tymeslot
```

### Common issues

| Sorun | Olas谋 sebep | 脰nerilen 莽枚z眉m |
|---|---|---|
| Web sayfas谋 a莽谋lm谋yor | `4000` portu engellenmi艧 | G眉venlik duvar谋 ve Docker port e艧lemesini kontrol edin |
| Konteyner hemen kapan谋yor | Ge莽ersiz ortam de臒i艧kenleri | `SECRET_KEY_BASE` ve imaj ayarlar谋n谋 g枚zden ge莽irin |
| Veritaban谋 hatalar谋 | Kal谋c谋 depolama veya veritaban谋 ba艧latma sorunu | Loglar谋 kontrol edin, volume kullan谋m谋n谋 do臒rulay谋n |
| Linklerde yanl谋艧 hostname | `PHX_HOST` yanl谋艧 ayarlanm谋艧 | `PHX_HOST` de臒erini `[your_domain]` veya `[your_server_ip]` yap谋n |

## Best Practices

### Use persistent volumes

Uygulama ve veritaban谋 verileri i莽in kal谋c谋 Docker volume'lar谋 kullan谋n, b枚ylece konteyner yeniden olu艧turuldu臒unda verileriniz silinmez.

### Use a reverse proxy

Genel da臒谋t谋mlar i莽in Tymeslot'u Nginx veya Apache gibi bir ters proxy arkas谋na al谋p HTTPS etkinle艧tirmek genellikle daha iyidir.

### Verify upstream changes

Tymeslot aktif olarak geli艧tirildi臒i i莽in g眉ncellemeden 枚nce resmi depoyu kontrol edin. 脰zellikle:

- De臒i艧en Docker imajlar谋
- G眉ncellenen ortam de臒i艧kenleri
- Veritaban谋 migrasyonlar谋
- Mail yap谋land谋rma de臒i艧iklikleri

## Additional References

| Kaynak | Ba臒lant谋 |
|---|---|
| Tymeslot GitHub deposu | [Official Tymeslot Repository](https://github.com/tymeslot/tymeslot) |
| Self-Host Weekly bahsi | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |
| Docker dok眉mantasyonu | [Docker Documentation](https://docs.docker.com/) |
| Docker Desktop indir | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusion

Tymeslot'u Linux veya Windows 眉zerinde Docker kullanarak nas谋l inceleyece臒inizi ve kuraca臒谋n谋z谋 ba艧ar谋yla 枚臒rendiniz. Daha fazla soru veya destek i莽in, her g眉n hizmetinizde olan destek ekibimizle ileti艧ime ge莽mekten 莽ekinmeyin! 馃檪