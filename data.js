var APP_DATA = {
  "scenes": [
    {
      "id": "0-out-door-terresse",
      "name": "Out door terresse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.42005006272339074,
          "pitch": 0.15305073686718274,
          "rotation": 0,
          "target": "1-living-room-and-kichen-area"
        },
        {
          "yaw": -1.021721235347714,
          "pitch": 0.1996795662307207,
          "rotation": 0,
          "target": "6-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room-and-kichen-area",
      "name": "Living room and kichen area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.543350960910516,
          "pitch": 0.13414409362483326,
          "rotation": 0,
          "target": "0-out-door-terresse"
        },
        {
          "yaw": -2.777698678144189,
          "pitch": 0.14717947018454325,
          "rotation": 0,
          "target": "6-pool"
        },
        {
          "yaw": -1.2764452541952451,
          "pitch": 0.16879452967073938,
          "rotation": 0,
          "target": "2-master-bedroom"
        },
        {
          "yaw": -1.0582686971895718,
          "pitch": 0.14061675933506024,
          "rotation": 0,
          "target": "4-bed-room"
        },
        {
          "yaw": -0.5650035382500853,
          "pitch": 0.16245824030636413,
          "rotation": 0,
          "target": "5-multipurpose-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.008458906767332408,
          "pitch": 0.12049962559348693,
          "rotation": 0,
          "target": "6-pool"
        },
        {
          "yaw": -2.159982571249648,
          "pitch": 0.24694287945303373,
          "rotation": 0,
          "target": "1-living-room-and-kichen-area"
        },
        {
          "yaw": 3.077062217023178,
          "pitch": 0.17084657986901597,
          "rotation": 0,
          "target": "3-bath-room-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bath-room-master",
      "name": "Bath room master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5280430636752769,
          "pitch": 0.20937510043023266,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bed-room",
      "name": "Bed room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-multipurpose-room",
      "name": "Multipurpose room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0393815621796083,
          "pitch": 0.3686016953033313,
          "rotation": 0,
          "target": "1-living-room-and-kichen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pool",
      "name": "Pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17718081289263665,
          "pitch": 0.0551334666503589,
          "rotation": 0,
          "target": "7-front-house"
        },
        {
          "yaw": 1.563980932879895,
          "pitch": 0.07446302132780502,
          "rotation": 0,
          "target": "0-out-door-terresse"
        },
        {
          "yaw": 1.0283597255470962,
          "pitch": 0.06256104524014461,
          "rotation": 0,
          "target": "1-living-room-and-kichen-area"
        },
        {
          "yaw": 0.3290418975405167,
          "pitch": 0.11182081322415982,
          "rotation": 0,
          "target": "2-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-front-house",
      "name": "Front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20536109206566877,
          "pitch": 0.06638977329221518,
          "rotation": 0,
          "target": "6-pool"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The Riverside Residece TYPE A",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
