---
id: fivem-optimize-textures
title: Optimize textures
description: Wie du Texturen bei deinem FiveM Server von ZAP-Hosting optimieren kannst - ZAP-Hosting.com - Documentation
sidebar_label: Optimize textures
---

## Introduction
Do you want to optimize your GTA5 mod textures and reduce their size without compromising on quality? In this guide, we will show you how to effectively compress textures to under 16MB. With a few simple steps and the right tools, you can improve the performance of your game and save storage space. This also helps to avoid potential issues such as:

```
Asset hevo/hevo.ytd uses 166.0 MiB of physical memory. Oversized assets can and will lead to streaming issues (models not loading/rendering, commonly known as 'texture loss', 'city bug' or 'streaming isn't great').
```




## Preparation

Before you start, make sure you have downloaded and installed the necessary tools. Download **OpenIV** and **XnResize** from the official websites and follow the installation instructions. These tools will be used for editing the textures:

- **OpenIV**  [(Download)](https://openiv.com/)
- **XnResize** [(Download)](https://www.xnview.com/en/xnresize/#downloads)



## Configuration
Once you have downloaded and installed the necessary tools, you can begin editing the textures. Locate the .ytd file of your mod in OpenIV and open it to access the textures. 

![OpenIV Texture Dictionary](https://forum.cfx.re/uploads/default/optimized/4X/d/9/1/d91c308f849ed326be0324695c3d0897d486ef01_2_505x271.png) 

In OpenIV, you will find the option "Export all textures" at the bottom left. Click on it to export all the textures of your mod. Save them in a folder within your vehicle mod directory, for example under "textures". 



## Optimization

Now that you have exported all the textures, it's time to edit and resize them. Start XnResize on your computer. Drag all the exported .dds files into the XnResize window. You should now see all your textures within the application. In the "Action" tab of XnResize, set the width and height to percent and reduce the size of the textures to 50% of their original size. Make sure to maintain the ratio.

![XnResize Action Tab](https://forum.cfx.re/uploads/default/original/4X/4/c/f/4cfccc99c913b0072787f90a705ae383ba482368.png)



In the "Output" tab, select a target folder for the edited textures, for example, "textures_resized", and set the format to DDS - Direct Draw Surface.

![XnResize Output Tab](https://forum.cfx.re/uploads/default/original/4X/6/9/b/69b93dac616de807d4496f53363f1792646046b5.png)



## Conclusion
After you have edited all the textures and adjusted their size, replace the old textures in your mod with the new, compressed versions. You will find that the compressed texture size is significantly lower, which not only saves storage space but also improves the performance of your game. 

| **Description**            | **Original Texture Dictionary** | Compressed Texture Dictionary | X Times Better     |
| :-------------------------- | :------------------------------ | :---------------------------- | :----------------- |
| **Compressed Size**         | 11.8 MB                         | 1.23 MB                        | 9.6x               |
| **Uncompressed Size**       | 164 MB                          | 11 MB                          | 14.9x              |
| **Virtual Memory**          | 0.05 MiB                        | 0.05 MiB                       | -                  |
| **Physical Memory**         | 166.00 MiB                      | 10.69 MiB                      | 15.5x              |

Don't forget to test the textures in the game. If problems occur, you can always reset individual textures to their original size or use the original .dds files.
