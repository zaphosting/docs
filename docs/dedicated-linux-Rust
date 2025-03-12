## Introduction 

Own your own dedicated server with Zap-Hosting and want to start your own Rust server?  Here is a quick and easy guide!

:::caution SteamCMD needs to be installed!
SteamCMD is needed to run a Rust server, please follow our previous guide [here](https://zap-hosting.com/guides/docs/dedicated-linux-steamcmd) to find out how.
:::

## Installation

Now that you have SteamCMD installed, Its pretty easy from here.

We need to first create the directory where your Rust files are going to be stored, for this example we are going to use /home/rustserver
To create the directory run the command

```
mkdir -p /home/rustserver
```

Now that we have a place to install the files we can download them by running:

:::info Be patient!
Installing the server files can sometimes take a while, be patient and dont introrupt the install! 
:::

```
steamcmd +login anonymous +force_install_dir /home/rustserver +app_update 258550 validate +quit
```


This will install the needed Rust files to run the server using SteamCMD.

## Configuring the server

Now that you have all the needed files installed we are nearly done and we just need to now configure the server so that we can start it.
You can navigate to where we stored the files before, in this example it would be /home/rustserver

To be able to start the server we need a start script, you can create this by running:
```
nano start.sh
```

This should bring up a editor where you can paste the following in to configure your start script:

```
#!/bin/bash
./RustDedicated -batchmode -nographics +server.hostname "My Rust Server" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.seed 12345 +server.saveinterval 300
```

You can change variables in this and tune it to your liking, changing the map size will use alot more ram so please consult documentation before changing as this can cause some startup problems.

Save and exit the file and make it executable by running:
```
chmod +x start.sh
```

Now your done! 
You can now run your server by simply running:
```
./start.sh
```

## Conclusion

You now have a fully functional Rust server ready for players, you can connect to the server by using the IP provided to you with your dedicated machine!

