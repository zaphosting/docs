---
id: gameserver_restartplaner
title: Gameserver: Restartplaner - Perform server restarts automatically
descriptionen: Information on how to use the restart planner to have your ZAP-Hosting.com game server restarted automatically at predefined intervals - ZAP-Hosting.com documentation
sidebar_label: Restart planner
---

## Restart planner

The restart planner is a feature offered for game servers which allows you to create an automatic restart to restart the server automatically at the same time every day.

> This feature is only available for game servers.

This feature can be found in the interface of the game server.

![image](https://user-images.githubusercontent.com/13604413/159171151-58a2ede5-609b-4d9d-b1fd-2e1640050b19.png)

## Create new entries

> ***Note:*** Changes made to the restart planner are only applied once the server has been restarted.

If you want to add an automatic restart, then you need to click on the grey "**+**" button.

Within the next window you can now choose between Weekly and Daily restarts. In our example, we want four restarts per day with an interval of 6 hours. Therefore we select "**Daily**" and set "**06:00**". Confirm the entry with "**Save**".

This procedure is now repeated for each desired automatic restart. If "**24:00**" occurs, the system displays an error message. To avoid this error, "**00:00**" needs to be used instead.

![image](https://user-images.githubusercontent.com/13604413/159171159-94dfe1d5-e218-4e2a-b0fe-388a884b81d2.png)

###  Start offline server

If this option is enabled, then a stopped server will be started automatically at this point of time. If this option remains disabled, then the game server will only be restarted by our system if it was "**Online**" before.

## Command option

The command option among the specified automatic restarts is intended to be used to execute commands automatically just before the restart occurs.The amount of available commands which can be used depends on the game. Not all games offer an option for this.

If you want to warn players beforehand, then you can use the *say* command in Minecraft

![image](https://user-images.githubusercontent.com/13604413/159171163-7be2fa64-9219-4f36-802b-34eccc379894.png)

### Delay

The Delay field defines the interval between the execution of the command and the restart of the server. This delay is defined in **seconds**. For example, if a delay of 5 minutes should be set, then the value 300 needs to be set in this case. 
