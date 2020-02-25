export const createUser = (req, res) => {
  console.log('create user:', req.body);
  res.json({ resp: req.body});
};
