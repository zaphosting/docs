---
id: dedicated-linux-databases
title: "إعداد قواعد البيانات على سيرفر لينكس - نشر وإدارة خدمات قواعد البيانات"
description: "اكتشف كيفية تثبيت وإعداد قواعد بيانات مختلفة على أوبونتو وتوزيعات لينكس الأخرى لأداء وأمان أفضل → تعلّم المزيد الآن"
sidebar_label: تثبيت قواعد البيانات
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

يوفر هذا الدليل خطوات تثبيت أنواع مختلفة من قواعد البيانات. في هذا المثال، نستخدم أوبونتو 20.04 كنظام تشغيل، ومع ذلك، يتم أيضًا تحديد الأوامر المكافئة لتوزيعات لينكس الأخرى التي نوفرها على موقعنا. يجب تنفيذ هذه الأوامر عبر SSH، إذا لم تكن تعرف كيفية الاتصال بسيرفرك عبر SSH، يرجى الاطلاع هنا: [الوصول الأولي (SSH)](vserver-linux-ssh.md).

## التحضير

قبل البدء في تثبيت قاعدة بيانات، من الضروري أولاً التأكد من تحديث النظام. للقيام بذلك، تحتاج إلى تحديث الحزم من مدير حزم النظام باستخدام الأمر التالي، حسب نظام التشغيل الخاص بك:

```
// أوبونتو وديبيان
sudo apt update

// سنت أو إس
sudo yum update

// أوبن سوزي
sudo zypper up

// فيدورا
sudo dnf upgrade --refresh
```

## أنواع قواعد البيانات

اعتمادًا على خدمة قاعدة البيانات التي تريد تثبيتها، اتبع الدليل المناسب:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## ما هي MariaDB؟

MariaDB هي نظام إدارة قواعد بيانات علائقية مفتوح المصدر، تم تفريعها أصلاً من MySQL. تضمن أداءً محسنًا، وأمانًا، وتطويرًا مستمرًا. تقدم MariaDB محركات تخزين محسنة، وبنيتها توفر توافقًا كاملاً مع MySQL. نوصي باستخدام MariaDB بدلاً من MySQL.

## تثبيت MariaDB

أولاً، يجب التأكد من تثبيت أحدث إصدار من MariaDB. بعض أنظمة التشغيل القديمة مثل ديبيان 9 أو أوبونتو 18.04 لا تأتي بشكل افتراضي بأحدث إصدار من MariaDB في مدير الحزم، لذا بتنفيذ الأمر التالي تتأكد من جلب أحدث إصدار.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

بعد تثبيت المستودع، حدّث ذاكرة التخزين المؤقت لمدير الحزم باتباع الخطوات المذكورة في قسم التحضير.

:::info
يمكن تجاهل تثبيت مستودع MariaDB (الخطوة أعلاه) بأمان في أنظمة التشغيل الحديثة مثل أوبونتو 22.04 أو ديبيان 11.
:::

بمجرد الانتهاء من إعداد المستودع، يمكن الآن بدء تثبيت MariaDB عبر تثبيت حزمة `mariadb-server`. حسب نظام التشغيل، يجب تنفيذ الأوامر التالية:

```
// أوبونتو وديبيان
sudo apt install mariadb-server

// سنت أو إس
sudo yum install mariadb-server

// أوبن سوزي
sudo zypper install mariadb

// فيدورا
sudo dnf install mariadb-server
```

## إعداد MariaDB

بعد اكتمال التثبيت، اكتب الأمر التالي لبدء إعداد السيرفر:

```
mysql_secure_installation
```

الآن يمكنك إعداد سيرفر MariaDB (MySQL) الخاص بك باتباع التعليمات وتعيين كلمة مرور للسيرفر. في المطالبة التالية، يمكنك تخطي الإدخال مؤقتًا بالضغط على **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
المستخدم root هو المستخدم الرئيسي لسيرفر MariaDB (MySQL) الخاص بك!
:::

بعد ذلك، سيُطلب منك إذا كنت تريد تعيين كلمة مرور لمستخدم root، أكد ذلك بالضغط على **y** للنعم. بعد ذلك، عليك كتابة كلمة المرور الجديدة لمستخدم root.

:::note
أثناء كتابة كلمة المرور، لن تتمكن من رؤيتها. هذا السلوك طبيعي وكلمة مرورك ستُخزن. تأكد من استخدام كلمة مرور قوية لمستخدم root واحتفظ بها في مكان آمن.
:::

سيُطلب منك بعد ذلك إذا كنت تريد إزالة المستخدمين المجهولين من السيرفر، يجب عليك فعل ذلك لأسباب أمنية. أكد ذلك بالضغط على **y** للنعم:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

في المطالبة التالية، تحدد إذا كان مسموحًا لمستخدم root بالاتصال بالسيرفر من الخارج. لأسباب أمنية، يجب عليك تعطيل هذا الخيار وتأكيد ذلك بالضغط على **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

في الخطوة التالية، يمكنك أيضًا تأكيد إزالة قاعدة البيانات التجريبية التي توفرها MariaDB (MySQL) بالضغط على **y**، لأنها غير ضرورية ويمكن حذفها بسهولة:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

في نهاية عملية الإعداد، سيُطلب منك تحديث أذونات قاعدة البيانات. أكد ذلك بالضغط على **y** لتفعيل كلمة المرور التي تم تعيينها لمستخدم root:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

سيرفر MariaDB (MySQL) الخاص بك جاهز الآن للاستخدام!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## ما هو Redis؟

Redis هو مخزن هياكل بيانات في الذاكرة، يُستخدم بشكل رئيسي لتخزين البيانات بهيكل مفتاح-قيمة، رغم أنه يدعم صيغ أخرى مثل القوائم، JSON والمزيد. يتميز بسرعته، حيث يرد على الاستعلامات في غضون مللي ثانية.

## تثبيت Redis

أولاً، يجب إضافة مستودع يسمح لنا بتثبيت Redis. هذه الخطوة ليست ضرورية لجميع توزيعات لينكس، فقط للتوزيعات المذكورة أدناه. نفذ الأمر الذي يتوافق مع نظام التشغيل والإصدار الخاص بك:

```
// أوبونتو (أي إصدار) وديبيان (ديبيان 10 فقط)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// سنت أو إس (سنت أو إس 7 فقط)
sudo yum install epel-release

// سنت أو إس (سنت أو إس 8 فقط)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

بعد تثبيت المستودع، حدّث ذاكرة التخزين المؤقت لمدير الحزم باتباع الخطوات في قسم التحضير.

:::info
إذا لم يكن نظام التشغيل الخاص بك مدرجًا أعلاه، يمكنك تخطي هذه الخطوة.
:::

بعد تثبيت المستودع المناسب، ستنتقل إلى تثبيت حزمة سيرفر Redis. نفذ الأمر المناسب لنظام التشغيل الذي تستخدمه.

```
// أوبونتو وديبيان
sudo apt install redis-server

// سنت أو إس
sudo yum install redis

// أوبن سوزي
sudo zypper install redis

// فيدورا
sudo dnf install redis
```

بعد التثبيت، سيرفر Redis جاهز للاستخدام! بشكل افتراضي، يعمل على 127.0.0.1:6379 بدون كلمة مرور.

:::caution 
لمستخدمي ديبيان/أوبونتو:
تذكر تفعيل خدمة `redis-server` بعد التثبيت لضمان تشغيلها تلقائيًا عند إقلاع السيرفر. يمكنك فعل ذلك بالأمر التالي:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## ما هو MongoDB؟
MongoDB هو قاعدة بيانات NoSQL موجهة للمستندات، مصممة للتوسع وسرعة تطوير التطبيقات. يخزن البيانات بصيغة BSON المشابهة لـ JSON، مما يتيح تخزين أنواع بيانات متنوعة. يحتوي على إمكانية استخدام الفهارس لتقليل زمن الاستجابة، ويتميز بعدم وجود مخطط محدد مسبقًا كما في MySQL أو SQLite، مما يوفر مرونة وسرعة.

## تثبيت MongoDB

اختر نظام التشغيل الخاص بك من التبويبات أدناه لعرض الدليل المناسب.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="أوبونتو وديبيان">

### التثبيت على أوبونتو وديبيان

أولاً، يجب تنفيذ الأمر التالي لاستيراد مفتاح GPG العام الخاص بـ MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

بعد ذلك، تحتاج إلى إضافة مصدر MongoDB إلى قائمة مصادر نظام التشغيل. لتنفيذ ذلك، يمكنك تنفيذ الأمر التالي:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

الآن يمكن لمدير الحزم تثبيت إصدار MongoDB Community، لكن يجب تحديث المستودعات أولاً بالأمر: `sudo apt update`. وأخيرًا، يمكنك تثبيت MongoDB باستخدام:

```
sudo apt install mongodb-org
```

يجب أن يكون تثبيت MongoDB الخاص بك جاهزًا الآن!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="سنت أو إس وفيدورا">

### التثبيت على سنت أو إس وفيدورا

أولاً، تحتاج إلى إعداد مستودع MongoDB لأنظمة Red Hat.

أنشئ ملفًا باسم `/etc/yum.repos.d/mongodb-org-6.0.repo`، والصق المحتوى التالي بداخله:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

الآن، يمكنك تثبيت MongoDB. هناك فرق بسيط في أمر التثبيت بين سنت أو إس وفيدورا، لذا استخدم الأمر المناسب أدناه:

```
// سنت أو إس
sudo yum install -y mongodb-org

// فيدورا
sudo dnf install -y mongodb-org
```

يجب أن يكون تثبيت MongoDB الخاص بك جاهزًا الآن، وهو أبسط بكثير مقارنة بتوزيعات لينكس الأخرى!

</TabItem>
<TabItem value="mongodb-suse" label="أوبن سوزي">

### التثبيت على أوبن سوزي

أولاً، تحتاج إلى استيراد المفتاح العام لـ MongoDB لمستودع MongoDB عبر الأمر:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

بعد ذلك، لإضافة مستودع MongoDB، نفذ الأمر التالي:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

وأخيرًا، يمكنك تثبيت أحدث إصدار من MongoDB باستخدام:

```
sudo zypper -n install mongodb-org
```

يجب أن يكون تثبيت MongoDB الخاص بك جاهزًا الآن!

</TabItem>
</Tabs>

</TabItem>
</Tabs>