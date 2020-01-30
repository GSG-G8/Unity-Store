function getdata() {
  let data = [
    {
      id: 1,
      title: "Master Chrono",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "watches",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/omega-speed-01-1-768x816.jpg"
    },
    {
      id: 2,
      title: "Lummiar Marina",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "watches",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/tag-heuer-01-768x816.jpg"
    },
    {
      id: 3,
      title: "Giovanni Art",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "watches",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/montbrilliant-01.jpg"
    },
    {
      id: 4,
      title: "Moto 2020",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "watches",
      image:
        "    https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/moto360-01.jpg"
    },
    {
      id: 5,
      title: "Louis Hours",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "accessories",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/louis-01-768x816.jpg"
    },
    {
      id: 6,
      title: "Panthère Belt            ",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€2,000",
      category: "accessories",
      image:
        "    https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/panthere-belt-01.jpg"
    },
    {
      id: 7,
      title: "Bear Bag",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "accessories",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/louis-02-768x816.jpg"
    },
    {
      id: 8,
      title: "Panthère De Ring",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€7,550",
      category: "Jewellary",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/panthere-01-1-768x816.jpg"
    },
    {
      id: 9,
      title: "Possession chain",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€4,999",
      category: "Jewellary",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/passession-01-768x816.jpg"
    },
    {
      id: 10,
      title: "Watch Hermès",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€1,500",
      category: "watches",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/apwatch-02.jpg"
    },
    {
      id: 11,
      title: "Heuer Carrera",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€5,999",
      category: "watches",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/tag-carrer-01-768x816.jpg"
    },
    {
      id: 12,
      title: "Jules Audemars        ",
      details:
        "Endowed with a look inspired\n by the 1940s and \n featuring the famous",
      price: "€1,800",
      category: "watches",
      image:
        "https://woodstock.temashdesign.com/watch/wp-content/uploads/sites/5/2016/03/audemars-01-1.jpg"
    }
  ];

  saveLocal("products", data);
  location.reload();
}
