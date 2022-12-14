# Home Assistant Core

**Integration Key:** `homeAssistant`

The [Home Assistant Core](https://www.home-assistant.io) integration shares data with the home automation software over [MQTT](https://www.home-assistant.io/integrations/mqtt/).

## Requirements

::: tip

**Running on Home Assistant OS?** If you are also using the MQTT server add-on room-assistant will automatically pick up the correct credentials - no configuration needed!

:::

You will need to setup an MQTT broker that both your instance of Home Assistant Core and all instances of room-assistant can connect to. If you are using Home Assistant OS you can install the [official mosquitto add-on](https://github.com/home-assistant/hassio-addons/tree/master/mosquitto) to get started quickly.

room-assistant makes use of the [MQTT auto discovery](https://www.home-assistant.io/docs/mqtt/discovery/) features provided by Home Assistant Core to automatically create all entities for you. It is strongly recommended that you enable this feature when setting up the MQTT integration in Home Assistant Core.

## Settings

| Name              | Type                          | Default                    | Description                                                  |
| ----------------- | ----------------------------- | -------------------------- | ------------------------------------------------------------ |
| `mqttUrl`         | String                        | `mqtt://localhost:1883`    | Connection string for your MQTT broker.                      |
| `mqttOptions`     | [MQTT Options](#mqtt-options) |                            | Additional options for the MQTT connection.                  |
| `sendAttributes`  | Boolean                       | `true`                     | Whether entity attributes should be forwarded to Home Assistant or not. May be disabled to reduce the number of messages that Home Assistant needs to process. |
| `sendMqttRoom`    | Boolean                       | `false`                    | Whether entities with distances should publish them in the [MQTT Room integration](https://www.home-assistant.io/integrations/mqtt_room/) format or not. |
| `discoveryPrefix` | String                        | `homeassistant`            | The prefix for the discovery topic that Home Assistant will watch. |
| `mqttRoomPrefix`  | String                        | `room-assistant/mqtt-room` | The topic prefix that will be used for the [MQTT Room](https://www.home-assistant.io/integrations/mqtt_room/) messages, should match `state_topic` in Home Assistant. |

### MQTT Options

| Name                 | Type    | Default | Description                                                  |
| -------------------- | ------- | ------- | ------------------------------------------------------------ |
| `username`           | String  |         | Username for authentication                                  |
| `password`           | String  |         | Password for authentication                                  |
| `rejectUnauthorized` | Boolean | `true`  | Whether MQTTS connections should fail for invalid certificates or not. Set this to `false` if you are using a self-signed certificate and connect via TLS. |

Some of these settings may also be configured as environment variables, using `RA_HOME_ASSISTANT_MQTT_URL`, `RA_HOME_ASSISTANT_MQTT_USERNAME` and `RA_HOME_ASSISTANT_MQTT_PASSWORD`.

::: details Example Config

```yaml
global:
  integrations:
    - homeAssistant
homeAssistant:
  mqttUrl: mqtt://homeassistant.local:1883
  mqttOptions:
    username: youruser
    password: yourpass
  discoveryPrefix: homeassistant
```

:::