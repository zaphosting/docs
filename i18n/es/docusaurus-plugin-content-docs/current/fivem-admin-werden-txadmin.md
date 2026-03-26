# Cómo ser Admin en FiveM con txAdmin

## Introducción  
En esta guía, aprenderás cómo convertirte en admin en un servidor de FiveM usando txAdmin. Esto incluye los pasos necesarios para configurar tus permisos de admin a través de la interfaz de txAdmin.

## Requisitos  
- Acceso a tu servidor de FiveM vía la interfaz web o panel de ZAP-Hosting  
- txAdmin debe estar instalado y funcionando en tu servidor de FiveM  
- Conocimientos básicos sobre la gestión de servidores de FiveM  

## Guía Paso a Paso

### 1. Accede al Panel de txAdmin  
1. Inicia sesión en tu cuenta de ZAP-Hosting.  
2. Ve al panel de tu servidor de FiveM.  
3. Haz clic en el botón **Abrir txAdmin** para lanzar la interfaz de txAdmin.  
   
   ![Abrir txAdmin](img/fivem-admin-txadmin/open-txadmin.png)  

### 2. Inicia sesión en txAdmin  
1. Si es la primera vez que accedes a txAdmin, se te pedirá crear una cuenta de admin.  
2. Rellena tu nombre de usuario y contraseña deseados, luego guarda.  
3. Si ya tienes cuenta, simplemente ingresa tus credenciales para iniciar sesión.  

### 3. Añade tus Permisos de Admin  
1. En el panel de txAdmin, ve a la pestaña **Jugadores**.  
2. Busca tu jugador usando tu Steam ID o nombre dentro del juego.  
3. Haz clic en el botón **Gestionar** junto a tu entrada de jugador.  
4. En la sección de permisos, asígnate el rol de **admin** o los permisos necesarios que requieras.  
   
   ![Asignar Rol de Admin](img/fivem-admin-txadmin/assign-admin-role.png)  

### 4. Configura los Permisos (Opcional)  
1. Ve a la pestaña **Configuración** en txAdmin.  
2. Selecciona **Permisos** para ajustar los comandos y privilegios específicos disponibles para admins.  
3. Modifica según tus necesidades y guarda los cambios.  

### 5. Guarda y Reinicia el Servidor  
1. Después de asignar los permisos, regresa a la pestaña **Panel**.  
2. Haz clic en **Reiniciar Servidor** para aplicar todos los cambios.  
   
   ```bash
   # Alternativamente, reinicia desde el panel de ZAP-Hosting:
   # 1. Ve al panel de tu servidor
   # 2. Haz clic en "Reiniciar"
   ```  

### 6. Verifica tu Estado de Admin en el Juego  
1. Entra a tu servidor de FiveM.  
2. Abre la consola dentro del juego (normalmente con la tecla F8).  
3. Prueba comandos de admin como:  
   
   ```plaintext
   /admin
   /kick [playerID]
   /ban [playerID]
   ```  
   
4. Si los comandos se ejecutan correctamente, ya tienes derechos de admin.  

> **Nota:** Si tienes problemas, revisa que tu Steam ID esté correcta o verifica la configuración de whitelist en txAdmin.

## Conclusión  
Siguiendo estos pasos, ya te has configurado exitosamente como admin en tu servidor de FiveM usando txAdmin. Ahora puedes gestionar tu servidor de forma eficiente con privilegios administrativos.