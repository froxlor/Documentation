# Settings

## 1. Main settings

Froxlor offers a variety of settings for the panel itself and the server services used. For the more demanding users, there is an advanced more which opens even more possibilities. Settings can also be _exported_ and _imported_ to and from other froxlor installations. You can always use the _Global search_ at the top if you are unsure where to find a specific setting.

<UiBrowser :src="$withBase('/img/frx_settings_overview.png')" alt="Settings overview"/>

As you can see, some features need to be activated explicitly for the rest of the settings in this section to take effect and be editable.

### 1.1 Unavailable/incompatible settings

<UiBrowser :src="$withBase('/img/frx_settings_unavail.png')" alt="Settings: unavailable settings"/>

Some settings cannot be changed or are unavailable due to other setting-values, e.g. the selected webserver. The latter can be _hidden_ by selecting the option `System settings -> Hide incompatible settings`.

### 1.2 Settings that require reconfiguration

<UiBrowser :src="$withBase('/img/frx_settings_reconf.png')" alt="Settings: Require reconfiguration of services"/>

A few settings will show the above notice. This means that adjusting the value or, in case of an enable/disable, when enabling it might be required to (re-)configure the shown services in `Configuration`, see [Configuration Guide](../configuration) for more information.

### 1.3 Import / Export of settings

<UiBrowser :src="$withBase('/img/frx_settings_imexport.png')" alt="Settings: Import / Export"/>

To **export** your current settings-set, click the `Download/export Settings` in the top-right corner. You can use the generated file to import your settings again or on another froxlor installation. Keep in mind that depending on your settings, possible sensitive data could be stored in the export-file.

In order to **import** settings, either from a possible backup or another froxlor installation, select the JSON file and press `Upload and import` to proceed. Depending on what settings are possibly overwritten, you might need to reconfigure some services, see [Configuration Guide](../configuration) for more information.

## 2. Cronjob settings

Although it should not be necessary to adjust any values for the cronjobs as it is managed automatically by froxlor you might want or need to adjust intervals or enable/disable specific cronjobs if you are sure you know why.

<UiBrowser :src="$withBase('/img/frx_settings_cron.png')" alt="Cronjob settings"/>

