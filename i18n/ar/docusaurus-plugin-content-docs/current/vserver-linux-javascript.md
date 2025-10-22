---
id: vserver-linux-javascript
title: 'VPS: تثبيت JavaScript'
description: "اكتشف كيفية تثبيت وإعداد Node.js و Deno و Bun على سيرفرك لإدارة تشغيل JavaScript بكفاءة → تعلّم المزيد الآن"
sidebar_label: تثبيت JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

يوفر هذا الدليل خطوات تثبيت Node.js و Deno و Bun. يجب تنفيذ هذه الأوامر عبر SSH، إذا لم تكن تعرف كيفية الاتصال بسيرفرك عبر SSH، يرجى الاطلاع على [الوصول الأولي (SSH)](vserver-linux-ssh.md) دليلنا.

<InlineVoucher />

## التحضير

قبل تثبيت أي شيء على السيرفر، يُنصح بتشغيل أمر التحديث الخاص بنظام التشغيل لديك للحفاظ على أمان السيرفر.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="أوبونتو وديبيان" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="سينت أو إس">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="أوبن سوزي">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="فيدورا">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## التثبيت

لبدء، عليك أن تقرر أي بيئة تشغيل JavaScript تريد تثبيتها. هناك الكثير من الموارد على الإنترنت التي تشرح كل واحدة بالتفصيل. لكن يمكنك أيضًا قراءة هذا الدليل لأنه يتضمن أوامر الاستخدام الأساسية وأمثلة على الأكواد. نوصي باستخدام NodeJS لأنه من أكثر الخيارات استخدامًا وشعبية.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## تثبيت بيئة تشغيل Node.js

يمكنك تثبيت Node.js عبر مدير الحزم الخاص بتوزيعة لينكس التي تستخدمها أو باستخدام nvm. نوصي باستخدام apt لأنه عادةً أسهل.

<Tabs>
<TabItem value="apt" label="مدير الحزم" default>

شغّل الأمر التالي لبدء تثبيت Node.js عبر مدير الحزم.

```
apt install nodejs -y
```

لتثبيت حزم Node.js لمشاريعك، ستحتاج أيضًا إلى تثبيت مدير الحزم npm.

```
apt install npm
```

### تحديث Node.js إلى أحدث إصدار

تشغيل الأمر `node -v` سيُظهر لك إصدار Node.js المثبت. عادةً ما لا يكون هذا هو الإصدار الأحدث، لذا ستحتاج لتحديثه للحصول على أحدث الميزات. لحسن الحظ، توفر حزمة npm المسماة `n` طريقة سهلة جدًا للقيام بذلك.

أولاً، سنحتاج لتثبيتها عبر الأمر `npm install -g n` ثم يمكننا تشغيل `n [version]`، مع استبدال `[version]` برقم الإصدار المطلوب، لتثبيت أي إصدار من Node.js.

:::tip
يُنصح عمومًا بالحفاظ على التثبيت على أحدث إصدار دعم طويل الأمد (LTS). يمكنك فعل ذلك عبر الأمر `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

تثبيت Node.js عبر nvm يمنحك تحكمًا أدق في وجود إصدارات مختلفة من Node.js مع حزمها الخاصة.

أولاً، تأكد من تثبيت curl على نظامك ثم شغّل الأمر التالي.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

هذا الأمر سيحصل على سكريبت تثبيت nvm من GitHub ويشغّله.

:::note
إذا لم تعمل أوامر nvm بعد التثبيت، يرجى تشغيل `source ~/.bashrc` لإعادة تحميل ملف إعدادات bash.
:::

بنفس الطريقة السابقة، يمكنك الآن تشغيل الأمر (`nvm install v[version]`) لتثبيت أي إصدار من Node.js. إذا أردت رؤية كل الإصدارات المتاحة للتحميل، شغّل `nvm list-remote`، وإذا أردت رؤية كل إصدارات Node.js المثبتة حاليًا، شغّل `nvm list`.

:::tip
يمكن تثبيت إصدار الدعم طويل الأمد عبر الأمر `nvm install --lts`
:::

</TabItem>
</Tabs>

### تشغيل Node.js و npm

npm هو مدير الحزم الرسمي لـ Node.js. ستستخدمه لتثبيت أي حزم من الإنترنت.

:::note
يمكنك العثور على كل حزم npm على [موقعهم الرسمي](https://www.npmjs.com/).
:::

### إنشاء مشروع جديد

في كل مرة تريد بدء مشروع Node.js جديد، تحتاج إلى إنشاء مجلد جديد له (`mkdir [project-name]`) أو الدخول إلى مجلد فارغ عبر `cd` ثم تشغيل الأمر `npm init` لبدء الإعداد. سيطلب منك بعض المعلومات الأساسية لإنشاء ملف `package.json`. هذا سيكون ملف "الإعداد" لتشغيل Node.js.

بعد تهيئة المشروع الجديد، يمكنك إنشاء ملف جديد باسم `index.js` وكتابة الكود بداخله. كمثال، سننشئ سيرفر http بسيط على المنفذ الافتراضي 80 يرد برسالة اختبار عند الوصول إليه عبر localhost. الكود كما يلي:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('مرحبًا من مستندات ZAP-Hosting =)')
})

server.listen(80)
```

