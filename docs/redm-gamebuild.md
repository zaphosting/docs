---
id: redm-gamebuild
title: "RedM: Enable DLC Content"
description: "Discover how to enforce specific DLC versions on your RedM server for the latest maps, vehicles, and content → Learn more now"
sidebar_label: Enable DLC game build
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Enforcing game build allows you to force a specific DLC version to your server, allowing you to play with the latest maps, clothing, vehicles and more! 

<InlineVoucher />

## Available Gamebuilds

This is an overview of all available DLC and its Build IDs: 

| Build ID |                          Build Name                          |
| :------: | :----------------------------------------------------------: |
|   1311   | Mid 2020 update, not compatible with Red Dead Online licenses. |
|   1355   | December 2020 update, works with newer game editions such as RDO. |
|   1436   | July 2021 update, includes new content from Blood Money DLC. |
|   1491   |       September 2022 update, limited content/changes.        |




## Enable build

In order use additional DLC content such as Blood Money, you must set it in the server configuration file of your server. To set the DLC build, you need to open your txAdmin interface and head over to the CFG Editor. Now simply adjust your desired game build  through the `sv_enforceGameBuld` command withe one of the builds from the table.

![img](https://screensaver01.zap-hosting.com/index.php/s/YoRFMoHxdSNydoD/preview)



## Conclusion

Once you have picked your choice, proceed to restart your RedM server. Your server will now launch with the specified DLC build. You have successfully set a gamebuild for your RedM game server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
