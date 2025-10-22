---
id: dedicated-linux-rsync
title: "เซิร์ฟเวอร์เฉพาะ: สำรองข้อมูลเซิร์ฟเวอร์ Linux ด้วย Rsync"
description: "ค้นพบวิธีสร้างสำรองข้อมูลทั้งในเครื่องและระยะไกลอย่างมีประสิทธิภาพด้วย Rsync เพื่อการซิงค์ข้อมูลและปกป้องข้อมูลที่เชื่อถือได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สร้างสำรองข้อมูลด้วย Rsync
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

การสำรองข้อมูลสามารถทำได้ด้วยเครื่องมือ Rsync ซึ่งสามารถคัดลอกข้อมูลไปยังไดเรกทอรี/ไดรฟ์อื่นในระบบเครื่องเดียวกัน หรือไปยังระบบระยะไกลได้  

<InlineVoucher />

## คัดลอกข้อมูลไปยังไดเรกทอรีหรือไดรฟ์ในเครื่องอื่น:

:::info
ระวัง: การรันครั้งแรกอาจใช้เวลานานกว่าครั้งถัดไปมาก ขึ้นอยู่กับปริมาณข้อมูล เพราะครั้งแรก Rsync จะซิงค์ข้อมูลทั้งหมด แต่ตั้งแต่ครั้งที่สองเป็นต้นไปจะซิงค์เฉพาะข้อมูลที่เปลี่ยนแปลงเท่านั้น
:::
> ดังนั้นจะเกิดการสำรองข้อมูลแบบเพิ่มขึ้น (incremental backup)  

## ขั้นตอนที่ 1

สามารถติดตั้ง Rsync ด้วยคำสั่งนี้:

```
apt install rsync
```

หลังจากติดตั้งแล้วก็สามารถใช้งานได้ทันที  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Daily backup to a local directory/drive" label="สำรองข้อมูลรายวันไปยังไดเรกทอรี/ไดรฟ์ในเครื่อง">

## ขั้นตอนที่ 2

ในตัวอย่างนี้ โฟลเดอร์ Client ภายใต้ /home จะถูกซิงค์ไปยังโฟลเดอร์ Backup ภายใต้ /home  

สามารถทำได้ด้วยคำสั่งนี้: 

