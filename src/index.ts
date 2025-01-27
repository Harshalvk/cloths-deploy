import express, { Response, Request } from "express";

const app = express();
const PORT = 3001;

const cloths = [
  {
    "id": 1,
    "category": "T-Shirt",
    "size": ["S", "M", "L", "XL"],
    "color": ["White", "Black", "Blue"],
    "material": "Cotton",
    "price": 15.99,
    "inStock": true
  },
  {
    "id": 2,
    "category": "Jeans",
    "size": [28, 30, 32, 34, 36],
    "color": ["Dark Blue", "Black"],
    "material": "Denim",
    "price": 39.99,
    "inStock": true
  },
  {
    "id": 3,
    "category": "Jacket",
    "size": ["M", "L", "XL"],
    "color": ["Gray", "Navy Blue"],
    "material": "Polyester",
    "price": 79.99,
    "inStock": false
  }
]

app.get("/success", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.get("/", (req: Request, res: Response) => {
  res.json({ cloths });
});

app.listen(PORT, () => {
  console.log("⚙ Server is listening!");
});
