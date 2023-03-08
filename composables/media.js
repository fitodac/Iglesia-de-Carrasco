// Get media source
export const getWebpMedia = (url) => {
	if( !url ) return null
	if( 'string' !== typeof url ) return url

	if( url.indexOf('.jpg') ) url = url.replace('.jpg', '-jpg.webp')
	if( url.indexOf('.jpeg') ) url = url.replace('.jpeg', '-jpeg.webp')
	if( url.indexOf('.png') ) url = url.replace('.png', '-png.webp')
	return url
}


export const yt = {
  "kind": "youtube#searchListResponse",
  "etag": "mP8hLvlme9t1HrzDYHwuXw1xeck",
  "nextPageToken": "CAwQAA",
  "regionCode": "AR",
  "pageInfo": {
    "totalResults": 114,
    "resultsPerPage": 12
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "VQl6OKgkfvwrNYfi-FgCMQk90MU",
      "id": {
        "kind": "youtube#video",
        "videoId": "otSnjf40UVM"
      },
      "snippet": {
        "publishedAt": "2022-05-14T21:33:00Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 8 de mayo de 2022. Pr. Tomás Robertson.",
        "description": "Prédica titulada: \"¡Vamos de nuevo, Señor!\" Pasaje bíblico: S. Lucas 5:1-11.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/otSnjf40UVM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/otSnjf40UVM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/otSnjf40UVM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-05-14T21:33:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "EfDHhM2CFmAuH75-Vf2u_mHs6i0",
      "id": {
        "kind": "youtube#video",
        "videoId": "Spj8PIYD76c"
      },
      "snippet": {
        "publishedAt": "2022-04-28T03:40:58Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 24 de abril de 2022 (Pr. Tomás Robertson)",
        "description": "Prédica titulada \"¿Cómo vivir humildemente delante de Dios?\", basada en el Salmo 51 y en 2da Samuel capítulos 11 y 12.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Spj8PIYD76c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Spj8PIYD76c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Spj8PIYD76c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-04-28T03:40:58Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "ES4PY6P4PIB9GibDmULTogmGdiw",
      "id": {
        "kind": "youtube#video",
        "videoId": "_djbsFrrwK8"
      },
      "snippet": {
        "publishedAt": "2022-03-30T01:09:43Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 27 de marzo de 2022 (Pr. Tomás Robertson)+Canción final",
        "description": "Prédica basada en Hechos de los apóstoles 9:1-19 Canción: Tú eres mi todo (Job González)",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_djbsFrrwK8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_djbsFrrwK8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_djbsFrrwK8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-30T01:09:43Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "MiExDrFB18sojVAudKKri0Rp-wQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "XKe2DN0qri8"
      },
      "snippet": {
        "publishedAt": "2022-03-17T04:25:58Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 13 de marzo de 2022 (Pr. Tomás Robertson) + Canción final.",
        "description": "Prédica titulada: \"Enfrentando gigantes\" Pasajes bíblicos: 1ra Samuel 17:1-51; S. Mateo 24:11-14; 2da Corintios 12:10; S. Mateo ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XKe2DN0qri8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XKe2DN0qri8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XKe2DN0qri8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-17T04:25:58Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "HtYxxGDyYQoO7skxeoPDSkFJzto",
      "id": {
        "kind": "youtube#video",
        "videoId": "wqIJPpelcb0"
      },
      "snippet": {
        "publishedAt": "2022-03-01T04:00:41Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 27 de febrero de 2022 (Pr. Carlos Seoane) + Canción final",
        "description": "Prédica titulada: ¿Qué nos aporta estudiar la Biblia? (¿Entiendes lo que lees?) Pasajes bíblicos: Hechos 8:30,31; Isaías 53:7,8; ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wqIJPpelcb0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wqIJPpelcb0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wqIJPpelcb0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-01T04:00:41Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SUoGLZfVsX7u5Any3UBo_kmAvHk",
      "id": {
        "kind": "youtube#video",
        "videoId": "_-9rsJ_u9Xc"
      },
      "snippet": {
        "publishedAt": "2022-02-22T15:38:38Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 20 de febrero de 2022 (Pr. Facundo Luzardo)",
        "description": "Prédica titulada \"¿Cómo somos iglesia?\" Pasajes bíblicos: S.Mateo 16:18; S.Mateo 24:1,2; Hechos 2:41-47; Efesios 4:11-16.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_-9rsJ_u9Xc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_-9rsJ_u9Xc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_-9rsJ_u9Xc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-02-22T15:38:38Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "v5kh_KSxCegNd3Bw4pbZV-9AOIg",
      "id": {
        "kind": "youtube#video",
        "videoId": "DTyTD7_L9ZQ"
      },
      "snippet": {
        "publishedAt": "2022-02-17T03:46:40Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Fragmento del mensaje del domingo 13 de febrero de 2022. (Hno. Sergio Olivera)",
        "description": "Prédica \"Caminar en los pasos de Jesús\"",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DTyTD7_L9ZQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DTyTD7_L9ZQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DTyTD7_L9ZQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-02-17T03:46:40Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "TEqMsXcQCRmiQFNdozBMiDdW6QQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "4skmNSJIRio"
      },
      "snippet": {
        "publishedAt": "2022-02-08T02:53:21Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 6 de febrero de 2022. (Pr. Tomás Robertson)",
        "description": "Prédica basada en S. Lucas 4:1-13 ¨Tentación de Jesús¨",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4skmNSJIRio/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4skmNSJIRio/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4skmNSJIRio/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-02-08T02:53:21Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_Q1zoDj-EDo3l8jYQNziCyYVQWY",
      "id": {
        "kind": "youtube#video",
        "videoId": "GJ2edRypd10"
      },
      "snippet": {
        "publishedAt": "2022-02-01T03:28:28Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Mensaje del domingo 30 de enero de 2022 (Pr. Jasón Carlisle)",
        "description": "Prédica basada en S. Lucas 10:1-9 y 17-21.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GJ2edRypd10/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GJ2edRypd10/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GJ2edRypd10/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2022-02-01T03:28:28Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "_-gYlelpjzCwjudCLb1DIi8_fVY",
      "id": {
        "kind": "youtube#video",
        "videoId": "aROArzpfRzg"
      },
      "snippet": {
        "publishedAt": "2021-11-02T03:58:45Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Una amistad verdadera (Gabriel Fernández)",
        "description": "Culto del 31 de octubre de 2021. #Comunidad #Adoración #Biblia.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/aROArzpfRzg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/aROArzpfRzg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/aROArzpfRzg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2021-11-02T03:58:45Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "mcf4SzzuCXDef7ELOfE-kqrC5pk",
      "id": {
        "kind": "youtube#video",
        "videoId": "c0H9G4d7798"
      },
      "snippet": {
        "publishedAt": "2021-10-25T15:40:13Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Nuestra lucha espiritual - Parte 2 - (Pr. Tomás Robertson)",
        "description": "Culto 24 de octubre de 2021 Efesios 6:10-20 La armadura de Dios La casa de Dios (Danilo Montero) Te doy gloria (En Espíritu y ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/c0H9G4d7798/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/c0H9G4d7798/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/c0H9G4d7798/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2021-10-25T15:40:13Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "yNzdjKVYfG1YAUN_UUzQUHBjKC8",
      "id": {
        "kind": "youtube#video",
        "videoId": "B4sMbCBs5G0"
      },
      "snippet": {
        "publishedAt": "2021-10-18T14:34:49Z",
        "channelId": "UCCjiOZQU3snGJSgH7EINdqA",
        "title": "Nuestra lucha espiritual - Parte 1- (Pr. Tomás Robertson)",
        "description": "Culto del domingo 17 de octubre de 2021.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/B4sMbCBs5G0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/B4sMbCBs5G0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/B4sMbCBs5G0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Iglesia Evangélica Bautista de Carrasco",
        "liveBroadcastContent": "none",
        "publishTime": "2021-10-18T14:34:49Z"
      }
    }
  ]
}