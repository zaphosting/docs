---
id: vserver-windows-ftpserver
title: "VPS: การติดตั้ง FTP"
description: "ค้นพบวิธีตั้งค่าและจัดการเซิร์ฟเวอร์ FTP ด้วย FileZilla บน Windows เพื่อการโอนถ่ายไฟล์ที่ปลอดภัยและควบคุมการเข้าถึงของผู้ใช้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

**FTP (File Transfer Protocol)** คือโปรโตคอลเครือข่ายที่ใช้สำหรับโอนถ่ายไฟล์ผ่านเครือข่าย TCP/IP โปรโตคอลนี้ถูกพัฒนาขึ้นเพื่อให้การแลกเปลี่ยนไฟล์ระหว่างระบบเป็นเรื่องง่าย

ด้วย **FileZilla Server** คุณสามารถตั้งค่าเซิร์ฟเวอร์ FTP บนระบบปฏิบัติการ Windows ได้ FileZilla Server ติดตั้งและตั้งค่าได้ง่าย พร้อมฟีเจอร์มากมาย เช่น การตั้งค่าบัญชีผู้ใช้ การจัดการสิทธิ์การเข้าถึง และการโอนถ่ายไฟล์
<InlineVoucher />


## การเตรียมตัว

### ดาวน์โหลด

การตั้งค่าเซิร์ฟเวอร์ FTP ต้องใช้ซอฟต์แวร์ที่เหมาะสม โดย FileZilla Server เป็นตัวเลือกที่ดีสำหรับระบบปฏิบัติการ Windows คุณสามารถดาวน์โหลดได้ที่นี่: [FileZilla server](https://filezilla-project.org/download.php?type=server)



### การติดตั้ง

เมื่อดาวน์โหลดไฟล์ติดตั้งเสร็จแล้ว ให้รันไฟล์นั้น โดยคลิกที่ไฟล์ที่ดาวน์โหลดไว้ หน้าต่างนี้จะปรากฏขึ้น: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



คุณสามารถเลือกแพ็กเกจที่จะติดตั้งได้ แต่โดยปกติการติดตั้งแพ็กเกจที่เลือกไว้ล่วงหน้าก็เพียงพอแล้ว ให้คลิก **Next** แล้วเลือกเส้นทางติดตั้ง:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

ในตัวอย่างนี้ FileZilla Server จะถูกติดตั้งที่ **C:\Program Files (x86)\FileZilla Server** แต่คุณสามารถเลือกเส้นทางอื่นได้ หลังจากเลือกเส้นทางแล้ว คุณต้องกำหนดรูปแบบการติดตั้งและการเริ่มต้นเซิร์ฟเวอร์ FTP รวมถึงกำหนดพอร์ตและรหัสผ่านผู้ดูแลระบบ



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

จากนั้นคลิก **Next** ต่อไป และในขั้นตอนถัดไป คลิก **Install** เพื่อเริ่มการติดตั้ง แผงควบคุมของ FileZilla FTP Server จะเปิดขึ้น คลิกที่ปุ่ม **Connect to FileZilla FTP Server**

จะมีหน้าต่างเด้งขึ้นมาให้กรอกข้อมูล Host, Port และ Password คุณสามารถปล่อยช่อง Host และ Port ไว้ตามค่าเดิม และกรอกรหัสผ่านผู้ดูแลระบบที่ตั้งไว้ จากนั้นคลิก **Ok** เพื่อเชื่อมต่อ



## การตั้งค่า

### การสร้างผู้ใช้

เพื่อให้สามารถเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP ได้ คุณต้องสร้างผู้ใช้ก่อน  
คลิกที่ **Server** ในเมนูด้านบน แล้วเลือก **Configure**

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

จากนั้นไปที่เมนู Users แล้วคลิก **Add** เพื่อเพิ่มผู้ใช้ใหม่:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

ในตัวอย่างนี้ ชื่อผู้ใช้คือ **YourUserName** คุณสามารถตั้งชื่อผู้ใช้ตามที่ต้องการได้เลย



### รหัสผ่านและสิทธิ์การเข้าถึง

หลังจากสร้างผู้ใช้แล้ว ต้องตั้งค่าการเข้าถึงและสิทธิ์ต่างๆ โดยไปที่แท็บ **General** ในหมวด **Credentials** เปิดใช้งานผู้ใช้และตั้งค่ารหัสผ่าน เราแนะนำให้ตั้งรหัสผ่านเพื่อความปลอดภัย เลือก **Require a password to log in** และตั้งรหัสผ่านที่ต้องการ

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

เพื่อให้ผู้ใช้มีสิทธิ์เข้าถึงโฟลเดอร์ที่ต้องการ ให้คลิก **Add** ในส่วน mount points แล้วกำหนดเส้นทางเสมือนและเส้นทางจริง ในตัวอย่างนี้ เรากำหนดให้ไดรฟ์ C แสดงผลเป็น \

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

ทางขวาจะมีตัวเลือก **Permissions** ให้ตั้งค่าสิทธิ์การเข้าถึงโฟลเดอร์นั้น หากต้องการอ่านและแก้ไขไฟล์ แนะนำตั้งเป็น **Read+Write**

::: danger
เพื่อความปลอดภัย ควรให้สิทธิ์ผู้ใช้เข้าถึงเฉพาะโฟลเดอร์ที่จำเป็นเท่านั้น
:::

เมื่อเสร็จแล้ว คลิก **Apply** เพื่อบันทึกการเปลี่ยนแปลง



## การตั้งค่าไฟร์วอลล์ของ Windows

เพื่อให้สามารถเชื่อมต่อกับเซิร์ฟเวอร์ FTP ได้ ต้องอนุญาตให้ใช้ FTP Server ผ่านไฟร์วอลล์ของ Windows เปิดการตั้งค่าไฟร์วอลล์ที่ **Control Panel\System and Security\Windows Defender Firewall** แล้วคลิก **Allow an app or feature through Windows Defender Firewall**  
ในหน้าต่างถัดไป เลือกแอปพลิเคชันที่ต้องการอนุญาต:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

ในตัวอย่างนี้เส้นทางคือ **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

จากนั้นคลิก **OK** เพื่อปิดหน้าต่าง ตอนนี้คุณสามารถเชื่อมต่อกับเซิร์ฟเวอร์ FTP ได้แล้ว


## สรุป

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์ FTP บน VPS ของคุณเรียบร้อยแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />