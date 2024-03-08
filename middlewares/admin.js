const handler = (req, res, next) => {
  const currentUser = req.user;

  try {
    if (!currentUser) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    if (currentUser.role !== 'admin') {
        return res.status(403).json({ message: "You don't have enough permissions to perform this action" });
    }

    return next();
  } catch (err) {
    return res.status(500).json({ message: "An error occured", err: err.message });
  }
}

export default handler;
