const DATA = {
  "meta": {
    "stages": [
      "Early",
      "Preliminary",
      "Detailed"
    ],
    "scales": [
      "Micro-urban",
      "Building",
      "Facade"
    ],
    "performanceObjectives": [
      "Energy",
      "Economy",
      "Environment",
      "Thermal comfort",
      "Visual comfort",
      "Other"
    ],
    "variableTypes": [
      "Geometry",
      "Material properties",
      "System"
    ],
    "acceleratorCategories": [
      "Complexity reduction",
      "Sampling",
      "Prediction",
      "Fine Tuning",
      "Heuristic algorithms",
      "Decision making"
    ],
    "problemTypes": [
      "All",
      "Exploration",
      "Optimization"
    ],
    "performanceSubcategories": [
      "Heat gain / loss",
      "Energy consumption",
      "Cost",
      "Embodied emissions",
      "Waste",
      "Renewable resources",
      "Interior thermal comfort",
      "Urban thermal comfort",
      "Daylight availbaility",
      "Glare",
      "Views",
      "Aoustic comfort",
      "Aesthetics",
      "Structural performance",
      "Constructability"
    ],
    "performanceCategoryColors": {
      "ENERGY": "#1f77b4",
      "ECONOMY": "#ec7206ff",
      "ENVIRONMENT": "#389058ff",
      "THERMAL COMFORT": "#a42245ff",
      "VISUAL COMFORT": "#9467bd",
      "OTHER": "#6d4c45ff"
    }
  },
  "PERFORMANCE_OBJECTIVES": {
    "__mode": "subcategories",
    "subcategories": {
      "Heat gain / loss": {
        "category": "ENERGY",
        "color": "#1f77b4",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.46149999999999997,
              "refs": [
                "60",
                "65",
                "85",
                "96",
                "102",
                "129"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.4,
              "refs": [
                "8",
                "25",
                "29",
                "57",
                "61",
                "94",
                "128"
              ]
            },
            "Preliminary": {
              "value": 0.1818,
              "refs": [
                "40",
                "109",
                "114",
                "134"
              ]
            },
            "Detailed": {
              "value": 0.21050000000000002,
              "refs": [
                "14",
                "40",
                "95",
                "98"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.32,
              "refs": [
                "2",
                "28",
                "42",
                "78",
                "79",
                "89",
                "112"
              ]
            },
            "Preliminary": {
              "value": 0.2857,
              "refs": [
                "22",
                "32",
                "40",
                "50",
                "54",
                "70",
                "79",
                "105",
                "125"
              ]
            },
            "Detailed": {
              "value": 0.05,
              "refs": [
                "15"
              ]
            }
          }
        }
      },
      "Energy consumption": {
        "category": "ENERGY",
        "color": "#1f77b4",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.23079999999999998,
              "refs": [
                "40",
                "48",
                "85"
              ]
            },
            "Preliminary": {
              "value": 1.0,
              "refs": [
                "69"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.5,
              "refs": [
                "7",
                "30",
                "72",
                "84",
                "88",
                "113",
                "115",
                "121",
                "132"
              ]
            },
            "Preliminary": {
              "value": 0.8181999999999999,
              "refs": [
                "10",
                "31",
                "40",
                "41",
                "52",
                "56",
                "59",
                "86",
                "87",
                "91",
                "108",
                "110",
                "117",
                "119",
                "120",
                "126",
                "131",
                "134"
              ]
            },
            "Detailed": {
              "value": 0.7368000000000001,
              "refs": [
                "1",
                "4",
                "5",
                "6",
                "12",
                "16",
                "20",
                "37",
                "46",
                "75",
                "101",
                "116"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.44,
              "refs": [
                "11",
                "28",
                "33",
                "42",
                "45",
                "58",
                "64",
                "80",
                "104",
                "111",
                "130"
              ]
            },
            "Preliminary": {
              "value": 0.6570999999999999,
              "refs": [
                "3",
                "9",
                "13",
                "24",
                "26",
                "32",
                "34",
                "38",
                "40",
                "41",
                "49",
                "53",
                "63",
                "68",
                "71",
                "73",
                "103",
                "107",
                "108",
                "127",
                "133"
              ]
            },
            "Detailed": {
              "value": 0.95,
              "refs": [
                "17",
                "19",
                "21",
                "23",
                "27",
                "35",
                "39",
                "55",
                "62",
                "66",
                "74",
                "81",
                "82",
                "92",
                "93",
                "97",
                "99",
                "100",
                "124"
              ]
            }
          }
        }
      },
      "Cost": {
        "category": "ECONOMY",
        "color": "#ff7f0e",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.07690000000000001,
              "refs": [
                "60"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.2,
              "refs": [
                "7",
                "25",
                "30",
                "76"
              ]
            },
            "Preliminary": {
              "value": 0.3182,
              "refs": [
                "31",
                "51",
                "52",
                "114",
                "126",
                "131",
                "134"
              ]
            },
            "Detailed": {
              "value": 0.5263,
              "refs": [
                "4",
                "5",
                "6",
                "12",
                "14",
                "20",
                "37",
                "75",
                "116"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.08,
              "refs": [
                "18",
                "64"
              ]
            },
            "Preliminary": {
              "value": 0.2857,
              "refs": [
                "9",
                "49",
                "54",
                "63",
                "68",
                "70",
                "79",
                "103",
                "105",
                "133"
              ]
            },
            "Detailed": {
              "value": 0.5,
              "refs": [
                "21",
                "35",
                "39",
                "55",
                "66",
                "74",
                "81",
                "92",
                "93",
                "99"
              ]
            }
          }
        }
      },
      "Embodied emissions": {
        "category": "ENVIRONMENT",
        "color": "#2ca02c",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.05,
              "refs": [
                "132"
              ]
            },
            "Preliminary": {
              "value": 0.2273,
              "refs": [
                "51",
                "117",
                "126",
                "131",
                "134"
              ]
            },
            "Detailed": {
              "value": 0.36840000000000006,
              "refs": [
                "4",
                "12",
                "14",
                "20",
                "75",
                "95",
                "116"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.1429,
              "refs": [
                "9",
                "26",
                "49",
                "54",
                "63"
              ]
            },
            "Detailed": {
              "value": 0.35,
              "refs": [
                "21",
                "39",
                "55",
                "62",
                "82",
                "97",
                "99"
              ]
            }
          }
        }
      },
      "Waste": {
        "category": "ENVIRONMENT",
        "color": "#2ca02c",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          }
        }
      },
      "Renewable resources": {
        "category": "ENVIRONMENT",
        "color": "#2ca02c",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.15380000000000002,
              "refs": [
                "48"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.05,
              "refs": [
                "84"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.04,
              "refs": [
                "83"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          }
        }
      },
      "Interior thermal comfort": {
        "category": "THERMAL COMFORT",
        "color": "#d62728",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.3,
              "refs": [
                "7",
                "76",
                "84",
                "88",
                "94",
                "115"
              ]
            },
            "Preliminary": {
              "value": 0.5,
              "refs": [
                "10",
                "40",
                "51",
                "56",
                "59",
                "86",
                "87",
                "108",
                "110",
                "117",
                "126"
              ]
            },
            "Detailed": {
              "value": 0.36840000000000006,
              "refs": [
                "6",
                "16",
                "37",
                "75",
                "95",
                "98",
                "101"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.24,
              "refs": [
                "58",
                "64",
                "77",
                "104",
                "111",
                "112"
              ]
            },
            "Preliminary": {
              "value": 0.4,
              "refs": [
                "3",
                "9",
                "22",
                "24",
                "34",
                "38",
                "40",
                "67",
                "68",
                "73",
                "105",
                "107",
                "108",
                "133"
              ]
            },
            "Detailed": {
              "value": 0.3,
              "refs": [
                "17",
                "23",
                "62",
                "74",
                "82",
                "124"
              ]
            }
          }
        }
      },
      "Urban thermal comfort": {
        "category": "THERMAL COMFORT",
        "color": "#d62728",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.07690000000000001,
              "refs": [
                "40"
              ]
            },
            "Preliminary": {
              "value": 1.0,
              "refs": [
                "69"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0455,
              "refs": [
                "87"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.05,
              "refs": [
                "100"
              ]
            }
          }
        }
      },
      "Daylight availbaility": {
        "category": "VISUAL COMFORT",
        "color": "#9467bd",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.3846,
              "refs": [
                "48",
                "60",
                "96"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.6,
              "refs": [
                "8",
                "25",
                "29",
                "57",
                "72",
                "76",
                "88",
                "94",
                "115",
                "121",
                "132"
              ]
            },
            "Preliminary": {
              "value": 0.40909999999999996,
              "refs": [
                "10",
                "31",
                "40",
                "41",
                "109",
                "119",
                "120",
                "126",
                "134"
              ]
            },
            "Detailed": {
              "value": 0.0526,
              "refs": [
                "1"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.44,
              "refs": [
                "28",
                "42",
                "43",
                "44",
                "45",
                "58",
                "77",
                "78",
                "80",
                "83",
                "122"
              ]
            },
            "Preliminary": {
              "value": 0.4857,
              "refs": [
                "3",
                "13",
                "22",
                "32",
                "36",
                "38",
                "40",
                "47",
                "53",
                "68",
                "103",
                "108",
                "123",
                "127",
                "133"
              ]
            },
            "Detailed": {
              "value": 0.15,
              "refs": [
                "74",
                "100",
                "124"
              ]
            }
          }
        }
      },
      "Glare": {
        "category": "VISUAL COMFORT",
        "color": "#9467bd",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.1,
              "refs": [
                "8",
                "72"
              ]
            },
            "Preliminary": {
              "value": 0.0909,
              "refs": [
                "109",
                "126"
              ]
            },
            "Detailed": {
              "value": 0.0526,
              "refs": [
                "1"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.12,
              "refs": [
                "44",
                "58",
                "80"
              ]
            },
            "Preliminary": {
              "value": 0.1143,
              "refs": [
                "71",
                "123",
                "133"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          }
        }
      },
      "Views": {
        "category": "VISUAL COMFORT",
        "color": "#9467bd",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.05,
              "refs": [
                "8"
              ]
            },
            "Preliminary": {
              "value": 0.0455,
              "refs": [
                "40"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.04,
              "refs": [
                "89"
              ]
            },
            "Preliminary": {
              "value": 0.0571,
              "refs": [
                "40",
                "127"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          }
        }
      },
      "Aoustic comfort": {
        "category": "OTHER",
        "color": "#8c564b",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.05,
              "refs": [
                "81"
              ]
            }
          }
        }
      },
      "Aesthetics": {
        "category": "OTHER",
        "color": "#8c564b",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.08,
              "refs": [
                "18",
                "122"
              ]
            },
            "Preliminary": {
              "value": 0.0571,
              "refs": [
                "47",
                "123"
              ]
            },
            "Detailed": {
              "value": 0.1,
              "refs": [
                "62",
                "81"
              ]
            }
          }
        }
      },
      "Structural performance": {
        "category": "OTHER",
        "color": "#8c564b",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.07690000000000001,
              "refs": [
                "102"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.05,
              "refs": [
                "118"
              ]
            },
            "Preliminary": {
              "value": 0.0455,
              "refs": [
                "114"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Facade": {
            "Early": {
              "value": 0.08,
              "refs": [
                "18",
                "90"
              ]
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          }
        }
      },
      "Constructability": {
        "category": "OTHER",
        "color": "#8c564b",
        "scales": {
          "Micro-urban": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          },
          "Building": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0,
              "refs": []
            },
            "Detailed": {
              "value": 0.0526,
              "refs": [
                "12"
              ]
            }
          },
          "Facade": {
            "Early": {
              "value": 0.0,
              "refs": []
            },
            "Preliminary": {
              "value": 0.0286,
              "refs": [
                "133"
              ]
            },
            "Detailed": {
              "value": 0.0,
              "refs": []
            }
          }
        }
      }
    }
  },
  "VARIABLES": {
    "Geometry": {
      "Micro-urban": {
        "Early": {
          "value": 1.0,
          "refs": [
            "36",
            "40",
            "48",
            "60",
            "65",
            "85",
            "96",
            "102",
            "106",
            "129"
          ]
        },
        "Preliminary": {
          "value": 0.0,
          "refs": [
            "69"
          ]
        },
        "Detailed": {
          "value": 0.0,
          "refs": []
        }
      },
      "Building": {
        "Early": {
          "value": 1.0,
          "refs": [
            "8",
            "57",
            "61",
            "72",
            "94",
            "118",
            "121",
            "128",
            "25",
            "29",
            "76",
            "88",
            "113",
            "132"
          ]
        },
        "Preliminary": {
          "value": 0.5142857142857142,
          "refs": [
            "40",
            "59",
            "109",
            "114",
            "119",
            "120",
            "41",
            "87",
            "126",
            "131",
            "134"
          ]
        },
        "Detailed": {
          "value": 0.3684210526315789,
          "refs": [
            "1"
          ]
        }
      },
      "Facade": {
        "Early": {
          "value": 1.0,
          "refs": [
            "28",
            "42",
            "43",
            "45",
            "77",
            "79",
            "90",
            "122",
            "130",
            "2",
            "11",
            "18",
            "33",
            "44",
            "58",
            "64",
            "78",
            "80",
            "83",
            "89",
            "104",
            "111",
            "112"
          ]
        },
        "Preliminary": {
          "value": 0.8285714285714286,
          "refs": [
            "13",
            "32",
            "40",
            "47",
            "53",
            "71",
            "109",
            "123",
            "127",
            "3",
            "22",
            "24",
            "36",
            "38",
            "49",
            "63",
            "67",
            "68",
            "70",
            "73",
            "79",
            "103",
            "105",
            "107",
            "108"
          ]
        },
        "Detailed": {
          "value": 0.4,
          "refs": [
            "62",
            "15",
            "17",
            "19",
            "23",
            "74",
            "100",
            "124"
          ]
        }
      }
    },
    "Material properties": {
      "Micro-urban": {
        "Early": {
          "value": 0.0,
          "refs": []
        },
        "Preliminary": {
          "value": 0.0,
          "refs": [
            "69"
          ]
        },
        "Detailed": {
          "value": 0.0,
          "refs": []
        }
      },
      "Building": {
        "Early": {
          "value": 0.55,
          "refs": [
            "25",
            "29",
            "76",
            "88",
            "113",
            "132"
          ]
        },
        "Preliminary": {
          "value": 0.6363636363636364,
          "refs": [
            "41",
            "87",
            "126",
            "131",
            "134",
            "31",
            "56"
          ]
        },
        "Detailed": {
          "value": 0.7894736842105263,
          "refs": [
            "12",
            "37",
            "4",
            "6",
            "14",
            "20",
            "40",
            "46",
            "95"
          ]
        }
      },
      "Facade": {
        "Early": {
          "value": 0.6,
          "refs": [
            "2",
            "11",
            "18",
            "33",
            "44",
            "58",
            "64",
            "78",
            "79",
            "80",
            "83",
            "89",
            "104",
            "111",
            "112"
          ]
        },
        "Preliminary": {
          "value": 0.7428571428571429,
          "refs": [
            "3",
            "13",
            "22",
            "24",
            "36",
            "38",
            "49",
            "63",
            "67",
            "68",
            "70",
            "73",
            "79",
            "103",
            "105",
            "107",
            "108",
            "26",
            "41",
            "50",
            "53",
            "54",
            "133"
          ]
        },
        "Detailed": {
          "value": 0.95,
          "refs": [
            "15",
            "17",
            "19",
            "23",
            "74",
            "100",
            "124",
            "21",
            "27",
            "35",
            "39",
            "55",
            "66",
            "81",
            "82",
            "92",
            "93",
            "97",
            "99"
          ]
        }
      }
    },
    "System": {
      "Micro-urban": {
        "Early": {
          "value": 0.0,
          "refs": []
        },
        "Preliminary": {
          "value": 0.0,
          "refs": []
        },
        "Detailed": {
          "value": 0.0,
          "refs": []
        }
      },
      "Building": {
        "Early": {
          "value": 0.25,
          "refs": []
        },
        "Preliminary": {
          "value": 0.45454545454545453,
          "refs": [
            "56",
            "41",
            "108"
          ]
        },
        "Detailed": {
          "value": 0.7894736842105263,
          "refs": [
            "4",
            "6",
            "14",
            "20",
            "40",
            "46",
            "95",
            "5"
          ]
        }
      },
      "Facade": {
        "Early": {
          "value": 0.0,
          "refs": []
        },
        "Preliminary": {
          "value": 0.08571428571428572,
          "refs": []
        },
        "Detailed": {
          "value": 0.0,
          "refs": []
        }
      }
    }
  },
  "DOI": {
    "1": {
      "Title": "A method of partition design for open-plan offices based on daylight performance evaluation",
      "Year": "2020",
      "Authors": "Abdollahzadeh, Nastaran; Tahsildoost, Mohammad; Zomorodian, Zahra Sadat",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2020.101171"
    },
    "10": {
      "Title": "Optimizing overheating, lighting, and heating energy performances in Canadian school for climate change adaptation: Sensitivity analysis and multi-objective optimization methodology",
      "Year": "2023",
      "Authors": "Baba, Fuad Mutasim; Ge, Hua; Zmeureanu, Radu; Wang, Liangzhu (Leon)",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2023.110336"
    },
    "100": {
      "Title": "Utilizing interpretable stacking ensemble learning and NSGA-III for the prediction and optimisation of building photo-thermal environment and energy consumption",
      "Year": "2024",
      "Authors": "Shen, Yeqin; Hu, Yubing; Cheng, Kai; Yan, Hainan; Cai, Kaixiang; Hua, Jianye; Fei, Xuemin; Wang, Qinyu",
      "Link": "http://dx.doi.org/10.1007/s12273-024-1108-7"
    },
    "101": {
      "Title": "Multi-objective optimization design of a complex building based on an artificial neural network and performance evaluation of algorithms",
      "Year": "2019",
      "Authors": "Si, Binghui; Wang, Jianguo; Yao, Xinyue; Shi, Xing; Jin, Xing; Zhou, Xin",
      "Link": "http://dx.doi.org/10.1016/j.aei.2019.03.006"
    },
    "102": {
      "Title": "Architectural design of apartment buildings using the Implicit Redundant Representation Genetic Algorithm",
      "Year": "2016",
      "Authors": "Song, Hwayeon; Ghaboussi, Jamshid; Kwon, Tae-Hyun",
      "Link": "http://dx.doi.org/10.1016/j.autcon.2016.09.001"
    },
    "103": {
      "Title": "Many-Objective Optimization Design of a Public Building for Energy, Daylighting and Cost Performance Improvement",
      "Year": "2020",
      "Authors": "Sun, Cheng; Liu, Qianqian; Han, Yunsong",
      "Link": "http://dx.doi.org/10.3390/app10072435"
    },
    "104": {
      "Title": "Multi-objective optimization design for windows and shading configuration: considering energy consumption, thermal environment, visual performance and sound insulation effect",
      "Year": "2021",
      "Authors": "Sun, Zicheng; Cao, Yunzhong; Wang, Xi; Yu, Jiarui",
      "Link": "http://dx.doi.org/10.1007/s40095-021-00413-0"
    },
    "105": {
      "Title": "Multi-Objective Techno-Economic Optimization of Design Parameters for Residential Buildings in Different Climate Zones",
      "Year": "2022",
      "Authors": "Usman, Muhammad; Frey, Georg",
      "Link": "http://dx.doi.org/10.3390/su14010065"
    },
    "106": {
      "Title": "Using intelligent multi-objective optimization and artificial neural networking to achieve maximum solar radiation with minimum volume in the archetype urban block",
      "Year": "2022",
      "Authors": "Veisi, Omid; Shakibamanesh, Amir; Rahbar, Morteza",
      "Link": "http://dx.doi.org/10.1016/j.scs.2022.104101"
    },
    "107": {
      "Title": "Multi-objective optimization of building energy consumption and thermal comfort based on SVR-NSGA-II",
      "Year": "2024",
      "Authors": "Wang, Ailing; Xiao, Ying; Liu, Chunlu; Zhao, Ying; Sun, Shaonan",
      "Link": "http://dx.doi.org/10.1016/j.csite.2024.105368"
    },
    "108": {
      "Title": "Multi-phase framework for optimization of thermal and daylight performance of residential buildings based on the combination of ventilation and window design",
      "Year": "2021",
      "Authors": "Wang, Jiahe; Mae, Masayuki; Taniguchi, Keiichiro; Cheng, Yanmeng; Yagi, Shigekazu; Saito, Koichiro",
      "Link": "http://dx.doi.org/10.1080/13467581.2020.1814304"
    },
    "109": {
      "Title": "Exploring the synergy of building massing and fa?ade design through evolutionary optimization",
      "Year": "2022",
      "Authors": "Wang, Likai; Zhang, Han; Liu, Xuehan; Ji, Guohua",
      "Link": "http://dx.doi.org/10.1016/j.foar.2022.02.002"
    },
    "11": {
      "Title": "Building energy optimisation under uncertainty using ACOMV algorithm",
      "Year": "2018",
      "Authors": "Bamdad, Keivan; Cholette, Michael E.; Guan, Lisa; Bell, John",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2018.02.053"
    },
    "110": {
      "Title": "Multi-Objective Optimization of Envelope Design of Rural Tourism Buildings in Southeastern Coastal Areas of China Based on NSGA-II Algorithm and Entropy-Based TOPSIS Method",
      "Year": "2023",
      "Authors": "Wang, Meiyan; Chen, Chen; Fan, Bingxin; Yin, Zilu; Li, Wenxuan; Chi, Fang'ai; Wang, Huifang",
      "Link": "http://dx.doi.org/10.3390/su15097238"
    },
    "111": {
      "Title": "A three-stage optimization methodology for envelope design of passive house considering energy demand, thermal comfort and cost",
      "Year": "2020",
      "Authors": "Wang, Ran; Lu, Shilei; Feng, Wei",
      "Link": "http://dx.doi.org/10.1016/j.energy.2019.116723"
    },
    "112": {
      "Title": "Tradeoff between heating energy demand in winter and indoor overheating risk in summer constrained by building standards",
      "Year": "2021",
      "Authors": "Wang, Ran; Lu, Shilei; Feng, Wei; Xu, Bowen",
      "Link": "http://dx.doi.org/10.1007/s12273-020-0719-x"
    },
    "113": {
      "Title": "The practical optimisation of complex architectural forms",
      "Year": "2015",
      "Authors": "Weng, Zhenzhou; Ramallo-Gonzalez, Alfonso P.; Coley, David A.",
      "Link": "http://dx.doi.org/10.1007/s12273-014-0208-1"
    },
    "114": {
      "Title": "Parametric building information modelling and optimality criteria methods for automated multi-objective optimisation of structural and energy efficiency",
      "Year": "2023",
      "Authors": "Wong, Billy C. L.; Wu, Zhaoji; Gan, Vincent J. L.; Chan, C. M.; Cheng, Jack C. P.",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2023.107068"
    },
    "115": {
      "Title": "Multi-objective optimization of residential building energy consumption, daylighting, and thermal comfort based on BO-XGBoost-NSGA-II",
      "Year": "2024",
      "Authors": "Wu, Chengjin; Pan, Haize; Luo, Zhenhua; Liu, Chuan; Huang, Hulongyi",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2024.111386"
    },
    "116": {
      "Title": "Intelligent optimization framework of near zero energy consumption building performance based on a hybrid machine learning algorithm",
      "Year": "2022",
      "Authors": "Wu, Xianguo; Feng, Zongbao; Chen, Hongyu; Qin, Yawei; Zheng, Shiyi; Wang, Lei; Liu, Yang; Skibniewski, Miroslaw J.",
      "Link": "http://dx.doi.org/10.1016/j.rser.2022.112703"
    },
    "117": {
      "Title": "Intelligent multiobjective optimization design for NZEBs in China: Four climatic regions",
      "Year": "2023",
      "Authors": "Wu, Xianguo; Li, Xinyi; Qin, Yawei; Xu, Wen; Liu, Yang",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2023.120934"
    },
    "118": {
      "Title": "A Multi-volume constraint approach to diverse form designs from topology optimization",
      "Year": "2023",
      "Authors": "Yan, Xin; Xiong, Yulin; Bao, Ding Wen; Xie, Yi Min; Peng, Xiangguo",
      "Link": "http://dx.doi.org/10.1016/j.engstruct.2022.115525"
    },
    "119": {
      "Title": "Impacts of Problem Scale and Sampling Strategy on Surrogate Model Accuracy An Application of Surrogate-based Optimization in Building Design",
      "Year": "2016",
      "Authors": "Yang, Ding; Sun, Yimin; di Stefano, Danilo; Turrin, Michela; Sariyildiz, Sevil",
      "Link": "https://doi.org/10.1109/CEC.2016.7744323"
    },
    "12": {
      "Title": "Building Thermo-Modernisation Solution Based on the Multi-Objective Optimisation Method",
      "Year": "2020",
      "Authors": "Basinska, Malgorzata; Kaczorek, Dobroslawa; Koczyk, Halina",
      "Link": "http://dx.doi.org/10.3390/en13061433"
    },
    "120": {
      "Title": "Application of Surrogate Models for Building Envelope Design Exploration and Optimization",
      "Year": "2016",
      "Authors": "Yang, Ding; Sun, Yimin; Sileryte, Rusne; D'Aquilio, Antonio; Turrin, Michela",
      "Link": "https://pure.tudelft.nl/ws/portalfiles/portal/7717408/SimAUD2016_.pdf"
    },
    "121": {
      "Title": "Visualized Co-Simulation of Adaptive Human Behavior and Dynamic Building Performance: An Agent-Based Model (ABM) and Artificial Intelligence (AI) Approach for Smart Architectural Design",
      "Year": "2020",
      "Authors": "Yi, Hwang",
      "Link": "http://dx.doi.org/10.3390/su12166672"
    },
    "122": {
      "Title": "Building facade multi-objective optimization for daylight and aesthetical perception",
      "Year": "2019",
      "Authors": "Yi, Yun Kyu",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2019.04.002"
    },
    "123": {
      "Title": "Multi-Objective Optimization on Daylight Control System's Qualitative and Quantitative Performance",
      "Year": "2020",
      "Authors": "Yi, Yun Kyu; Jang, Keunhyuk",
      "Link": "http://dx.doi.org/10.26868/25222708.2019.211259"
    },
    "124": {
      "Title": "A weighted multi-objective optimisation approach to improve based facade aperture sizes in terms of energy, thermal comfort and daylight usage",
      "Year": "2021",
      "Authors": "Yilmaz, Yigit; Yilmaz, Burcu Cigdem",
      "Link": "http://dx.doi.org/10.1177/1744259120930047"
    },
    "125": {
      "Title": "A metamodel-based multi-objective optimization method to balance thermal comfort and energy efficiency in a campus gymnasium",
      "Year": "2021",
      "Authors": "Yue, Naihua; Li, Lingling; Morandi, Alessandro; Zhao, Yang",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2021.111513"
    },
    "126": {
      "Title": "Comfort, carbon emissions, and cost of building envelope and photovoltaic arrangement optimization through a two-stage model",
      "Year": "2024",
      "Authors": "Zhan, Jin; He, Wenjing; Huang, Jianxiang",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2023.122423"
    },
    "127": {
      "Title": "Optimization and prediction of office building shading devices for energy, daylight, and view consideration using genetic and BO-LGBM algorithms",
      "Year": "2024",
      "Authors": "Zhang, Hangyue; Cui, Yanqiu; Cai, Hongbin; Chen, Zhengshu",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2024.114939"
    },
    "128": {
      "Title": "Multi-Objective Optimization Method for the Shape of Large-Space Buildings Dominated by Solar Energy Gain in the Early Design Stage",
      "Year": "2021",
      "Authors": "Zhang, Longwei; Wang, Chao; Chen, Yu; Zhang, Lingling",
      "Link": "http://dx.doi.org/10.3389/fenrg.2021.744974"
    },
    "129": {
      "Title": "Shape optimization of free-form buildings based on solar radiation gain and space efficiency using a multi-objective genetic algorithm in the severe cold zones of China",
      "Year": "2016",
      "Authors": "Zhang, Longwei; Zhang, Lingling; Wang, Yuetao",
      "Link": "http://dx.doi.org/10.1016/j.solener.2016.02.053"
    },
    "13": {
      "Title": "Parametric Analysis versus Intuition Assessment of the effectiveness of design expertise",
      "Year": "2019",
      "Authors": "Bernal, Marcelo; Marshall, Tyrone; Okhoya, Victor; Chen, Cheney; Haymaker, John",
      "Link": "https://www.researchgate.net/publication/361128762_Parametric_Analysis_versus_Intuition_-_Assessment_of_the_effectiveness_of_design_expertise"
    },
    "130": {
      "Title": "HypE-GA based study on optimal design of standard floor facade windowing of high-rise office buildings facing energy saving in heating, cooling and lighting",
      "Year": "2025",
      "Authors": "Zhang, Weixiang; Sui, Jieli",
      "Link": "http://dx.doi.org/10.1371/journal.pone.0309817"
    },
    "131": {
      "Title": "Multi-Objective Optimization and Sensitivity Analysis of Building Envelopes and Solar Panels Using Intelligent Algorithms",
      "Year": "2024",
      "Authors": "Zhao, Na; Zhang, Jia; Dong, Yewei; Ding, Chao",
      "Link": "http://dx.doi.org/10.3390/buildings14103134"
    },
    "132": {
      "Title": "Low-carbon design: Building optimization considering carbon emission, material utilization, and daylighting",
      "Year": "2024",
      "Authors": "Zhong, Yuting; Qin, Zesheng; Feng, Ruoqiang; Liu, Yingkai",
      "Link": "http://dx.doi.org/10.1016/j.jclepro.2023.140087"
    },
    "133": {
      "Title": "A performance data integrated BIM framework for building life-cycle energy efficiency and environmental optimization design",
      "Year": "2021",
      "Authors": "Zhuang, Dian; Zhang, Xinkai; Lu, Yongdong; Wang, Chao; Jin, Xing; Zhou, Xin; Shi, Xing",
      "Link": "http://dx.doi.org/10.1016/j.autcon.2021.103712"
    },
    "134": {
      "Title": "Multi-dimensional performance-based intelligent optimization of atrium building prototype with informed approach",
      "Year": "2025",
      "Authors": "Zou, Yiquan; Li, Yanyan; Chen, Han; Xiao, Benlin; Li, Zhou",
      "Link": "http://dx.doi.org/10.1007/s42452-024-06421-z"
    },
    "14": {
      "Title": "Multi-objective Optimization of a Residential Building Envelope in the Bahamas",
      "Year": "2017",
      "Authors": "Bingham, Raymond; Agelin-Chaab, Martin; Rosen, Marc A.",
      "Link": "https://www.researchgate.net/publication/320607483_Multi-objective_optimization_of_a_residential_building_envelope_in_the_Bahamas"
    },
    "15": {
      "Title": "A computational multi-objective optimization method to improve energy efficiency and thermal comfort in dwellings",
      "Year": "2017",
      "Authors": "Bre, Facundo; Fachinotti, Victor D.",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2017.08.002"
    },
    "16": {
      "Title": "An efficient metamodel-based method to carry out multi-objective building performance optimizations",
      "Year": "2020",
      "Authors": "Bre, Facundo; Roman, Nadia; Fachinotti, Victor D.",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2019.109576"
    },
    "17": {
      "Title": "Residential building design optimisation using sensitivity analysis and genetic algorithm",
      "Year": "2016",
      "Authors": "Bre, Facundo; Silva, Arthur Santos; Ghisi, Enedir; Fachinotti, Victor D.",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2016.10.025"
    },
    "18": {
      "Title": "Balancing design intent and performance: an algorithmic design approach",
      "Year": "2024",
      "Authors": "Caetano, Ines; Pereira, I.; Leitao, A.",
      "Link": "http://dx.doi.org/10.1080/00038628.2023.2254305"
    },
    "19": {
      "Title": "Towards nearly Zero Energy Buildings: Shape optimization of typical housing typologies in Ibero-American temperate climate cities from a holistic perspective",
      "Year": "2019",
      "Authors": "Camporeale, Patricia E.; Mercader-Moyano, Pilar",
      "Link": "http://dx.doi.org/10.1016/j.solener.2019.09.091"
    },
    "2": {
      "Title": "Optimising the Parameters of a Building Envelope in the East Mediterranean Saharan, Cool Climate Zone",
      "Year": "2021",
      "Authors": "Albatayneh, Aiman",
      "Link": "http://dx.doi.org/10.3390/buildings11020043"
    },
    "20": {
      "Title": "Multi-Objective Optimization of Building Design Parameters for Cost Reduction and CO2 Emission Control Using Four Different Algorithms",
      "Year": "2024",
      "Authors": "Canbolat, Ahmet Serhan; Albak, Emre Isa",
      "Link": "http://dx.doi.org/10.3390/app14177668"
    },
    "21": {
      "Title": "Systematic approach for the life cycle multi-objective optimization of buildings combining objective reduction and surrogate modeling",
      "Year": "2016",
      "Authors": "Carreras, Joan; Pozo, Carlos; Boer, Dieter; Guillen-Gosalbez, Gonzalo; Caballero, Jose A.; Ruiz-Femenia, Ruben; Jimenez, Laureano",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2016.07.062"
    },
    "22": {
      "Title": "Multi-objective optimization for visual, thermal, and cooling energy performance of building envelope design in the composite climate of Jaipur (India)",
      "Year": "2024",
      "Authors": "Chaturvedi, Pushpendra Kumar; Kumar, Nand; Lamba, Ravita",
      "Link": "http://dx.doi.org/10.1177/0958305X241228513"
    },
    "23": {
      "Title": "Multi-objective optimization of building energy performance and indoor thermal comfort by combining artificial neural networks and metaheuristic algorithms",
      "Year": "2021",
      "Authors": "Chegari, Badr; Tabaa, Mohamed; Simeu, Emmanuel; Moutaouakkil, Fouad; Medromi, Hicham",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2021.110839"
    },
    "24": {
      "Title": "Multiobjective optimization of building energy consumption based on BIM-DB and LSSVM-NSGA-II *",
      "Year": "2021",
      "Authors": "Chen, Bin; Liu, Qiong; Chen, Hongyu; Wang, Lei; Deng, Tingting; Zhang, Limao; Wu, Xianguo",
      "Link": "http://dx.doi.org/10.1016/j.jclepro.2021.126153"
    },
    "25": {
      "Title": "Analysing Populations of Design Variants Using Clustering and Archetypal Analysis",
      "Year": "2015",
      "Authors": "Chen, Kian Wee; Janssen, Patrick; Schlueter, Arno",
      "Link": "https://www.researchgate.net/publication/311534315_Analysing_Populations_of_Design_Variants_Using_Clustering_and_Archetypal_Analysis"
    },
    "26": {
      "Title": "Optimising Embodied Energy and Thermal Performance of Thermal Insulation in Building Envelopes via an Automated Building Information Modelling (BIM) Tool",
      "Year": "2020",
      "Authors": "Chen, Zixuan; Hammad, Ahmed W. A.; Kamardeen, Imriyas; Akbarnezhad, Ali",
      "Link": "http://dx.doi.org/10.3390/buildings10120218"
    },
    "27": {
      "Title": "A statistical method to improve the energy efficiency of an office building",
      "Year": "2007",
      "Authors": "Chlela, Fadi; Husaunndee, Ahmad; Riederer, Peter; Inard, Christian",
      "Link": "https://publications.ibpsa.org/proceedings/bs/2007/papers/bs2007_365.pdf "
    },
    "28": {
      "Title": "Parametric Louver Design System Based On Direct Solar Radiation Control Performance",
      "Year": "2014",
      "Authors": "Choi, Jaepil; Lee, Taekyoung; Ahn, Euisoon; Piao, Gensong",
      "Link": "http://dx.doi.org/10.3130/jaabe.13.57"
    },
    "29": {
      "Title": "Performance Driven Design and Simulation Interfaces: A Multi-Objective Parametric Optimization Process",
      "Year": "2012",
      "Authors": "Chronis, Angelos; Tsigkari, Martha; Giouvanos, Evangelos; Aish, Francis; Zaki, Anis Abou",
      "Link": "https://www.researchgate.net/publication/272886795_Performance_driven_design_and_simulation_interfaces_A_multi-objective_parametric_optimization_process"
    },
    "3": {
      "Title": "Integration of thermal-daylighting climate subzones and energy efficiency design optimization for office buildings",
      "Year": "2025",
      "Authors": "Ao, Jingyun; Du, Chenqiu; Bellamy, Larry; Li, Baizhan",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.111669"
    },
    "30": {
      "Title": "New genetic algorithm-based workflow for multi-objective optimization of Net Zero Energy Buildings integrating robustness assessment",
      "Year": "2023",
      "Authors": "D'Agostino, D.; Minelli, F.; Minichiello, F.",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2023.112841"
    },
    "31": {
      "Title": "Proposal of a new automated workflow for the computational performance-driven design optimization of building energy need and construction cost",
      "Year": "2021",
      "Authors": "D'Agostino, Diana; D'Agostino, Pierpaolo; Minelli, Federico; Minichiello, Francesco",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2021.110857"
    },
    "32": {
      "Title": "A pixel counting based method for designing shading devices in buildings considering energy efficiency, daylight use and fading protection",
      "Year": "2020",
      "Authors": "de Almeida Rocha, Ana Paula; Reynoso-Meza, Gilberto; Oliveira, Ricardo C. L. F.; Mendes, Nathan",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2020.114497"
    },
    "33": {
      "Title": "Multi-objective optimization of the building energy performance: A simulation-based approach by means of particle swarm optimization (PSO)",
      "Year": "2016",
      "Authors": "Delgarm, N.; Sajadi, B.; Kowsary, F.; Delgarm, S.",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2016.02.141"
    },
    "34": {
      "Title": "Multi-objective optimization of building energy performance and indoor thermal comfort: A new method using artificial bee colony (ABC)",
      "Year": "2016",
      "Authors": "Delgarm, Navid; Sajadi, Behrang; Delgarm, Saeed",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2016.09.003"
    },
    "35": {
      "Title": "Optimization approach of passive cool skin technology application for the Building's exterior walls",
      "Year": "2020",
      "Authors": "Ding, Yan; Wei, Xiaoting; Wang, Qiaochu",
      "Link": "http://dx.doi.org/10.1016/j.jclepro.2020.120751"
    },
    "36": {
      "Title": "Multi-zone optimisation of high-rise buildings using artificial intelligence for sustainable metropolises. Part 1: Background, methodology, setup, and machine learning results",
      "Year": "2021",
      "Authors": "Ekici, Berk; Kazanasmaz, Z. Tugce; Turrin, Michela; Tasgetiren, M. Fatih; Sariyildiz, I. Sevil",
      "Link": "http://dx.doi.org/10.1016/j.solener.2021.05.083"
    },
    "37": {
      "Title": "Impact of occupant behavior on optimal multi-objective solutions for the design of low-energy buildings",
      "Year": "2024",
      "Authors": "El Khattabi, Sekaina; Fraisse, Gilles; Leconte, Antoine; Rouchier, Simon",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2024.114371"
    },
    "38": {
      "Title": "Automated optimization for the integrated design process: the energy, thermal and visual comfort nexus",
      "Year": "2018",
      "Authors": "Ferrara, Maria; Sirombo, Elisa; Fabrizio, Enrico",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2018.03.039"
    },
    "39": {
      "Title": "Design of low-emission and energy-efficient residential buildings using a multi-objective optimization algorithm",
      "Year": "2012",
      "Authors": "Fesanghary, M.; Asadi, S.; Geem, Zong Woo",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2011.09.030"
    },
    "4": {
      "Title": "Optimizing the energy transition of social housing to renewable nearly zero-energy community: The goal of sustainability",
      "Year": "2023",
      "Authors": "Aruta, Giuseppe; Ascione, Fabrizio; Bianco, Nicola; Iovane, Teresa; Mastellone, Margherita; Mauro, Gerardo Maria",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2023.112798"
    },
    "40": {
      "Title": "Digital workflow for climate resilient building facade generation",
      "Year": "2023",
      "Authors": "Figliola, Angelo",
      "Link": "http://dx.doi.org/10.1080/09613218.2022.2121907"
    },
    "41": {
      "Title": "Optimizing complex building design for annual daylighting performance and evaluation of optimization algorithms",
      "Year": "2015",
      "Authors": "Futrell, Benjamin J.; Ozelkan, Ertunga C.; Brentrup, Dale",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2015.01.017"
    },
    "42": {
      "Title": "A novel decision support system for designing fixed shading systems in the early design stage: A case study in Egypt",
      "Year": "2024",
      "Authors": "Gaber, Basma; Zhan, Changhong; Han, Xueying; Omar, Mohamed; Li, Guanghao",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.110453"
    },
    "43": {
      "Title": "Integrating Computational and Building Performance Simulation Techniques for Optimized Facade Designs",
      "Year": "2013",
      "Authors": "Gadelhak, Mahmoud",
      "Link": "https://repository.tudelft.nl/file/File_24751712-4ca7-4520-987d-b996e54e889b?preview=1"
    },
    "44": {
      "Title": "A generative facade design method based on daylighting performance goals",
      "Year": "2012",
      "Authors": "Gagne, Jaime; Andersen, Marilyne",
      "Link": "http://dx.doi.org/10.1080/19401493.2010.549572"
    },
    "45": {
      "Title": "Quantitative analysis of performance-oriented design efficiency in early divergent parametric design of office building façade",
      "Year": "2024",
      "Authors": "Gao, Wen; He, Qiushi; Lu, Shuai; Zhou, Ziqian; Lin, Borong",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.111449"
    },
    "46": {
      "Title": "A comparison of an energy/economic-based against an exergoeconomic-based multi-objective optimisation for low carbon building energy design",
      "Year": "2017",
      "Authors": "Garcia Kerdan, Ivan; Raslan, Rokia; Ruyssevelt, Paul; Morillon Galvez, David",
      "Link": "http://dx.doi.org/10.1016/j.energy.2017.03.142"
    },
    "47": {
      "Title": "A multi-agent approach for performance based architecture: Design exploring geometry, user, and environmental agencies in facades",
      "Year": "2017",
      "Authors": "Gerber, David J.; Pantazis, Evangelos; Wang, Alan",
      "Link": "http://dx.doi.org/10.1016/j.autcon.2017.01.001"
    },
    "48": {
      "Title": "Solar Species: Energy Optimization of Urban Form Through an Evolutionary Design Process",
      "Year": "2024",
      "Authors": "Giostra, Simone; Kamalia, Ayush; Masera, Gabriele",
      "Link": "http://dx.doi.org/10.3390/su16219254"
    },
    "49": {
      "Title": "FACADE OPTIMIZATION USING PARAMETRIC DESIGN AND FUTURE CLIMATE SCENARIOS",
      "Year": "2013",
      "Authors": "Glassman, Elliot J.; Reinhart, Christoph",
      "Link": "https://publications.ibpsa.org/proceedings/bs/2013/papers/bs2013_974.pdf"
    },
    "5": {
      "Title": "Resilience of robust cost-optimal energy retrofit of buildings to global warming: A multi-stage, multi-objective approach",
      "Year": "2017",
      "Authors": "Ascione, Fabrizio; Bianco, Nicola; De Masi, Rosa Francesca; Mauro, Gerardo Maria; Vanoli, Giuseppe Peter",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2017.08.004"
    },
    "50": {
      "Title": "A computational design strategy for integrated fa?ades",
      "Year": "2023",
      "Authors": "Gurcan, Cemile Gül; Heyik, Muhammet Ali; Tastan, Hasan; Zoroglu, Fatma",
      "Link": "http://dx.doi.org/10.14744/MEGARON.2023.55631"
    },
    "51": {
      "Title": "Multi-Objective Optimization of Building Energy Design to Reconcile Collective and Private Perspectives: CO2-eq vs. Discounted Payback Time",
      "Year": "2017",
      "Authors": "Hamdy, Mohamed; Mauro, Gerardo Maria",
      "Link": "http://dx.doi.org/10.3390/en10071016"
    },
    "52": {
      "Title": "Multi-objective optimization methodology for net zero energy buildings",
      "Year": "2018",
      "Authors": "Harkouss, Fatima; Fardoun, Farouk; Biwole, Pascal Henry",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2017.12.003"
    },
    "53": {
      "Title": "Multi-criterion optimization of building envelope in the function of indoor illumination quality towards overall energy performance improvement",
      "Year": "2016",
      "Authors": "Harmathy, Norbert; Magyar, Zoltan; Folic, Radomir",
      "Link": "http://dx.doi.org/10.1016/j.energy.2016.07.162"
    },
    "54": {
      "Title": "Design optimization of public building envelope based on multi-objective quantum genetic algorithm",
      "Year": "2024",
      "Authors": "He, Lihua; Wang, Wei",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.109714"
    },
    "55": {
      "Title": "Green building envelope designs in different climate and seismic zones: Multi-objective ANN-based genetic algorithm",
      "Year": "2022",
      "Authors": "Himmetoglu, Salih; Delice, Yilmaz; Aydogan, Emel Kizilkaya; Uzal, Burak",
      "Link": "http://dx.doi.org/10.1016/j.seta.2022.102505"
    },
    "56": {
      "Title": "Multiobjective optimization of building energy consumption and thermal comfort based on integrated BIM framework with machine learning-NSGA II",
      "Year": "2022",
      "Authors": "Hosamo, Haidar Hosamo; Tingstveit, Merethe Solvang; Nielsen, Henrik Kofoed; Svennevig, Paul Ragnar; Svidt, Kjeld",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2022.112479"
    },
    "57": {
      "Title": "Design and optimization of form and facade of an office building using the genetic algorithm",
      "Year": "2020",
      "Authors": "Jalali, Zahra; Noorzai, Esmatullah; Heidari, Shahin",
      "Link": "http://dx.doi.org/10.1080/23744731.2019.1624095"
    },
    "58": {
      "Title": "A many-objective optimization approach to design office building façade considering energy-daylight balance concept within prevalent climate types of Iran",
      "Year": "2024",
      "Authors": "Kangazian, Ali; Pourghanbari, Mehdi",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.111234"
    },
    "59": {
      "Title": "Integrating Machine Learning and Genetic Algorithms to Optimize Building Energy and Thermal Efficiency Under Historical and Future Climate Scenarios",
      "Year": "2024",
      "Authors": "Karimi, Alireza; Mohajerani, Mostafa; Alinasab, Niloufar; Akhlaghinezhad, Fateme",
      "Link": "http://dx.doi.org/10.3390/su16219324"
    },
    "6": {
      "Title": "A new comprehensive approach for integrated with the multi-objective systems",
      "Year": "2017",
      "Authors": "Ascione, Fabrizio; Bianco, Nicola; De Stasio, Claudio; Mauro, Gerardo Maria; Vanoli, Giuseppe Peter",
      "Link": "http://dx.doi.org/10.1016/j.scs.2017.02.010"
    },
    "60": {
      "Title": "MULTI-CRITERIA EVOLUTIONARY OPTIMISATION OF BUILDING ENVELOPES DURING CONCEPTUAL STAGES OF DESIGN",
      "Year": "2012",
      "Authors": "Kaushik, Vignesh Srinivas; Janssen, Patrick",
      "Link": "https://www.researchgate.net/publication/261289532_Multi-criteria_evolutionary_optimisation_of_building_enveloped_during_conceptual_stages_of_design"
    },
    "61": {
      "Title": "Geo-solar segmentation mechanism: An early design stage method for building solar morphing",
      "Year": "2022",
      "Authors": "Keskas, Imene; Bourbia, Fatiha; Mohammadi, Murtaza; Calautit, John",
      "Link": "http://dx.doi.org/10.1016/j.solener.2022.09.028"
    },
    "62": {
      "Title": "A Pareto-based multi-objective optimization algorithm to design energy-efficient shading devices",
      "Year": "2016",
      "Authors": "Khoroshiltseva, Marina; Slanzi, Debora; Poli, Irene",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2016.05.015"
    },
    "63": {
      "Title": "Tool for life cycle analysis of facade-systems for industrial buildings",
      "Year": "2016",
      "Authors": "Kovacic, Iva; Waltenbereger, Linus; Gourlis, Georgios",
      "Link": "http://dx.doi.org/10.1016/j.jclepro.2015.10.063"
    },
    "64": {
      "Title": "Optimal design of building envelope towards life cycle performance: Impact of considering dynamic grid emission factors",
      "Year": "2024",
      "Authors": "Li, Changqi; Pan, Yiqun; Liu, Zhichao; Liang, Yumin; Yuan, Xiaolei; Huang, Zhizhong; Zhou, Nan",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2024.114770"
    },
    "65": {
      "Title": "A novel method of high-density urban block form generation based on multi-objective solar performance optimization: A case study of Nanjing",
      "Year": "2024",
      "Authors": "Li, Jingjin; He, Zijun; Zhao, Baikun",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2024.114878"
    },
    "66": {
      "Title": "A GP-Based Hierarchical Objectives Decision-Making Method for Building Energy Efficiency Optimization",
      "Year": "2022",
      "Authors": "Li, Xiang; Liu, Sha; Sun, Yichao",
      "Link": "http://dx.doi.org/10.3390/buildings12010052"
    },
    "67": {
      "Title": "A new method of building envelope thermal design optimisation combined with room thermal resilience index",
      "Year": "2024",
      "Authors": "Li, Zhengrong; Si, Yang; Feng, Yanbo",
      "Link": "http://dx.doi.org/10.1177/17442591241299036"
    },
    "68": {
      "Title": "Development of an Integrated Performance Design Platform for Residential Buildings Based on Climate Adaptability",
      "Year": "2021",
      "Authors": "Li, Zhixing; Tian, Mimi; Zhao, Yafei; Zhang, Zhao; Ying, Yuxi",
      "Link": "http://dx.doi.org/10.3390/en14248223"
    },
    "69": {
      "Title": "Multi-objective optimization design of residential area based on microenvironment simulation",
      "Year": "2023",
      "Authors": "Li, Zhixing; Zou, Yukai; Xia, Huijuan; Jin, Chenxi",
      "Link": "http://dx.doi.org/10.1016/j.jclepro.2023.138922"
    },
    "7": {
      "Title": "A new comprehensive framework for the multi-objective optimization of building energy design: Harlequin",
      "Year": "2019",
      "Authors": "Ascione, Fabrizio; Bianco, Nicola; Mauro, Gerardo Maria; Vanoli, Giuseppe Peter",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2019.03.028"
    },
    "70": {
      "Title": "Computational BIM for Building Envelope Sustainability Optimization",
      "Year": "2019",
      "Authors": "Lim, Yaik-Wah; Seghier, Taki Eddine; Harun, Muhamad Farhin; Ahmad, Mohd Hamdan; Samah, Azurah A.; Majid, Hairudin Abdul",
      "Link": "http://dx.doi.org/10.1051/matecconf/201927804001"
    },
    "71": {
      "Title": "Geometrical optimization of solar venetian blinds in residential buildings to improve the economic costs of the building and the visual comfort of the residents using the NSGA-II algorithm",
      "Year": "2024",
      "Authors": "Liu, Jie; Baghoolizadeh, Mohammadreza; Basem, Ali; Hamza, Hussein; Sudhamsu, Gadug; Al-Musawi, Tariq J.; Sultan, Abbas J.; Salahshour, Soheil; Alizadeh, A.",
      "Link": "http://dx.doi.org/10.1016/j.icheatmasstransfer.2024.107723"
    },
    "72": {
      "Title": "Multi-objective optimization of daylighting performance and energy consumption of educational buildings in different climatic zones of China",
      "Year": "2024",
      "Authors": "Liu, Jixin; Li, Zhe; Zhong, Qikang; Wu, Jiade; Xie, Liang",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.110322"
    },
    "73": {
      "Title": "Research on Multi-Objective Optimization Design of University Student Center in China Based on Low Energy Consumption and Thermal Comfort",
      "Year": "2024",
      "Authors": "Liu, Ming; Que, Yufei; Yang, Nanxin; Yan, Chongyi; Liu, Qibo",
      "Link": "http://dx.doi.org/10.3390/en17092082"
    },
    "74": {
      "Title": "Multi-objective optimization of rural residential envelopes in cold regions of China based on performance and economic efficiency",
      "Year": "2024",
      "Authors": "Liu, Ruixia; Wang, Guangbin; Deng, Qingtan",
      "Link": "http://dx.doi.org/10.1016/j.csite.2024.104937"
    },
    "75": {
      "Title": "Building information modelling-enabled multi-objective optimization for energy consumption parametric analysis in green buildings design using hybrid machine learning algorithms",
      "Year": "2023",
      "Authors": "Liu, Yang; Li, Tiejun; Xu, Wensheng; Wang, Qiang; Huang, Hao; He, Bao-Jie",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2023.113665"
    },
    "76": {
      "Title": "Surrogate-based approach of predicting and optimising building performance by integrating daylighting, thermal comfort, and costs - A case study of community care homes",
      "Year": "2025",
      "Authors": "Liu, Yishan; Yang, Hongwei; Liu, Conghong; Guan, Yuntong; Cheng, Tan",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2024.111534"
    },
    "77": {
      "Title": "Multi-Objective Optimization of Building Environmental Performance: An Integrated Parametric Design Method Based on Machine Learning Approaches",
      "Year": "2022",
      "Authors": "Lu, Yijun; Wu, Wei; Geng, Xuechuan; Liu, Yanchen; Zheng, Hao; Hou, Miaomiao",
      "Link": "http://dx.doi.org/10.3390/en15197031"
    },
    "78": {
      "Title": "BIM-based generative design approach for integral residential energy-efficient façades",
      "Year": "2025",
      "Authors": "Ma, Wei; Wang, Xiangyu",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2024.115118"
    },
    "79": {
      "Title": "Parametric Design to Maximize Solar Irradiation and Minimize the Embodied GHG Emissions for a ZEB in Nordic and Mediterranean Climate Zones",
      "Year": "2020",
      "Authors": "Manni, Mattia; Lobaccaro, Gabriele; Lolli, Nicola; Bohne, Rolf Andre",
      "Link": "http://dx.doi.org/10.3390/en13184981"
    },
    "8": {
      "Title": "HEURISTIC OPTIMIZATION IN DESIGN",
      "Year": "2015",
      "Authors": "Ashour, Yassin; Kolarevic, Branko",
      "Link": "https://researchwith.njit.edu/en/publications/heuristic-optimization-in-design"
    },
    "80": {
      "Title": "An evolutionary approach to single-sided ventilated facade design",
      "Year": "2017",
      "Authors": "Marzban, Samin; Ding, Lan; Fiorito, Francesco",
      "Link": "http://dx.doi.org/10.1016/j.proeng.2017.04.217"
    },
    "81": {
      "Title": "Determination of the fuzzy measures for multicriteria and optimal design of a building facade using Choquet integrals",
      "Year": "2019",
      "Authors": "Moghtadernejad, Saviz; Mirza, M. Saeed; Chouinard, Luc E.",
      "Link": "http://dx.doi.org/10.1016/j.jobe.2019.100877"
    },
    "82": {
      "Title": "Development of a new methodology to optimize building life cycle cost, environmental impacts, and occupant satisfaction",
      "Year": "2017",
      "Authors": "Mostavi, Ehsan; Asadi, Somayeh; Boussaa, Djamel",
      "Link": "http://dx.doi.org/10.1016/j.energy.2017.01.049"
    },
    "83": {
      "Title": "Daylighting Based Parametric Design Exploration of 3D Facade Patterns",
      "Year": "2016",
      "Authors": "Narangerel, Amartuvshin; Lee, Ji-Hyun; Stouffs, Rudi",
      "Link": "https://www.researchgate.net/publication/307413682_Daylighting_Based_Parametric_Design_Exploration_of_3D_Facade_Patterns"
    },
    "84": {
      "Title": "Efficiency-based Pareto Optimization of Building Energy Consumption and Thermal Comfort: A Case Study of a Residential Building in Bushehr, Iran",
      "Year": "2024",
      "Authors": "Nasouri, Masoud; Delgarm, Navid",
      "Link": "http://dx.doi.org/10.1007/s11630-023-1933-5"
    },
    "85": {
      "Title": "Simplified evaluation metrics for generative energy-driven urban design: A morphological study of residential blocks in Tel Aviv",
      "Year": "2021",
      "Authors": "Natanian, Jonathan; Wortmann, Thomas",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2021.110916"
    },
    "86": {
      "Title": "Multi-objective optimization of energy demand and net zero energy building design based on climatic conditions (Case study: Iran)",
      "Year": "2025",
      "Authors": "Noorollahi, Y.; Barabadi, P.; Taherahmadi, J.; Abbasizade, F.",
      "Link": "http://dx.doi.org/10.1007/s13762-024-06059-9"
    },
    "87": {
      "Title": "A multi-objective optimization framework for performance-based building design considering the interplay between buildings and urban environments",
      "Year": "2024",
      "Authors": "Qiu, Zhaoyang; Yong, Qiaoqiao; Wang, Jiayuan; Liao, Longhui; Yu, Bo",
      "Link": "http://dx.doi.org/10.1016/j.enconman.2024.118793"
    },
    "88": {
      "Title": "Comparison analysis on simplification methods of building performance optimization for passive building design",
      "Year": "2022",
      "Authors": "Qu, Kaichen; Zhang, Hong; Zhou, Xin; Zhao, Liang; Sun, Bo",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2022.108990"
    },
    "89": {
      "Title": "Multi-objective optimisation of external shading devices for energy efficiency and visual comfort",
      "Year": "2013",
      "Authors": "Rapone, Gianluca; Saro, Onorio; Zemella, Giovanni",
      "Link": "https://publications.ibpsa.org/proceedings/bsa/2013/papers/bsa2013_20.pdf"
    },
    "9": {
      "Title": "Reducing heating energy, embodied co2, overheating hours, and initial costs simultaneously: Methodology and case study in cold climate",
      "Year": "2025",
      "Authors": "Baba, Fuad Mutasim",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2025.112737"
    },
    "90": {
      "Title": "Genetic Algorithm-Driven Optimization of Pattern for Parametric Facade Design Based on Support Position Data to Increase Visual Quality",
      "Year": "2024",
      "Authors": "Rezakhani, Mojgan; Kim, Sung-Ah",
      "Link": "http://dx.doi.org/10.3390/buildings14041086"
    },
    "91": {
      "Title": "Building Optimization through a Parametric Design Platform: Using Sensitivity Analysis to Improve a Radial-Based Algorithm Performance",
      "Year": "2021",
      "Authors": "Sakiyama, Nayara R. M.; Carlo, Joyce C.; Mazzaferro, Leonardo; Garrecht, Harald",
      "Link": "http://dx.doi.org/10.3390/su13105739"
    },
    "92": {
      "Title": "Effects of local conditions on the multi-variable and multi-objective energy optimization of residential buildings using genetic algorithms",
      "Year": "2020",
      "Authors": "Salata, Ferdinando; Ciancio, Virgilio; Dell'Olmo, Jacopo; Golasi, Iacopo; Palusci, Olga; Coppi, Massimo",
      "Link": "http://dx.doi.org/10.1016/j.apenergy.2019.114289"
    },
    "93": {
      "Title": "Multidisciplinary Optimization of Life-Cycle Energy and Cost Using a BIM-Based Master Model",
      "Year": "2019",
      "Authors": "Sandberg, Marcus; Mukkavaara, Jani; Shadram, Farshid; Olofsson, Thomas",
      "Link": "http://dx.doi.org/10.3390/su11010286"
    },
    "94": {
      "Title": "Evolutionary Optimization of Building Facade Form for Energy and Comfort in Urban Environment through BIM and Algorithmic Modeling",
      "Year": "2019",
      "Authors": "Santiago, Pedro",
      "Link": "https://papers.cumincad.org/data/works/att/ecaadesigradi2019_464.pdf"
    },
    "95": {
      "Title": "Data-driven performance analysis of a residential building applying artificial neural network (ANN) and multi-objective genetic algorithm (GA)",
      "Year": "2022",
      "Authors": "Saryazdi, Seyed mohammad Ebrahimi; Etemad, Alireza; Shafaat, Ali; Bahman, Ammar M.",
      "Link": "http://dx.doi.org/10.1016/j.buildenv.2022.109633"
    },
    "96": {
      "Title": "A NOVEL MULTI-CRITERIA WORKFLOW BASED ON REVERSE SOLAR ENVELOPES FOR THE DESIGN OF RESIDENTIAL CLUSTERS",
      "Year": "2022",
      "Authors": "Sepulveda, Abel; De Luca, Francesco",
      "Link": "https://doi.org/10.23919/ANNSIM55834.2022.9859537"
    },
    "97": {
      "Title": "An integrated BIM-based framework for the optimization of the trade-off between embodied and operational energy",
      "Year": "2018",
      "Authors": "Shadram, Farshid; Mukkavaara, Jani",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2017.11.017"
    },
    "98": {
      "Title": "An integrated BIM-based framework for the optimization of the trade-off between embodied and operational energy",
      "Year": "2022",
      "Authors": "Shadram, Farshid; Mukkavaara, Jani",
      "Link": "http://dx.doi.org/10.1016/j.enbuild.2017.11.018"
    },
    "99": {
      "Title": "Improving Life Cycle Sustainability and Profitability of Buildings through Optimization: A Case Study",
      "Year": "2022",
      "Authors": "Shadram, Farshid; Mukkavaara, Jani",
      "Link": "http://dx.doi.org/10.3390/buildings12040497"
    }
  },
  "ACCELERATORS": {
    "Complexity reduction": {
      "Micro-urban": {
        "Early": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Detailed": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Building": {
        "Early": {
          "All": {
            "value": 0.05,
            "refs": [
              "132"
            ]
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.14285714285714285,
            "refs": [
              "132"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.27,
            "refs": [
              "10",
              "110",
              "126",
              "56",
              "87",
              "91"
            ]
          },
          "Exploration": {
            "value": 0.3125,
            "refs": [
              "10",
              "110",
              "56",
              "87",
              "91"
            ]
          },
          "Optimization": {
            "value": 0.16666666666666666,
            "refs": [
              "126"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.05,
            "refs": [
              "16"
            ]
          },
          "Exploration": {
            "value": 0.0666666666666667,
            "refs": [
              "16"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Facade": {
        "Early": {
          "All": {
            "value": 0.08,
            "refs": [
              "111",
              "2"
            ]
          },
          "Exploration": {
            "value": 0.0625,
            "refs": [
              "111"
            ]
          },
          "Optimization": {
            "value": 0.1111111111111111,
            "refs": [
              "2"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.06,
            "refs": [
              "125",
              "3"
            ]
          },
          "Exploration": {
            "value": 0.08695652173913043,
            "refs": [
              "125",
              "3"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Detailed": {
          "All": {
            "value": 0.15,
            "refs": [
              "17",
              "35",
              "62"
            ]
          },
          "Exploration": {
            "value": 0.06666666666666667,
            "refs": [
              "62"
            ]
          },
          "Optimization": {
            "value": 0.4,
            "refs": [
              "17",
              "35"
            ]
          }
        }
      }
    },
    "Sampling": {
      "Micro-urban": {
        "Early": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Preliminary": {
          "All": {
            "value": 1.0,
            "refs": [
              "69"
            ]
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "69"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Building": {
        "Early": {
          "All": {
            "value": 0.2,
            "refs": [
              "115",
              "30",
              "76",
              "88"
            ]
          },
          "Exploration": {
            "value": 0.23076923076923078,
            "refs": [
              "30",
              "76",
              "88"
            ]
          },
          "Optimization": {
            "value": 0.14285714285714285,
            "refs": [
              "115"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.32,
            "refs": [
              "110",
              "119",
              "120",
              "126",
              "59",
              "87",
              "91"
            ]
          },
          "Exploration": {
            "value": 0.25,
            "refs": [
              "110",
              "59",
              "87",
              "91"
            ]
          },
          "Optimization": {
            "value": 0.5,
            "refs": [
              "119",
              "120",
              "126"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.11,
            "refs": [
              "16",
              "95"
            ]
          },
          "Exploration": {
            "value": 0.13333333333333333,
            "refs": [
              "16",
              "95"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Facade": {
        "Early": {
          "All": {
            "value": 0.24,
            "refs": [
              "111",
              "112",
              "42",
              "45",
              "64"
            ]
          },
          "Exploration": {
            "value": 0.3125,
            "refs": [
              "111",
              "112",
              "45",
              "64"
            ]
          },
          "Optimization": {
            "value": 0.1111111111111111,
            "refs": [
              "42"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.23,
            "refs": [
              "103",
              "125",
              "13",
              "24",
              "3",
              "32",
              "68"
            ]
          },
          "Exploration": {
            "value": 0.30434782608695654,
            "refs": [
              "103",
              "125",
              "13",
              "3",
              "32",
              "68"
            ]
          },
          "Optimization": {
            "value": 0.08333333333333333,
            "refs": [
              "24"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.2,
            "refs": [
              "100",
              "21",
              "23",
              "27"
            ]
          },
          "Exploration": {
            "value": 0.26666666666666666,
            "refs": [
              "100",
              "21",
              "23",
              "27"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      }
    },
    "Prediction": {
      "Micro-urban": {
        "Early": {
          "All": {
            "value": 0.08,
            "refs": [
              "106"
            ]
          },
          "Exploration": {
            "value": 0.1111111111111111,
            "refs": [
              "106"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Preliminary": {
          "All": {
            "value": 1.0,
            "refs": [
              "69"
            ]
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "69"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Building": {
        "Early": {
          "All": {
            "value": 0.25,
            "refs": [
              "115",
              "121",
              "132",
              "76",
              "88"
            ]
          },
          "Exploration": {
            "value": 0.23076923076923078,
            "refs": [
              "121",
              "76",
              "88"
            ]
          },
          "Optimization": {
            "value": 0.2857142857142857,
            "refs": [
              "115",
              "132"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.41,
            "refs": [
              "117",
              "119",
              "120",
              "126",
              "131",
              "134",
              "56",
              "59",
              "91"
            ]
          },
          "Exploration": {
            "value": 0.375,
            "refs": [
              "117",
              "131",
              "134",
              "56",
              "59",
              "91"
            ]
          },
          "Optimization": {
            "value": 0.5,
            "refs": [
              "119",
              "120",
              "126"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.32,
            "refs": [
              "101",
              "116",
              "16",
              "75",
              "95",
              "98"
            ]
          },
          "Exploration": {
            "value": 0.26666666666666666,
            "refs": [
              "116",
              "16",
              "95",
              "98"
            ]
          },
          "Optimization": {
            "value": 0.5,
            "refs": [
              "101",
              "75"
            ]
          }
        }
      },
      "Facade": {
        "Early": {
          "All": {
            "value": 0.2,
            "refs": [
              "111",
              "112",
              "42",
              "64",
              "77"
            ]
          },
          "Exploration": {
            "value": 0.1875,
            "refs": [
              "111",
              "112",
              "64"
            ]
          },
          "Optimization": {
            "value": 0.2222222222222222,
            "refs": [
              "42",
              "77"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.23,
            "refs": [
              "103",
              "107",
              "125",
              "127",
              "24",
              "3",
              "68"
            ]
          },
          "Exploration": {
            "value": 0.21739130434782608,
            "refs": [
              "103",
              "125",
              "127",
              "3",
              "68"
            ]
          },
          "Optimization": {
            "value": 0.25,
            "refs": [
              "107",
              "24"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.2,
            "refs": [
              "100",
              "21",
              "23",
              "55"
            ]
          },
          "Exploration": {
            "value": 0.2,
            "refs": [
              "100",
              "21",
              "23"
            ]
          },
          "Optimization": {
            "value": 0.2,
            "refs": [
              "55"
            ]
          }
        }
      }
    },
    "Fine Tuning": {
      "Micro-urban": {
        "Early": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Detailed": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Building": {
        "Early": {
          "All": {
            "value": 0.1,
            "refs": [
              "115",
              "76"
            ]
          },
          "Exploration": {
            "value": 0.07692307692307693,
            "refs": [
              "76"
            ]
          },
          "Optimization": {
            "value": 0.14285714285714285,
            "refs": [
              "115"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.14,
            "refs": [
              "117",
              "131",
              "59"
            ]
          },
          "Exploration": {
            "value": 0.1875,
            "refs": [
              "117",
              "131",
              "59"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Detailed": {
          "All": {
            "value": 0.21,
            "refs": [
              "101",
              "16",
              "75",
              "98"
            ]
          },
          "Exploration": {
            "value": 0.13333333333333333,
            "refs": [
              "16",
              "98"
            ]
          },
          "Optimization": {
            "value": 0.5,
            "refs": [
              "101",
              "75"
            ]
          }
        }
      },
      "Facade": {
        "Early": {
          "All": {
            "value": 0.04,
            "refs": [
              "42"
            ]
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.1111111111111111,
            "refs": [
              "42"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.14,
            "refs": [
              "103",
              "107",
              "125",
              "127",
              "24"
            ]
          },
          "Exploration": {
            "value": 0.13043478260869565,
            "refs": [
              "103",
              "125",
              "127"
            ]
          },
          "Optimization": {
            "value": 0.16666666666666666,
            "refs": [
              "107",
              "24"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.05,
            "refs": [
              "23"
            ]
          },
          "Exploration": {
            "value": 0.06666666666666667,
            "refs": [
              "23"
            ]
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      }
    },
    "Heuristic algorithms": {
      "Micro-urban": {
        "Early": {
          "All": {
            "value": 0.54,
            "refs": [
              "102",
              "106",
              "129",
              "48",
              "60",
              "85"
            ]
          },
          "Exploration": {
            "value": 0.6666666666666666,
            "refs": [
              "106",
              "129",
              "48",
              "60",
              "85"
            ]
          },
          "Optimization": {
            "value": 0.25,
            "refs": [
              "102"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 1.0,
            "refs": [
              "69"
            ]
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "69"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Building": {
        "Early": {
          "All": {
            "value": 1,
            "refs": [
              "113",
              "115",
              "118",
              "121",
              "128",
              "132",
              "25",
              "29",
              "30",
              "57",
              "61",
              "7",
              "72",
              "76",
              "8",
              "84",
              "88",
              "94"
            ]
          },
          "Exploration": {
            "value": 1.0,
            "refs": [
              "118",
              "121",
              "128",
              "25",
              "29",
              "30",
              "61",
              "7",
              "72",
              "76",
              "84",
              "88"
            ]
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "113",
              "115",
              "132",
              "57",
              "8",
              "94"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 1,
            "refs": [
              "10",
              "109",
              "110",
              "114",
              "117",
              "119",
              "120",
              "126",
              "131",
              "134",
              "31",
              "41",
              "51",
              "52",
              "56",
              "59",
              "86",
              "87",
              "91"
            ]
          },
          "Exploration": {
            "value": 1.0,
            "refs": [
              "10",
              "110",
              "114",
              "117",
              "131",
              "134",
              "31",
              "51",
              "52",
              "56",
              "59",
              "86",
              "87",
              "91"
            ]
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "109",
              "119",
              "120",
              "126",
              "41"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.84,
            "refs": [
              "101",
              "116",
              "12",
              "14",
              "16",
              "20",
              "37",
              "46",
              "5",
              "6",
              "75",
              "95",
              "98"
            ]
          },
          "Exploration": {
            "value": 0.8,
            "refs": [
              "116",
              "12",
              "16",
              "20",
              "37",
              "46",
              "5",
              "6",
              "95",
              "98"
            ]
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "101",
              "14",
              "75"
            ]
          }
        }
      },
      "Facade": {
        "Early": {
          "All": {
            "value": 0.96,
            "refs": [
              "104",
              "11",
              "111",
              "112",
              "122",
              "130",
              "18",
              "2",
              "28",
              "33",
              "42",
              "43",
              "44",
              "45",
              "58",
              "64",
              "77",
              "78",
              "80",
              "83",
              "89",
              "90"
            ]
          },
          "Exploration": {
            "value": 0.9375,
            "refs": [
              "104",
              "111",
              "112",
              "122",
              "130",
              "18",
              "33",
              "44",
              "45",
              "58",
              "64",
              "78",
              "83",
              "89"
            ]
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "11",
              "2",
              "28",
              "42",
              "43",
              "77",
              "80",
              "90"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.74,
            "refs": [
              "103",
              "105",
              "107",
              "123",
              "125",
              "127",
              "22",
              "24",
              "26",
              "3",
              "34",
              "38",
              "47",
              "50",
              "54",
              "67",
              "68",
              "70",
              "71",
              "73",
              "9"
            ]
          },
          "Exploration": {
            "value": 0.6086956521739131,
            "refs": [
              "103",
              "105",
              "125",
              "127",
              "22",
              "26",
              "3",
              "54",
              "68",
              "71",
              "73",
              "9"
            ]
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "107",
              "123",
              "24",
              "34",
              "38",
              "47",
              "50",
              "67",
              "70"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.9,
            "refs": [
              "100",
              "124",
              "15",
              "17",
              "19",
              "21",
              "23",
              "35",
              "39",
              "55",
              "62",
              "66",
              "74",
              "82",
              "92",
              "93",
              "97",
              "99"
            ]
          },
          "Exploration": {
            "value": 0.8666666666666667,
            "refs": [
              "100",
              "124",
              "15",
              "19",
              "21",
              "23",
              "39",
              "62",
              "66",
              "82",
              "92",
              "93",
              "99"
            ]
          },
          "Optimization": {
            "value": 1.0,
            "refs": [
              "17",
              "35",
              "55",
              "74",
              "97"
            ]
          }
        }
      }
    },
    "Decision making": {
      "Micro-urban": {
        "Early": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        },
        "Detailed": {
          "All": {
            "value": 0.0,
            "refs": []
          },
          "Exploration": {
            "value": 0.0,
            "refs": []
          },
          "Optimization": {
            "value": 0.0,
            "refs": []
          }
        }
      },
      "Building": {
        "Early": {
          "All": {
            "value": 0.2,
            "refs": [
              "115",
              "132",
              "76",
              "88"
            ]
          },
          "Exploration": {
            "value": 0.15384615384615385,
            "refs": [
              "76",
              "88"
            ]
          },
          "Optimization": {
            "value": 0.2857142857142857,
            "refs": [
              "115",
              "132"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.41,
            "refs": [
              "110",
              "117",
              "126",
              "131",
              "134",
              "56",
              "59",
              "87",
              "91"
            ]
          },
          "Exploration": {
            "value": 0.5,
            "refs": [
              "110",
              "117",
              "131",
              "134",
              "56",
              "59",
              "87",
              "91"
            ]
          },
          "Optimization": {
            "value": 0.16666666666666666,
            "refs": [
              "126"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.21,
            "refs": [
              "101",
              "116",
              "75",
              "95"
            ]
          },
          "Exploration": {
            "value": 0.13333333333333333,
            "refs": [
              "116",
              "95"
            ]
          },
          "Optimization": {
            "value": 0.5,
            "refs": [
              "101",
              "75"
            ]
          }
        }
      },
      "Facade": {
        "Early": {
          "All": {
            "value": 0.24,
            "refs": [
              "112",
              "2",
              "42",
              "45",
              "64"
            ]
          },
          "Exploration": {
            "value": 0.25,
            "refs": [
              "112",
              "45",
              "64"
            ]
          },
          "Optimization": {
            "value": 0.2222222222222222,
            "refs": [
              "2",
              "42"
            ]
          }
        },
        "Preliminary": {
          "All": {
            "value": 0.2,
            "refs": [
              "107",
              "127",
              "24",
              "3",
              "32",
              "68"
            ]
          },
          "Exploration": {
            "value": 0.17391304347826086,
            "refs": [
              "127",
              "3",
              "32",
              "68"
            ]
          },
          "Optimization": {
            "value": 0.25,
            "refs": [
              "107",
              "24"
            ]
          }
        },
        "Detailed": {
          "All": {
            "value": 0.25,
            "refs": [
              "100",
              "17",
              "23",
              "35",
              "62"
            ]
          },
          "Exploration": {
            "value": 0.2,
            "refs": [
              "100",
              "23",
              "62"
            ]
          },
          "Optimization": {
            "value": 0.4,
            "refs": [
              "17",
              "35"
            ]
          }
        }
      }
    }
  }
};