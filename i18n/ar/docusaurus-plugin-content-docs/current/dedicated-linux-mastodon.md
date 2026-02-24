---
id: dedicated-linux-mastodon
title: "إعداد Mastodon على سيرفر Linux - أطلق منصتك الاجتماعية الخاصة"
description: "اكتشف كيفية إعداد شبكة اجتماعية Mastodon آمنة ومستضافة ذاتيًا على سيرفرات مبنية على Debian للتدوين المصغر المستقل → تعلّم المزيد الآن"
sidebar_label: تثبيت Mastodon
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Mastodon هو برنامج مجاني ومفتوح المصدر لتشغيل خدمات الشبكات الاجتماعية المستضافة ذاتيًا.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

يحتوي على ميزات تدوين مصغر مشابهة لخدمة X (المعروفة سابقًا بتويتر)، والتي تُقدم عبر عدد كبير من العقد المستقلة التي تُعرف بالمثيلات،  
كل واحدة منها لها قواعد سلوك خاصة بها، وشروط الخدمة، وسياسة الخصوصية، وخيارات الخصوصية، وسياسات الإشراف.  
:::info
يركز هذا الدليل على التثبيت على توزيعة مبنية على Debian. أمثلة على ذلك Debian وUbuntu. يختلف هذا الدليل حسب نظام التشغيل الذي تستخدمه.
:::

## متطلبات النظام
إذا كنت تريد إعداد مثيل Mastodon على سيرفرك، يجب أن تستوفي بعض المتطلبات:
- نطاق
- سيرفر Linux
- سيرفر بريد إلكتروني

## تحضير النظام
ننصح بشدة أن تقوم مسبقًا بتعطيل تسجيل الدخول بكلمة المرور عبر SSH، لأنه يشكل خطر أمني عند استخدام تسجيل الدخول بكلمة مرور على سيرفرات متاحة من الإنترنت.  
يمكنك فعل ذلك من خلال واجهة الويب الخاصة بسيرفرك تحت قسم المعلومات -> الوصول والأمان -> تعطيل تسجيل الدخول بكلمة المرور  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
بعد ذلك، حدّث الحزم باستخدام الأمر التالي:
```
apt update && apt upgrade -y
```

بعدها، عليك تثبيت تبعيات Mastodon:
```bash
# مستودعات النظام
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

بعد تثبيت التبعيات، نثبت الحزم اللازمة للنظام باستخدام هذين الأمرين:
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
انتظر حتى تنتهي عملية التثبيت، والتي قد تستغرق بعض الوقت. بعد ذلك، نضبط yarn، وهو مدير الحزم لـ Node.JS المثبت سابقًا:
```bash
corepack enable
yarn set version stable
```

## تثبيت Ruby
سننشئ مستخدمًا منفصلًا لتسهيل إدارة إصدارات Ruby. أولًا، أنشئ مستخدمًا باسم mastodon مع تعطيل تسجيل الدخول. ثم انتقل إلى مستخدم mastodon بالأوامر التالية:
```bash
# يمكنك ترك الحقول فارغة
adduser --disabled-login mastodon
su - mastodon
```

الآن نثبت مدير Ruby `rbenv` لتسهيل إدارة إصدارات Ruby:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
بعد الانتهاء، ثبت Ruby مع bundler باستخدام الأمر التالي:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
قد يستغرق هذا بعض الوقت، فكن صبورًا وخذ لك كوب شاي أو قهوة أثناء الانتظار. بعد الانتهاء، يمكنك العودة إلى مستخدم root باستخدام الأمر `exit`

## إعداد PostgreSQL
يستخدم Mastodon قاعدة بيانات PostgreSQL. قم بالإعداد عبر:
```bash
sudo -u postgres psql
```

داخل موجه PostgreSQL، نفذ التالي:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## إعداد Mastodon
عد إلى مستخدم mastodon:
```bash
su - mastodon
```
استخدم git لتحميل أحدث نسخة من Mastodon بالأوامر التالية:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
ثبت باقي تبعيات Ruby وJavascript باستخدام:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
أنشئ ملف إعدادات Mastodon باستخدام:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
إذا فشل إعداد قاعدة البيانات، سجّل دخولك إلى postgres باستخدام `sudo -u postgres psql` واتبع هذا الدليل:

https://gist.github.com/amolkhanorkar/8706915
:::

عد إلى مستخدم root باستخدام الأمر `exit`

## إعداد السيرفر الويب
الآن الجزء المعقد. عليك إعداد سيرفر الويب. أولًا، أنشئ سجل A و/أو AAAA في DNS الخاص بك ليشير مباشرة إلى سيرفرك. بديلًا، يمكنك توجيه السجل الجذري إلى سيرفرك.

بعدها، استخدم الأمرين التاليين لنسخ وتفعيل إعدادات سيرفر الويب لـ Mastodon:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

حرر ملف `/etc/nginx/sites-available/mastodon` باستخدام محرر نصوص مثل vim أو nano وغيّر example.com إلى نطاقك المطلوب.  
بعدها، احصل على شهادة SSL لنطاقك بسهولة عبر الأمر:
```bash
certbot --nginx -d <نطاقك>
```
أدخل نطاقك. سيُطلب منك بعض البيانات. في النهاية، سيُسألك إذا كنت تريد إعادة توجيه طلبات http إلى https تلقائيًا، ننصح بتفعيل ذلك.

## إنشاء خدمة Mastodon
أخيرًا، ننشئ خدمة نظام لـ Mastodon. الأمر بسيط جدًا.  
انسخ إعدادات الخدمة الافتراضية إلى مجلد خدمات التوزيعة:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

فعّل وابدأ الخدمات الجديدة بالأوامر التالية:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

بعد إعادة التشغيل، يجب أن تكون قد انتهيت من الإعداد. استمتع بمثيلك!