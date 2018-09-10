/*
 * Entry point for the companion app
 */
import { settingsStorage } from "settings";

console.log("Companion code started");

// A user changes settings
settingsStorage.onchange = evt => {
    let data = {
      key: evt.key,
      newValue: evt.newValue
    };
    var obj = JSON.parse(data.newValue);
    console.log(obj.name);
  };
  
  // Restore any previously saved settings and send to the device
  function restoreSettings() {
    for (let index = 0; index < settingsStorage.length; index++) {
      let key = settingsStorage.key(index);
      if (key) {
        let data = {
          key: key,
          newValue: settingsStorage.getItem(key)
        };
        var obj = JSON.parse(data.newValue);
        console.log(obj.name);
      }
    }
  }

  restoreSettings();