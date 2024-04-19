export const handleGetUsers = (req, res, next) => {
  res.json([
    { id: 1, name: "Giang", address: "Ha noi" },
    { id: 2, name: "Ha", address: "Thanh Hoa" },
    { id: 3, name: "Ngoc", address: "Bac Ninh" },
  ]);
};
