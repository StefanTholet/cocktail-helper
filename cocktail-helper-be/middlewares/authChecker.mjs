const authChecker = (req, res) => {
  const {authorization} = req.headers

  if (!authorization) {
    res.send(401).json({error: 'Authorization token required!'})
  }
}