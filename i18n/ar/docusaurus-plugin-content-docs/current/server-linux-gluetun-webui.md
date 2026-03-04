---
id: server-linux-gluetun-webui
title: "تثبيت Gluetun WebUI على سيرفر Linux - إدارة حاوية VPN الخاصة بك بسهولة"
description: "تعلم كيفية تثبيت وتشغيل Gluetun WebUI على VPS Linux الخاص بك لمراقبة وإدارة حاوية Gluetun VPN → تعلّم المزيد الآن"
sidebar_label: تثبيت Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## مقدمة

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) هو واجهة ويب خفيفة الوزن مصممة لتبسيط إدارة حاوية Gluetun VPN. Gluetun نفسه هو حاوية Docker شهيرة تُستخدم لتوجيه التطبيقات الأخرى عبر اتصال VPN آمن.

تضيف WebUI لوحة معلومات مريحة تتيح لك مراقبة حالة الـ VPN، إدارة الاتصالات، والتحكم في سلوك الحاوية دون الحاجة للتعامل يدويًا مع أوامر Docker أو ملفات التكوين.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

استضافة Gluetun WebUI بنفسك على سيرفرك توفر واجهة مركزية لإدارة إعداد VPN الخاص بك، مما يجعلها مفيدة بشكل خاص عند تشغيل عدة حاويات تعتمد على اتصال VPN من Gluetun.

تخطط لتشغيل Gluetun WebUI على VPS الخاص بك؟ هذا الدليل سيرشدك خطوة بخطوة خلال عملية التثبيت والتكوين.

<InlineVoucher />

## حالات استخدام Gluetun WebUI

Gluetun WebUI مفيد لأي شخص يدير تطبيقات محمولة داخل حاويات خلف VPN. تشمل حالات الاستخدام النموذجية:

- مراقبة حالة اتصال VPN في الوقت الحقيقي
- إدارة الحاويات التي توجه حركة المرور عبر Gluetun VPN
- تبسيط تكوين حاوية VPN وحل المشاكل
- التحكم في خدمات VPN بدون استخدام أوامر Docker المعقدة
- تشغيل واجهة إدارة VPN مركزية للبيئات المستضافة ذاتيًا

تكون WebUI مفيدة بشكل خاص في بيئات الهوم لاب أو إعدادات VPS حيث تعتمد عدة تطبيقات على حاوية VPN.

## المتطلبات الأساسية

قبل تثبيت Gluetun WebUI، تأكد من أن سيرفرك يلبي المتطلبات التالية.

| العتاد | الحد الأدنى | الموصى به |
|----------|---------|-------------|
| CPU | نواة واحدة | نواتان |
| RAM | 1 جيجابايت | 4 جيجابايت |
| مساحة القرص | 5 جيجابايت | 10 جيجابايت |

البرمجيات المطلوبة:

- Docker
- Docker Compose

إذا لم يكن Docker مثبتًا بعد، اتبع دليلنا لتثبيت Docker قبل المتابعة.

<InlineServiceLink />

## التحضير

قبل تثبيت Gluetun WebUI، تحقق من توفر Docker و Docker Compose على سيرفرك. نفذ الأوامر التالية للتحقق من تثبيت Docker وجاهزيته:

```
docker --version
docker compose version
```
بعدها أنشئ مجلدًا لتثبيت Gluetun WebUI.
```
mkdir gluetun-webui
cd gluetun-webui
```
سيحتوي هذا المجلد على تكوين Docker Compose المستخدم لتشغيل واجهة الويب.

## التثبيت

أنشئ ملف Docker Compose لـ Gluetun WebUI.
```
nano compose.yaml
```
أدخل التكوين التالي:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

هذا التكوين سيقوم بـ:

- نشر حاوية Gluetun WebUI
- ربطها بواجهة برمجة تطبيقات Gluetun
- فتح واجهة الويب عبر المنفذ 8000
- تخزين بيانات التكوين الدائمة في مجلد `data`

احفظ الملف واخرج من المحرر.

## تشغيل Gluetun WebUI

شغّل الحاوية باستخدام Docker Compose.

```
docker compose up -d
```

سيقوم Docker بتحميل الصورة المطلوبة وتشغيل حاوية WebUI. للتحقق من تشغيل الحاوية، استخدم:

```
docker ps
```

## الوصول إلى واجهة الويب

بمجرد تشغيل الحاوية، افتح WebUI في متصفحك.

```
http://YOUR_SERVER_IP:8000
```

استبدل `YOUR_SERVER_IP` بعنوان IP الخاص بـ VPS. بعد فتح الواجهة، ستتمكن من:

- مراقبة حالة اتصال VPN
- إدارة سلوك حاوية Gluetun
- عرض تفاصيل تكوين VPN
- التحكم في الخدمات الموجهة عبر حاوية VPN

## الخاتمة

مبروك! لقد قمت بتثبيت **Gluetun WebUI** بنجاح على سيرفر Linux الخاص بك. تتيح لك واجهة الويب الآن مراقبة وإدارة حاوية Gluetun VPN بسهولة دون الحاجة للتعامل يدويًا مع أوامر Docker.

تشغيل Gluetun WebUI جنبًا إلى جنب مع حاوية VPN يبسط الإدارة ويمنحك نظرة واضحة على حالة اتصال VPN والتكوين.

لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />