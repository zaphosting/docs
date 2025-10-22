---
id: vserver-linux-mastodon
title: "VPS: تثبيت Mastodon"
description: "اكتشف كيفية إعداد شبكة اجتماعية Mastodon آمنة ومستضافة ذاتيًا على سيرفرات مبنية على ديبيان للتحكم الكامل والخصوصية → تعلّم المزيد الآن"
sidebar_label: تثبيت Mastodon
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Mastodon هو برنامج مجاني ومفتوح المصدر لتشغيل خدمات الشبكات الاجتماعية المستضافة ذاتيًا.

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

يحتوي على ميزات التدوين المصغر مشابهة لخدمة X (المعروفة سابقًا بتويتر)، والتي تُقدم عبر عدد كبير من العقد المستقلة، المعروفة باسم المثيلات،  
كل منها له قواعد سلوكه الخاصة، شروط الخدمة، سياسة الخصوصية، خيارات الخصوصية، وسياسات الإشراف.  
:::info
يركز هذا الدليل على التثبيت على توزيعة مبنية على ديبيان. أمثلة على ذلك ديبيان وأوبونتو. يختلف الدليل حسب نظام التشغيل الذي تستخدمه.
:::

<InlineVoucher />

## المتطلبات الأساسية للنظام
إذا كنت تريد إعداد مثيل Mastodon على سيرفرك، يجب أن تتوفر لديك بعض المتطلبات:
- نطاق
- سيرفر مبني على لينكس
- سيرفر بريد إلكتروني

## تحضير النظام
ننصحك بتعطيل تسجيل الدخول باستخدام كلمة المرور عبر SSH مسبقًا، لأنه يشكل خطر أمني عند استخدام تسجيل الدخول بكلمة مرور على سيرفرات متاحة من الإنترنت.  
يمكنك فعل ذلك من خلال واجهة الويب لسيرفرك تحت قسم المعلومات -> الوصول والأمان -> تعطيل تسجيل الدخول بكلمة المرور  
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)  
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

بعد تثبيت التبعيات لـ Mastodon، يمكننا تثبيت الحزم النظامية اللازمة. نفعل ذلك باستخدام الأمرين التاليين:
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
انتظر حتى تنتهي عملية التثبيت، فقد تستغرق بعض الوقت. بعد ذلك، علينا إعداد yarn، وهو مدير الحزم لـ Node.JS المثبت سابقًا:
```bash
corepack enable
yarn set version stable
```

## تثبيت روبي
سننشئ مستخدمًا مختلفًا، لأن ذلك يسهل إدارة إصدارات روبي. أولًا، عليك إنشاء مستخدم باسم mastodon مع تعطيل تسجيل الدخول له. ثم تنتقل إلى مستخدم mastodon. يمكنك فعل ذلك بالأوامر التالية:
```bash
# يمكنك ترك الحقول فارغة
adduser --disabled-login mastodon
su - mastodon
```

الآن نثبت مدير روبي `rbenv`، الذي يسهل إدارة إصدارات روبي. ثبتّه بالأوامر التالية:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
بعد الانتهاء من هذه الأوامر، يمكنك تثبيت روبي باستخدام الأمر التالي. سنثبت أيضًا bundler في هذه الخطوة.
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
قد يستغرق هذا بعض الوقت، فكن صبورًا وخذ لك كوب شاي أو قهوة أثناء الانتظار. بعد الانتهاء، يمكننا العودة إلى مستخدم root باستخدام الأمر `exit`

## إعداد PostgreSQL
يستخدم Mastodon قاعدة بيانات PostgreSQL. يمكن إعدادها بسهولة باستخدام الأمر:
```bash
sudo -u postgres psql
```

داخل موجه PostgreSQL، أدخل التالي:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## إعداد Mastodon
الآن نعود إلى مستخدم mastodon مرة أخرى:
```bash
su - mastodon
```
نستخدم git لتحميل أحدث نسخة من Mastodon بالأوامر التالية:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
بعدها، نثبت المزيد من تبعيات روبي وجافاسكريبت النهائية باستخدام هذه الأوامر:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
ثم أنشئ ملف إعداد Mastodon باستخدام الأمر:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
إذا فشل إعداد قاعدة البيانات، يرجى تسجيل الدخول إلى postgres باستخدام `sudo -u postgres psql` واتباع هذا الدليل:

https://gist.github.com/amolkhanorkar/8706915
:::

بعد ذلك، عد إلى مستخدم root باستخدام الأمر `exit`

## إعداد السيرفر الويب
الآن الجزء المعقد. عليك إعداد سيرفر الويب. أولًا، أنشئ سجل A و/أو AAAA في DNS الخاص بك ليشير مباشرة إلى سيرفرك. بدلاً من ذلك، يمكنك توجيه سجل الجذر إلى سيرفرك.

بعدها استخدم الأمرين التاليين لنسخ وتفعيل إعداد سيرفر الويب الخاص بـ Mastodon:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

بعدها، حرر ملف `/etc/nginx/sites-available/mastodon` باستخدام محرر نصوص مثل vim أو nano وغيّر example.com إلى نطاقك المطلوب.  
بعدها، عليك الحصول على شهادة SSL لنطاقك. يمكنك فعل ذلك بسهولة بهذا الأمر:
```bash
certbot --nginx -d <نطاقك>
```
أدخل نطاقك. سيُطلب منك عدة بيانات اعتماد. في النهاية، سيُسألك إذا كنت تريد إعادة توجيه طلبات http إلى https تلقائيًا، ننصحك بتفعيلها.

## إنشاء خدمة Mastodon
أخيرًا، سننشئ خدمة نظام لـ Mastodon. الأمر بسيط جدًا.  
استخدم هذا الأمر لنسخ إعداد الخدمة الافتراضي إلى مجلد خدمات التوزيعة:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

الآن فعّل وابدأ الخدمات الجديدة بالأوامر التالية:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين Mastodon بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />