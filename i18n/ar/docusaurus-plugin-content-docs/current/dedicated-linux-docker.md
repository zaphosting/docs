---
id: dedicated-linux-docker
title: "إعداد Docker على سيرفر Linux - تشغيل وإدارة الحاويات على بنيتك التحتية"
description: "اكتشف كيفية تثبيت Docker على سيرفر Linux الخاص بك لتشغيل التطبيقات المعزولة بكفاءة وتحسين استخدام الموارد → تعلّم المزيد الآن"
sidebar_label: تثبيت Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## مقدمة

Docker هو برنامج افتراضية مفتوح المصدر وخفيف الوزن يتيح تقديم الخدمات أو التطبيقات بشكل معزول على نظام واحد. على عكس الأجهزة الافتراضية الحقيقية، لا يتم محاكاة أو استضافة نظام تشغيل إضافي، بل فقط بيئة تطبيق داخل نظام المضيف. هذا لا يوفر الموارد بشكل عام فحسب، بل يسبب أيضًا حملًا منخفضًا مقارنةً بالافتراضية الكاملة. في هذا الدليل، سنغطي عملية تثبيت Docker على سيرفرك.

## التحضير

لبدء العمل، يجب عليك الاتصال بسيرفر Linux الخاص بك عبر SSH. يرجى الاطلاع على [الدليل الخاص بالوصول الأولي (SSH)](dedicated-linux-ssh.md) إذا كنت بحاجة إلى مساعدة في ذلك. طوال هذا الدليل، سنستخدم Ubuntu كتوزيعة Linux.

### تفعيل توافق Docker

يجب عليك تفعيل **توافق Docker** في واجهة الويب الخاصة بك للسماح لحاويات Docker بالعمل، وإلا ستواجه أخطاء `Permission Denied`.

توجه إلى قسم **الإعدادات** في لوحة التحكم الخاصة بسيرفرك، فعّل خيار **توافق Docker** واحفظ التغييرات.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

بعد الحفظ، تأكد من إعادة تشغيل السيرفر قبل المتابعة.

## التثبيت

الآن بعد أن اتصلت بسيرفر Linux الخاص بك، يمكنك المتابعة مع طرق التثبيت. اختر من بين مستودعات Linux أدناه لعرض خطوات التثبيت المناسبة.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu و Debian" default>

لبدء التثبيت، عليك إضافة حزمة Docker باستخدام `apt` وضبطها. هذا سيسمح لك بتثبيت وتحديث Docker بسهولة من المستودع في المستقبل.

استخدم الأوامر التالية لإضافة مفتاح GPG الرسمي لـ Docker إلى قائمة المستودعات لديك.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

بعد إعداد هذه الخطوات، عليك إضافة المستودع إلى مصادر `apt` عبر الأمر التالي.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

الآن بعد إضافة مستودع Docker إلى المصادر، شغّل أمر تحديث `apt-get` لجلب التغييرات.
```
sudo apt-get update
```

في هذه المرحلة، تكون قد أعددت مستودع Docker بنجاح. كخطوة أخيرة، عليك تثبيت حزم Docker. يمكنك تثبيت أحدث إصدار باستخدام الأمر التالي.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

لبدء التثبيت، يجب عليك تثبيت حزمة `dnf-plugins-core` التي تساعد في إدارة المستودعات.
```
sudo dnf -y install dnf-plugins-core
```

بعد تثبيت الحزمة، أضف مستودع Docker وقم بتثبيته باستخدام الأمر التالي.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

يجب أن يكون Docker مثبتًا الآن. كخطوة أخيرة، تحتاج إلى تشغيله وتمكينه ليعمل.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

للتحقق من نجاح التثبيت، جرب تشغيل صورة **hello-world** باستخدام الأمر التالي.
```
sudo docker run hello-world
```

عند النجاح، سترى رسالة ترحيبية مفيدة مع بعض المعلومات الأساسية. إذا واجهت أخطاء `Permission Denied`، تأكد من تفعيل خيار **توافق Docker** في واجهة الويب الخاصة بك وأعد تشغيل السيرفر كما هو موضح في قسم التحضير.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

لقد قمت بتثبيت Docker بنجاح على سيرفر Linux الخاص بك.

## إعدادات ما بعد التثبيت

بعد تثبيت Docker على سيرفرك، يمكنك اختيار إجراء بعض الإعدادات الإضافية لإزالة الحاجة لاستخدام sudo عند تنفيذ أوامر Docker ولتشغيل Docker تلقائيًا عند إقلاع السيرفر.

### إدارة Docker بدون Sudo

يمكنك إزالة الحاجة لإضافة `sudo` قبل جميع أوامر Docker بإنشاء مجموعة Docker جديدة وإضافة المستخدمين إليها. هذا يحسن الراحة، لكن كن حذرًا لأن هذا يمنح صلاحيات root غير مباشرة للمستخدم.

أنشئ مجموعة `docker` وأضف المستخدم الحالي إليها باستخدام الأوامر التالية.
```
# إنشاء مجموعة Docker
sudo groupadd docker

# إضافة المستخدم الحالي إلى مجموعة Docker
sudo usermod -aG docker $USER
```

بعد ذلك، نوصي بإعادة تشغيل السيرفر لضمان تحديث عضوية المجموعة. بدلاً من ذلك، يمكنك استخدام الأمر `newgrp docker` لذلك.

الآن تحقق من إمكانية تشغيل أوامر Docker بدون صلاحيات `sudo` عبر تشغيل الأمر `docker run hello-world` مرة أخرى.

:::tip
أحيانًا قد تواجه خطأ متعلق بملف التكوين إذا كنت قد شغلت الأمر سابقًا بصلاحيات `sudo`. لحل ذلك، استخدم ببساطة الأمر `rmdir ~/.docker/` لحذف مجلد Docker، وسيتم إعادة إنشائه تلقائيًا عند استخدام الأمر التالي.
:::

إذا تم تشغيل الأمر كما هو متوقع، فهذا يعني أنك أعددت Docker ليعمل بدون الحاجة لصلاحيات `sudo`.

### تشغيل Docker عند الإقلاع

يمكنك إعداد Docker ليبدأ تلقائيًا عند إقلاع السيرفر باستخدام `systemd` الذي تستخدمه معظم توزيعات Linux.

:::tip
في كل من Ubuntu و Debian، يتم إعداد Docker ليبدأ تلقائيًا عند الإقلاع بشكل افتراضي. إذا كنت تستخدم هاتين التوزيعتين، فلا حاجة لفعل أي شيء إضافي.
:::

يمكنك تمكين خدمة Docker لتعمل عند الإقلاع ببساطة عبر تشغيل الأوامر التالية.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

وبالمثل، لتعطيل الخدمة عند الإقلاع استبدل `enable` بـ `disable`. يمكنك أيضًا إدارة الخدمة باستخدام عدة أوامر فرعية لـ `systemctl` مثل:
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## الخاتمة

مبروك، لقد قمت بتثبيت وتكوين Docker بنجاح على سيرفر Linux الخاص بك! إذا كانت لديك أي أسئلة أو مشاكل إضافية، يرجى التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!