---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Tymeslot'u Docker ile nasıl dağıtacağınızı, docker konteynerlerini nasıl yöneteceğinizi ve Linux ile Windows hosting ortamları için önemli yapılandırma detaylarını öğrenin. -> Hemen öğrenin"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot, Elixir ve Phoenix LiveView ile geliştirilmiş açık kaynaklı bir toplantı ve randevu planlama platformudur. Bu rehberde, Tymeslot'un gereksinimlerini, Linux veya Windows üzerinde Docker ile nasıl dağıtılacağını ve üretime almadan önce hangi yapılandırma noktalarını gözden geçirmeniz gerektiğini öğreneceksiniz.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Başlamadan önce, Docker'ı güvenilir şekilde çalıştırabilen ve Tymeslot'u ağ üzerinden erişilebilir kılan bir sisteme ihtiyacınız var.

### Requirements

| Gereksinim | Öneri |
| --- | --- |
| CPU | 1 vCPU veya daha fazlası |
| RAM | En az 2 GB |
| Disk alanı | En az 10 GB |
| İşletim sistemi | Linux veya Windows |
| Konteyner platformu | [Docker](https://www.docker.com/) |
| Ağ portu | `4000/tcp` |

### Hazırlamanız gerekenler

| Öğe | Neden gerekli |
| --- | --- |
| Linux sunucu veya Windows sistemi | Uygulamayı barındırmak için |
| Docker kurulumu | Tymeslot deposunda Docker ile ilgili dosyalar mevcut |
| `4000` portuna açık ağ erişimi veya ters proxy | Web arayüzüne erişim için |
| `[your_domain]` gibi bir hostname | Üretim kullanımı için önerilir |
| Güçlü oluşturulmuş bir gizli anahtar | Oturum ve uygulama güvenliği için gerekli |

:::info Docker Kurulum Gereksinimi
Bu rehber Docker odaklıdır çünkü Tymeslot deposunda `Dockerfile.docker` ve `docker-compose.yml` gibi Docker ile ilgili dosyalar bulunmaktadır. Elixir ve Phoenix ile yerel kurulum mümkün olabilir ancak sağlanan kaynak materyalden tam üretim adımları doğrulanamamıştır.
:::

### Windows notu

Windows'ta genellikle Docker Desktop gibi çalışan bir Docker ortamına ihtiyacınız vardır. Docker for Windows kullanıyorsanız, sanallaştırmanın etkin olduğundan ve Docker Desktop'ın çalıştığından emin olun.

## About Tymeslot

Tymeslot, proje deposunda Elixir ve Phoenix LiveView ile geliştirilmiş açık kaynaklı bir toplantı planlama platformu olarak listelenmiştir. Kendi sunucunuzda barındırmak için tasarlanmıştır ve proje tarafından yönetilen bulut hizmeti olarak da kullanılabilir.

### Doğrulanmış proje detayları

| Özellik | Değer |
| --- | --- |
| İsim | Tymeslot |
| Kategori | Planlama |
| Kaynak depo | `https://github.com/tymeslot/tymeslot` |
| Haftalık bahsi | Self-Host Weekly, 10 Nisan 2026 |
| Teknoloji | Elixir / Phoenix LiveView |
| Kendi sunucunda barındırma desteği | Evet |

:::note Kaynak Doğrulaması
Depo, proje adı, amacı ve teknoloji yığını doğrulamaktadır. Ancak, yayınlanan Docker imajının tam adı, ortam değişkenlerinin tam listesi ve resmi üretim port eşlemesi gibi bazı çalışma zamanı detayları sağlanan kaynakta tam görünmemektedir. Bu nedenle, üretime almadan önce bu kısımları doğrudan upstream depoda doğrulamalısınız.
:::

## Deployment Method

Çoğu kullanıcı için Docker, bağımlılıkları izole tuttuğu ve güncellemeleri kolaylaştırdığı için en basit dağıtım yöntemidir.

### Neden Docker önerilir

| Avantaj | Açıklama |
| --- | --- |
| Kolay kurulum | Elixir, Erlang ve Phoenix'i manuel kurmanıza gerek kalmaz |
| Daha temiz güncellemeler | Host ortamını yeniden kurmadan docker imajlarını değiştirebilirsiniz |
| Daha iyi taşınabilirlik | Aynı konteyner yapılandırması Linux ve Windows'ta kullanılabilir |
| Daha basit geri dönüş | Gerekirse önceki imaj sürümüne dönebilirsiniz |

### Önemli kısıtlama

:::caution Docker İmaj Adı Doğrulanmalı
Örnek olarak verilen `youruser/tymeslot:latest` imajı sadece yer tutucudur ve resmi doğrulanmış bir imaj adı değildir. Dağıtımdan önce Tymeslot deposunu, `README-Docker.md` dosyasını veya proje konteyner kayıt talimatlarını kontrol ederek doğru imaj kaynağını doğrulayın.
:::

## Install Tymeslot with Docker

Bu bölüm, yer tutucu imaj referansı kullanarak Docker tabanlı dağıtım akışını gösterir. `[your_tymeslot_image]` ifadesini resmi Tymeslot projesinden doğrulanmış imaj adıyla değiştirin.

### İmajı çekin

```bash
docker pull [your_tymeslot_image]
```

### Gizli anahtar oluşturun

Linux'ta güçlü bir gizli anahtar oluşturmak için:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Çıktıyı güvenli bir yerde saklayın ve `[your_secret_key_base]` olarak kullanın.

Windows'ta, `openssl` yoksa başka güvenilir bir yöntemle güvenli rastgele bir değer oluşturabilirsiniz.

### Konteyneri çalıştırın

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Parametre açıklamaları

| Parametre | Anlamı |
| --- | --- |
| `-d` | Konteyneri arka planda başlatır |
| `--name tymeslot` | Okunabilir bir konteyner adı atar |
| `-p 4000:4000` | Host `4000` portunu konteyner `4000` portuna yönlendirir |
| `-e SECRET_KEY_BASE=...` | Uygulama gizli anahtarını ayarlar |
| `-e PHX_HOST=...` | Phoenix tarafından kullanılacak hostname'i belirler |
| `-v tymeslot_data:/app/data` | Uygulama verilerini kalıcı hale getirir |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Konteyner içindeki PostgreSQL verilerini kalıcı yapar (kullanılıyorsa) |

:::caution Volume Yollarını Önce Doğrulayın
Yukarıdaki volume yolları taslak materyalden alınmıştır ve upstream dokümantasyonda tam doğrulanmamıştır. Üretimde kullanmadan önce resmi Tymeslot Docker dokümantasyonunu inceleyin.
:::

### Konteyner durumunu kontrol edin

```bash
docker ps
```

Logları incelemek için:

```bash
docker logs tymeslot
```

Başlangıç sorunlarını giderirken loglar ilk kontrol edilmesi gereken yerdir.

## Optional Docker Compose Deployment

Docker konteynerlerini Compose ile yönetmeyi tercih ediyorsanız, servisi `docker-compose.yml` dosyasında tanımlayabilirsiniz. Bu, uzun `docker run` komutlarından daha kolay yönetilir.

### Örnek Compose dosyası

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Yığını başlatmak için:

```bash
docker compose up -d
```

:::tip Compose Yönetimi
Compose kullanmak, güncellemeleri, yeniden başlatmaları ve yedeklemeleri kolaylaştırır çünkü konteyner yapılandırmanız tek bir dosyada kalır. Aynı hostta birden fazla docker imajı yönetiyorsanız özellikle faydalıdır.
:::

## Configure Tymeslot

Konteyner çalıştıktan sonra en önemli yapılandırma değerlerini gözden geçirin.

### Temel ortam değişkenleri

| Değişken | Amacı |
| --- | --- |
| `SECRET_KEY_BASE` | Oturumları ve uygulama gizliliklerini korur |
| `PHX_HOST` | Genel hostname veya IP adresini tanımlar |

Yer tutucuları şu şekilde kullanın:

- `[your_secret_key_base]` oluşturduğunuz güvenli gizli anahtar
- `[your_domain_or_ip]` genel hostname veya sunucu IP'si, örneğin `schedule.[your_domain]` veya `[your_server_ip]`

### SMTP yapılandırması

Taslak materyal, e-posta bildirimleri için SMTP'nin `config/prod.exs` içinde yapılandırılabileceğini gösteriyor. Örnek:

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

:::note SMTP Kurulum Doğrulaması
Yukarıdaki örnek taslaktan alınmış olup tipik bir Elixir mailer yapılandırmasını yansıtır. Mail ayarları sürümler arasında değişebileceği için güncel upstream Tymeslot yapılandırma dosyalarıyla karşılaştırmanız önerilir.
:::

## Network and Access

Tymeslot çalıştıktan sonra tarayıcınızdan erişilebilir olduğundan emin olun.

### Web arayüzüne erişim

Tarayıcınızda aşağıdaki URL'yi açın:

```text
http://[your_server_ip]:4000
```

Eğer ters proxy ve DNS yapılandırdıysanız, bunun yerine şunu kullanabilirsiniz:

```text
https://[your_domain]
```

### Port referansı

| Port | Protokol | Amaç |
| --- | --- | --- |
| `4000` | TCP | Taslak kurulumdan varsayılan web erişimi |

### Güvenlik duvarı dikkate alınması

Tymeslot'a doğrudan erişiyorsanız `4000/tcp` gelen trafiğe izin vermeniz gerekir.

:::caution Genel Erişim Güvenliği
Tymeslot'u doğrudan internete açarsanız, mutlaka HTTPS destekli ters proxy arkasına almayı düşünün. Bu, güvenliği artırır ve daha temiz alan adı tabanlı erişim sağlar.
:::

## Reverse Proxy Recommendation

Alan adı ve TLS sertifikası kullanmak istiyorsanız ters proxy önerilir.

### Neden ters proxy kullanılır

| Avantaj | Açıklama |
| --- | --- |
| HTTPS desteği | Kullanıcılar ile servis arasındaki trafiği şifreler |
| Alan adı tabanlı erişim | Ham port yerine `[your_domain]` kullanmanızı sağlar |
| Sertifika yönetimi kolaylığı | Let's Encrypt gibi araçlarla uyumludur |
| Daha temiz genel erişim | İç uygulama portlarını gizler |

### Doğrulanması gerekenler

Ters proxy yapılandırması Nginx, Apache veya başka bir web sunucusuna bağlıdır. Sağlanan kaynakta resmi proxy örneği tam bulunmadığı için, gerekli başlıklar ve websocket desteği upstream Tymeslot dokümantasyonunda doğrulanmalıdır.

## Native Installation Notes

Tymeslot Elixir ve Phoenix LiveView ile geliştirildiği için Linux veya Windows geliştirme ortamlarında yerel kurulum mümkün olabilir. Taslakta şu komutlar yer alıyordu:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Dikkat edilmesi gerekenler

| Konu | Not |
| --- | --- |
| Elixir ve Erlang | Uyumluluklu sürümler kurulmalı |
| Phoenix bağımlılıkları | Ek yapı araçları gerekebilir |
| Veritabanı kurulumu | Göçlerden önce doğru yapılandırılmalı |
| Üretim sertleştirme | Genellikle Docker’dan daha karmaşık |

:::danger Yerel Üretim Dağıtımı Doğrulaması Gerekir
Yukarıdaki yerel kurulum adımları taslakta yer almış ancak upstream depoda tam doğrulanmamıştır. Üretimde kullanmadan önce resmi Tymeslot dokümantasyonu ve depo dosyalarını kontrol etmeden güvenmeyin.
:::

## Verify the Installation

Dağıtımdan sonra uygulamanın doğru çalıştığını doğrulayın.

### Temel kontroller

| Kontrol | Beklenen sonuç |
| --- | --- |
| `docker ps` | `tymeslot` konteyneri çalışıyor |
| `docker logs tymeslot` | Tekrarlayan başlangıç veya veritabanı hatası yok |
| Tarayıcı erişimi | Tymeslot arayüzü yükleniyor |
| Port testi | Sunucuda `4000` yanıt veriyor |

### Yaygın sorunlar

| Sorun | Olası sebep |
| --- | --- |
| Sayfa yüklenmiyor | `4000` portu engellenmiş veya konteyner çalışmıyor |
| Konteyner hemen kapanıyor | Geçersiz ortam değişkenleri veya eksik bağımlılıklar |
| Loglarda veritabanı hataları | Veritabanı başlatılamadı veya depolama yolu yanlış |
| Yanlış hostname davranışı | `PHX_HOST` doğru ayarlanmamış |

## Updating Tymeslot

Yeni sürüm çıktığında dağıtımı dikkatlice güncelleyin.

### Docker güncelleme akışı

1. Güncel imajı çekin:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Mevcut konteyneri durdurun:
   ```bash
   docker stop tymeslot
   ```
3. Eski konteyneri kaldırın:
   ```bash
   docker rm tymeslot
   ```
4. Aynı yapılandırmayla yeni konteyneri başlatın.

Compose kullanıyorsanız genellikle şu komutlarla güncelleyebilirsiniz:

```bash
docker compose pull
docker compose up -d
```

:::tip Güncellemeden Önce Yedekleyin
Güncellemeden önce kalıcı volume'lerinizi ve varsa veritabanı verilerinizi yedekleyin. Böylece yeni sürümde göç veya uyumluluk sorunu çıkarsa geri dönüş yolunuz olur.
:::

## Additional References

| Kaynak | Link |
| --- | --- |
| Resmi Tymeslot deposu | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Docker resmi sitesi | [Docker](https://www.docker.com/) |
| Self-Host Weekly bahsi | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusion

Tymeslot'u Linux veya Windows üzerinde Docker kullanarak başarıyla incelediniz ve dağıttınız. Daha fazla soru veya destek için, günlük olarak hizmet veren destek ekibimizle iletişime geçmekten çekinmeyin! 🙂