```
rsync -arz /home/Client /home/Backup
```
-a=เก็บคุณสมบัติไฟล์ทั้งหมด (archiving)
<br/>
-r=ทำงานแบบเรียกซ้ำ (recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัดข้อมูล ขึ้นอยู่กับปริมาณ/ขนาดข้อมูล

โฟลเดอร์ถูกซิงค์เรียบร้อยแล้ว  

ถ้ามีการลบไฟล์ในโฟลเดอร์ Client ตอนนี้ ไฟล์นั้นจะยังคงอยู่ในโฟลเดอร์ Backup  
แต่ถ้าต้องการให้ไฟล์ใน Backup ตรงกับ Client แบบ 1:1 จริง ๆ ก็สามารถแก้ไขคำสั่ง rsync ได้ง่าย ๆ เพื่อให้ข้อมูลที่ไม่มีใน Client ถูกลบออกจาก Backup ด้วย  

คำสั่งที่แก้ไขคือ: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=เก็บคุณสมบัติไฟล์ทั้งหมด (archiving)
<br/>
-r=ทำงานแบบเรียกซ้ำ (recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัดข้อมูล ขึ้นอยู่กับปริมาณ/ขนาดข้อมูล
<br/>
--delete=ลบข้อมูลที่ไม่มีในต้นทางแต่ยังอยู่ในปลายทาง

## ขั้นตอนที่ 3

เพื่อไม่ต้องรันคำสั่งนี้ด้วยมือทุกครั้ง สามารถตั้งเป็น cronjob ได้เลย  
เช่น ต้องการสำรองข้อมูลทุกวันตอนตี 3:  

เปิด crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

กด 1 เพื่อใช้ nano เป็นตัวแก้ไข
<br/>
กด 2 เพื่อใช้ vim เป็นตัวแก้ไข  

หลังจากเปิดไฟล์ด้วย nano หรือโปรแกรมแก้ไขอื่น ๆ ก็สามารถสร้างและใส่ crontab ได้  
สามารถสร้าง crontab ได้ง่าย ๆ ด้วย [Generator นี้](https://crontab-generator.org/)  

crontab ที่ใส่จะมีลักษณะดังนี้: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

ทุกวันตอนตี 3 คำสั่งนี้จะถูกรันและสร้างสำรองข้อมูล  

</TabItem>
<TabItem value="Daily backup to a remote system" label="สำรองข้อมูลรายวันไปยังระบบระยะไกล">

## ขั้นตอนที่ 4

ในตัวอย่างนี้ โฟลเดอร์ Client ภายใต้ /home จะถูกซิงค์ไปยังโฟลเดอร์ Backup บนระบบระยะไกล โดยเชื่อมต่อผ่าน SSH key เพื่อให้สามารถตั้งสำรองข้อมูลอัตโนมัติได้  
>สำคัญ: Rsync ต้องติดตั้งบนเซิร์ฟเวอร์ระยะไกลด้วย  
>```
>apt install rsync
>```

ตัวอย่างคำสั่งสำหรับสำรองข้อมูลไปยังโฮสต์ระยะไกล (ปรับแต่งตามต้องการ): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=เก็บคุณสมบัติไฟล์ทั้งหมด (archiving)
<br/>
-r=ทำงานแบบเรียกซ้ำ (recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัดข้อมูล ขึ้นอยู่กับปริมาณ/ขนาดข้อมูล
<br/>
-e=ระบุพอร์ต SSH (ค่าเริ่มต้น 22)
<br/>
ระบุ SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]
<br/>
ระบุไดเรกทอรีที่จะสำรอง (/home/client/)= /[directory]
<br/>
RemoteHost(root@123.123.123.123:)= ชื่อผู้ใช้และที่อยู่ของโฮสต์ระยะไกล: name@IP/โดเมน
<br/>
ไดเรกทอรีเป้าหมายบนโฮสต์ระยะไกล(:/home/Backup/Home-Server1/)= :/[path to target directory]

หลังรันคำสั่ง โฟลเดอร์/ไฟล์จะถูกซิงค์และบันทึกไปยังไดเรกทอรีระยะไกลเรียบร้อยแล้ว  

ถ้ามีการลบไฟล์ในโฟลเดอร์ Client ไฟล์นั้นจะยังคงอยู่ในโฟลเดอร์ Backup บนโฮสต์ระยะไกล  
แต่ถ้าต้องการให้ไฟล์ใน Backup ตรงกับ Client แบบ 1:1 จริง ๆ ก็สามารถแก้ไขคำสั่ง rsync ได้ง่าย ๆ เพื่อให้ข้อมูลที่ไม่มีใน Client ถูกลบออกจาก Backup บนโฮสต์ระยะไกลด้วย  

คำสั่งที่แก้ไขคือ:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=เก็บคุณสมบัติไฟล์ทั้งหมด (archiving)
<br/>
-r=ทำงานแบบเรียกซ้ำ (recursive) ซิงค์โฟลเดอร์ย่อยด้วย
<br/>
-z=บีบอัดข้อมูล ขึ้นอยู่กับปริมาณ/ขนาดข้อมูล
<br/>
--delete=ลบข้อมูลที่ไม่มีในต้นทางแต่ยังอยู่ในปลายทาง
<br/>
-e=ระบุพอร์ต SSH (ค่าเริ่มต้น 22)
<br/>
ระบุ SSH key (path)("ssh -i /home/sshkey/keybackup")= ssh -i /[path to key]
<br/>
ระบุไดเรกทอรีที่จะสำรอง (/home/client/)= /[directory]
<br/>
RemoteHost(root@123.123.123.123:)= ชื่อผู้ใช้และที่อยู่ของโฮสต์ระยะไกล: name@IP/โดเมน
<br/>
ไดเรกทอรีเป้าหมายบนโฮสต์ระยะไกล(:/home/Backup/Home-Server1/)= :/[Path to target directory]

## ขั้นตอนที่ 5

เพื่อไม่ต้องรันคำสั่งนี้ด้วยมือทุกครั้ง สามารถตั้งเป็น cronjob ได้เลย  
เช่น ต้องการสำรองข้อมูลทุกวันตอนตี 3:  

เปิด crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/KNewp9zMdWce3Zz/preview)

กด 1 เพื่อใช้ nano เป็นตัวแก้ไข
<br/>
กด 2 เพื่อใช้ vim เป็นตัวแก้ไข  

หลังจากเปิดไฟล์ด้วย nano หรือโปรแกรมแก้ไขอื่น ๆ ก็สามารถสร้างและใส่ crontab ได้  
สามารถสร้าง crontab ได้ง่าย ๆ ด้วย [Generator นี้](https://crontab-generator.org/)  

crontab ที่ใส่จะมีลักษณะดังนี้: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

ทุกวันตอนตี 3 คำสั่งนี้จะถูกรันและสร้างสำรองข้อมูล  

</TabItem>
</Tabs>

<InlineVoucher />