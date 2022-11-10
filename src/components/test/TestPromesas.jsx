import React from "react";

export default function TestPromesas() {
  // let array = ['edward', 'romina', 'gian'];
  // if (array.length > 0){
  //     console.log(array);
  // } else {
  //     console.log('Error, el array no está cargado')
  // }

  let productos = new Promise((res, rej) => {
    setTimeout(() => {
      const allProducts = [
        {
          id: 1,
          category: "procesador",
          name: "Ryzen 3 3200g",
          socket: "AM4",
          brand: "amd",
          img: "https://www.amd.com/system/files/styles/992px/private/2019-06/238593-ryzen-3-vega-pib-left-facing-1260x709_0.png?itok=o-efjbjS",
          price0: 99,
        },
        {
          id: 2,
          category: "gpu",
          name: "SAPPHIRE RX6500XT",
          socket: "",
          brand: "RADEON",
          img: "https://www.impacto.com.pe/storage/products/md/1646928884.jpg",
          price0: 229,
        },
        {
          id: 3,
          category: "procesador",
          name: "INTEL CORE I3 12100F",
          socket: "LGA 1700",
          brand: "intel",
          img: "https://www.impacto.com.pe/storage/products/1643408242.jpg",
          price0: 117,
        },
        {
          id: 4,
          category: "procesador",
          name: "Ryzen 5 3400g",
          socket: "AM4",
          brand: "amd",
          img: "https://www.amd.com/system/files/styles/992px/private/2019-07/238593-ryzen-5G-pib-right-facing-1260x709.png?itok=0seLB30Y",
          price0: 159,
        },
        {
          id: 5,
          category: "motherboard",
          name: "PRIME B450M-A",
          socket: "AM4",
          brand: "asus",
          img: "https://www.asus.com/media/global/products/Mh7JcLMTVjDCnQbz/P_setting_xxx_0_90_end_500.png",
          price0: 70,
        },
        {
          id: 6,
          category: "procesador",
          name: "Core i3 10100F",
          socket: "LGA1200",
          brand: "intel",
          img: "https://www.intel.com/content/dam/products/hero/foreground/badge-10th-gen-core-i3-1x1.png",
          price0: 119,
        },
        {
          id: 7,
          category: "procesador",
          name: "Core i5 10400F",
          socket: "LGA1200",
          brand: "intel",
          img: "https://www.intel.com/content/dam/products/hero/foreground/badge-10th-gen-core-i5-1x1.png",
          price0: 169,
        },
        {
          id: 8,
          category: "motherboard",
          name: "PRIME A320M-K",
          socket: "AM4",
          brand: "asus",
          img: "https://www.asus.com/media/global/products/KRyCoH4XfPYSg5da/P_setting_xxx_0_90_end_500.png",
          price0: 50,
        },
        {
          id: 9,
          category: "motherboard",
          name: "B460M DS3H V2",
          socket: "LGA1200",
          brand: "gigabyte",
          img: "https://static.gigabyte.com/StaticFile/Image/Global/c40c2736695f2128f767e2db209cacfa/Product/27255/png/500",
          price0: 50,
        },
        {
          id: 10,
          category: "motherboard",
          name: "H410M H",
          socket: "LGA1200",
          brand: "gigabyte",
          img: "https://static.gigabyte.com/StaticFile/Image/Global/e24671ffd4e1db2b626ea6977d254e17/Product/25114/png/500",
          price0: 40,
        },
        {
          id: 11,
          category: "motherboard",
          name: "PRIME B460M-A",
          socket: "LGA1200",
          brand: "asus",
          img: "https://www.asus.com/media/global/products/sfalkfod5w5uqkjk/P_setting_xxx_0_90_end_500.png",
          price0: 60,
        },
        {
          id: 12,
          category: "motherboard",
          name: "PRIME H410M-E",
          socket: "LGA1200",
          brand: "asus",
          img: "https://www.asus.com/media/global/products/s2i96l2bqhnw1mhz/P_setting_xxx_0_90_end_500.png",
          price0: 45,
        },
        {
          id: 13,
          category: "motherboard",
          name: "A320M-S2H",
          socket: "AM4",
          brand: "gigabyte",
          img: "https://static.gigabyte.com/StaticFile/Image/Global/c9d47f21dec878e822db72d94922ee27/Product/20983/png/500",
          price0: 45,
        },
        {
          id: 14,
          category: "motherboard",
          name: "B450M DS3H",
          socket: "AM4",
          brand: "gigabyte",
          img: "https://static.gigabyte.com/StaticFile/Image/Global/035cd59de1ee82f0105e4633da728352/Product/21100/png/500",
          price0: 55,
        },
      ];
      res(allProducts);
      // rej('no pagó');
    }, 3000);
  });

  productos
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });
  //   console.log(pago);
  return <div>TestPromesas</div>;
}
