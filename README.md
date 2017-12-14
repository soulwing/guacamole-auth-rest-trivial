guacamole-auth-rest-trivial
===========================

A trivial implementation of the REST service API defined by
[guacamole-auth-rest](https://github.com/soulwing/guacamole-auth-rest).

### Build

```
docker container build --tag guacamole-auth-rest-trivial .
```

### Configuration

This implementation uses a static `user-mapping.json` file, with the following
format.

```json
{
  "bob": {
    "password": "pass4bob",
    "configurations": {
      "ubuntu-server": {
        "protocol": "ssh",
        "parameters": {
          "hostname": "192.168.56.2"
        }
      }
    }
  }
}
```

* Top level keys are _usernames_
* The _configurations_ object contains zero or more named Guacamole connection
  configurations.
* Each connection configuration specifies a _protocol_ (e.g. ssh, rdp, vnc)
* The _parameters_ object contains protocol-specific name-value pairs.


