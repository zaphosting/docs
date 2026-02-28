---
id: gameserver-tebex
title: 'سيرفر ألعاب: إعداد تحقيق الدخل مع Tebex'
description: "اكتشف كيف تحقق دخل من سيرفر ألعابك باستخدام Tebex وزد أرباحك من المبيعات والترقيات داخل اللعبة → تعلّم المزيد الآن"
sidebar_label: تحقيق الدخل مع Tebex
services:
  - gameserver
---

import Cards, { Card } from '@site/src/components/Cards/Cards';
import InlineVoucher from '@site/src/components/InlineVoucher';

## مقدمة

Tebex هي منصة تتيح لك تحقيق دخل من سيرفر ألعابك وكسب أموال حقيقية من العناصر داخل اللعبة، والترقيات، وأكثر من ذلك. توفر لك المنصة متجر ويب احترافي يمكنك من خلاله بيع السلع ومتابعة أداء متجرك. زور [tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a) لمزيد من المعلومات حول كيفية عملها.

<InlineVoucher />

## الألعاب المدعومة

الألعاب التالية التي نقدمها أيضًا كجزء من منتج سيرفر ألعابنا مدعومة من Tebex. لمزيد من المعلومات والألعاب الأخرى المتاحة، ننصحك بزيارة الموقع الرسمي [هنا](https://www.tebex.io/game-servers).

<Cards columns={2} layout="horizontal">
  <Card title="ARK" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/ark" image="https://screensaver01.zap-hosting.com/index.php/s/qnWELD8ik9srBDG/preview"/>
  <Card title="CS:GO" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/csgo" image="https://screensaver01.zap-hosting.com/index.php/s/RojGnj9TcpGSdzm/preview"/>
  <Card title="Minecraft" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/minecraft" image="https://screensaver01.zap-hosting.com/index.php/s/e6BtaFzTZ7czqXy/preview"/>
  <Card title="FiveM" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/fivem" image="https://screensaver01.zap-hosting.com/index.php/s/PQKfzYiMAmSjXNz/preview"/>
  <Card title="Hurtworld" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/hurtworld" image="https://screensaver01.zap-hosting.com/index.php/s/EJpzMG9gHL4fe5W/preview"/>
  <Card title="Rust" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/rust" image="https://screensaver01.zap-hosting.com/index.php/s/G82jnYsbexscj5W/preview"/>
  <Card title="Space Engineers" description="نموذج توضيحي" link="https://zap-hosting.com/guides/docs/spaceengineers-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/wgp2Jofo2BTkcR9/preview"/>
  <Card title="Team Fortress 2" description="نموذج توضيحي" link="https://zap-hosting.com/guides/docs/tf2-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/PPRN8qRJDBjEzmG/preview"/>
  <Card title="Unturned" description="نموذج توضيحي" link="https://www.tebex.io/pricing-for-game-servers/7-days-to-die" image="https://screensaver01.zap-hosting.com/index.php/s/GTxekqqTxQyttDS/preview"/>
  <Card title="Garry's Mod" description="نموذج توضيحي" link="https://zap-hosting.com/guides/docs/gmod-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/LddW8FyQ2ZKKTzN/preview"/>
</Cards>

## ربط Tebex

إعداد Tebex مع ZAP سهل جدًا. التثبيت والتكوين يتطلبان فقط بضع خطوات، والتي سنشرحها بالتفصيل أدناه.

### اختر اللعبة المدعومة

اختر لعبة مدعومة من Tebex وأضفها إلى سيرفر ألعابك. اضغط على سيرفر الألعاب الخاص بك واختر `الألعاب` في الشريط الجانبي. اختر لعبة مدعومة ضمن `الألعاب المتاحة` واضغط على زر التنزيل لتثبيتها.

### طلب دعوة Tebex

إذا كانت اللعبة التي اخترتها تدعم Tebex، سترى تبويبًا باسم "متجر Tebex" في الشريط الجانبي. اضغط على الصورة التي تظهر عند تحميل الصفحة.

![](https://screensaver01.zap-hosting.com/index.php/s/SztAWeeNX8fx5kF/preview)

سيقوم Tebex الآن بإرسال دعوة إلى البريد الإلكتروني المرتبط بحسابك لدى ZAP-Hosting. يرجى اتباع التعليمات في البريد لتفعيل حساب Tebex الخاص بك. سيتم إرشادك خلال الإعداد الأساسي لمتجرك.

### تثبيت إضافة Tebex

عادةً ما تكون هذه العملية مؤتمتة. إذا لم يكن لدينا إضافة لإعداد تلقائي على خوادمنا أو إذا لم نتلقَ رد pingback من Tebex، سيتوجب عليك إجراء الإعداد يدويًا.

### تكوين إضافة Tebex

قم بتثبيت إضافة سيرفر الألعاب المناسبة للعبتك يدويًا. تختلف عملية الإعداد من لعبة لأخرى. يمكنك العثور على تعليمات أساسية لتثبيت الإضافات [هنا](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition).

## التحقق من الاتصال مع Tebex

أخيرًا، يجب عليك تأكيد أنك قمت بتثبيت إضافة سيرفر الألعاب بنجاح.

![](https://screensaver01.zap-hosting.com/index.php/s/DkDtPMtij2QTKGS/preview)

في بعض الحالات، قد يُطلب منك إدخال مفتاح API الخاص بالإضافة لمتجر Tebex لتأسيس الاتصال بين ZAP ومتجرك على Tebex. بعدها سترى أن الاتصال تم بنجاح:
![](https://screensaver01.zap-hosting.com/index.php/s/4YS2SwHfSTgn4DE/preview)

## الخلاصة

لقد قمت بربط Tebex بنجاح مع خدمة سيرفر ألعابك. لأي أسئلة أو مساعدة إضافية، لا تتردد في التواصل مع فريق الدعم الخاص بنا، المتوفر يوميًا لمساعدتك! 🙂

<InlineVoucher />