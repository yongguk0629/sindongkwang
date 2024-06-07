import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const items = [
  {
    id: 1,
    name: "Item 1",
    price: "$10",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Item 2",
    price: "$20",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Item 3",
    price: "$30",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Item 4",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Item 5",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
];

const ItemList = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        paddingY: "40px",
        backgroundColor: "aquamarine",
      }}
    >
      <Typography
        sx={{ fontSize: "28px", marginBottom: "40px", fontWeight: "bold" }}
      >
        Special Choice
      </Typography>
      <Box
        sx={{
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {items.map((item) => (
          <Card key={item.id} sx={{ width: "300px", borderRadius: "10px" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "280px" }}
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ItemList;
