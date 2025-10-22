---
id: vserver-linux-mastodon
title: "VPS: การติดตั้ง Mastodon"
description: "ค้นพบวิธีตั้งค่าเครือข่ายสังคม Mastodon ที่โฮสต์เองได้อย่างปลอดภัยบนเซิร์ฟเวอร์ที่ใช้ Debian เพื่อควบคุมและรักษาความเป็นส่วนตัวเต็มที่ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Mastodon
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

Mastodon คือซอฟต์แวร์โอเพนซอร์สฟรีสำหรับการรันบริการเครือข่ายสังคมที่โฮสต์เองได้

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

มันมีฟีเจอร์ไมโครบล็อกคล้ายกับบริการ X (เดิมคือ Twitter) ซึ่งให้บริการโดยโหนดอิสระจำนวนมากที่เรียกว่าอินสแตนซ์
แต่ละอินสแตนซ์มีข้อบังคับการใช้งาน เงื่อนไขการให้บริการ นโยบายความเป็นส่วนตัว ตัวเลือกความเป็นส่วนตัว และนโยบายการดูแลที่แตกต่างกัน
:::info
คู่มือนี้เน้นการติดตั้งบนดิสโทรที่ใช้ Debian เป็นฐาน เช่น Debian และ Ubuntu คู่มือจะแตกต่างกันไปตามระบบปฏิบัติการที่คุณใช้
:::

<InlineVoucher />

## ความต้องการของระบบ
ถ้าคุณต้องการตั้งค่าอินสแตนซ์ Mastodon บนเซิร์ฟเวอร์ของคุณ คุณต้องมีสิ่งเหล่านี้
- โดเมน
- เซิร์ฟเวอร์ที่ใช้ Linux
- เซิร์ฟเวอร์อีเมล

## การเตรียมระบบของคุณ
แนะนำให้ปิดการล็อกอินด้วยรหัสผ่านผ่าน SSH ก่อน เพราะการใช้รหัสผ่านล็อกอินบนเซิร์ฟเวอร์ที่เข้าถึงได้จากอินเทอร์เน็ตเป็นความเสี่ยงด้านความปลอดภัย
คุณสามารถทำได้ในเว็บอินเทอร์เฟซของเซิร์ฟเวอร์ที่เมนู ข้อมูล -> การเข้าถึง & ความปลอดภัย -> ปิดใช้งานการล็อกอินด้วยรหัสผ่าน
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)
หลังจากนั้น อัปเดตแพ็กเกจของคุณด้วยคำสั่งนี้:
```
apt update && apt upgrade -y
```

ต่อไปคุณต้องติดตั้ง dependencies ของ Mastodon:
```bash
# ที่เก็บระบบ
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

หลังจากติดตั้ง dependencies สำหรับ Mastodon แล้ว เราจะติดตั้งแพ็กเกจระบบที่จำเป็นโดยใช้คำสั่งสองคำสั่งนี้:
```bash
apt update
apt install -y \
  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \
  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \
  bison build-essential libssl-dev libyaml-dev libreadline6-dev \
  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
  nginx redis-server redis-tools postgresql postgresql-contrib \
  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev
