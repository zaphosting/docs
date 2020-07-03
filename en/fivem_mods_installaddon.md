---
id: fivem_mods_installaddon
title: Install Addon Carmods
sidebar_label: Install Addon Carmods
---

## Connect with FTP
First you should connect to your server via FTP, you can use our [FTP-Tutorial](gameserver_ftpaccess.md).

## Preparation

If your carmod is an "rpf" file, we need to download and install [OpenIV](https://openiv.com/) to open this file

If all meta and ytd/yft files already exist, OpenIV is not necessary.

Now we create a folder under "Resources" (in our example it will be `carmod`, all work is done in this folder), in our carmod folder we also create a "stream" folder and a "__resource.lua" file

The __resource.lua file will be filled with information later.



## Install Carmod
Now we open the carmod files, if it is a RPF we use OpenIV, we need the following folders from it:

```
data/
common/data
```

Files in this folder and subfolders should be copied to your "carmod" folder.

![](https://screensaver01.zap-hosting.com/index.php/s/QB9DHkm9BHmixHs/preview)

Also copy the content.xml in the main folder of the carmod into your carmod folder.

Now open the x64 folder.


### Create language variables

If there is a folder named data/ in x64, open it and open the lang/ folder

Open a language, e.g. americandlc.rpf

Now we right click on the global.gx2 and click on "Export to openFormat Text File"

![](https://screensaver01.zap-hosting.com/index.php/s/zn8D9rciFoPSyj7/preview)

As target we also select our Carmod folder.

Now we create a "vehicle_names.lua" file in the Carmod folder and open it

There we insert the following:

```
Citizen.CreateThread(function()
AddTextEntry('0xC593CAF5', 'Nissan GT-R 35 Nismo 2015')
AddTextEntry('0xC990C46A', 'Nissan GT-R 35 Nismo 2015')
end)
```

Now we open the "global.oxt" file in the Carmod folder with a text editor, there we see the address & name, which we have to insert into the entries above, in our case like this

![](https://screensaver01.zap-hosting.com/index.php/s/qycjwbmiZpd6i5P/preview)

We then insert these into the file in the same way:

![](https://screensaver01.zap-hosting.com/index.php/s/mCGxMbx4yr77aMH/preview)


The file can now be saved, now we open the __resource.lua and add the following at the end

```
client_script 'vehicle_names.lua'
```

The global.oxt file can now be deleted, we do not need it anymore.

### Set meta data


Now open the x64/levels/gta5/vehicles/vehicles.rpf folder and copy all data into the "stream" folder of our carmod.

If there are other single folders with RPF files in x64, we open them too and copy them into the "stream" folder.

OpenIV can now be closed.

Now we open the __resource.lua and content.xml file, we use the content.xml file as reference for adding the metadata

First, we add the following to the __resource.lua at the top:

```
resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'
```

In the __resource.lua we now insert data_file entries:

```
data_file "TYPE" "FILENAME"
```


Now we create a new line with the respective entries in the content.xml, there should be a filename and a type below, we copy these and paste them into the __resource.lua. 

The following entries should be ignored:

```
RPF/.rpf 
TEXTFILE_METAFILE/dlctext.meta
```

At the very bottom of the content.xml there is another list with only the file names. The entries in the __resource.lua file must be in the same order.

in the __resource.lua you must also add an array of these meta files. For each data_file add the filename/path to the files {} table.
The file paths must be changed so that they match the structure in the folder!

The "files" table should look like this:



```
files {
    "vehicles.meta",
    "handling.meta",
    "vehicles.meta",
    "carvariations.meta"
}
```

After the mods are all uploaded, you only have to add your resource in the server.cfg, which you can find in the "server-data" folder of your FiveM server.

![](https://screensaver01.zap-hosting.com/index.php/s/tFa8yALGJwj82bK/preview)

You can open it with any text editor, under the "start" entries you can now enter your resource as follows

![](https://screensaver01.zap-hosting.com/index.php/s/D58nmHkXHgwyTf6/preview)


Done! After a server restart, the Carmod should now be on the server!
