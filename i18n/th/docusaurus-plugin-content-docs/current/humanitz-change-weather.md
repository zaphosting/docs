---
id: humanitz-change-weather
title: "HumanitZ: เปลี่ยนสภาพอากาศ"
description: "เรียนรู้วิธีแก้ไขและปรับแต่งความถี่และประเภทของสภาพอากาศบนเซิร์ฟเวอร์ HumanitZ ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "เปลี่ยนสภาพอากาศ"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## แนะนำ

รูปแบบสภาพอากาศมีผลต่อการเล่นเกมเอาชีวิตรอด, การมองเห็น และบรรยากาศของโลกใน HumanitZ ไม่ว่าคุณจะอยากได้บรรยากาศสงบกับท้องฟ้าส่วนใหญ่แจ่มใส หรือโลกที่โหดร้ายกับพายุและหิมะตกบ่อย ๆ การปรับแต่งการตั้งค่าสภาพอากาศช่วยให้คุณควบคุมความถี่ของแต่ละประเภทสภาพอากาศได้

<InlineVoucher />



## การตั้งค่า

การตั้งค่าสภาพอากาศถูกควบคุมในไฟล์ `GameServerSettings.ini` คุณสามารถเข้าถึงไฟล์นี้ได้จากแผงควบคุมเซิร์ฟเวอร์ของคุณในเมนู **Configs** ภายในไฟล์ config ให้ค้นหาพารามิเตอร์ดังนี้:

```
;ด้านล่างนี้คุณสามารถปรับโอกาสของแต่ละประเภทสภาพอากาศได้ ฤดูกาลปัจจุบันจะกำหนดว่าสภาพอากาศประเภทใดสามารถเกิดขึ้นได้
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

แต่ละการตั้งค่าจะแทนค่า **โอกาสสัมพัทธ์** ของสภาพอากาศประเภทนั้น ๆ ที่จะเกิดขึ้น ค่ายิ่งสูงจะเพิ่มโอกาสให้สภาพอากาศนั้นถูกเลือกในช่วงการสร้างสภาพอากาศ ส่วนค่าต่ำจะลดโอกาสลง

ตัวอย่างเช่น:

- การตั้งค่า `Weather_ClearSky=3` จะเพิ่มโอกาสให้ท้องฟ้าแจ่มใสมากกว่าสภาพอากาศประเภทอื่น  
- การตั้งค่า `Weather_Blizzard=0` จะปิดการเกิดพายุหิมะ (เว้นแต่ตรรกะฤดูกาลจะบังคับให้เกิด)



### สภาพอากาศสงบ

ตัวอย่างนี้เน้นสภาพอากาศสงบและลดสภาพอากาศรุนแรง:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### สภาพอากาศโหดร้าย

ตัวอย่างนี้เพิ่มโอกาสของสภาพอากาศรุนแรงและเปลี่ยนแปลงบ่อย:
```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

หลังจากแก้ไขไฟล์แล้ว ให้บันทึกการเปลี่ยนแปลงและรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่าสภาพอากาศใหม่มีผล



## สรุป

ยินดีด้วย! โดยการปรับค่าโอกาสสภาพอากาศในไฟล์ `GameServerSettings.ini` คุณได้ปรับแต่งวิธีการทำงานของสภาพอากาศบนเซิร์ฟเวอร์ HumanitZ ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂

<InlineVoucher />