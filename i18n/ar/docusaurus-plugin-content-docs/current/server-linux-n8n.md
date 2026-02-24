---
id: server-linux-n8n
title: "إعداد n8n على سيرفر لينكس - أنشئ أتمتة سير عمل قوية"
description: "اكتشف كيفية تثبيت وإعداد n8n للاستضافة الذاتية لبناء أتمتة سير عمل ذكية تجعل عملك أسهل → تعلّم المزيد الآن"
sidebar_label: تثبيت n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## مقدمة

[n8n](https://n8n.io/) هو محرر بصري رائد للتكرار السريع حيث يمكنك بناء أتمتة سير العمل ورؤية النتائج فورًا. مثالي لكل من الأتمتة اليومية وسير عمل وكلاء الذكاء الاصطناعي المعقدين.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

الدعم للاستضافة الذاتية ومحرر الأكواد المنخفضة يجعل n8n المفضل لكل مطور. إذا كنت تريد أقصى تحكم، تخصيصات، وترغب في تقليل التكاليف على المدى الطويل، خيار الاستضافة الذاتية هو خيار ممتاز لك.

تخطط لاستضافة n8n بنفسك؟ سنرشدك خلال كل خطوة لكيفية إعداده وتكوينه، مع كل ما تحتاج لمعرفته.

<InlineVoucher />



## حالات استخدام n8n

يمكن استخدام n8n في العديد من السيناريوهات اليومية المختلفة وهو مناسب لأي شخص يريد أتمتة المهام، استخدام محرر الأكواد المنخفضة، بناء وكلاء ذكاء اصطناعي، قيادة الأتمتة، تعزيز CRM، عمليات تكنولوجيا المعلومات، عمليات الأمان، النمذجة الخلفية، وأكثر بكثير! n8n مثالي للمبتدئين والخبراء على حد سواء.

يقدم n8n أكثر من 1367 تكامل مثل Google Sheets، Telegram، MySQL، Slack، Discord، Postgres مع مجموعات أتمتة رائجة مثل HubSpot و Salesforce، Twilio و WhatsApp، GitHub و Jira، Asana و Slack، Asana و Salesforce، Jira و Slack والعديد من قوالب المجتمع.

## المتطلبات الأساسية

بينما n8n خفيف الوزن في جوهره، يمكن أن تزداد استخدام الموارد مع مرور الوقت بناءً على عدد استخدامات سير العمل، مكالمات API، والعقد الثقيلة بالبيانات. نوصي بمتطلبات الأجهزة التالية لاستضافة n8n على VPS الخاص بك.

| الأجهزة    | الحد الأدنى  | الموصى به                 |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 نواة vCPU  | 2 نواة vCPU               |
| RAM        | 2 جيجابايت   | 4 جيجابايت                |
| مساحة القرص | 20 جيجابايت  | 50 جيجابايت               |
<InlineServiceLink />

## التحضير

قبل البدء، نحتاج لتثبيت Docker وتحديث حزم النظام. لدينا بالفعل دليل عن [تثبيت Docker](dedicated-linux-docker.md). تأكد من إكماله قبل بدء التثبيت.

## التثبيت
بعد تثبيت Docker على سيرفرك، شغّل الأمر التالي للتحقق من التثبيت:

```
docker --version
docker compose version
```

### إنشاء ملف `.env`

أنشئ مجلد مشروع لتخزين ملفات n8n المحلية وتكوينات بيئة n8n وانتقل داخله:

```
mkdir n8n-compose
cd n8n-compose
```

داخل مجلد `n8n-compose`، أنشئ ملف `.env` باستخدام `nano .env` وأضف الكود التالي مع تكوين بيئة n8n.

```
# DOMAIN_NAME و SUBDOMAIN معًا يحددان من أين سيكون n8n متاحًا
# النطاق الأعلى الذي سيتم الخدمة منه
DOMAIN_NAME=zap.cloud

# النطاق الفرعي الذي سيتم الخدمة منه
SUBDOMAIN=silver-octopus-xxxxx

# المثال أعلاه يخدم n8n على: https://silver-octopus-xxxxx.zap.cloud

# المنطقة الزمنية الاختيارية التي يستخدمها Cron وعقد الجدولة الأخرى
GENERIC_TIMEZONE=Europe/Berlin

# عنوان البريد الإلكتروني المستخدم لإنشاء شهادة TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
للعثور على DOMAIN_NAME و SUBDOMAIN، توجه إلى صفحة منتج ZAP-Hosting الخاصة بك وادخل إلى VPS الخاص بك، وابحث عن `اسم المضيف`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

أدخل جزء `zap.cloud` في DOMAIN_NAME والجزء السابق في SUBDOMAIN (مثلاً silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning متطلبات HTTPS
لا تستخدم عنوان IP عادي في ملف .env. n8n يتطلب اتصال HTTPS للوصول إلى الموقع، وشهادات SSL تصدر فقط للنطاقات، وليس لعناوين IP العادية.
:::

إذا أردت استضافة n8n على نطاقك الخاص بدلاً من ذلك، أنشئ نطاقًا فرعيًا لـ n8n بإنشاء سجل A باستخدام مدير DNS الخاص بنطاقك يشير إلى عنوان IP الخاص بـ VPS الذي تستخدمه.

| الاسم             | النوع | القيمة          | TTL  | الأولوية |
| ---------------- | ---- | --------------- | ---- | -------- |
| n8n (نطاق فرعي)  | A    | عنوان IPv4      | 1440 | 0        |

### إنشاء مجلد الملفات المحلية

داخل مجلد المشروع، أنشئ مجلدًا آخر يسمى `local-files` لمشاركة الملفات بين نسخة n8n ونظام المضيف:

```
mkdir local-files
```

### إنشاء ملف Docker Compose

أنشئ ملف Docker Compose `compose.yaml` باستخدام `nano compose.yaml` والصق المحتوى التالي فيه:

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

هذا يثبت n8n، يصدر شهادة SSL، يكوّن ويجعل n8n مباشر على النطاق.

### تشغيل n8n

لتشغيل n8n، نفذ الأمر التالي:

```
sudo docker compose up -d
```

لإيقاف n8n، نفذ الأمر التالي:

```
sudo docker compose stop
```

### الوصول إلى n8n

بعد تشغيل n8n، الخطوة التالية هي الوصول إليه عبر متصفح الويب. أدخل عنوان URL (أو اسم المضيف إذا استخدمته) للدخول إلى صفحة الإعداد. هنا، عليك إنشاء حساب مسؤول قبل المتابعة.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info ملاحظة كلمة المرور
تأكد من تذكر كلمة المرور لاستخدامها لاحقًا!
:::

بعدها، ستظهر لك استبيان صغير يطلب منك إدخال بعض التفاصيل الأساسية.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

اختياريًا، يمكنك الحصول على وصول مجاني لبعض الميزات المدفوعة التي تتطلب إدخال بريدك الإلكتروني واستلام بريد يحتوي على مفتاح الترخيص. إذا كنت مهتمًا، أدخل بريدك الإلكتروني واطلب مفتاح الترخيص.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

سيظهر مفتاح الترخيص فورًا في بريدك الإلكتروني. انسخ هذا المفتاح والصقه في الإعدادات > الاستخدام والخطط > إدخال مفتاح التفعيل.

### إنشاء أول سير عمل

بعد ذلك، ستتمكن من زيارة لوحة المعلومات والبدء باستخدام n8n على الفور!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

الآن، يمكنك البدء بلوحة فارغة أو العمل مع قالب جاهز. تثبيت n8n الخاص بك جاهز تمامًا!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## الخاتمة والمزيد من الموارد

تهانينا! لقد قمت بتثبيت n8n بنجاح على سيرفرك ويمكنك البدء في استخدامه فورًا. نوصي أيضًا بإلقاء نظرة على الموارد التالية، التي قد توفر لك مساعدة إضافية وإرشادات أثناء عملية تكوين السيرفر.

- [n8n.io](https://n8n.io/) - الموقع الرسمي
- [docs.n8n.io](https://docs.n8n.io/) - توثيق n8n

هل لديك أسئلة محددة غير مغطاة هنا؟ لأي استفسارات أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم لدينا، المتوفر يوميًا لمساعدتك! 🙂



<InlineVoucher />