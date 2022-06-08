---
id: assetto_competizione_slot_requirement
title: Assetto Corsa Competizione: Car Slot Requirement
description: Information on how to increase your Car Slots and set the Requirement correctly - ZAP-Hosting.com documentation
sidebar_label: Car Slot Requirement
---

## General information

In Assetto Corsa, 10 slots can be used correctly without any further modification. 
However, to use more than 10 slots, certain requirements must be met.
These requirements are set under "**Configs**" and in there the "**settings.json**" has to be edited.

![](https://screensaver01.zap-hosting.com/index.php/s/xZQSo9Tqx8QdLK7/preview)

## Requirements and Slot Limits

To use more than 10 slots, the values **"trackMedalsRequirement": X,** and **"safetyRatingRequirement": X,** have to be adjusted.
How high these must be set can be calculated by the following formula. 
The same formula can then be used to calculate the desired values trackMedalRequirement and safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### List of possible combinations

In the following, a list of possible combinations is displayed which can be used to be able to use the desired number of slots.
There is also more than one possible solution to achieve the necessary slot requirement.
For this reason, the different possibilities are also shown in the list.

> Note that for safetyRatingRequirement and trackMedalRequirement the **minimum** requirements have been entered. It is of course also possible to host fewer slots with larger values for safetyRatingRequirement and trackMedalRequirement.

Slots | safetyRatingRequirement | trackMedalRequirement
-----|-------|---------
10-16 | 24 | 0
18 | 40 | 0
18 | 24 | 2
20 | 40 | 0
20 | 30 | 3
22 | 50 | 0
22 | 40 | 2
24 | 60 | 0
24 | 50 | 2
26 | 70 | 0
26 | 60 | 1
28 | 80 | 0
28 | 70 | 1
30 | 90 | 0
30 | 80 | 1
