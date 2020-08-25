const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      'salary': 22500,
      "email": "Sincere@april.biz",
      'img': 'https://images.generated.photos/PbAYyr-n0SnGEAGEB0Q1EUq38JZawPjP0yhvSpymFL8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMDk4NjAuanBn.jpg',
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      'salary': 32000,
      "email": "Shanna@melissa.tv",
      'img': 'https://images.generated.photos/ZKIG-xAg3-qZe1rYd0C8ZIbAJxQ2feRzEy0LdyBK_e8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MjUzOTZfMDQ0/OTAzNV8wMTY3Mzk4/LmpwZw.jpg',
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      'salary': 14000,
      "email": "Nathan@yesenia.net",
      'img': 'https://images.generated.photos/_rQSidTEhb-XUT7mzEgi6zvVOFIGXNPOVtO5NeVYFtg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNjA4NjBfMDA1/NDM2Ml8wMDE1NDAz/LmpwZw.jpg',
      "phone": "1-463-123-4447"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      'salary': 13600,
      "email": "Julianne.OConner@kory.org",
      'img':'https://images.generated.photos/E5NjuHSNLC2u3BtMjiwkcrIPNtk7W-OgXOp8hjHR1v8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNzEzNjkuanBn.jpg',
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      'salary': 16600,
      "email": "Lucio_Hettinger@annie.ca",
      'img': 'https://images.generated.photos/YqZlAqzZVlgJLvrsHh6Fu3R9xGBqWNbDfIRCGVcmJuA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NzQ0OTUuanBn.jpg',
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      'salary': 35000,
      "email": "Karley_Dach@jasper.info",
      'img': 'https://images.generated.photos/6gUzTL8dg3_I4z0ALq8xWv8F-ULf4zJfCudyLNtexho/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MDQxOTdfMDM2/MjM0OV8wNzA1MzQ4/LmpwZw.jpg',
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      'salary': 16600,
      "email": "Telly.Hoeger@billy.biz",
      'img': 'https://images.generated.photos/8GrIoLQF-lDyNSjLN-GaPUG-dKbg8Ieq-KYp_EewSrM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwODA0MTIuanBn.jpg',
      "phone": "210.067.6132"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      'salary': 13800,
      "email": "Sherwood@rosamond.me",
      'img': 'https://images.generated.photos/e-opxbmBqz5huIp8Q_1Jxmwtk5kzM-QJyByJ3RBuXhw/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2NzcxMThfMDgw/NDk3OF8wMjA3NDc5/LmpwZw.jpg',
      "phone": "586.493.6943 x140"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      'salary': 17500,
      "email": "Chaim_McDermott@dana.io",
      'img': 'https://images.generated.photos/N5vxbcij0qnpfvEZ3LUUFGBCPckSt5Q6uImdqIoqitM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNTk4MzdfMDYy/MDQ3MF8wMDgzODAy/LmpwZw.jpg',
      "phone": "(775)976-6794 x41206",
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      'salary': 15600,
      "email": "Rey.Padberg@karina.biz",
      'img': 'https://images.generated.photos/WqKS-aoBsuWgG9cvQGV3WGA72l7VlSA_pxq5Cbm3B_s/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDc1ODFfMDY0/ODIxM18wMzE0NTA3/LmpwZw.jpg',
      "phone": "024-648-3804"
    },
    {
        "id": 11,
        "name": "Harish Jodu",
        'salary': 19600,
        "email": "Harish@karina.biz",
        'img': 'https://www.globalgiving.org/pfil/14828/KaYesuMachayo_Large.jpg',
        "phone": "024-648-3804"
      },
      {
        "id": 12,
        "name": "Chabiko Dangu",
        'salary': 23000,
        "email": "Rey.Chabiko@karina.biz",
        'img': 'https://www.positive.news/wp-content/uploads/2020/04/pille-riin-priske-O5Fo4vUuIBM-unsplash-512x512-c-center.jpg',
        "phone": "024-648-3804"
      },
      {
        "id": 13,
        "name": "Konto Lagu",
        'salary': 18400,
        "email": "Konto@karina.biz",
        'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOqfNjTSNLDbPwih236OXqbsj4VOJtwLtweA&usqp=CAU',
        "phone": "024-648-3804",
      },
      {
        "id": 14,
        "name": "Jhinku Dabu",
        'salary': 15600,
        "email": "Jhinku@karina.biz",
        'img': 'https://i.pinimg.com/564x/1b/c9/20/1bc9208c10b7bd204562a567d45152bc.jpg',
        "phone": "024-648-3804",
        "website": "ambrose.net"
      },
      {
        "id": 15,
        "name": "Objar Gatu",
        'salary': 25600,
        "email": "Objar@karina.biz",
        'img': 'https://cdn.wallpapersafari.com/14/41/7n3rTH.jpg',
        "phone": "024-648-3804"
      }
  ]

  export default users;