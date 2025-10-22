---
id: dedicated-windows-javascript
title: 'سيرفر مخصص: تثبيت JavaScript'
description: "اكتشف كيفية تثبيت وإعداد Node.js و Deno و Bun على ويندوز لتشغيل JavaScript بكفاءة → تعلّم المزيد الآن"
sidebar_label: تثبيت JavaScript
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

هذا الدليل يشرح خطوات تثبيت Node.js و Deno و Bun على ويندوز. يجب تنفيذ الخطوات التالية عبر RDP، إذا لم تكن تعرف كيفية الاتصال بسيرفرك عبر RDP، يرجى مراجعة [دليل الوصول الأولي (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## التثبيت

لتبدأ، عليك أن تقرر أي بيئة تشغيل JavaScript تريد تثبيتها. هناك الكثير من الموارد على الإنترنت التي تشرح كل واحدة بالتفصيل. لكن يمكنك أيضاً قراءة هذا الدليل لأنه يتضمن أوامر استخدام أساسية وأمثلة برمجية. ننصح باستخدام Node.js لأنه من أكثر الخيارات استخداماً وشعبية.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## تثبيت بيئة تشغيل Node.js

### الخطوة 1: تحميل الملفات
افتح المتصفح الذي تفضله (سأستخدم Chrome في هذا الدليل) وتوجه إلى [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

الآن اضغط على زر `Download Node.js (LTS)` وانتظر حتى يكتمل التنزيل.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
ننصح دائماً باستخدام أحدث إصدار دعم طويل الأمد (LTS).
:::

### الخطوة 2: تثبيت Python
شغّل المثبّت بالنقر عليه. ستُطلب منك إعداد بعض الخيارات أثناء التثبيت. في صفحة `Welcome` اضغط على `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

اقرأ ووافق على اتفاقية ترخيص Node.js (عن طريق تحديد المربع) ثم اضغط على `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

بعدها سيُطلب منك اختيار مكان تثبيت Node.js.

:::note
ننصح باستخدام موقع التثبيت الافتراضي.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

في الصفحة التالية، يمكنك اختيار عدم تثبيت بعض الحزم الأساسية لـ Node.js. إذا أردت تثبيت عادي (وهو الموصى به)، فقط اضغط `Next`. سيكون لديك أيضاً خيار تثبيت Chocolatey، لكنه غير ضروري.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### الخطوة 3: إكمال التثبيت
الآن يمكنك الضغط على `Install` وانتظر حتى يكتمل التثبيت. تحلّى بالصبر فقد يستغرق بعض الوقت. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

بعد الانتهاء، اضغط `Finish` وابدأ باستخدام Node.js على سيرفرك.

### تحديث Node.js لأحدث إصدار

تشغيل الأمر `node -v` يعرض لك إصدار Node.js المثبت. من وقت لآخر، تحقق أنك تستخدم أحدث إصدار LTS. لتحديث Node.js، اتبع قسم [تثبيت Node.js](dedicated-windows-javascript.md#installing-nodejs-runtime) في هذا الدليل مرة أخرى.

### تشغيل Node.js و npm

npm هو مدير الحزم الرسمي لـ Node.js. ستستخدمه لتثبيت أي حزم من الإنترنت.

:::tip
يمكنك العثور على جميع حزم npm على [موقعهم الرسمي](https://www.npmjs.com/).
:::

### إنشاء مشروع جديد

كل مرة تريد بدء مشروع Node.js جديد، عليك إنشاء مجلد جديد باستخدام مستكشف الملفات، ثم فتح موجه الأوامر أو PowerShell داخله وتشغيل الأمر `npm init` لبدء الإعداد. سيطلب منك بعض المعلومات الأساسية لإنشاء ملف `package.json`، وهو ملف "الإعدادات" لتشغيل Node.js.

:::tip
على ويندوز، النقر مرة على مسار المجلد في مستكشف الملفات وكتابة `cmd` ثم الضغط على Enter يفتح موجه الأوامر داخل المجلد الحالي، مما يسهل العملية.
:::

بعد تهيئة المشروع الجديد، يمكنك إنشاء ملف جديد باسم `index.js` وكتابة الكود بداخله. كمثال، سننشئ سيرفر http بسيط على المنفذ الافتراضي 80 يرد برسالة اختبار عند الوصول إليه عبر localhost. الكود كما يلي:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

الآن يمكنك تشغيل الكود باستخدام الأمر `node .` وتفقد النتيجة بزيارة `localhost:80` في متصفحك.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
تثبيت الحزم الخارجية من npm يتم عبر الأمر `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## تثبيت بيئة تشغيل Deno

تثبيت Deno بسيط جداً، فقط اكتب الأمر `irm https://deno.land/install.ps1 | iex` داخل نافذة PowerShell. استخدم شريط البحث في ويندوز وابحث عن `Powershell`. افتح النافذة كمسؤول وشغّل الأمر أعلاه، واتبع أي تعليمات تظهر لك.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
للتحقق من الإصدار المثبت حالياً، يمكنك تشغيل `deno --version`.
:::

### تحديث Deno لأحدث إصدار

يمكنك تحديث Deno ببساطة عبر الأمر `deno upgrade`.

### تشغيل Deno

لبدء تشغيل Deno، عليك إنشاء ملف جديد باسم `index.ts` وكتابة بعض الكود فيه. كمثال، سننشئ سيرفر http بسيط على المنفذ الافتراضي 80 يرد برسالة اختبار عند الوصول إليه عبر localhost. الكود كما يلي:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

الآن يمكنك تشغيل الكود باستخدام الأمر `deno run --allow-net index.ts` وتفقد النتيجة بزيارة `localhost:80` في متصفحك.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
تم تصميم Deno ليكون أكثر أماناً، لذا يتطلب أذونات معينة مثل `--allow-net` للوصول إلى بعض وحداته.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## تثبيت بيئة تشغيل Bun

Bun يوفر أيضاً أمر تثبيت سهل جداً، كما يتيح للمستخدمين خيار التثبيت عبر npm إذا كانوا قد استخدموا Node.js سابقاً.

<Tabs>
<TabItem value="command" label="أمر" default>

تشغيل الأمر `irm bun.sh/install.ps1|iex` داخل PowerShell سيقوم بتثبيت Bun على سيرفرك.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
قد يفتقد السيرفر بعض الملفات المطلوبة. Bun سيخبرك بذلك ويربطك بصفحات تحميل هذه الملفات عند محاولة تشغيل المثبّت.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

إذا كان لديك npm مثبت مسبقاً، يمكنك تشغيل `npm install -g bun` لتثبيت Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### تشغيل Bun

تم تصميم Bun ليكون أسرع من بعض محركات JavaScript الأخرى، مع إعداد مشابه لـ Node.js. لتشغيل Bun، افتح مجلد فارغ وشغّل الأمر `bun init` في موجه الأوامر.

:::note
اعتماداً على اللغة المختارة (JS أو TS)، سيقوم Bun بإنشاء ملف إعداد (jsconfig.json أو tsconfig.json).
:::

لبدء تشغيل Bun، عليك إنشاء ملف جديد باسم `index.ts` وكتابة بعض الكود فيه. كمثال، سننشئ سيرفر http بسيط على المنفذ الافتراضي 80 يرد برسالة اختبار عند الوصول إليه عبر localhost. الكود كما يلي:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

الآن يمكنك تشغيل الكود باستخدام الأمر `bun index.ts` وتفقد النتيجة بزيارة `localhost:80` في متصفحك.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## الخاتمة

مبروك، لقد قمت بتثبيت JavaScript بنجاح. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يومياً لمساعدتك! 🙂




<InlineVoucher />