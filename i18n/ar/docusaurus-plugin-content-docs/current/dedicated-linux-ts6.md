---
id: dedicated-linux-ts6
title: "سيرفر مخصص: إعداد سيرفر Teamspeak 6 على سيرفرك المخصص بنظام Linux"
description: "اكتشف كيفية إعداد وتحسين سيرفر TeamSpeak 6 لاستضافة موثوقة وأداء عالي → تعلّم المزيد الآن"
sidebar_label: تثبيت سيرفر Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

في صيف 2025، أطلقت TeamSpeak النسخة **التجريبية (Beta)** من **سيرفر TeamSpeak 6**. الآن يمكنك تجربة الجيل القادم من TeamSpeak بنفسك!

تفكر تستضيف الخدمة بنفسك؟ هنمشي معاك خطوة بخطوة كيف تضبطها وتضبط إعداداتها، وكل اللي لازم تعرفه.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## المتطلبات الأساسية

قبل تثبيت **سيرفر Teamspeak 6**، تأكد إن بيئة الاستضافة عندك تلبي المتطلبات التالية لضمان تثبيت سلس وأداء مثالي.

| العتاد      | الحد الأدنى | توصية ZAP-Hosting       |
| ----------- | ----------- | ----------------------- |
| CPU         | 1 نواة CPU  | 4 أنوية CPU             |
| RAM         | 1 جيجابايت  | 4 جيجابايت              |
| مساحة القرص | 1 جيجابايت  | 25 جيجابايت             |



## التحضير

قبل إعداد **سيرفر TeamSpeak 6**، لازم تجهز نظامك. هذا يشمل تحديث نظام التشغيل لأحدث نسخة وتثبيت كل التبعيات المطلوبة. هالتحضيرات تضمن بيئة مستقرة وتساعد على تجنب المشاكل أثناء أو بعد التثبيت.


### تحديث النظام
عشان تتأكد إن نظامك يشتغل بأحدث البرامج وتحسينات الأمان، لازم دايمًا تبدأ بتحديث النظام. نفذ الأمر التالي:

```
sudo apt update && sudo apt upgrade -y
```
هذا يضمن إن نظامك يحتوي على أحدث تصحيحات الأمان والإصدارات قبل المتابعة.

### تثبيت التبعيات
بعد ما يخلص التحديث، تقدر تبدأ تثبيت التبعيات. لأسرع وأسهل طريقة موصى بها، ننصح باستخدام Docker. عشان كذا، لازم تثبت Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## التثبيت
بعد ما تحقق كل المتطلبات وجهزت النظام، تقدر تبدأ تثبيت تطبيق سيرفر Teamspeak 6.

الخطوة الجاية هي إنشاء ملف Docker Compose باسم `docker-compose.yml` لسيرفر TeamSpeak 6. تقدر تختار أي مجلد، لكن في هذا المثال الملف راح ينشأ تحت `/opt/containers/ts6/`. هنا نستخدم ملف Compose الرسمي الخاص بـ TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # منفذ الصوت
      - "30033:30033/tcp" # نقل الملفات
      # - "10080:10080/tcp" # استعلام الويب
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

انتقل للمجلد اللي تبي تنشئ فيه الملف وأنشئ الملف باستخدام الأمر `nano docker-compose.yml` والصق المحتوى هناك.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


لتشغيل حاوية Docker وسيرفر TeamSpeak 6، نفذ الأمر التالي:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

الحين راح يبدأ تشغيل حاوية Docker لسيرفر TeamSpeak 6. بشكل افتراضي، ما راح يشتغل بشكل دائم بعد. عند أول تشغيل، راح تشوف **معلومات مهمة** عن **حساب مدير Server Query** و **مفتاح الصلاحيات (privilege key)**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

تأكد تحفظ هالمعلومات بأمان، لأنها ما راح تظهر مرة ثانية في التشغيلات القادمة. بعدين، أوقف الحاوية باستخدام `CTRL+C`.



## التهيئة

تقدر تعدل إعدادات إضافية لسيرفر TeamSpeak 6 باستخدام **متغيرات البيئة** في ملف Docker Compose. هذا يسمح لك تضبط السيرفر حسب احتياجاتك. قائمة كاملة بالخيارات المتاحة موجودة في الوثائق الرسمية لـ [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

مثال في `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## تشغيل السيرفر

عشان تخلي سيرفر TeamSpeak 6 يشتغل في الخلفية، شغل الحاوية بالأمر التالي:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

عشان توقف سيرفر TeamSpeak 6، أوقف الحاوية بالأمر التالي:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## إنشاء الاتصال

بعد ما يشغل سيرفر TeamSpeak 6، تقدر تتصل باستخدام عميل TeamSpeak 6. ببساطة استخدم عنوان IP الخاص بسيرفرك مع المنفذ الصحيح. أدخل هالتفاصيل في العميل عشان تتصل بالسيرفر وتبدأ الاختبار.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## الخاتمة والمزيد من الموارد

مبروك! الآن ثبت وضبط سيرفر Teamspeak 6 على سيرفرك المخصص بنجاح. ننصحك كمان تطّلع على الموارد التالية، اللي ممكن تساعدك وتوجهك أكثر خلال عملية إعداد السيرفر:

- [الموقع الرسمي](https://teamspeak.com/en/) - معلومات وتنزيلات TeamSpeak 6
- [منتدى المجتمع](https://community.teamspeak.com/) - دعم المستخدمين والنقاشات
- [قضايا GitHub](https://github.com/teamspeak/teamspeak6-server/issues) - للإبلاغ عن الأخطاء وتتبع القضايا المفتوحة

عندك أسئلة محددة مش مذكورة هنا؟ لأي استفسار أو مساعدة إضافية، لا تتردد تتواصل مع فريق الدعم عندنا، متوفرين يوميًا لمساعدتك! 🙂