---
id: satisfactory-blueprints
title: "Satisfactory: Manage Blueprints (Import/Export)"
description: "Discover how to create, share, and manage custom blueprints for efficient Satisfactory builds and layouts → Learn more now"
sidebar_label:  Manage Blueprints
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Satisfactory features a custom blueprint system that allows users to create and share building plans with other community members. These blueprints range from efficient factory layouts to elaborately designed lounges and complex railway systems.

A wide selection of blueprints is available through the Satisfactory Calculator website. Blueprints can be both imported and exported with ease.

<InlineVoucher />



## Manage Blueprints

The management of blueprints on a Satisfactory server is done entirely via FTP. If you are not yet familiar with how to connect to your server using FTP, please refer to our separate [FTP Access](gameserver-ftpaccess.md) guide to get started.

### Import Blueprints
To begin, you need to obtain the blueprint files you wish to upload. These consist of a `.sbp` file and, optionally, an associated `.sbpcfg` configuration file. These files may come from trusted community sources or be created from other game instances. 

Before proceeding with the upload, it is recommended to shut down the server completely using your server management interface. This ensures that no file conflicts or memory issues occur during the upload process.

Next, connect to the server using an FTP client. Once logged in, navigate to the blueprints directory:

 ```
 /gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
 ```

Inside this directory, there must be a subfolder named exactly after the world (or session) being used. This name corresponds to the name of the `.sav` file stored on the server. If the folder does not exist yet, it must be created manually using the exact name of the save file.

Once the correct subfolder is prepared, upload the blueprint files into that folder. It is essential to include both the `.sbp` and, if available, the `.sbpcfg` file. After the upload is complete, restart the server. Once it is running again, the uploaded blueprints will be available in the game via the Blueprint Designer interface, allowing you to access and use them normally.

### Export Blueprints

Exporting blueprints from a Satisfactory server means downloading blueprint files from the server and storing them locally on your PC. Begin by shutting down the server, as this guarantees the blueprint files are in a consistent and accessible state. Open your FTP client and connect to the server. Navigate to the directory: 

````
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
````

Locate the subfolder that matches the world/session from which you want to export blueprints. Inside this folder you will find the `.sbp` file, along with the optional `.sbpcfg` file, corresponding to each saved blueprint.

Download the desired blueprint files directly to your local computer using the FTP client.  Once the transfer has been completed, you can archive the files, open them locally, or import them into another installation or server environment. If you plan to reuse the blueprints on a different server, follow the exact same import procedure outlined above.



## Conclusion

Managing blueprints on a Satisfactory server is a straightforward process when following the documented steps. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂




<InlineVoucher />
