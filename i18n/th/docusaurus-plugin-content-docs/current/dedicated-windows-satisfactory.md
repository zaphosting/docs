---
id: dedicated-windows-satisfactory
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Satisfactory Dedicated Server บน Windows"
description: "เรียนรู้วิธีตั้งค่า Satisfactory Dedicated Server บนเซิร์ฟเวอร์ของคุณเพื่อการเล่นเกมและการจัดการที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มีเซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมบนมัน? เช่น Satisfactory Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณได้ยังไง

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="การตั้งค่า Satisfactory Dedicated Server บน Windows VPS" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งไปกับวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>

<InlineVoucher />

## เตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ Satisfactory คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้คุณดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นจะเป็นขั้นตอนดาวน์โหลด ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ออกก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์ คุณจะเห็นไฟล์ **steamcmd.exe** หลังจากแตกไฟล์แล้ว ให้รันไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์และคุณพร้อมเริ่มติดตั้งเซิร์ฟเวอร์ Satisfactory ได้เลย



## การติดตั้ง

หลังติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** รันคำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 1690800` โดย App ID **1690800** คือแอปสำหรับ **Satisfactory Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่ากับความอดทน! :)
:::



ไปที่โฟลเดอร์ที่คุณติดตั้งไว้ แล้วเข้าไปที่ซับไดเรกทอรีนี้: **../steamapps/common/SatisfactoryDedicatedServer**

ที่นี่คุณต้องสร้างไฟล์สตาร์ทอัพสำหรับรันซอฟต์แวร์เซิร์ฟเวอร์ สร้างไฟล์ชื่อ: server-start.bat

:::info
อย่าลืมเปิดใช้งานตัวเลือกแสดงนามสกุลไฟล์ (Display file extensions) เพื่อให้แน่ใจว่าไฟล์มีนามสกุลถูกต้อง
:::

เปิดไฟล์นี้ เพิ่มโค้ดนี้ลงไปแล้วบันทึก:

```
Factoryserver.exe -log -unattended
```



จากนั้นรันไฟล์นี้ ในการสตาร์ทครั้งแรกจะมีหน้าต่างป๊อปอัพแจ้งว่าต้องติดตั้งคอมโพเนนต์บางอย่างเพื่อรันโปรแกรม เกมต้องการ Visual C++ Runtime ให้คลิก Yes และติดตั้งให้เสร็จ

เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก ต้องเปิด/ส่งต่อพอร์ตเซิร์ฟเวอร์ที่ใช้ในไฟร์วอลล์ เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


ต้องเพิ่มกฎใหม่ในไฟร์วอลล์ โดยคลิกที่กฎขาเข้าและขาออกตามภาพ แล้วเพิ่มกฎสำหรับโปรโตคอล UDP และพอร์ต 15000



## การตั้งค่า

การตั้งค่าหลักเสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งเพิ่มเติมได้ในไฟล์ config **ServerSettings.ini** ที่นี่คุณสามารถเปลี่ยนชื่อเซิร์ฟเวอร์ รหัสผ่านเซิร์ฟเวอร์ และตัวเลือกอื่น ๆ ไปที่โฟลเดอร์นี้:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## เล่นเลย

หลังตั้งค่าเสร็จ คุณสามารถสตาร์ทเซิร์ฟเวอร์ได้โดยรันไฟล์ **server-start.bat** ที่สร้างไว้ จะเปิดคอนโซลเซิร์ฟเวอร์และเริ่มกระบวนการสตาร์ท ถ้าทุกอย่างราบรื่น เซิร์ฟเวอร์จะปรากฏในรายชื่อเซิร์ฟเวอร์หลังจากเริ่มต้นสำเร็จ


<InlineVoucher />