```
รอให้แพ็กเกจติดตั้งให้เสร็จ ซึ่งอาจใช้เวลาสักพัก หลังจากนั้นเราต้องตั้งค่า yarn ซึ่งเป็นตัวจัดการแพ็กเกจสำหรับ Node.JS ที่ติดตั้งไปก่อนหน้านี้
```bash
corepack enable
yarn set version stable
```

## การติดตั้ง Ruby
เราจะสร้างผู้ใช้ใหม่เพื่อให้ง่ายต่อการจัดการเวอร์ชัน Ruby ก่อนอื่นให้สร้างผู้ใช้ชื่อ mastodon โดยปิดการล็อกอิน จากนั้นสลับไปยังผู้ใช้ mastodon ด้วยคำสั่งนี้:
```bash
# สามารถเว้นช่องว่างในฟิลด์ได้เลย
adduser --disabled-login mastodon
su - mastodon
```

ตอนนี้เราจะติดตั้งตัวจัดการ Ruby ชื่อ `rbenv` เพื่อให้ง่ายต่อการจัดการเวอร์ชัน Ruby ใช้คำสั่งเหล่านี้:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
หลังจากรันคำสั่งเหล่านี้เสร็จ คุณสามารถติดตั้ง Ruby และ bundler ได้ด้วยคำสั่งนี้:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
อาจใช้เวลาสักพัก ระหว่างรอแนะนำให้ชงชา หรือกาแฟไว้ดื่ม หลังจากนั้นเราก็พร้อมแล้ว สามารถสลับกลับไปยังผู้ใช้ root ด้วยคำสั่ง `exit`

## การตั้งค่า PostgreSQL
Mastodon ใช้ PostgreSQL เป็นระบบฐานข้อมูล การตั้งค่าง่าย ๆ ด้วยคำสั่งนี้:
```bash
sudo -u postgres psql
```

ในพรอมต์ PostgreSQL ให้พิมพ์คำสั่งนี้:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## การตั้งค่า Mastodon
ตอนนี้สลับกลับไปยังผู้ใช้ mastodon อีกครั้ง:
```bash
su - mastodon
```
ใช้ git ดาวน์โหลดเวอร์ชัน Mastodon ล่าสุดด้วยคำสั่งสองคำสั่งนี้:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
ต่อไปติดตั้ง dependencies สุดท้ายสำหรับ Ruby และ Javascript ด้วยคำสั่งเหล่านี้:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
สร้างไฟล์คอนฟิก Mastodon ด้วยคำสั่งนี้:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
ถ้าการตั้งค่าฐานข้อมูลล้มเหลว ให้ล็อกอินเข้า postgres ด้วย `sudo -u postgres psql` และดูเอกสารนี้:

https://gist.github.com/amolkhanorkar/8706915
:::

หลังจากนั้นสลับกลับไปยังผู้ใช้ root ด้วยคำสั่ง `exit`

## การตั้งค่าเว็บเซิร์ฟเวอร์
ขั้นตอนนี้ค่อนข้างซับซ้อน คุณต้องตั้งค่าเว็บเซิร์ฟเวอร์ก่อน สร้าง A-Record และ/หรือ AAAA-Record ใน DNS ของคุณให้ชี้ตรงไปยังเซิร์ฟเวอร์ หรือจะชี้ Root-Record ไปยังเซิร์ฟเวอร์ก็ได้

จากนั้นใช้คำสั่งสองคำสั่งนี้เพื่อคัดลอกและเปิดใช้งานคอนฟิกเว็บเซิร์ฟเวอร์ Mastodon
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

แก้ไขไฟล์ `/etc/nginx/sites-available/mastodon` ด้วยโปรแกรมแก้ไขข้อความ เช่น vim หรือ nano แล้วเปลี่ยน example.com เป็นโดเมนของคุณ
ต่อไปขอใบรับรอง SSL สำหรับโดเมนของคุณง่าย ๆ ด้วยคำสั่งนี้:
```bash
certbot --nginx -d <your domain>
```
ใส่โดเมนของคุณ คุณจะถูกถามข้อมูลหลายอย่าง สุดท้ายจะถามว่าต้องการเปลี่ยนเส้นทาง http ไป https อัตโนมัติไหม เราแนะนำให้เปิดใช้งาน

## การสร้างบริการ Mastodon
สุดท้ายเราจะสร้างบริการระบบ Mastodon ใช้งานง่ายมาก
ใช้คำสั่งนี้เพื่อคัดลอกคอนฟิกบริการไปยังไดเรกทอรีบริการของดิสโทรคุณ
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

เปิดใช้งานและเริ่มบริการใหม่ด้วยคำสั่งสองคำสั่งนี้:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า Mastodon สำเร็จแล้ว! ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน!

<InlineVoucher />