الآن يمكنك تشغيل الكود عبر الأمر `node .` والتحقق من النتائج بزيارة `localhost:80` في متصفحك.

:::tip
تثبيت الحزم الخارجية من npm يتم عبر الأمر `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## تثبيت بيئة تشغيل Deno

تثبيت Deno بسيط جدًا، فقط اكتب `curl -fsSL https://deno.land/install.sh | sh` في الطرفية.

:::tip
للتحقق من الإصدار المثبت حاليًا، يمكنك تشغيل `deno --version`.
:::

### تحديث Deno إلى أحدث إصدار

يمكن تحديث Deno ببساطة عبر تشغيل `deno upgrade`.

### تشغيل Deno

لبدء تشغيل Deno، ستحتاج إلى إنشاء ملف جديد `index.ts` وكتابة بعض الأكواد فيه. كمثال، سننشئ سيرفر http بسيط على المنفذ الافتراضي 80 يرد برسالة اختبار عند الوصول إليه عبر localhost. الكود كما يلي:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('مرحبًا من مستندات ZAP-Hosting =)')
})
```

الآن يمكنك تشغيل الكود عبر الأمر `deno run --allow-net index.ts` والتحقق من النتائج بزيارة `localhost:80` في متصفحك.

:::info
تم إنشاء Deno ليكون أكثر أمانًا، لذا يتطلب أذونات معينة مثل `--allow-net` للوصول إلى بعض وحداته.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## تثبيت بيئة تشغيل Bun

يوفر Bun طريقتين رسميتين للتثبيت، إما عبر curl أو npm.

<Tabs>
<TabItem value="curl" label="curl" default>

تشغيل الأمر `curl -fsSL https://bun.sh/install | bash` سيقوم بتثبيت Bun على سيرفرك.

:::tip
لتثبيت إصدارات أخرى من Bun، يمكنك تشغيل `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

إذا كان لديك npm مثبتًا بالفعل، يمكنك تشغيل `npm install -g bun`.

</TabItem>
</Tabs>

### تشغيل Bun

تم تصميم Bun ليكون أسرع من بعض محركات JavaScript الأخرى، مع إعداد مشابه لـ Node.js. لتشغيل Bun، افتح مجلدًا فارغًا وشغّل `bun init`.

:::note
اعتمادًا على اللغة المختارة (JS أو TS)، سيقوم Bun بإنشاء ملف إعداد (jsconfig.json أو tsconfig.json).
:::

لبدء تشغيل Bun، ستحتاج إلى إنشاء ملف جديد `index.ts` وكتابة بعض الأكواد فيه. كمثال، سننشئ سيرفر http بسيط على المنفذ الافتراضي 80 يرد برسالة اختبار عند الوصول إليه عبر localhost. الكود كما يلي:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('مرحبًا من مستندات ZAP-Hosting =)')
  },
})
```

الآن يمكنك تشغيل الكود عبر الأمر `bun index.ts` والتحقق من النتائج بزيارة `localhost:80` في متصفحك.

</TabItem>
</Tabs>


## الخاتمة

تهانينا، لقد قمت بتثبيت وتكوين JavaScript بنجاح! إذا كان لديك أي أسئلة أو مشاكل إضافية، يرجى التواصل مع فريق الدعم لدينا، المتوفر لمساعدتك يوميًا!

<InlineVoucher />